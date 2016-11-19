import Lib._

lazy val root = (project in file("."))
  .aggregate(testsetup, svc)
  .settings(libraryDependencies ++= Seq(
    jdbc
  ))


lazy val svc = (project in file("svc"))
  .enablePlugins(PlayJava)

  .settings(checkProcesses:= checkProcessesTask)
  .settings(stopProcesses:= stopProcessesTask)
  .settings(endToEndTestProtractorCI:= endToEndTestProtractorCITask)

  .settings(PlayKeys.externalizeResources := false)
  .settings(includeFilter in(Assets, LessKeys.less) := "*.less")
  .settings(clientTest := clientTestTask)
  .settings(endToEndTest := endToEndTestTask)
  .settings(startPAMM := startPAMMTask)
  .settings(stopPAMM := stopPAMMTask)
  .settings(Keys.test := customTestTask.value)
  .settings(Settings.basicSettings: _*)
  .settings(Settings.serviceSettings: _*)
  .settings(mainClass in (assembly) := Some("play.core.server.ProdServerStart"))
  .settings(fullClasspath in assembly += Attributed.blank(PlayKeys.playPackageAssets.value))
  .settings(assemblyMergeStrategy in assembly := {
      case PathList("javax", "servlet", xs @ _*)         => MergeStrategy.last
      case PathList("javax", "transaction", xs @ _*)     => MergeStrategy.last
      case PathList("javax", "annotation", xs @ _*)     => MergeStrategy.last
      case PathList("org", "apache", xs @ _*)     => MergeStrategy.last
      case x =>
        val oldStrategy = (assemblyMergeStrategy in assembly).value
        oldStrategy(x)
    })
  .settings(libraryDependencies ++= Seq(
    hibernate,
    javaJpa,
    cache,
    javaWs,
    jdbc,
    filters,
    mysqlconn,
    commonsIO,
    playMailer,
    jjwt
  ) ++ Lib.test(
    junit
  ))

lazy val testsetup = (project in file("testsetup"))
  .enablePlugins(PlayJava)
  .settings(PlayKeys.externalizeResources := false)
  .settings(Settings.basicSettings: _*)
  .settings(Settings.serviceSettings: _*)
  .settings(mainClass in (assembly) := Some("play.core.server.ProdServerStart"))
  .settings(fullClasspath in assembly += Attributed.blank(PlayKeys.playPackageAssets.value))
  .settings(assemblyMergeStrategy in assembly := {
    case PathList("javax", "servlet", xs @ _*)         => MergeStrategy.last
    case PathList("javax", "transaction", xs @ _*)     => MergeStrategy.last
    case PathList("javax", "annotation", xs @ _*)     => MergeStrategy.last
    case PathList("org", "apache", xs @ _*)     => MergeStrategy.last
    case x =>
      val oldStrategy = (assemblyMergeStrategy in assembly).value
      oldStrategy(x)
  })
  .settings(libraryDependencies ++= Seq(
    javaJpa, hibernate, cache, javaWs, h2, selenium, mysqlconn
  ) ++ Lib.test(
    junit
  ))

ivyScala := ivyScala.value map {
  _.copy(overrideScalaVersion = true)
}


fork in run := true
