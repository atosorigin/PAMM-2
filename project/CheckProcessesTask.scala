import java.util.Date
import sbt._
import scala.sys.process.Process

object CheckProcessesTask extends ProcessRunner {
  lazy val checkProcesses = taskKey[Unit]("checkProcessesTask")
  var returnCode = 0

  def checkProcessesTask = {
    if (checkAsyncProcessesRunning(E2ETestTaskConstants.PORTS, E2ETestTaskConstants.LOGICAL_OR, false)) {
      sys.error(E2ETestTaskConstants.PORTS_IN_USE_ERROR);
    }
  }

  def getResultsFolder() = {
    E2ETestTaskConstants.RESULTS_FOLDER
  }
}
