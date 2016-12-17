import Lib._

lazy val pamm2 = (project in file("."))
  .aggregate(svc)
  .settings(libraryDependencies ++= Seq(
  ))

lazy val svc = (project in file("svc"))
  .enablePlugins(PlayJava)

  .settings(PlayKeys.externalizeResources := false)
  .settings(Settings.basicSettings: _*)
  .settings(Settings.serviceSettings: _*)
  .settings(mainClass in (assembly) := Some("play.core.server.ProdServerStart"))
  .settings(fullClasspath in assembly += Attributed.blank(PlayKeys.playPackageAssets.value))
  .settings(assemblyMergeStrategy in assembly := {
    case PathList("javax", "servlet", xs@_*) => MergeStrategy.last
    case PathList("javax", "transaction", xs@_*) => MergeStrategy.last
    case PathList("javax", "annotation", xs@_*) => MergeStrategy.last
    case PathList("org", "apache", xs@_*) => MergeStrategy.last
    case x =>
      val oldStrategy = (assemblyMergeStrategy in assembly).value
      oldStrategy(x)
  })
  .settings(libraryDependencies ++= Seq(
    hibernate,
    javaJpa,
    cache,
    javaWs,
    filters,
    mysqlconn,
    commonsIO,
    playMailer,
    jjwt
  ) ++ Lib.test(
    junit
  ))


ivyScala := ivyScala.value map {
  _.copy(overrideScalaVersion = true)
}

fork in run := true
