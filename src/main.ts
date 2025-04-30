import * as core from '@actions/core'
import * as evb from '@insco/enigma-virtualbox'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const entry: string = core.getInput('entry', {
      required: true,
      trimWhitespace: true
    })
    const input: string = core.getInput('input', {
      required: true,
      trimWhitespace: true
    })
    const output: string = core.getInput('output', {
      required: true,
      trimWhitespace: true
    })

    const projectName: string = core.getInput('project-name') || 'project.evb'
    const exclude: string = core.getInput('exclude')

    // EVB Options
    const deleteExtractedOnExit: string = core.getInput(
      'delete-extracted-on-exit'
    )
    const compressFiles: string = core.getInput('compress-files')
    const shareVirtualSystem: string = core.getInput('share-virtual-system')
    const mapExecutableWithTemporaryFile: string = core.getInput(
      'map-executable-with-temporary-file'
    )
    const allowRunningOfVirtualExeFiles: string = core.getInput(
      'allow-running-of-virtual-exe-files'
    )
    const processesOfAnyPlatforms: string = core.getInput(
      'processes-of-any-platforms'
    )

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    const start = Date.now()

    const configPath = await evb.generate(entry, {
      input,
      output,
      projectName: projectName,
      exclude: exclude,
      evbOptions: {
        deleteExtractedOnExit: deleteExtractedOnExit,
        compressFiles: compressFiles,
        shareVirtualSystem: shareVirtualSystem,
        mapExecutableWithTemporaryFile: mapExecutableWithTemporaryFile,
        allowRunningOfVirtualExeFiles: allowRunningOfVirtualExeFiles,
        processesOfAnyPlatforms: processesOfAnyPlatforms
      }
    })

    core.debug(`It takes ${Date.now() - start} milliseconds ...`)

    // Set outputs for other workflow steps to use
    core.setOutput('config-path', configPath)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
