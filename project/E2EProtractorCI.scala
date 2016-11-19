import java.util.Date

import sbt._

object E2EProtractorCI extends ProcessRunner {
  lazy val endToEndTestProtractorCI = taskKey[Unit]("endToEndTestProtractorCI")
  var returnCode = 0

  def endToEndTestProtractorCITask = {
    if (!checkAsyncProcessesRunning(E2ETestTaskConstants.PROTRACTOR_TEST_PORTS, E2ETestTaskConstants.LOGICAL_OR, false)) {
      try {
        startAsyncProcesses(E2ETestTaskConstants.PROTRACTOR_TEST_PROCESS_SCRIPTS)
        if (readyForTest(E2ETestTaskConstants.PROTRACTOR_TEST_PORTS)) {
          returnCode = runSyncProcessNoArgs(E2ETestTaskConstants.PROTRACTOR_TEST_SCRIPT_CI, E2ETestTaskConstants.PROTRACTOR_TEST_SCRIPT_CI + E2ETestTaskConstants.OUTPUT_LOG_SUFFIX, true)
        }
      }
      finally {
        stopAsyncProcesses(E2ETestTaskConstants.PROTRACTOR_TEST_PORTS)
        if (!ProcessRunnerConstants.OPERATING_SYSTEM.contains(ProcessRunnerConstants.WINDOWS_OS)) {
          removePIDS(E2ETestTaskConstants.DELETE_PID_SCRIPTS)
        }
        if (returnCode > 0) {
          sys.error("Process exited with error code " + returnCode)
        }
      }
    }
    else {
      sys.error(E2ETestTaskConstants.PORTS_IN_USE_ERROR);
    }
  }

  def readyForTest(ports: Array[String]): Boolean = {
    val startTime = new Date().getTime
    var readyForTest = false
    while ((new Date().getTime - startTime < E2ETestTaskConstants.MAX_WAIT) && !readyForTest) {
      if (checkAsyncProcessesRunning(ports, E2ETestTaskConstants.LOGICAL_AND, true)) readyForTest = true
      Thread.sleep(E2ETestTaskConstants.WAIT_INTERVAL)
    }
    printReadyForTestStatus(readyForTest)
    readyForTest
  }

  def printReadyForTestStatus(readyForTest: Boolean) = {
    if (readyForTest) System.out.println(E2ETestTaskConstants.ALL_PROCESSES_STARTED) else sys.error(E2ETestTaskConstants.PROCESSES_NOT_STARTED)
  }

  def getResultsFolder() = {
    E2ETestTaskConstants.RESULTS_FOLDER
  }
}
