import java.util.Date

import sbt._

object StopProcessesTask extends ProcessRunner {
  lazy val stopProcesses = taskKey[Unit]("stopProcessesTask")
  var returnCode = 0

  def stopProcessesTask = {
    stopAsyncProcesses(E2ETestTaskConstants.PORTS)
  }

  def getResultsFolder() = {
    E2ETestTaskConstants.RESULTS_FOLDER
  }
}
