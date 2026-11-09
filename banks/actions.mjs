// Original practice content, not copied from certification assessments.
export const questions = [
    {
        "id": "actions-001",
        "domain": "Author and manage workflows",
        "prompt": "Which repository path lets GitHub discover a workflow named verify.yml?",
        "choices": [
            ".github/workflows/verify.yml",
            ".github/actions/verify.yml",
            ".github/templates/verify.yml",
            ".github/workflow/verify.yml"
        ],
        "correct": 0,
        "explanations": [
            "Workflows are discovered in this directory.",
            "Local actions use a different directory.",
            "This is not the workflow discovery directory.",
            "The directory name must be plural."
        ],
        "concept": "Workflow discovery",
        "hints": [
            "Distinguish workflow files from action metadata.",
            "Repository discovery uses a reserved location."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-002",
        "domain": "Author and manage workflows",
        "prompt": "Which push filter matches release/1.2 and release/2.0 without matching main?",
        "choices": [
            "paths: ['release/**']",
            "branches: ['release/**']",
            "branches: ['release']",
            "tags: ['release/**']"
        ],
        "correct": 1,
        "explanations": [
            "Path filters inspect files, not branch names.",
            "The branch glob covers these release branches.",
            "This matches only the literal branch release.",
            "Tag filters do not select branch pushes."
        ],
        "concept": "Push branch matching",
        "hints": [
            "Identify what kind of ref was pushed.",
            "Consider glob matching across a slash."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-003",
        "domain": "Author and manage workflows",
        "prompt": "A repository_dispatch event contains client_payload: {\"ticket\": 74}. Which expression reads the ticket?",
        "choices": [
            "inputs.client_payload.ticket",
            "github.repository.ticket",
            "github.event.client_payload.ticket",
            "github.event.inputs.ticket"
        ],
        "correct": 2,
        "explanations": [
            "The inputs context does not contain this payload.",
            "Repository identity does not contain event fields.",
            "The custom payload is inside the event object.",
            "These are not manual-dispatch inputs."
        ],
        "concept": "External dispatch payload",
        "hints": [
            "Separate event data from workflow inputs.",
            "Follow the JSON object's nesting."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-004",
        "domain": "Author and manage workflows",
        "prompt": "Under workflow_dispatch.inputs.retries, which type declares a numeric value?",
        "choices": [
            "type: integer",
            "type: string",
            "type: choice",
            "type: number"
        ],
        "correct": 3,
        "explanations": [
            "integer is not a supported input type name.",
            "string declares text instead of a numeric input.",
            "choice offers a selection rather than numeric typing.",
            "number is a supported dispatch input type."
        ],
        "concept": "Manual numeric inputs",
        "hints": [
            "Use the workflow schema, not general YAML types.",
            "Distinguish a value's type from its default."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-005",
        "domain": "Author and manage workflows",
        "prompt": "With no schedule timezone configured, what does cron: '15 6 * * 1' request?",
        "choices": [
            "Daily at 06:15 UTC",
            "Monday at 15:06 UTC",
            "January 6 at 00:15 UTC",
            "Monday at 06:15 UTC"
        ],
        "correct": 3,
        "explanations": [
            "The weekday field restricts the requested days.",
            "Minute precedes hour in this cron format.",
            "The day and month fields are unrestricted.",
            "The fields select minute, hour and weekday."
        ],
        "concept": "Cron interpretation",
        "hints": [
            "Read the five fields in order.",
            "A requested schedule is not an execution-time guarantee."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-006",
        "domain": "Author and manage workflows",
        "prompt": "Which pull_request filter restricts runs to changes under docs/?",
        "choices": [
            "types: [docs]",
            "tags: ['docs/**']",
            "paths: ['docs/**']",
            "branches: ['docs/**']"
        ],
        "correct": 2,
        "explanations": [
            "docs is not a pull request activity type.",
            "Tag patterns do not filter pull request files.",
            "paths evaluates the changed file paths.",
            "branches filters the pull request's base branch."
        ],
        "concept": "Pull request path filters",
        "hints": [
            "Classify the requirement as files, refs or activities.",
            "A directory pattern needs recursive matching."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-007",
        "domain": "Author and manage workflows",
        "prompt": "Which top-level declaration listens for either push or pull_request?",
        "choices": [
            "needs: [push, pull_request]",
            "runs-on: [push, pull_request]",
            "types: [push, pull_request]",
            "on: [push, pull_request]"
        ],
        "correct": 3,
        "explanations": [
            "needs declares dependencies between jobs.",
            "runs-on selects execution runners.",
            "types narrows activities within a configured event.",
            "on declares the workflow's triggering events."
        ],
        "concept": "Multiple trigger syntax",
        "hints": [
            "Events and runner selection serve different purposes.",
            "Locate the workflow-level event declaration."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-008",
        "domain": "Author and manage workflows",
        "prompt": "A workflow_dispatch string input named region should initially contain west. Which input property provides that value?",
        "choices": [
            "description: west",
            "options: [west]",
            "default: west",
            "required: west"
        ],
        "correct": 2,
        "explanations": [
            "description labels the input without setting its value.",
            "options belongs to a choice input's allowed selections.",
            "default supplies the initial input value.",
            "required expects a boolean, not this value."
        ],
        "concept": "Manual input defaults",
        "hints": [
            "Separate input documentation from input values.",
            "Requiredness and initialization are independent."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-009",
        "domain": "Author and manage workflows",
        "prompt": "Which declaration on a test job makes it wait for the job identified as compile?",
        "choices": [
            "needs: compile",
            "uses: compile",
            "env: compile",
            "name: compile"
        ],
        "correct": 0,
        "explanations": [
            "needs adds an execution dependency on that job.",
            "uses references an action or reusable workflow.",
            "env defines an environment-variable mapping.",
            "name changes a display label, not ordering."
        ],
        "concept": "Job dependencies",
        "hints": [
            "Job order is not determined by YAML position.",
            "Use the dependency's identifier, not its display name."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-010",
        "domain": "Author and manage workflows",
        "prompt": "Which step condition runs diagnostics after an earlier step in the same job fails?",
        "choices": [
            "if: ${{ cancelled() }}",
            "if: ${{ !failure() }}",
            "if: ${{ failure() }}",
            "if: ${{ success() }}"
        ],
        "correct": 2,
        "explanations": [
            "cancelled tests cancellation, not ordinary failure.",
            "Negating failure excludes the requested failure case.",
            "failure checks prior failure in this job.",
            "success requires prior steps to have succeeded."
        ],
        "concept": "Failure-only steps",
        "hints": [
            "Differentiate failure from cancellation.",
            "Status functions alter the usual success-only condition."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions"
    },
    {
        "id": "actions-011",
        "domain": "Author and manage workflows",
        "prompt": "On a Linux runner using Bash, which command publishes a step output named count with value 8?",
        "choices": [
            "echo \"count=8\" >> \"$GITHUB_STEP_SUMMARY\"",
            "echo \"count=8\" >> \"$GITHUB_OUTPUT\"",
            "echo \"count=8\" >> \"$GITHUB_ENV\"",
            "echo \"count=8\" >> \"$GITHUB_PATH\""
        ],
        "correct": 1,
        "explanations": [
            "This file renders Markdown in the summary.",
            "This file records named step outputs.",
            "This file exports variables to later steps.",
            "This file adds directories to command lookup."
        ],
        "concept": "Step output files",
        "hints": [
            "Runner files have distinct consumers.",
            "Publishing a value differs from printing it."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-012",
        "domain": "Author and manage workflows",
        "prompt": "A job named package exposes an output named archive. A dependent job declares needs: package. Which reference reads that output?",
        "choices": [
            "steps.package.outputs.archive",
            "jobs.package.env.archive",
            "github.package.outputs.archive",
            "needs.package.outputs.archive"
        ],
        "correct": 3,
        "explanations": [
            "steps addresses steps within the current job.",
            "Job environment variables are not accessed this way.",
            "github contains event metadata, not dependency outputs.",
            "needs exposes outputs from dependency jobs."
        ],
        "concept": "Dependency output lookup",
        "hints": [
            "Identify whether the producer is a step or job.",
            "The dependency graph defines cross-job visibility."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-013",
        "domain": "Author and manage workflows",
        "prompt": "A Bash step exports MODE=fast, but the next step cannot read it. Which change persists this value for subsequent steps in that job?",
        "choices": [
            "echo \"MODE=fast\" >> \"$GITHUB_ENV\"",
            "echo \"MODE=fast\" >> \"$GITHUB_OUTPUT\"",
            "echo \"MODE=fast\" >> \"$GITHUB_STATE\"",
            "echo \"MODE=fast\" >> \"$GITHUB_PATH\""
        ],
        "correct": 0,
        "explanations": [
            "The runner loads these variables into subsequent steps.",
            "Outputs require output-context references, not bare variables.",
            "State is for an action's lifecycle phases.",
            "PATH entries must be directory paths."
        ],
        "concept": "Persisting environment values",
        "hints": [
            "Shell processes do not share exported changes automatically.",
            "Choose the persistence scope required by the consumer."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-014",
        "domain": "Author and manage workflows",
        "prompt": "Which workflow-level mapping selects Bash for all run steps unless overridden?",
        "choices": [
            "defaults: {steps: {shell: bash}}",
            "runs-on: {shell: bash}",
            "defaults: {run: {shell: bash}}",
            "env: {run: {shell: bash}}"
        ],
        "correct": 2,
        "explanations": [
            "The defaults child key is run, not steps.",
            "runs-on selects a runner, not a shell.",
            "defaults.run defines default shell settings.",
            "env maps variable names to values."
        ],
        "concept": "Run-step defaults",
        "hints": [
            "Separate execution location from command interpretation.",
            "Look for a setting that individual steps can override."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-015",
        "domain": "Author and manage workflows",
        "prompt": "A strategy matrix defines node: [20, 22]. Which expression inserts the selected version into an action input?",
        "choices": [
            "${{ inputs.node }}",
            "${{ matrix.node }}",
            "${{ strategy.node }}",
            "${{ runner.node }}"
        ],
        "correct": 1,
        "explanations": [
            "inputs refers to declared workflow inputs.",
            "matrix exposes the current combination's values.",
            "strategy contains strategy metadata, not custom axes.",
            "runner describes the runner environment."
        ],
        "concept": "Matrix context",
        "hints": [
            "Each expanded job has its own selected axis values.",
            "Do not confuse strategy metadata with test dimensions."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-016",
        "domain": "Author and manage workflows",
        "prompt": "A matrix combines os: [ubuntu-latest, windows-latest] with node: [20, 22]. What does exclude: [{os: windows-latest}] remove?",
        "choices": [
            "Only Windows with node 22",
            "Both node 22 combinations",
            "Both Windows combinations",
            "Only Windows with node 20"
        ],
        "correct": 2,
        "explanations": [
            "No node value limits this exclusion to 22.",
            "The exclusion names an OS rather than a runtime.",
            "A partial exclusion matches every combination containing that OS.",
            "No node value limits this exclusion to 20."
        ],
        "concept": "Matrix exclusion matching",
        "hints": [
            "Evaluate only the fields present in the exclusion.",
            "A partial pattern can match several expanded jobs."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-017",
        "domain": "Author and manage workflows",
        "prompt": "Which matrix strategy property decides whether one non-tolerated failure cancels sibling jobs?",
        "choices": [
            "max-parallel",
            "timeout-minutes",
            "continue-on-error",
            "fail-fast"
        ],
        "correct": 3,
        "explanations": [
            "max-parallel limits simultaneous matrix execution.",
            "timeout-minutes limits execution duration.",
            "continue-on-error belongs to job or step failure tolerance.",
            "fail-fast controls cancellation across matrix jobs."
        ],
        "concept": "Matrix cancellation policy",
        "hints": [
            "Distinguish tolerating a failure from canceling siblings.",
            "Identify the setting scoped to strategy."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-018",
        "domain": "Author and manage workflows",
        "prompt": "What does strategy.max-parallel: 2 change for a six-combination matrix?",
        "choices": [
            "At most two matrix jobs run simultaneously.",
            "Only two combinations are generated.",
            "Every job receives two CPU cores.",
            "Each job can contain only two steps."
        ],
        "correct": 0,
        "explanations": [
            "The limit constrains concurrency, not matrix size.",
            "All six combinations remain in the matrix.",
            "This property does not allocate runner hardware.",
            "Step count is unrelated to matrix concurrency."
        ],
        "concept": "Matrix execution limits",
        "hints": [
            "Separate scheduling from expansion.",
            "A waiting job still belongs to the matrix."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-019",
        "domain": "Author and manage workflows",
        "prompt": "A container job declares services.redis. Which hostname identifies that service from the job container?",
        "choices": [
            "redis",
            "localhost",
            "github.com",
            "host.docker.internal"
        ],
        "correct": 0,
        "explanations": [
            "The service label becomes its network hostname.",
            "localhost refers to the job container itself.",
            "github.com is not the service container.",
            "This host alias is not the service's DNS name."
        ],
        "concept": "Service networking",
        "hints": [
            "Identify which network namespace runs the client.",
            "Service labels participate in container networking."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/use-containerized-services/use-docker-service-containers"
    },
    {
        "id": "actions-020",
        "domain": "Author and manage workflows",
        "prompt": "A Linux runner job maps a service db using ports: [5432]. Which expression reads the assigned host port?",
        "choices": [
            "${{ runner.services.db.port }}",
            "${{ env.db.ports[5432] }}",
            "${{ matrix.db.port }}",
            "${{ job.services.db.ports[5432] }}"
        ],
        "correct": 3,
        "explanations": [
            "runner has no services mapping at this path.",
            "env does not receive nested service configuration.",
            "A runtime port mapping is not a matrix axis.",
            "The job context exposes mapped service ports."
        ],
        "concept": "Dynamic service ports",
        "hints": [
            "Omitting the host port allows dynamic assignment.",
            "Look for runtime job information."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/use-containerized-services/use-docker-service-containers"
    },
    {
        "id": "actions-021",
        "domain": "Author and manage workflows",
        "prompt": "Which Docker option in a Redis service's options field defines its readiness check?",
        "choices": [
            "--entrypoint \"redis-cli ping\"",
            "--label \"redis-cli ping\"",
            "--health-cmd \"redis-cli ping\"",
            "--hostname \"redis-cli ping\""
        ],
        "correct": 2,
        "explanations": [
            "entrypoint replaces the container's startup command.",
            "label attaches metadata without executing a check.",
            "A health command tests container readiness.",
            "hostname names the container rather than probing it."
        ],
        "concept": "Service readiness probes",
        "hints": [
            "A running process may not yet accept requests.",
            "Distinguish startup configuration from repeated probing."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/use-containerized-services/use-docker-service-containers"
    },
    {
        "id": "actions-022",
        "domain": "Author and manage workflows",
        "prompt": "In runs-on: [self-hosted, linux, ARM64], which runners are eligible?",
        "choices": [
            "Runners matching any one label",
            "Only GitHub-hosted Linux runners",
            "One runner selected for each label",
            "Runners matching all three labels"
        ],
        "correct": 3,
        "explanations": [
            "The array does not express an OR condition.",
            "self-hosted requires a self-hosted runner.",
            "Labels filter runners; they do not expand jobs.",
            "An array combines runner labels conjunctively."
        ],
        "concept": "Runner selection",
        "hints": [
            "Labels describe capabilities of one runner.",
            "Do not interpret runner labels as a matrix."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-023",
        "domain": "Author and manage workflows",
        "prompt": "Where can a workflow declare permissions for the GITHUB_TOKEN used by one particular job?",
        "choices": [
            "on.push.permissions",
            "defaults.run.permissions",
            "jobs.build.permissions",
            "jobs.build.steps.permissions"
        ],
        "correct": 2,
        "explanations": [
            "Event filters do not declare token permissions.",
            "Run defaults configure command execution, not authorization.",
            "A job-level mapping scopes token permissions to that job.",
            "A steps sequence has no token-permissions mapping."
        ],
        "concept": "Permission declaration scope",
        "hints": [
            "Match the setting's scope to the requested job.",
            "Trigger configuration and token access are separate."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-024",
        "domain": "Author and manage workflows",
        "prompt": "Which event interface groups a reusable workflow's declared inputs, secrets and outputs?",
        "choices": [
            "workflow_run",
            "repository_dispatch",
            "workflow_call",
            "workflow_dispatch"
        ],
        "correct": 2,
        "explanations": [
            "workflow_run reacts to another run's lifecycle.",
            "repository_dispatch receives custom repository events.",
            "workflow_call defines the reusable-workflow entry point.",
            "workflow_dispatch provides a manual dispatch interface."
        ],
        "concept": "Reusable workflow interfaces",
        "hints": [
            "Identify whether the initiator is a caller job.",
            "Several trigger names describe different invocation contracts."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "actions-025",
        "domain": "Author and manage workflows",
        "prompt": "Which type is valid for workflow_dispatch inputs but not workflow_call inputs?",
        "choices": [
            "string",
            "choice",
            "boolean",
            "number"
        ],
        "correct": 1,
        "explanations": [
            "string is supported by both input interfaces.",
            "choice belongs to the manual input interface.",
            "boolean is supported by both input interfaces.",
            "number is supported by both input interfaces."
        ],
        "concept": "Reusable input types",
        "hints": [
            "The two invocation interfaces have different schemas.",
            "A UI selector does not imply a reusable-workflow type."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-026",
        "domain": "Author and manage workflows",
        "prompt": "A reusable workflow declares a secret named registry_key. Which caller-job mapping passes secrets.PACKAGE_KEY under that name?",
        "choices": [
            "env: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
            "outputs: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
            "secrets: {registry_key: '${{ secrets.PACKAGE_KEY }}'}",
            "with: {registry_key: '${{ secrets.PACKAGE_KEY }}'}"
        ],
        "correct": 2,
        "explanations": [
            "Caller env is not the reusable secret interface.",
            "outputs publishes results instead of passing secrets.",
            "secrets maps the caller's value to the declared secret.",
            "with passes inputs rather than declared secrets."
        ],
        "concept": "Explicit secret mapping",
        "hints": [
            "Keep input and secret interfaces separate.",
            "Match the callee's declared parameter name."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "actions-027",
        "domain": "Author and manage workflows",
        "prompt": "A reusable workflow declares a string input named region. Which caller-job field supplies region: west?",
        "choices": [
            "with: {region: west}",
            "inputs: {region: west}",
            "env: {region: west}",
            "defaults: {region: west}"
        ],
        "correct": 0,
        "explanations": [
            "with supplies values to declared workflow inputs.",
            "inputs is not the caller-job argument field.",
            "Environment propagation is not this input contract.",
            "defaults does not pass reusable-workflow arguments."
        ],
        "concept": "Caller input delivery",
        "hints": [
            "A declaration and an argument use different locations.",
            "The caller supplies values; the callee declares types."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "actions-028",
        "domain": "Author and manage workflows",
        "prompt": "Which section exposes a called workflow's job result as an output for its caller?",
        "choices": [
            "defaults.run.outputs",
            "on.workflow_call.outputs",
            "on.workflow_call.inputs",
            "jobs.build.strategy"
        ],
        "correct": 1,
        "explanations": [
            "Run defaults do not declare output interfaces.",
            "This interface maps job outputs to workflow outputs.",
            "inputs declares incoming values, not outgoing results.",
            "strategy controls job expansion and scheduling."
        ],
        "concept": "Workflow output interfaces",
        "hints": [
            "Trace the boundary between two workflows.",
            "An internal job output needs an external interface."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "actions-029",
        "domain": "Author and manage workflows",
        "prompt": "An env mapping is anchored as &shared. Which form repeats that complete mapping elsewhere without using a merge key?",
        "choices": [
            "env: '${{ shared }}'",
            "env: *shared",
            "env: &shared",
            "env: '$shared'"
        ],
        "correct": 1,
        "explanations": [
            "Actions expressions are not YAML anchor references.",
            "The alias repeats the previously anchored mapping.",
            "An ampersand defines an anchor rather than referencing one.",
            "This is a scalar string, not a YAML alias."
        ],
        "concept": "Whole-mapping YAML aliases",
        "hints": [
            "Separate YAML processing from expression evaluation.",
            "Defining reusable content differs from referencing it."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "actions-030",
        "domain": "Author and manage workflows",
        "prompt": "Which context provides the repository name as owner/repository before a job starts?",
        "choices": [
            "runner.repository",
            "job.repository",
            "steps.repository",
            "github.repository"
        ],
        "correct": 3,
        "explanations": [
            "runner describes an assigned execution environment.",
            "job does not define this repository property.",
            "steps contains step results, not repository identity.",
            "github provides repository and event metadata."
        ],
        "concept": "Workflow context availability",
        "hints": [
            "Some metadata exists before runner allocation.",
            "Distinguish repository identity from machine identity."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-031",
        "domain": "Author and manage workflows",
        "prompt": "A repository configuration variable is named BUILD_MODE. Which expression reads it?",
        "choices": [
            "${{ github.BUILD_MODE }}",
            "${{ inputs.BUILD_MODE }}",
            "${{ vars.BUILD_MODE }}",
            "${{ env.vars.BUILD_MODE }}"
        ],
        "correct": 2,
        "explanations": [
            "Custom configuration variables are not github properties.",
            "inputs contains invocation inputs, not repository variables.",
            "vars exposes configuration variables.",
            "env does not nest the vars context."
        ],
        "concept": "Configuration variables",
        "hints": [
            "Identify how the value was configured.",
            "Similar names can belong to distinct contexts."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-032",
        "domain": "Author and manage workflows",
        "prompt": "Which expression function converts an object into a JSON string for inspection?",
        "choices": [
            "join()",
            "toJSON()",
            "fromJSON()",
            "format()"
        ],
        "correct": 1,
        "explanations": [
            "join combines array elements into text.",
            "toJSON serializes structured expression values.",
            "fromJSON parses JSON in the opposite direction.",
            "format substitutes placeholders in a format string."
        ],
        "concept": "Serializing context data",
        "hints": [
            "Determine the conversion's input and output types.",
            "Serialization differs from parsing."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions"
    },
    {
        "id": "actions-033",
        "domain": "Author and manage workflows",
        "prompt": "Which upload-artifact input selects the files to upload, such as dist/*.zip?",
        "choices": [
            "name",
            "retention-days",
            "if-no-files-found",
            "path"
        ],
        "correct": 3,
        "explanations": [
            "name labels the resulting artifact.",
            "retention-days selects storage duration.",
            "if-no-files-found controls missing-file handling.",
            "path selects filesystem content to upload."
        ],
        "concept": "Artifact paths",
        "hints": [
            "Separate an artifact's label from its contents.",
            "A glob describes filesystem selection."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/store-and-share-data"
    },
    {
        "id": "actions-034",
        "domain": "Author and manage workflows",
        "prompt": "Which expression produces a hash from matching dependency lockfiles for a cache key?",
        "choices": [
            "${{ format('**/package-lock.json') }}",
            "${{ hashFiles('**/package-lock.json') }}",
            "${{ toJSON('**/package-lock.json') }}",
            "${{ contains('**/package-lock.json', 'lock') }}"
        ],
        "correct": 1,
        "explanations": [
            "format returns formatted text, not a file hash.",
            "hashFiles hashes the matching file contents.",
            "toJSON serializes the pattern string.",
            "contains tests text membership rather than file content."
        ],
        "concept": "File hashing expressions",
        "hints": [
            "A cache key can incorporate derived values.",
            "Matching filenames and hashing contents are different operations."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions"
    },
    {
        "id": "actions-035",
        "domain": "Author and manage workflows",
        "prompt": "Which cache input supplies ordered prefixes to try when the primary key misses?",
        "choices": [
            "restore-keys",
            "path",
            "cache-hit",
            "retention-days"
        ],
        "correct": 0,
        "explanations": [
            "restore-keys defines fallback key prefixes.",
            "path identifies files or directories being cached.",
            "cache-hit is an output describing the lookup.",
            "retention-days is not the cache fallback-key input."
        ],
        "concept": "Cache fallback keys",
        "hints": [
            "Separate lookup inputs from lookup results.",
            "Fallback order expresses preference among partial matches."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching"
    },
    {
        "id": "actions-036",
        "domain": "Author and manage workflows",
        "prompt": "In Bash, which command appends a Markdown heading to this step's job summary?",
        "choices": [
            "echo \"## Tests\" >> \"$GITHUB_STEP_SUMMARY\"",
            "echo \"## Tests\" >> \"$GITHUB_OUTPUT\"",
            "echo \"## Tests\" >> \"$GITHUB_ENV\"",
            "echo \"## Tests\" >> \"$GITHUB_STATE\""
        ],
        "correct": 0,
        "explanations": [
            "The summary file accepts Markdown content.",
            "An output file expects named output assignments.",
            "An environment file expects variable assignments.",
            "State carries lifecycle values, not visible summaries."
        ],
        "concept": "Markdown job summaries",
        "hints": [
            "Decide whether the result is data or presentation.",
            "Runner files differ in their accepted content."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-037",
        "domain": "Author and manage workflows",
        "prompt": "What happens to stored artifacts when their associated workflow run is deleted?",
        "choices": [
            "They attach to the latest successful run.",
            "The artifacts are deleted too.",
            "They become repository release assets.",
            "They move into the dependency cache."
        ],
        "correct": 1,
        "explanations": [
            "Artifacts are not reassigned to another run.",
            "Artifacts are tied to the deleted workflow run.",
            "Deletion does not create release assets.",
            "Artifacts and dependency caches have different storage lifecycles."
        ],
        "concept": "Artifact lifecycle",
        "hints": [
            "Consider which object owns the stored files.",
            "A run artifact is not a permanent release asset."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts"
    },
    {
        "id": "actions-038",
        "domain": "Author and manage workflows",
        "prompt": "A Bash run step must execute npm test from packages/web. Which step property sets that location?",
        "choices": [
            "path: packages/web",
            "runs-on: packages/web",
            "shell: packages/web",
            "working-directory: packages/web"
        ],
        "correct": 3,
        "explanations": [
            "path is not the run step's working-directory property.",
            "runs-on is a job-level runner selector.",
            "shell selects a command interpreter.",
            "working-directory selects the command's starting directory."
        ],
        "concept": "Step working directories",
        "hints": [
            "Distinguish the shell from its current directory.",
            "The directory must exist when the step starts."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-039",
        "domain": "Author and manage workflows",
        "prompt": "Which configuration path should hold the value 20 to limit the entire build job to twenty minutes?",
        "choices": [
            "jobs.build.timeout-minutes",
            "jobs.build.steps[0].timeout-minutes",
            "jobs.build.strategy.max-parallel",
            "jobs.build.defaults.run.timeout"
        ],
        "correct": 0,
        "explanations": [
            "A job timeout covers that job's execution.",
            "A step timeout covers only that step.",
            "max-parallel limits concurrent matrix jobs, not duration.",
            "This is not a supported run-default timeout property."
        ],
        "concept": "Job timeout scope",
        "hints": [
            "Match the configuration nesting to the desired scope.",
            "Concurrency and elapsed time are different limits."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-040",
        "domain": "Author and manage workflows",
        "prompt": "Which step key invokes an action instead of executing a shell command?",
        "choices": [
            "uses",
            "run",
            "shell",
            "needs"
        ],
        "correct": 0,
        "explanations": [
            "uses identifies the action to execute.",
            "run contains commands interpreted by a shell.",
            "shell selects the interpreter for run commands.",
            "needs establishes dependencies at job level."
        ],
        "concept": "Action steps versus shell steps",
        "hints": [
            "A step has alternative execution forms.",
            "Do not confuse an action reference with action inputs."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-041",
        "domain": "Author and manage workflows",
        "prompt": "Which build-job property records its deployment against the environment named preview?",
        "choices": [
            "deployment: preview",
            "environment: preview",
            "env: {name: preview}",
            "name: preview"
        ],
        "correct": 1,
        "explanations": [
            "deployment is not this job schema property.",
            "environment attaches the job to the named environment.",
            "env creates a variable named name, not a deployment target.",
            "name changes the job's display name."
        ],
        "concept": "Environment attachment",
        "hints": [
            "Environment variables and deployment environments differ.",
            "The setting belongs to the job definition."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-042",
        "domain": "Author and manage workflows",
        "prompt": "Which query parameter restricts an Actions status badge to runs triggered by push?",
        "choices": [
            "event=push",
            "branch=push",
            "workflow=push",
            "status=push"
        ],
        "correct": 0,
        "explanations": [
            "event filters the badge by triggering event.",
            "branch would select a branch named push.",
            "The workflow file belongs in the badge URL path.",
            "push is an event name, not a conclusion."
        ],
        "concept": "Workflow badge events",
        "hints": [
            "Badge filters distinguish refs from events.",
            "Read the parameter name as well as its value."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/add-a-status-badge"
    },
    {
        "id": "actions-043",
        "domain": "Author and manage workflows",
        "prompt": "Which push configuration selects tags beginning v without selecting branch pushes?",
        "choices": [
            "types: [tagged]",
            "tags: ['v*']",
            "branches: ['v*']",
            "paths: ['v*']"
        ],
        "correct": 1,
        "explanations": [
            "tagged is not a supported push activity filter.",
            "A tags-only filter selects matching tag refs.",
            "branches selects branch refs, not tag refs.",
            "paths selects changed files, not tag names."
        ],
        "concept": "Tag push filtering",
        "hints": [
            "A tag ref is different from the commit it points to.",
            "Select the ref family before choosing its pattern."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-044",
        "domain": "Author and manage workflows",
        "prompt": "A workflow uses issues: {types: [labeled]}. Which occurrence triggers it?",
        "choices": [
            "A repository label is renamed.",
            "An issue title is edited.",
            "An issue label is removed.",
            "A label is added to an issue."
        ],
        "correct": 3,
        "explanations": [
            "Repository-label changes use a different event.",
            "Title editing uses the edited activity.",
            "Removal is the unlabeled activity.",
            "labeled describes attaching a label to an issue."
        ],
        "concept": "Issue activity payloads",
        "hints": [
            "Separate label definitions from label assignments.",
            "Activity types distinguish addition from removal."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-045",
        "domain": "Author and manage workflows",
        "prompt": "Which branch's workflow definition is used for a scheduled run?",
        "choices": [
            "The workflow editor's current branch",
            "Every branch containing that workflow",
            "The repository's default branch",
            "The most recently pushed branch"
        ],
        "correct": 2,
        "explanations": [
            "An editor session does not determine scheduled execution.",
            "A schedule does not fan out across repository branches.",
            "Scheduled events run on the default branch.",
            "Recent push timing does not select the schedule's ref."
        ],
        "concept": "Scheduled workflow revision",
        "hints": [
            "Scheduling has a repository-level branch rule.",
            "Do not infer the run ref from editing activity."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-046",
        "domain": "Author and manage workflows",
        "prompt": "The string variable env.RETRY_LIMIT is '4'. Which expression converts it to a number for numeric comparison?",
        "choices": [
            "${{ fromJSON(env.RETRY_LIMIT) }}",
            "${{ toJSON(env.RETRY_LIMIT) }}",
            "${{ format('{0}', env.RETRY_LIMIT) }}",
            "${{ contains(env.RETRY_LIMIT, '4') }}"
        ],
        "correct": 0,
        "explanations": [
            "fromJSON parses this JSON numeric text into a number.",
            "toJSON serializes the existing string value.",
            "format returns a formatted string.",
            "contains returns a boolean membership test."
        ],
        "concept": "Explicit string conversion",
        "hints": [
            "Environment values normally arrive as text.",
            "Choose a conversion that yields the needed type."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions"
    },
    {
        "id": "actions-047",
        "domain": "Author and manage workflows",
        "prompt": "A matrix has node: [20, 22]. What does include: [{node: 22, experimental: true}] add to the existing node 22 combination?",
        "choices": [
            "A third node version",
            "An exclusion of node 20",
            "An experimental: true field",
            "A duplicate node 22 job"
        ],
        "correct": 2,
        "explanations": [
            "No new node value appears in the entry.",
            "include does not exclude the other original combination.",
            "The entry augments a compatible original combination.",
            "Compatible include data merges into the original combination."
        ],
        "concept": "Additive matrix include",
        "hints": [
            "Check whether existing axis values would be overwritten.",
            "Additional metadata need not create additional jobs."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-048",
        "domain": "Author and manage workflows",
        "prompt": "Where must a reusable workflow file reside within its repository?",
        "choices": [
            "Inside .github/actions/shared/",
            "Directly in .github/workflows/",
            "Inside .github/workflows/shared/",
            "Directly in workflow-templates/"
        ],
        "correct": 1,
        "explanations": [
            "An action directory does not define a reusable workflow.",
            "Reusable workflow files use this directory without subdirectories.",
            "Subdirectories are not supported for these workflow files.",
            "This is a template location, not the callable workflow location."
        ],
        "concept": "Reusable workflow locations",
        "hints": [
            "Reusable workflows retain workflow-file placement rules.",
            "A callable workflow is not an action package."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "actions-049",
        "domain": "Author and manage workflows",
        "prompt": "In Bash, what value should be appended to GITHUB_PATH to expose /opt/tools/bin/report to later steps as report?",
        "choices": [
            "report=/opt/tools/bin/report",
            "/opt/tools/bin",
            "/opt/tools/bin/report",
            "PATH=/opt/tools/bin"
        ],
        "correct": 1,
        "explanations": [
            "This syntax does not create a shell alias.",
            "PATH entries contain directories searched for executables.",
            "The executable path itself is not a search directory.",
            "GITHUB_PATH accepts directories, not variable assignments."
        ],
        "concept": "Command lookup paths",
        "hints": [
            "Command lookup searches directories rather than filenames.",
            "Use the file format required by the runner."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-050",
        "domain": "Author and manage workflows",
        "prompt": "An action's pre phase saves tempdir=/work/item through GITHUB_STATE. Which environment variable reads it in that same action's post phase?",
        "choices": [
            "INPUT_tempdir",
            "OUTPUT_tempdir",
            "GITHUB_tempdir",
            "STATE_tempdir"
        ],
        "correct": 3,
        "explanations": [
            "INPUT_ refers to action inputs rather than lifecycle state.",
            "Outputs do not become OUTPUT_-prefixed lifecycle variables.",
            "GITHUB_ is not the saved-state variable prefix.",
            "Saved state becomes a STATE_-prefixed variable for that action."
        ],
        "concept": "Action lifecycle state",
        "hints": [
            "State is scoped to the action that saved it.",
            "Lifecycle communication differs from workflow outputs."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-051",
        "domain": "Author and manage workflows",
        "prompt": "Which top-level key labels the workflow itself in the Actions sidebar, rather than naming a particular run?",
        "choices": [
            "name",
            "run-name",
            "jobs",
            "id"
        ],
        "correct": 0,
        "explanations": [
            "name is the workflow's display label.",
            "run-name labels individual workflow runs.",
            "jobs declares the executable job graph.",
            "id is not the workflow-level display-name field."
        ],
        "concept": "Workflow labels",
        "hints": [
            "Separate a workflow definition from one execution.",
            "Display labels and execution identifiers differ."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-052",
        "domain": "Author and manage workflows",
        "prompt": "For a push to branch feature/parser, which github property contains feature/parser without refs/heads/?",
        "choices": [
            "github.ref_name",
            "github.ref",
            "github.sha",
            "github.ref_type"
        ],
        "correct": 0,
        "explanations": [
            "ref_name is the short branch or tag name.",
            "ref includes the fully formed ref prefix.",
            "sha is the commit identifier, not the branch name.",
            "ref_type identifies branch versus tag."
        ],
        "concept": "Reference name forms",
        "hints": [
            "Metadata can describe identity, type or presentation.",
            "Compare full references with short names."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-053",
        "domain": "Author and manage workflows",
        "prompt": "MODE is defined only under one step's env mapping. Where is that definition directly available?",
        "choices": [
            "Within all later steps",
            "Within every workflow job",
            "Within workflows called afterward",
            "Within that step"
        ],
        "correct": 3,
        "explanations": [
            "Step env does not persist automatically to later steps.",
            "A step-scoped value does not become workflow-wide.",
            "Called workflows do not inherit this step's env mapping.",
            "A step env mapping applies to that step."
        ],
        "concept": "Step environment scope",
        "hints": [
            "Configuration nesting determines scope.",
            "Persistence requires a mechanism beyond local configuration."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-054",
        "domain": "Author and manage workflows",
        "prompt": "Which YAML form places two Bash commands in one run step while preserving their line break?",
        "choices": [
            "uses: |\n  echo first\n  echo second",
            "run: |\n  echo first\n  echo second",
            "run: >\n  echo first\n  echo second",
            "run: [echo first, echo second]"
        ],
        "correct": 1,
        "explanations": [
            "uses expects an action reference rather than shell commands.",
            "The literal block preserves the command line break.",
            "The folded block joins these lines into one command line.",
            "run expects a string rather than a YAML sequence."
        ],
        "concept": "Multiline shell scripts",
        "hints": [
            "Consider YAML scalar styles before shell execution.",
            "Keeping two lines differs from joining their text."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-055",
        "domain": "Author and manage workflows",
        "prompt": "A failing step has id: probe and continue-on-error: true. Which property reports its original failure before tolerance is applied?",
        "choices": [
            "job.status",
            "needs.probe.result",
            "steps.probe.outcome",
            "steps.probe.conclusion"
        ],
        "correct": 2,
        "explanations": [
            "job.status describes the job, not this raw step result.",
            "needs addresses jobs, but probe is a step ID.",
            "outcome records the pre-tolerance step result.",
            "conclusion reflects the result after continue-on-error."
        ],
        "concept": "Tolerated step failures",
        "hints": [
            "Failure handling can transform the reported conclusion.",
            "Distinguish step-level evidence from job-level status."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-056",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Using GitHub CLI in the repository checkout, which command lists runs of ci.yml?",
        "choices": [
            "gh run list --workflow ci.yml",
            "gh workflow list --all",
            "gh run view ci.yml",
            "gh workflow view ci.yml --yaml"
        ],
        "correct": 0,
        "explanations": [
            "run list filters run history by workflow.",
            "workflow list lists workflow definitions, not their runs.",
            "run view expects a run selector, not this filename.",
            "workflow view --yaml displays the workflow definition."
        ],
        "concept": "CLI run discovery",
        "hints": [
            "Distinguish workflow definitions from execution history.",
            "A workflow filename can filter a list of runs."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history"
    },
    {
        "id": "actions-057",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which Actions secret set to true enables additional step debug messages in subsequent runs?",
        "choices": [
            "ACTIONS_RUNNER_DEBUG",
            "RUNNER_DEBUG",
            "ACTIONS_DEBUG",
            "ACTIONS_STEP_DEBUG"
        ],
        "correct": 3,
        "explanations": [
            "This setting enables runner diagnostic log files.",
            "RUNNER_DEBUG indicates enabled debug mode to running code.",
            "ACTIONS_DEBUG is not the documented step-debug switch.",
            "This setting enables verbose step debug logging."
        ],
        "concept": "Step debug configuration",
        "hints": [
            "Differentiate application-step detail from runner diagnostics.",
            "A documented setting name must match exactly."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging"
    },
    {
        "id": "actions-058",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "With ACTIONS_RUNNER_DEBUG=true, where should an investigator look for runner process diagnostics after downloading the logs?",
        "choices": [
            "The repository's release assets",
            "The workflow's Markdown summary",
            "The runner-diagnostic-logs folder",
            "The uploaded dependency cache"
        ],
        "correct": 2,
        "explanations": [
            "Runner debug does not publish release assets.",
            "These process logs are not rendered as a job summary.",
            "Diagnostic logs are included in this archive folder.",
            "Caches store selected workflow files, not these diagnostics."
        ],
        "concept": "Runner diagnostic archives",
        "hints": [
            "The download archive may contain more than step output.",
            "Debug artifacts have a dedicated location."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging"
    },
    {
        "id": "actions-059",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "For run 731, which GitHub CLI command corresponds to Re-run failed jobs in the English Actions UI?",
        "choices": [
            "gh run rerun 731",
            "gh run watch 731 --exit-status",
            "gh run view 731 --log-failed",
            "gh run rerun 731 --failed"
        ],
        "correct": 3,
        "explanations": [
            "Without the flag, this requests a full rerun.",
            "watch observes a run without retrying jobs.",
            "view reads failed-step logs without starting execution.",
            "The failed flag selects failed jobs for retry."
        ],
        "concept": "CLI failed-job retries",
        "hints": [
            "Observation and retry are distinct operations.",
            "Check the flag that narrows retry scope."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
    },
    {
        "id": "actions-060",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which GitHub CLI command prints only failed-step logs from completed run 731?",
        "choices": [
            "gh run download 731",
            "gh run view 731 --log-failed",
            "gh run view 731 --log",
            "gh run list --status failure"
        ],
        "correct": 1,
        "explanations": [
            "download retrieves artifacts rather than console logs.",
            "log-failed narrows output to failed steps.",
            "log prints logs beyond just failed steps.",
            "list returns run history, not step log content."
        ],
        "concept": "CLI failed-step logs",
        "hints": [
            "A run conclusion is not the underlying error text.",
            "Choose a read operation with the requested granularity."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"
    },
    {
        "id": "actions-061",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A terminal script must wait for run 731 and return failure if that run fails. Which GitHub CLI command fits?",
        "choices": [
            "gh run watch 731 --exit-status",
            "gh run view 731 --log-failed",
            "gh run list --limit 1",
            "gh run rerun 731 --failed"
        ],
        "correct": 0,
        "explanations": [
            "watch waits, and exit-status propagates failure.",
            "view reads current data rather than waiting for completion.",
            "list returns a snapshot without monitoring completion.",
            "rerun requests execution instead of monitoring this attempt."
        ],
        "concept": "CLI run monitoring",
        "hints": [
            "Waiting and propagating a result are separate requirements.",
            "Avoid confusing observation with starting another attempt."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow"
    },
    {
        "id": "actions-062",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which GitHub CLI command downloads only the artifact named coverage from run 731?",
        "choices": [
            "gh run list --workflow coverage",
            "gh run watch 731 --interval 5",
            "gh run download 731 --name coverage",
            "gh run view 731 --job coverage"
        ],
        "correct": 2,
        "explanations": [
            "A workflow filter returns run history, not files.",
            "watch observes status and does not retrieve artifacts.",
            "download with name selects the named artifact.",
            "A job selector does not download artifact files."
        ],
        "concept": "CLI artifact selection",
        "hints": [
            "An artifact name is distinct from a job ID.",
            "Select both the owning run and stored result."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts"
    },
    {
        "id": "actions-063",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "The default branch contains a workflow_dispatch workflow named audit.yml. Which GitHub CLI command starts it on branch staging?",
        "choices": [
            "gh run list --workflow audit.yml --branch staging",
            "gh workflow run audit.yml --ref staging",
            "gh run rerun audit.yml --branch staging",
            "gh workflow view audit.yml --ref staging"
        ],
        "correct": 1,
        "explanations": [
            "list reads history without creating a run.",
            "workflow run dispatches using the selected ref.",
            "rerun targets an existing run, not this workflow file.",
            "view displays a workflow without dispatching it."
        ],
        "concept": "CLI manual invocation",
        "hints": [
            "Starting a fresh run differs from retrying a run ID.",
            "Ref selection is part of the dispatch request."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/manually-run-a-workflow"
    },
    {
        "id": "actions-064",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which GitHub CLI command disables the workflow ci.yml without deleting its YAML file?",
        "choices": [
            "gh run delete ci.yml",
            "gh workflow disable ci.yml",
            "gh run cancel ci.yml",
            "gh workflow view ci.yml"
        ],
        "correct": 1,
        "explanations": [
            "delete removes a run selected by run ID.",
            "disable changes the workflow's enabled state.",
            "cancel targets a run, not a workflow definition.",
            "view reads the definition without changing state."
        ],
        "concept": "CLI workflow suspension",
        "hints": [
            "A workflow and one of its runs have different lifecycles.",
            "Suspension should preserve the configuration for later reuse."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows"
    },
    {
        "id": "actions-065",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which public-repository condition can automatically disable scheduled workflows?",
        "choices": [
            "No repository activity for 60 days",
            "No successful run for 7 days",
            "No open pull requests for 30 days",
            "No new release for 90 days"
        ],
        "correct": 0,
        "explanations": [
            "The documented inactivity rule applies to public schedules.",
            "Success history is not this inactivity criterion.",
            "Open pull request count is not this criterion.",
            "Release cadence is not this inactivity criterion."
        ],
        "concept": "Inactive scheduled workflows",
        "hints": [
            "Look for repository activity rather than test outcomes.",
            "This rule concerns scheduled automation in public repositories."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-066",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A Linux Bash step runs only echo '::error::Missing report' and exits normally. What does that command do by itself?",
        "choices": [
            "Cancels every remaining job in the workflow",
            "Retries the step after recording an annotation",
            "Creates an error annotation without a failing exit code",
            "Creates a debug message and fails the step"
        ],
        "correct": 2,
        "explanations": [
            "An annotation does not cancel the workflow's jobs.",
            "Workflow commands do not implicitly retry a step.",
            "An annotation does not itself change Bash's exit status.",
            "error is an annotation command, not the debug command."
        ],
        "concept": "Error annotations versus exit codes",
        "hints": [
            "Separate visible severity from process termination.",
            "Shell exit status still determines command success."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-067",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which workflow-command pair creates a collapsible section in a job log?",
        "choices": [
            "::group::Details / ::endgroup::",
            "::debug::Details / ::enddebug::",
            "::notice::Details / ::endnotice::",
            "::warning::Details / ::endwarning::"
        ],
        "correct": 0,
        "explanations": [
            "group and endgroup delimit a collapsible log region.",
            "Debug messages do not use this closing command.",
            "Notice annotations do not define collapsible regions.",
            "Warning annotations do not define collapsible regions."
        ],
        "concept": "Collapsible log groups",
        "hints": [
            "Log organization differs from annotation severity.",
            "A bounded region needs both an opening and a closing marker."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-068",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which REST route lists artifacts belonging to run_id in owner/repo?",
        "choices": [
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs",
            "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
            "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/zip",
            "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
        ],
        "correct": 3,
        "explanations": [
            "This route downloads logs rather than listing artifacts.",
            "This route lists workflow runs, not stored artifacts.",
            "This route downloads one already identified artifact.",
            "This route lists artifacts scoped to one run."
        ],
        "concept": "REST run artifact listing",
        "hints": [
            "Choose the resource type before the operation.",
            "The known run identifier should scope the listing."
        ],
        "source": "https://docs.github.com/en/rest/actions/artifacts"
    },
    {
        "id": "actions-069",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "An authenticated client can access artifact 82. Which REST route requests its ZIP download?",
        "choices": [
            "GET /repos/{owner}/{repo}/actions/artifacts/82",
            "GET /repos/{owner}/{repo}/actions/artifacts/82/zip",
            "GET /repos/{owner}/{repo}/actions/runs/82/logs",
            "GET /repos/{owner}/{repo}/zipball/82"
        ],
        "correct": 1,
        "explanations": [
            "This retrieves metadata rather than the artifact archive.",
            "The archive-format suffix requests the artifact download.",
            "This treats 82 as a run ID and retrieves logs.",
            "zipball retrieves source archives, not Actions artifacts."
        ],
        "concept": "REST artifact downloads",
        "hints": [
            "Separate stored-result archives from source archives.",
            "An artifact ID is not a run ID."
        ],
        "source": "https://docs.github.com/en/rest/actions/artifacts"
    },
    {
        "id": "actions-070",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which REST route requests the log archive for run 731?",
        "choices": [
            "GET /repos/{owner}/{repo}/actions/workflows/731",
            "GET /repos/{owner}/{repo}/contents/731",
            "GET /repos/{owner}/{repo}/actions/runs/731/logs",
            "GET /repos/{owner}/{repo}/actions/runs/731/artifacts"
        ],
        "correct": 2,
        "explanations": [
            "The workflow route treats 731 as a workflow identifier.",
            "The contents route reads repository files.",
            "The run logs route requests its log archive.",
            "The artifacts route lists uploaded result files."
        ],
        "concept": "REST log archives",
        "hints": [
            "Console output is separate from uploaded artifacts.",
            "Use the execution resource, not the definition resource."
        ],
        "source": "https://docs.github.com/en/rest/actions/workflow-runs"
    },
    {
        "id": "actions-071",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "In the English GitHub job-log UI, which steps are searched by Search logs?",
        "choices": [
            "Only steps whose conclusion is failure",
            "All historical runs of that workflow",
            "Expanded steps in the displayed log",
            "All steps in every job of the run"
        ],
        "correct": 2,
        "explanations": [
            "Expansion state, not failure alone, defines this scope.",
            "This search does not query historical workflow runs.",
            "Only expanded steps participate in this UI search.",
            "The search does not span all jobs automatically."
        ],
        "concept": "UI log search scope",
        "hints": [
            "Check what content the interface currently exposes.",
            "UI search scope may be narrower than an archive's contents."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"
    },
    {
        "id": "actions-072",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which English job-log section links the software inventory for the GitHub-hosted runner image actually used?",
        "choices": [
            "Post job cleanup",
            "Set up job",
            "Complete job",
            "Run actions/checkout"
        ],
        "correct": 1,
        "explanations": [
            "Cleanup output does not establish the initial software image.",
            "Set up job includes runner-image software information.",
            "Complete job records completion, not initial image inventory.",
            "Checkout retrieves repository content rather than image inventory."
        ],
        "concept": "Hosted runner evidence",
        "hints": [
            "Use evidence from the specific execution.",
            "A moving runner label is not an immutable software inventory."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"
    },
    {
        "id": "actions-073",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A repository needs an initial CI file that its maintainers will customize independently. Which reuse mechanism fits?",
        "choices": [
            "A composite action reference",
            "A dependency-cache restore",
            "A workflow template",
            "A called reusable workflow"
        ],
        "correct": 2,
        "explanations": [
            "A composite action bundles steps, not an initial workflow file.",
            "A cache restores files rather than scaffolding workflow configuration.",
            "A template scaffolds a separately editable workflow file.",
            "A reusable call executes shared workflow logic rather than copying it."
        ],
        "concept": "Choosing a workflow template",
        "hints": [
            "Decide whether reuse happens by copying or calling.",
            "Independent customization changes the appropriate reuse model."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "actions-074",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Several workflows need the same three setup steps inside their existing jobs. They do not need extra jobs. Which component fits?",
        "choices": [
            "A workflow template copy",
            "A scheduled repository event",
            "A composite action",
            "A multi-job reusable workflow"
        ],
        "correct": 2,
        "explanations": [
            "A template copies configuration instead of sharing executable steps.",
            "An event determines when to run, not reusable step packaging.",
            "A composite action runs bundled steps within the caller's job.",
            "A reusable workflow is invoked at a job boundary."
        ],
        "concept": "Choosing a composite action",
        "hints": [
            "Match the reuse boundary: steps, jobs or complete files.",
            "Consider whether the existing runner should keep executing."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "actions-075",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Beside workflow-templates/ci.yml, which file supplies that template's name and description in an organization's .github repository?",
        "choices": [
            "workflow-templates/ci.action.yml",
            "workflow-templates/ci.package.json",
            "workflow-templates/ci.workflow.json",
            "workflow-templates/ci.properties.json"
        ],
        "correct": 3,
        "explanations": [
            "Action metadata is not the workflow-template descriptor.",
            "A package manifest is not this template's metadata file.",
            "This is not the documented template descriptor suffix.",
            "The matching properties.json file contains template metadata."
        ],
        "concept": "Workflow template metadata",
        "hints": [
            "The descriptor pairs with the workflow's base filename.",
            "Template display metadata is separate from execution YAML."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates"
    },
    {
        "id": "actions-076",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A maintainer opens a disabled workflow in the English Actions UI. Which control restores future event-triggered execution without rewriting YAML?",
        "choices": [
            "Cancel workflow",
            "Enable workflow",
            "Re-run all jobs",
            "Delete workflow run"
        ],
        "correct": 1,
        "explanations": [
            "Cancellation stops a run instead of enabling future runs.",
            "Enable workflow restores the workflow's active state.",
            "A rerun retries an existing execution rather than enabling a definition.",
            "Deleting run history does not enable the workflow."
        ],
        "concept": "UI workflow re-enabling",
        "hints": [
            "A disabled definition differs from a failed run.",
            "Look for a control affecting future events."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows"
    },
    {
        "id": "actions-077",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "What does DELETE /repos/{owner}/{repo}/actions/runs/{run_id} remove?",
        "choices": [
            "The selected workflow run and associated run data",
            "The YAML workflow file from the default branch",
            "Every workflow definition in the repository",
            "The repository's GitHub Actions enabled setting"
        ],
        "correct": 0,
        "explanations": [
            "The endpoint targets one workflow run.",
            "Deleting a run does not edit repository files.",
            "The run-specific route does not delete workflow definitions.",
            "This endpoint does not change repository Actions settings."
        ],
        "concept": "Deleting runs versus definitions",
        "hints": [
            "Read the resource named in the URL.",
            "History removal differs from configuration removal."
        ],
        "source": "https://docs.github.com/en/rest/actions/workflow-runs"
    },
    {
        "id": "actions-078",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A reusable workflow declares region with required: true and no default. A caller omits region. What must be corrected?",
        "choices": [
            "Supply region in the caller's with mapping.",
            "Add region to the caller's needs list.",
            "Create a runner label named region.",
            "Rename the called workflow's first step region."
        ],
        "correct": 0,
        "explanations": [
            "The call must satisfy the required input contract.",
            "needs lists dependency jobs, not invocation inputs.",
            "Runner labels do not supply declared workflow inputs.",
            "A step name cannot provide a missing invocation input."
        ],
        "concept": "Required input failures",
        "hints": [
            "Validate the invocation interface before runner behavior.",
            "Required inputs are separate from job dependencies."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "actions-079",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A reporting job depends on tests and uses if: ${{ always() }}. Which reference tells it whether tests failed?",
        "choices": [
            "steps.tests.outcome",
            "github.tests.status",
            "runner.tests.result",
            "needs.tests.result"
        ],
        "correct": 3,
        "explanations": [
            "tests is a dependency job here, not a local step.",
            "github does not contain arbitrary job-result fields.",
            "runner describes execution hardware and environment.",
            "needs exposes the result of the dependency job."
        ],
        "concept": "Dependency result diagnosis",
        "hints": [
            "A status condition allows execution but does not supply results.",
            "Locate the producer on the workflow dependency graph."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-080",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A four-job matrix uses fail-fast: true. One job fails and two queued siblings are canceled. Which change lets those queued variants run on the next attempt?",
        "choices": [
            "Remove the failed job's display name.",
            "Add more values to the same matrix axis.",
            "Set strategy.fail-fast to false.",
            "Set strategy.max-parallel to one."
        ],
        "correct": 2,
        "explanations": [
            "Display names do not control cancellation.",
            "More combinations do not change the failure policy.",
            "Disabling fail-fast prevents this sibling cancellation policy.",
            "Serial execution does not disable fail-fast cancellation."
        ],
        "concept": "Matrix failure triage",
        "hints": [
            "Separate the first failure from subsequent cancellations.",
            "Job scheduling limits do not define failure response."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-081",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "During pull_request, which property identifies the contributor's source branch rather than the merge ref?",
        "choices": [
            "github.repository",
            "github.head_ref",
            "github.base_ref",
            "github.ref"
        ],
        "correct": 1,
        "explanations": [
            "repository identifies the repository, not a branch.",
            "head_ref names the pull request's source branch.",
            "base_ref names the pull request's target branch.",
            "ref normally identifies the pull request merge ref here."
        ],
        "concept": "Pull request source references",
        "hints": [
            "A pull request has both a source and a destination.",
            "The ref used for execution may be synthetic."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-082",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A step has name: Compile, id: build and output binary. Which reference reads its output later in the same job?",
        "choices": [
            "steps.binary.outputs.build",
            "steps.build.outputs.binary",
            "steps.Compile.outputs.binary",
            "needs.build.outputs.binary"
        ],
        "correct": 1,
        "explanations": [
            "The step identifier precedes outputs and the output name.",
            "Step output lookup uses the step's id.",
            "The display name does not replace the step id.",
            "needs addresses dependency jobs, not local steps."
        ],
        "concept": "Step output identifiers",
        "hints": [
            "Separate display labels from expression identifiers.",
            "Follow the producer's scope and declared output name."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts"
    },
    {
        "id": "actions-083",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A build job uploads a bundle artifact successfully. A dependent deploy job starts on another runner. What must deploy do before reading the bundle files?",
        "choices": [
            "Export the artifact name into GITHUB_ENV.",
            "Add the artifact name to the needs list.",
            "Download the artifact into its own workspace.",
            "Read the build job's absolute workspace path."
        ],
        "correct": 2,
        "explanations": [
            "An environment variable does not transfer file contents.",
            "needs orders jobs but does not download artifacts.",
            "Downloading materializes uploaded files on the new runner.",
            "Different runners do not share that local filesystem."
        ],
        "concept": "Cross-job file transfer",
        "hints": [
            "Dependency ordering and data transfer are separate.",
            "Files must exist on the consumer's filesystem."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/store-and-share-data"
    },
    {
        "id": "actions-084",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A cache step with id: deps restores an exact primary-key match. What string does steps.deps.outputs.cache-hit contain?",
        "choices": [
            "'true'",
            "'false'",
            "'exact'",
            "'restored'"
        ],
        "correct": 0,
        "explanations": [
            "An exact primary-key match produces the string true.",
            "false does not describe an exact primary-key hit.",
            "exact is not the documented cache-hit output value.",
            "restored is not the documented cache-hit output value."
        ],
        "concept": "Exact cache match output",
        "hints": [
            "Action outputs are read as strings.",
            "Distinguish exact matches from fallback restoration."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching"
    },
    {
        "id": "actions-085",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A maintainer changes cached files but reuses an existing cache key. Why does the old cache remain unchanged?",
        "choices": [
            "Cache files synchronize continuously after restoration.",
            "An existing cache entry is not updated in place.",
            "A cache key always refers to the current workspace.",
            "Only artifacts can contain changed dependency files."
        ],
        "correct": 1,
        "explanations": [
            "Restoration copies files without continuous synchronization.",
            "Create a new key to save a different cache entry.",
            "Keys identify stored entries rather than live workspaces.",
            "Caches can store changed dependencies under a new key."
        ],
        "concept": "Cache replacement diagnosis",
        "hints": [
            "Think of a cache key as a stored snapshot identifier.",
            "Changing local files does not mutate remote stored entries."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching"
    },
    {
        "id": "actions-086",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which uses value calls verify.yml from repository acme/ci at ref stable?",
        "choices": [
            "acme/ci/.github/workflows/verify.yml@stable",
            "acme/ci@stable/.github/workflows/verify.yml",
            "acme/ci/.github/actions/verify.yml@stable",
            "https://github.com/acme/ci/verify.yml@stable"
        ],
        "correct": 0,
        "explanations": [
            "The repository, workflow path and ref follow the call syntax.",
            "The ref suffix belongs after the workflow file path.",
            "Reusable workflows are not stored in the actions directory.",
            "A workflow uses reference is not an HTTPS URL."
        ],
        "concept": "Reusable reference syntax",
        "hints": [
            "Check reference structure before troubleshooting execution.",
            "A remote workflow reference identifies both file and revision."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "actions-087",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A reusable-workflow call is incorrectly placed under steps. Which schema location should contain its uses key?",
        "choices": [
            "jobs.verify.uses",
            "jobs.verify.steps[0].uses",
            "on.workflow_call.uses",
            "defaults.run.uses"
        ],
        "correct": 0,
        "explanations": [
            "Reusable workflows are called directly by jobs.",
            "This location invokes an action, not a workflow.",
            "The event interface does not contain a caller's uses key.",
            "Run defaults do not invoke reusable components."
        ],
        "concept": "Call placement errors",
        "hints": [
            "A workflow call introduces a job-level boundary.",
            "Action invocation and workflow invocation use different nesting."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "actions-088",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A workflow defines env: &shared {MODE: test, COLOR: blue}. Another job sets env: *shared. Which MODE value does that job receive from this mapping?",
        "choices": [
            "*shared",
            "blue",
            "test",
            "shared"
        ],
        "correct": 2,
        "explanations": [
            "The alias is resolved rather than passed as literal text.",
            "blue belongs to COLOR, not MODE.",
            "The alias repeats the mapping containing MODE: test.",
            "The anchor name is a YAML reference, not the value."
        ],
        "concept": "Interpreting YAML aliases",
        "hints": [
            "Expand the referenced mapping before reading individual keys.",
            "YAML anchors do not rename the variables they contain."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "actions-089",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "In an expanded GitHub job log, which action produces a browser URL pointing to a particular log line?",
        "choices": [
            "Click that line's number.",
            "Click the workflow file's filename.",
            "Copy the repository clone URL.",
            "Copy the run's status-badge URL."
        ],
        "correct": 0,
        "explanations": [
            "Selecting the line number creates a line-specific permalink.",
            "The workflow filename points to configuration, not log evidence.",
            "A clone URL retrieves source rather than a log location.",
            "A badge URL presents status rather than exact log text."
        ],
        "concept": "Exact log-line links",
        "hints": [
            "Choose evidence at the requested granularity.",
            "A run overview link is broader than a line permalink."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"
    },
    {
        "id": "actions-090",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "CI runs on both push and pull_request. The team now wants PR validation only, with no branch-push run. Which trigger declaration matches that change?",
        "choices": [
            "on: push",
            "on: [push, pull_request]",
            "on: workflow_run",
            "on: pull_request"
        ],
        "correct": 3,
        "explanations": [
            "This keeps branch-push runs and removes PR events.",
            "This preserves the original two-event behavior.",
            "This responds to other workflow runs, not PR updates directly.",
            "Only the pull request event remains enabled."
        ],
        "concept": "Duplicate trigger diagnosis",
        "hints": [
            "List which event families should remain enabled.",
            "One repository change can generate more than one event."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-091",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "A workflow_run trigger uses types: [completed]. Which job condition restricts follow-up processing to a successful upstream run?",
        "choices": [
            "if: github.event.workflow_run.status == 'success'",
            "if: github.event.action == 'success'",
            "if: github.event.workflow_run.event == 'success'",
            "if: github.event.workflow_run.conclusion == 'success'"
        ],
        "correct": 3,
        "explanations": [
            "status describes lifecycle state, not the success conclusion.",
            "The event action is completed, not success.",
            "event names the upstream trigger rather than its result.",
            "conclusion describes how the completed upstream run ended."
        ],
        "concept": "Upstream workflow conclusions",
        "hints": [
            "Completion does not imply a successful conclusion.",
            "Inspect the upstream run object, not this job's prior steps."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
    },
    {
        "id": "actions-092",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "With step debug logging enabled, which Bash command emits a diagnostic message without creating an error annotation?",
        "choices": [
            "echo '::debug::Cache lookup started'",
            "echo '::error::Cache lookup started'",
            "echo '::warning::Cache lookup started'",
            "echo '::notice::Cache lookup started'"
        ],
        "correct": 0,
        "explanations": [
            "debug emits an enabled debug-log message.",
            "error creates an error annotation instead.",
            "warning creates a warning annotation instead.",
            "notice creates a notice annotation instead."
        ],
        "concept": "Debug message emission",
        "hints": [
            "Choose a command by output category, not message wording.",
            "Annotations and optional diagnostic messages are different outputs."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-093",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Run 731 was triggered by commit A. The branch now points to commit B. On rerunning 731, what does GITHUB_SHA identify?",
        "choices": [
            "Commit B from the current branch tip",
            "The newest commit on the default branch",
            "A new commit created for the rerun",
            "Commit A from the original triggering event"
        ],
        "correct": 3,
        "explanations": [
            "Moving the branch does not rewrite the run's event SHA.",
            "Rerunning does not select the newest default-branch commit.",
            "A rerun does not create a commit by itself.",
            "Reruns retain the original event's GITHUB_SHA."
        ],
        "concept": "Rerun event identity",
        "hints": [
            "Separate retrying an event from dispatching a fresh event.",
            "A branch pointer can move while run metadata remains fixed."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
    },
    {
        "id": "actions-094",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "GitHub's API reports job ID 9821 for a failed matrix variant. Which GitHub CLI command retries that job specifically?",
        "choices": [
            "gh run rerun 9821 --failed",
            "gh run view --job 9821 --log",
            "gh run watch 9821 --exit-status",
            "gh run rerun --job 9821"
        ],
        "correct": 3,
        "explanations": [
            "A positional number is interpreted as a run ID.",
            "view reads this job's logs without retrying it.",
            "watch expects a run ID and only monitors execution.",
            "The job flag selects the API's job identifier."
        ],
        "concept": "CLI individual-job reruns",
        "hints": [
            "Display names, job IDs and run IDs are distinct.",
            "Choose the selector corresponding to the identifier you have."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
    },
    {
        "id": "actions-095",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Only one job was rerun on attempt 2. Why might its downloaded log archive omit jobs that ran only on attempt 1?",
        "choices": [
            "Downloading logs converts successful jobs into artifacts.",
            "The original workflow YAML hides all successful jobs.",
            "The archive contains jobs rerun in that attempt.",
            "Successful jobs never produce downloadable logs."
        ],
        "correct": 2,
        "explanations": [
            "Log downloads do not transform jobs into artifacts.",
            "Attempt selection, not YAML visibility, explains this omission.",
            "Use previous attempt logs for jobs not rerun.",
            "Successful jobs also have downloadable execution logs."
        ],
        "concept": "Rerun attempt log coverage",
        "hints": [
            "Correlate each log archive with its execution attempt.",
            "Selective retries do not execute every original job again."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"
    },
    {
        "id": "actions-096",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "For a private repository, what is the minimum standard repository role needed to view workflow run logs? Role names are shown in English.",
        "choices": [
            "Write",
            "Maintain",
            "Admin",
            "Read"
        ],
        "correct": 3,
        "explanations": [
            "Write includes more access than log viewing requires.",
            "Maintain is not the minimum access needed here.",
            "Admin is not required merely to inspect logs.",
            "Read access is sufficient to view these logs."
        ],
        "concept": "Repository log access",
        "hints": [
            "Distinguish viewing evidence from changing workflow execution.",
            "Select the least sufficient repository role."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/monitor-workflows/use-workflow-run-logs"
    },
    {
        "id": "actions-097",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "Which workflow-template placeholder resolves to the consuming repository's default branch during workflow creation?",
        "choices": [
            "${{ inputs.default-branch }}",
            "$default-branch",
            "${{ github.default_branch }}",
            "$GITHUB_DEFAULT_BRANCH"
        ],
        "correct": 1,
        "explanations": [
            "A workflow input expression does not perform template substitution.",
            "This is the documented workflow-template placeholder.",
            "This is not the template substitution token.",
            "This is not a default runner variable for template creation."
        ],
        "concept": "Template branch placeholders",
        "hints": [
            "Template expansion happens before workflow execution.",
            "Do not confuse scaffolding placeholders with runtime expressions."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates"
    },
    {
        "id": "actions-098",
        "domain": "Consume and troubleshoot workflows",
        "prompt": "In a two-OS matrix, runtime 20 passes on both OSes and runtime 22 fails on both. Which first comparison best isolates the observed pattern?",
        "choices": [
            "Compare artifact sizes from the two runtime 22 jobs.",
            "Compare runtime 20 and 22 logs on the same OS.",
            "Compare only the two successful runtime 20 jobs.",
            "Compare runner queue times across all four jobs."
        ],
        "correct": 1,
        "explanations": [
            "Both jobs fail at the same runtime; no passing baseline is compared.",
            "Holding OS fixed isolates the differing runtime dimension.",
            "Successful jobs alone omit the failure evidence.",
            "Queue timing does not directly isolate the runtime's failing commands."
        ],
        "concept": "Matrix evidence correlation",
        "hints": [
            "Hold one variable constant while changing another.",
            "Use the pattern as a hypothesis, not proof of cause."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-099",
        "domain": "Author and maintain actions",
        "prompt": "Which custom action type runs its entry file with a Node.js runtime selected in metadata?",
        "choices": [
            "Docker container action",
            "Composite action",
            "JavaScript action",
            "Reusable workflow"
        ],
        "correct": 2,
        "explanations": [
            "A container action starts an image rather than a runner-provided Node.js entry file.",
            "A composite action combines steps instead of declaring a JavaScript entry file.",
            "JavaScript action metadata selects the runtime and entry script.",
            "A reusable workflow defines jobs and is not one of the three custom action types."
        ],
        "concept": "JavaScript action execution",
        "hints": [
            "Compare an action's implementation with a workflow's orchestration.",
            "Consider which component launches the entry file."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action"
    },
    {
        "id": "actions-100",
        "domain": "Author and maintain actions",
        "prompt": "Which action type packages a command together with its Linux system libraries in an image?",
        "choices": [
            "Docker container action",
            "JavaScript action",
            "Composite action",
            "Reusable workflow"
        ],
        "correct": 0,
        "explanations": [
            "The image carries the command and its system dependencies.",
            "JavaScript action metadata does not package a Linux filesystem.",
            "Composite steps reuse the runner environment rather than package an image.",
            "A reusable workflow can invoke containers but is not itself an image-based action."
        ],
        "concept": "Container action packaging",
        "hints": [
            "Separate environment packaging from step reuse.",
            "Where will the required shared libraries come from?"
        ],
        "source": "https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action"
    },
    {
        "id": "actions-101",
        "domain": "Author and maintain actions",
        "prompt": "Which custom action type declares a sequence of run and uses steps in its metadata?",
        "choices": [
            "JavaScript action",
            "Docker container action",
            "Reusable workflow",
            "Composite action"
        ],
        "correct": 3,
        "explanations": [
            "JavaScript metadata points to a script instead of a step sequence.",
            "Container metadata describes an image and its invocation.",
            "Reusable workflows put steps inside jobs in a workflow file, not action metadata.",
            "Composite metadata directly contains the steps to execute."
        ],
        "concept": "Composite step encapsulation",
        "hints": [
            "Identify the file being described before choosing an abstraction.",
            "Distinguish a job definition from an action implementation."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action"
    },
    {
        "id": "actions-102",
        "domain": "Author and maintain actions",
        "prompt": "Which filename is valid for custom action metadata?",
        "choices": [
            "actions.yml",
            "action.yaml",
            "workflow.yaml",
            "metadata.yml"
        ],
        "correct": 1,
        "explanations": [
            "The plural actions.yml is not an action metadata filename.",
            "action.yaml is supported; action.yml is the other supported spelling.",
            "A workflow filename does not identify an action metadata file.",
            "GitHub does not discover action metadata under metadata.yml."
        ],
        "concept": "Action metadata discovery",
        "hints": [
            "The runner uses a defined filename, not an arbitrary YAML filename.",
            "Check both the basename and the extension."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-103",
        "domain": "Author and maintain actions",
        "prompt": "Which set contains only required top-level action metadata keys?",
        "choices": [
            "name, author, branding",
            "name, description, runs",
            "description, inputs, outputs",
            "author, inputs, runs"
        ],
        "correct": 1,
        "explanations": [
            "author and branding are optional metadata.",
            "These identify the action, describe it, and specify its execution.",
            "inputs and outputs are optional even for actions that do useful work.",
            "author and inputs are optional; this set also omits required keys."
        ],
        "concept": "Required action metadata",
        "hints": [
            "Separate identification and execution from optional presentation.",
            "An action need not accept parameters or return values."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-104",
        "domain": "Author and maintain actions",
        "prompt": "In JavaScript action metadata, which key identifies the script executed for the main invocation?",
        "choices": [
            "runs.image",
            "runs.entrypoint",
            "runs.steps",
            "runs.main"
        ],
        "correct": 3,
        "explanations": [
            "runs.image configures the image for a Docker action.",
            "runs.entrypoint configures a container entrypoint, not a JavaScript script.",
            "runs.steps contains composite steps, not a JavaScript entry file.",
            "runs.main gives the JavaScript entry file relative to the action directory."
        ],
        "concept": "JavaScript entry file",
        "hints": [
            "Match metadata keys to their action type.",
            "The runtime selector and the script path are separate settings."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-105",
        "domain": "Author and maintain actions",
        "prompt": "Which metadata setting selects the execution runtime for an action?",
        "choices": [
            "runs.using",
            "runs.main",
            "runs.env",
            "runs.args"
        ],
        "correct": 0,
        "explanations": [
            "runs.using selects the JavaScript runtime or the docker/composite execution type.",
            "runs.main selects a JavaScript script, not its runtime.",
            "runs.env sets container environment variables.",
            "runs.args supplies container arguments instead of choosing the runtime."
        ],
        "concept": "Action runtime selection",
        "hints": [
            "Distinguish how code runs from which file runs.",
            "Metadata has different execution schemas for the three action types."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-106",
        "domain": "Author and maintain actions",
        "prompt": "A JavaScript action is invoked through a local ./ path. Which lifecycle feature is not supported for that local invocation?",
        "choices": [
            "runs.main",
            "runs.post",
            "runs.pre",
            "runs.post-if"
        ],
        "correct": 2,
        "explanations": [
            "Local JavaScript actions still need a main entry file.",
            "The local-action restriction here concerns pre, not post cleanup.",
            "The metadata reference explicitly excludes runs.pre for local actions.",
            "post-if controls the post hook and is not the documented local pre restriction."
        ],
        "concept": "Local action lifecycle limitation",
        "hints": [
            "Local and remotely downloaded actions can differ during job setup.",
            "Check lifecycle support rather than assuming every hook is available."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-107",
        "domain": "Author and maintain actions",
        "prompt": "Which JavaScript action metadata key schedules a cleanup script at the end of the job?",
        "choices": [
            "runs.pre",
            "runs.main",
            "runs.args",
            "runs.post"
        ],
        "correct": 3,
        "explanations": [
            "runs.pre executes before the main action, not at job completion.",
            "runs.main is the ordinary action entry point during the step.",
            "runs.args configures container arguments, not JavaScript cleanup.",
            "runs.post registers the JavaScript cleanup entry file for job completion."
        ],
        "concept": "Action cleanup registration",
        "hints": [
            "Distinguish a step's execution from the job's finalization phase.",
            "Consider the lifecycle order rather than the script filename."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-108",
        "domain": "Author and maintain actions",
        "prompt": "Without runs.post-if, what condition is used for a JavaScript action's runs.post hook?",
        "choices": [
            "success()",
            "failure()",
            "always()",
            "cancelled()"
        ],
        "correct": 2,
        "explanations": [
            "success() would restrict cleanup to successful job status.",
            "failure() would select failed job status only.",
            "The default post condition is always(), rather than success-only cleanup.",
            "cancelled() tests cancellation instead of providing the default condition."
        ],
        "concept": "Post-hook default condition",
        "hints": [
            "Cleanup can be necessary even after an unsuccessful job.",
            "Do not infer hook defaults from ordinary step defaults."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-109",
        "domain": "Author and maintain actions",
        "prompt": "An action input region has default: west. The caller omits region. What value does the input receive?",
        "choices": [
            "region",
            "west",
            "undefined",
            "null"
        ],
        "correct": 1,
        "explanations": [
            "The input identifier is not substituted as its own value.",
            "The input default is used when the caller does not specify the parameter.",
            "The configured default prevents an unspecified value in this example.",
            "Omission does not replace a configured string default with null."
        ],
        "concept": "Action input defaults",
        "hints": [
            "Distinguish a parameter's identifier from its value.",
            "Ask which metadata applies when the caller supplies nothing."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-110",
        "domain": "Author and maintain actions",
        "prompt": "Does required: true in custom action input metadata, by itself, reject an omitted input?",
        "choices": [
            "No; validation must be implemented in the action.",
            "Yes; the runner rejects the workflow before jobs start.",
            "Yes; the runner skips that action without an error.",
            "No; the runner always substitutes the input name."
        ],
        "correct": 0,
        "explanations": [
            "The flag describes the requirement but does not automatically enforce it.",
            "The action metadata flag alone does not provide this workflow validation.",
            "There is no automatic skip behavior attached to this flag.",
            "Input names do not become fallback values automatically."
        ],
        "concept": "Custom input validation responsibility",
        "hints": [
            "A declaration and runtime validation are different mechanisms.",
            "Do not transfer workflow_dispatch rules to action metadata."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-111",
        "domain": "Author and maintain actions",
        "prompt": "Which @actions/core call throws if the custom action input target is empty?",
        "choices": [
            "core.getInput('target', { required: true })",
            "core.getInput('target', { required: false })",
            "core.getInput('target', { trimWhitespace: true })",
            "core.getInput('target', { trimWhitespace: false })"
        ],
        "correct": 0,
        "explanations": [
            "The required option on getInput performs the runtime input check.",
            "Without the required option, getInput can return an empty string.",
            "Whitespace trimming does not require the resulting input to be nonempty.",
            "Disabling trimming preserves whitespace but does not require an input value."
        ],
        "concept": "Toolkit required input check",
        "hints": [
            "Text normalization and presence validation solve different problems.",
            "Compare the options passed to the function."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action"
    },
    {
        "id": "actions-112",
        "domain": "Author and maintain actions",
        "prompt": "For a JavaScript action input named target, which environment variable carries the input value?",
        "choices": [
            "ACTION_TARGET",
            "GITHUB_TARGET",
            "INPUT_TARGET",
            "STATE_TARGET"
        ],
        "correct": 2,
        "explanations": [
            "ACTION_ is not the metadata input environment-variable prefix.",
            "GITHUB_ denotes platform-provided variables, not this custom input mapping.",
            "Input environment variables use INPUT_ and an uppercase input name.",
            "STATE_ is used for saved lifecycle state rather than action inputs."
        ],
        "concept": "JavaScript input environment mapping",
        "hints": [
            "Distinguish input data from saved lifecycle state.",
            "Consider the naming transformation applied to the input identifier."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-113",
        "domain": "Author and maintain actions",
        "prompt": "A composite action declares an input named format. Which expression reads it inside the action?",
        "choices": [
            "${{ env.INPUT_FORMAT }}",
            "${{ inputs.format }}",
            "${{ steps.format.outputs.value }}",
            "${{ github.format }}"
        ],
        "correct": 1,
        "explanations": [
            "Composite inputs do not automatically create INPUT_ environment variables.",
            "The inputs context exposes composite inputs directly.",
            "This refers to a step output, not the declared action input.",
            "The github context does not contain custom action input properties."
        ],
        "concept": "Composite input context",
        "hints": [
            "Composite actions do not inherit every JavaScript input convention.",
            "Identify who supplied this value: the caller, a step, or GitHub."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-114",
        "domain": "Author and maintain actions",
        "prompt": "Which composite output mapping exposes output digest from an internal step with id: pack?",
        "choices": [
            "value: ${{ inputs.digest }}",
            "value: ${{ github.digest }}",
            "value: ${{ env.pack.outputs.digest }}",
            "value: ${{ steps.pack.outputs.digest }}"
        ],
        "correct": 3,
        "explanations": [
            "inputs.digest would read an input rather than the pack step output.",
            "github.digest is not the location of internal step outputs.",
            "The env context does not provide nested step-output objects.",
            "A composite output value can map to a named internal step output."
        ],
        "concept": "Composite output value mapping",
        "hints": [
            "Trace the value from its producing step to the action boundary.",
            "An action output needs a value, not just documentation."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-115",
        "domain": "Author and maintain actions",
        "prompt": "Inside a composite action, which value identifies the directory containing the action's own scripts?",
        "choices": [
            "${{ github.workspace }}",
            "${{ runner.temp }}",
            "${{ github.action_path }}",
            "${{ github.workflow_ref }}"
        ],
        "correct": 2,
        "explanations": [
            "github.workspace points to the caller workspace, not necessarily the action directory.",
            "runner.temp is temporary job storage, not the action's installed location.",
            "github.action_path points to the composite action directory.",
            "github.workflow_ref identifies the workflow reference rather than a script directory."
        ],
        "concept": "Composite action-relative files",
        "hints": [
            "The caller repository and the action repository can differ.",
            "Choose a directory value rather than a workflow identifier."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action"
    },
    {
        "id": "actions-116",
        "domain": "Author and maintain actions",
        "prompt": "A composite action step contains run: ./check.sh. Which step key must also be specified?",
        "choices": [
            "shell",
            "uses",
            "with",
            "timeout-minutes"
        ],
        "correct": 0,
        "explanations": [
            "A composite run step must explicitly declare its shell.",
            "uses selects another action and does not accompany run in the same step.",
            "with provides inputs to a uses step rather than the execution shell.",
            "A timeout does not identify the interpreter and is not this requirement."
        ],
        "concept": "Composite run-step shell",
        "hints": [
            "Do not assume workflow run-step defaults apply to action metadata.",
            "A command needs an interpreter as well as a path."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-117",
        "domain": "Author and maintain actions",
        "prompt": "Which composite run-step key makes a command execute from the tools directory?",
        "choices": [
            "shell: tools",
            "id: tools",
            "name: tools",
            "working-directory: tools"
        ],
        "correct": 3,
        "explanations": [
            "shell selects an interpreter, not a working directory.",
            "id identifies the step for references and does not change directories.",
            "name changes the displayed step label, not command execution location.",
            "working-directory sets the command's current directory."
        ],
        "concept": "Composite command working directory",
        "hints": [
            "Separate display metadata from execution settings.",
            "Relative paths depend on the command's current directory."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-118",
        "domain": "Author and maintain actions",
        "prompt": "How does a composite action invoke another action as one of its internal steps?",
        "choices": [
            "Add a uses key under outputs.",
            "Add a uses step under runs.steps.",
            "Set runs.main to the action reference.",
            "Set runs.image to the action reference."
        ],
        "correct": 1,
        "explanations": [
            "outputs describes returned values and does not execute steps.",
            "Composite step definitions support uses for invoking actions.",
            "runs.main belongs to JavaScript action execution.",
            "runs.image belongs to container action execution."
        ],
        "concept": "Nested action steps",
        "hints": [
            "Look at the part of the schema that contains executable work.",
            "Calling an action is different from launching a script file."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-119",
        "domain": "Author and maintain actions",
        "prompt": "Which Docker action metadata property/value pair selects a Dockerfile beside action.yml as the image build definition?",
        "choices": [
            "runs.main: Dockerfile",
            "runs.image: Dockerfile",
            "runs.using: Dockerfile",
            "runs.entrypoint: Dockerfile"
        ],
        "correct": 1,
        "explanations": [
            "runs.main is a JavaScript entry-file setting.",
            "runs.image accepts a Dockerfile path relative to the metadata file.",
            "runs.using must be docker for a Docker container action.",
            "runs.entrypoint selects an executable, not an image build definition."
        ],
        "concept": "Docker action image definition",
        "hints": [
            "Separate building the image from starting its executable.",
            "A Dockerfile is build input, not a JavaScript script."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-120",
        "domain": "Author and maintain actions",
        "prompt": "A Docker action reads its first positional argument. Which metadata property/value pair passes the input greeting there?",
        "choices": [
            "runs.env: {GREETING: '${{ inputs.greeting }}'}",
            "runs.entrypoint: '${{ inputs.greeting }}'",
            "runs.image: '${{ inputs.greeting }}'",
            "runs.args: ['${{ inputs.greeting }}']"
        ],
        "correct": 3,
        "explanations": [
            "runs.env provides an environment variable, not a positional argument.",
            "entrypoint identifies the executable rather than an argument value.",
            "image identifies the container image rather than command arguments.",
            "runs.args supplies arguments to the container entrypoint."
        ],
        "concept": "Docker action input arguments",
        "hints": [
            "An environment variable and a positional argument are separate interfaces.",
            "Identify how the executable expects to receive the value."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-121",
        "domain": "Author and maintain actions",
        "prompt": "Which Docker action metadata key overrides the image's Dockerfile ENTRYPOINT?",
        "choices": [
            "runs.entrypoint",
            "runs.args",
            "runs.image",
            "runs.env"
        ],
        "correct": 0,
        "explanations": [
            "runs.entrypoint overrides or supplies the container entrypoint.",
            "runs.args changes arguments, not the entrypoint executable itself.",
            "runs.image selects the image or its build definition.",
            "runs.env sets environment variables rather than an executable."
        ],
        "concept": "Docker entrypoint override",
        "hints": [
            "Distinguish the program to launch from its arguments.",
            "The image may already define startup behavior."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-122",
        "domain": "Author and maintain actions",
        "prompt": "Which Docker action metadata property/value pair sets MODE=verify in the container environment?",
        "choices": [
            "runs.args: [MODE, verify]",
            "inputs: {MODE: {default: verify}}",
            "runs.env: {MODE: verify}",
            "outputs: {MODE: {description: verify}}"
        ],
        "correct": 2,
        "explanations": [
            "An argument list does not create an environment variable.",
            "An input default alone does not define the unprefixed environment variable MODE.",
            "runs.env explicitly adds variables to the container environment.",
            "Output metadata describes a returned value and does not configure the environment."
        ],
        "concept": "Container environment metadata",
        "hints": [
            "Variable names are part of the executable's interface.",
            "Inputs, outputs, arguments, and environment variables are not interchangeable."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
    },
    {
        "id": "actions-123",
        "domain": "Author and maintain actions",
        "prompt": "Which self-hosted runner setup supports Docker container actions?",
        "choices": [
            "Windows with Docker installed",
            "macOS with Docker installed",
            "Linux with only a Node.js runtime",
            "Linux with Docker installed"
        ],
        "correct": 3,
        "explanations": [
            "Docker installation alone does not make Windows runners support container actions.",
            "Docker installation alone does not make macOS runners support container actions.",
            "Node.js does not replace the required container engine.",
            "Container actions require a Linux runner and Docker on a self-hosted machine."
        ],
        "concept": "Container action host requirements",
        "hints": [
            "Check platform support as well as installed software.",
            "A local desktop container setup does not establish runner support."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action"
    },
    {
        "id": "actions-124",
        "domain": "Author and maintain actions",
        "prompt": "At which container path does GitHub mount the runner workspace for a Docker action?",
        "choices": [
            "/github/action",
            "/github/home",
            "/github/workspace",
            "/github/workflow"
        ],
        "correct": 2,
        "explanations": [
            "/github/action is not the documented workspace mount path.",
            "/github/home serves the container home directory, not the workspace.",
            "The workspace mount makes caller files and generated files accessible across steps.",
            "/github/workflow is not the repository workspace mount."
        ],
        "concept": "Docker workspace mount",
        "hints": [
            "The caller checkout must be visible inside the container.",
            "Distinguish repository files from the container home directory."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/use-containerized-services/create-a-docker-container-action"
    },
    {
        "id": "actions-125",
        "domain": "Author and maintain actions",
        "prompt": "A Dockerfile puts helper files in /github/workspace during image build. Why can they disappear when the action starts?",
        "choices": [
            "The action metadata deletes every file in the image.",
            "The workspace mount hides image files at that path.",
            "Docker ignores every COPY instruction in action images.",
            "The container uses the runner's root filesystem instead."
        ],
        "correct": 1,
        "explanations": [
            "Metadata does not erase the image filesystem.",
            "GitHub mounts the workspace over that image directory; keep helpers elsewhere.",
            "COPY works; the runtime mount masks files at this particular destination.",
            "The container retains its image filesystem outside mounted paths."
        ],
        "concept": "Image files versus runtime mounts",
        "hints": [
            "Compare build-time contents with the runtime filesystem view.",
            "Distinguish files shipped with the action from files supplied by the caller."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/dockerfile-support"
    },
    {
        "id": "actions-126",
        "domain": "Author and maintain actions",
        "prompt": "Before uses: ./.github/actions/lint, what normally makes the action files available in the job workspace?",
        "choices": [
            "Check out the repository in an earlier step.",
            "Set the step name to the repository name.",
            "Add an output named github.workspace.",
            "Add the local path as a runner label."
        ],
        "correct": 0,
        "explanations": [
            "A ./ action reference resolves files already present in the workspace.",
            "A displayed name does not download repository files.",
            "An output declaration does not populate the workspace.",
            "Runner labels route jobs; they do not supply local action files."
        ],
        "concept": "Local action file availability",
        "hints": [
            "A relative reference is a filesystem lookup, not a repository download.",
            "Consider what exists before the job's first checkout."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-127",
        "domain": "Author and maintain actions",
        "prompt": "Which @actions/core call publishes a JavaScript action output named archive?",
        "choices": [
            "core.setOutput('archive', path)",
            "core.exportVariable('archive', path)",
            "core.saveState('archive', path)",
            "core.info(path)"
        ],
        "correct": 0,
        "explanations": [
            "setOutput publishes a named output that later steps can reference.",
            "exportVariable sets an environment variable for subsequent steps.",
            "saveState stores action lifecycle data, not a caller-facing output.",
            "info prints a log message without creating an output."
        ],
        "concept": "Toolkit output publication",
        "hints": [
            "Logs, outputs, environment, and lifecycle state have different consumers.",
            "The next step needs a structured named value, not just visible text."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-128",
        "domain": "Author and maintain actions",
        "prompt": "Which toolkit package runs an external executable from a JavaScript action?",
        "choices": [
            "@actions/core",
            "@actions/github",
            "@actions/exec",
            "@actions/artifact"
        ],
        "correct": 2,
        "explanations": [
            "@actions/core provides action inputs, outputs, logging, and related runner features.",
            "@actions/github provides GitHub API and event-context helpers.",
            "@actions/exec provides process execution helpers.",
            "@actions/artifact manages workflow artifacts rather than general processes."
        ],
        "concept": "Toolkit process execution",
        "hints": [
            "Match the package to the external resource being used.",
            "Launching a command is different from calling a web API."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action"
    },
    {
        "id": "actions-129",
        "domain": "Author and maintain actions",
        "prompt": "Which toolkit package supplies an authenticated Octokit client and GitHub event context to a JavaScript action?",
        "choices": [
            "@actions/exec",
            "@actions/github",
            "@actions/io",
            "@actions/cache"
        ],
        "correct": 1,
        "explanations": [
            "@actions/exec launches external commands rather than supplying Octokit.",
            "@actions/github exposes getOctokit and context for GitHub API integrations.",
            "@actions/io provides filesystem operations, not the GitHub API client.",
            "@actions/cache manages dependency caches, not event API context."
        ],
        "concept": "Toolkit GitHub API integration",
        "hints": [
            "Distinguish service clients from command and filesystem utilities.",
            "The event payload can inform which repository resource to request."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action"
    },
    {
        "id": "actions-130",
        "domain": "Author and maintain actions",
        "prompt": "What distinguishes actions/github-script from writing and packaging a custom JavaScript action?",
        "choices": [
            "It turns JavaScript into Docker layers before each invocation.",
            "It makes Python the required language for GitHub API requests.",
            "It defines a fourth metadata action type named github-script.",
            "It runs supplied JavaScript with GitHub client/context objects already provided."
        ],
        "correct": 3,
        "explanations": [
            "github-script does not package the script as a Docker image.",
            "Its supplied script is JavaScript; Python is not required.",
            "The custom action types remain JavaScript, Docker container, and composite.",
            "github-script is a published action with convenient injected objects, not a new language."
        ],
        "concept": "github-script versus custom action packaging",
        "hints": [
            "A published convenience action is not a new metadata runtime type.",
            "Compare the objects available to the script with the language it uses."
        ],
        "source": "https://learn.microsoft.com/en-us/training/modules/automate-github-using-github-script/2-what-is-github-script"
    },
    {
        "id": "actions-131",
        "domain": "Author and maintain actions",
        "prompt": "Which @actions/core call reports an error and marks a JavaScript action as failed?",
        "choices": [
            "core.error('Invalid manifest')",
            "core.warning('Invalid manifest')",
            "core.setFailed('Invalid manifest')",
            "core.notice('Invalid manifest')"
        ],
        "correct": 2,
        "explanations": [
            "error creates an error annotation but does not itself set the exit status.",
            "warning creates a warning annotation without failing the action.",
            "setFailed records the error and sets a failing exit status.",
            "notice creates an informational annotation without failing the action."
        ],
        "concept": "Failure status versus annotations",
        "hints": [
            "An annotation's severity and a process exit status are separate.",
            "The caller needs a failed result, not only a red message."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-132",
        "domain": "Author and maintain actions",
        "prompt": "Which stdout text creates a warning annotation for line 8 of config.json?",
        "choices": [
            "::warning file=config.json,line=8::Check value",
            "::error file=config.json,line=8::Check value",
            "::notice file=config.json,line=8::Check value",
            "::debug::config.json:8 Check value"
        ],
        "correct": 0,
        "explanations": [
            "The warning command supports file and line annotation properties.",
            "error creates an error annotation rather than a warning.",
            "notice creates a notice annotation rather than a warning.",
            "debug emits debug text instead of this file-linked warning annotation."
        ],
        "concept": "File-linked workflow annotations",
        "hints": [
            "Compare the severity and location fields separately.",
            "A filename printed as ordinary text is not necessarily annotation metadata."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-133",
        "domain": "Author and maintain actions",
        "prompt": "Which environment file lets an action save a resource ID for its own later post cleanup?",
        "choices": [
            "GITHUB_OUTPUT",
            "GITHUB_PATH",
            "GITHUB_STEP_SUMMARY",
            "GITHUB_STATE"
        ],
        "correct": 3,
        "explanations": [
            "GITHUB_OUTPUT publishes step outputs instead of private lifecycle state.",
            "GITHUB_PATH adds directories to the executable search path.",
            "GITHUB_STEP_SUMMARY creates Markdown summaries, not lifecycle state.",
            "GITHUB_STATE provides state to the same action's lifecycle scripts."
        ],
        "concept": "Action lifecycle state handoff",
        "hints": [
            "Identify the consumer: the same action's cleanup or a caller's next step.",
            "Not every environment file has job-wide output semantics."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands"
    },
    {
        "id": "actions-134",
        "domain": "Author and maintain actions",
        "prompt": "A JavaScript action's entry file imports npm packages. What must its released repository provide for callers?",
        "choices": [
            "Only package.json and the source entry file",
            "Runnable code with its dependencies bundled or included",
            "Only package-lock.json and a release description",
            "Only npm cache keys and a workflow badge"
        ],
        "correct": 1,
        "explanations": [
            "A manifest lists dependencies but does not make their modules available.",
            "The runner executes the action; it does not automatically install the action's npm dependencies.",
            "A lockfile describes versions and is not executable dependency code.",
            "Cache keys and badges cannot supply imported modules."
        ],
        "concept": "Distributable JavaScript dependencies",
        "hints": [
            "Distinguish a dependency manifest from installed executable code.",
            "Test the released files in a clean caller, not only in the author's checkout."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action"
    },
    {
        "id": "actions-135",
        "domain": "Author and maintain actions",
        "prompt": "Where must the listed action's metadata be located for a GitHub Marketplace publication?",
        "choices": [
            "In any subfolder of a private repository",
            "At the root of a public repository",
            "In the caller's .github/workflows directory",
            "In an organization secret's stored value"
        ],
        "correct": 1,
        "explanations": [
            "Private repositories cannot publish Marketplace listings; subfolder actions are not automatically listed.",
            "Marketplace lists the action represented by the public repository's root metadata.",
            "That directory stores caller workflow definitions rather than the published action's root metadata.",
            "A secret stores a value and is not a discoverable action repository."
        ],
        "concept": "Marketplace action layout",
        "hints": [
            "Separate private distribution from public discoverability.",
            "Repository layout affects which action gets a listing."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
    },
    {
        "id": "actions-136",
        "domain": "Author and maintain actions",
        "prompt": "Which account prerequisite can leave the release's Marketplace publication checkbox disabled?",
        "choices": [
            "The owner has not obtained a verified creator badge.",
            "The owner has not purchased an Enterprise Cloud subscription.",
            "The owner has not added a passing workflow status badge.",
            "The owner has not accepted the Marketplace Developer Agreement."
        ],
        "correct": 3,
        "explanations": [
            "A verified creator badge is not required to publish an action.",
            "Marketplace action publication does not require an Enterprise Cloud subscription.",
            "A status badge can help documentation but does not enable the publication checkbox.",
            "The owning account must accept the agreement before Marketplace publication is available."
        ],
        "concept": "Marketplace publisher agreement",
        "hints": [
            "Publication permissions and runtime capacity are separate concerns.",
            "Look for a requirement on the repository's owning account."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
    },
    {
        "id": "actions-137",
        "domain": "Author and maintain actions",
        "prompt": "An action removes a documented input and requires callers to change their workflows. Which semantic version change fits?",
        "choices": [
            "v2.6.1 to v3.0.0",
            "v2.6.1 to v2.6.2",
            "v2.6.1 to v2.7.0",
            "v2.6.1 to v2.6.1"
        ],
        "correct": 0,
        "explanations": [
            "A backward-incompatible public interface change calls for a new major version.",
            "A patch version communicates compatible fixes rather than this interface removal.",
            "A minor version communicates compatible additions, not required caller changes.",
            "Keeping the same release version conceals an incompatible change."
        ],
        "concept": "Action semantic version compatibility",
        "hints": [
            "Evaluate impact on existing callers, not the size of the code diff.",
            "A removed interface differs from an optional new capability."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions"
    },
    {
        "id": "actions-138",
        "domain": "Author and maintain actions",
        "prompt": "For a conventional mutable major-version tag, what does maintaining v2 let an action publisher offer?",
        "choices": [
            "An unchangeable identity for one exact source commit",
            "Automatic migration of every v1 input into a v3 input",
            "Compatible v2 updates without each caller editing its reference",
            "A guarantee that the host operating system never changes"
        ],
        "correct": 2,
        "explanations": [
            "A moving tag is not an exact immutable commit identity.",
            "Tags do not rewrite caller inputs or migrate incompatible interfaces.",
            "A maintained major tag can advance to compatible releases; immutable release rules need separate consideration.",
            "Action version references do not freeze hosted runner operating systems."
        ],
        "concept": "Maintained major release tags",
        "hints": [
            "Distinguish a compatibility channel from an exact code identity.",
            "The question explicitly scopes the tag as mutable."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions"
    },
    {
        "id": "actions-139",
        "domain": "Author and maintain actions",
        "prompt": "Which README section most directly lets callers configure and consume an action's interface?",
        "choices": [
            "Contributor avatars, issue counts, and repository stars",
            "Release dates, commit counts, and development branch names",
            "Build badges, sponsor logos, and contributor rankings",
            "Inputs, defaults, outputs, and a working usage example"
        ],
        "correct": 3,
        "explanations": [
            "Community indicators do not explain parameter names or output references.",
            "History information does not specify how callers should invoke the interface.",
            "Presentation and sponsorship information cannot replace interface documentation.",
            "These document the callable contract and show valid configuration."
        ],
        "concept": "Action consumer documentation",
        "hints": [
            "Ask what a caller must know to write a valid with block.",
            "Documentation should explain observable behavior, not only repository activity."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/release-and-maintain-actions"
    },
    {
        "id": "actions-140",
        "domain": "Author and maintain actions",
        "prompt": "A JavaScript action claims support for Linux, Windows, and macOS. Which release test directly checks that claim?",
        "choices": [
            "Run only the documentation spellchecker on each release.",
            "Check only that the release tag matches the README example.",
            "Invoke the packaged action on a matrix of those operating systems.",
            "Run the action only inside one Linux Docker container."
        ],
        "correct": 2,
        "explanations": [
            "Spelling checks do not execute platform-dependent behavior.",
            "Tag consistency does not verify operating-system support.",
            "A real caller invocation on each claimed platform exercises packaging and OS assumptions.",
            "A Linux container does not exercise native Windows and macOS behavior."
        ],
        "concept": "Cross-platform action release testing",
        "hints": [
            "Test the deliverable consumers run, not only source files in development.",
            "Filesystem paths and available commands can differ by platform."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/create-actions/create-a-javascript-action"
    },
    {
        "id": "actions-141",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An organization on GitHub Team must limit a runner pool to two private repositories. Which control sets that boundary?",
        "choices": [
            "Runner custom labels",
            "Runner group repository access",
            "Workflow display names",
            "Job timeout settings"
        ],
        "correct": 1,
        "explanations": [
            "Labels select eligible machines but are not repository access boundaries.",
            "A group can grant access only to selected repositories.",
            "Display names do not authorize runner access.",
            "Timeouts limit execution duration rather than eligible repositories."
        ],
        "concept": "Runner group repository authorization",
        "hints": [
            "Separate machine selection from permission to use a pool.",
            "Think about where an administrator expresses the allowed callers."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
    },
    {
        "id": "actions-142",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which runner feature describes a capability such as gpu for runs-on matching, without granting repository access?",
        "choices": [
            "A custom label",
            "A repository access policy",
            "An organization secret",
            "A deployment environment"
        ],
        "correct": 0,
        "explanations": [
            "Custom labels help route jobs to runners with declared characteristics.",
            "Access policies control authorization rather than advertise capabilities.",
            "Secrets store sensitive values rather than runner matching attributes.",
            "Environments group deployment settings and are not runner capability labels."
        ],
        "concept": "Runner capability labels",
        "hints": [
            "A scheduling attribute is not necessarily a security boundary.",
            "Identify whether the question concerns machine characteristics or access."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow"
    },
    {
        "id": "actions-143",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which runs-on mapping requires both membership in group build-pool and label linux-x64?",
        "choices": [
            "runs-on: {group: build-pool, labels: linux-x64}",
            "runs-on: {group: linux-x64, labels: build-pool}",
            "runs-on: [build-pool, linux-x64]",
            "runs-on: {labels: linux-x64}"
        ],
        "correct": 0,
        "explanations": [
            "The group and labels mapping applies both group eligibility and label matching.",
            "This swaps the requested group name and label.",
            "An array treats both values as labels rather than naming a runner group.",
            "The label-only mapping does not require the named group."
        ],
        "concept": "Runner group and label intersection",
        "hints": [
            "Read the keys as well as their values.",
            "An array of labels is not the same structure as a group selection."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow"
    },
    {
        "id": "actions-144",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "By default, which repositories can access self-hosted runners in a newly created organization runner group?",
        "choices": [
            "All public repositories that know a runner label",
            "Only repositories containing a Marketplace listing",
            "Private repositories allowed by the group's access policy",
            "All repositories in every organization on GitHub"
        ],
        "correct": 2,
        "explanations": [
            "Knowing a label does not bypass the public-repository access restriction.",
            "Marketplace publication is unrelated to runner group access.",
            "Group access defaults to private repositories, subject to the selected repository policy.",
            "An organization group is not globally accessible across GitHub."
        ],
        "concept": "Default public-repository runner restriction",
        "hints": [
            "Consider the risk of code originating in public forks.",
            "Default visibility restrictions still operate alongside selected-repository policies."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
    },
    {
        "id": "actions-145",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "At what registration level can a self-hosted runner be assigned to multiple organizations in one enterprise?",
        "choices": [
            "Repository level",
            "Enterprise level",
            "Environment level",
            "Workflow level"
        ],
        "correct": 1,
        "explanations": [
            "Repository-level runners are dedicated to a single repository.",
            "Enterprise-level runners can serve multiple organizations through enterprise administration.",
            "Environments do not form a self-hosted runner registration level.",
            "Workflows select runners; they do not own a cross-organization registration level."
        ],
        "concept": "Runner registration hierarchy",
        "hints": [
            "Match the administrative scope to the intended sharing scope.",
            "A workflow reference does not change the runner's registration owner."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
    },
    {
        "id": "actions-146",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An organization permits only one external action repository, vendor/audit. Which allow pattern is the narrowest repository-wide match?",
        "choices": [
            "vendor/*",
            "*/audit@*",
            "*/*",
            "vendor/audit@*"
        ],
        "correct": 3,
        "explanations": [
            "vendor/* also admits other repositories owned by vendor.",
            "*/audit@* admits repositories named audit under other owners.",
            "*/* admits arbitrary owners and repositories rather than this single source.",
            "This matches refs of vendor/audit without allowing every repository from that owner."
        ],
        "concept": "Narrow action source allow patterns",
        "hints": [
            "Expand each wildcard mentally before choosing a rule.",
            "This question is about allowed sources, not dependency pinning."
        ],
        "source": "https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization"
    },
    {
        "id": "actions-147",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An enterprise enforces an Actions policy on its organizations. Can an organization owner weaken that enforced restriction?",
        "choices": [
            "Yes; organization settings always override enterprise settings.",
            "Yes; renaming the workflow exempts it from the policy.",
            "No; the enterprise's overriding policy applies.",
            "No; only a runner label can override the restriction."
        ],
        "correct": 2,
        "explanations": [
            "The documented hierarchy allows enterprise policy to override organization settings.",
            "Display names do not create exceptions to Actions policy.",
            "Enforced enterprise policy limits the choices available at organization scope.",
            "Runner labels do not override action usage policy."
        ],
        "concept": "Enterprise policy inheritance",
        "hints": [
            "Follow the administrative hierarchy, not the workflow's location alone.",
            "Scheduling metadata cannot waive a governance restriction."
        ],
        "source": "https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization"
    },
    {
        "id": "actions-148",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An action source is blocked by organization policy. What can a repository administrator do in the repository's Actions settings?",
        "choices": [
            "Restrict permitted sources further, but not allow that blocked source.",
            "Allow the blocked source by selecting a different runner image.",
            "Allow the blocked source by increasing the job timeout.",
            "Replace organization policy with a repository workflow name."
        ],
        "correct": 0,
        "explanations": [
            "Repository policy can be more restrictive but cannot bypass an overriding organization policy.",
            "Runner image selection does not change allowed action sources.",
            "Timeout changes do not override organization access rules.",
            "Workflow names have no authority over organization policy."
        ],
        "concept": "Repository policy upper bounds",
        "hints": [
            "Distinguish local restrictions from permissions granted by a parent scope.",
            "Runtime settings and permitted source settings govern different things."
        ],
        "source": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository"
    },
    {
        "id": "actions-149",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "In a private action repository on GitHub.com, where does its administrator enable use by other private repositories in the same organization?",
        "choices": [
            "Settings > Branches > Branch protection rules",
            "Settings > Pages > Build and deployment",
            "Settings > Webhooks > Add webhook",
            "Settings > Actions > General > Access"
        ],
        "correct": 3,
        "explanations": [
            "Branch protection governs changes to branches, not private action distribution.",
            "Pages settings govern site publication rather than action download access.",
            "Webhooks send event notifications and do not grant action sharing access.",
            "The source repository's Actions Access setting controls private action sharing."
        ],
        "concept": "Private action distribution setting",
        "hints": [
            "The source repository owns the sharing decision.",
            "Do not confuse action access with website publishing or branch rules."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization"
    },
    {
        "id": "actions-150",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Sharing a private action with another repository automatically gives that repository's collaborators which direct access?",
        "choices": [
            "Write access to the source repository's default branch",
            "No new permission to browse the source repository's Code tab",
            "Administrator access to the source repository's settings",
            "Permission to manage the source repository's collaborators"
        ],
        "correct": 1,
        "explanations": [
            "Sharing an action does not grant branch write permission.",
            "Action sharing enables runner download, not direct user membership; logs can still expose information.",
            "Action consumption does not grant repository administration.",
            "Collaborator management is not granted by the Actions sharing setting."
        ],
        "concept": "Action access versus repository membership",
        "hints": [
            "Separate machine access for execution from a user's repository role.",
            "Lack of direct access does not imply absence of indirect information exposure."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization"
    },
    {
        "id": "actions-151",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "How does GitHub authorize a runner to download an action from an authorized shared private repository?",
        "choices": [
            "The repository owner's browser session cookie",
            "A scoped installation token with read access to that repository",
            "An organization-wide administrator password in action.yml",
            "Anonymous cloning with full write access to private code"
        ],
        "correct": 1,
        "explanations": [
            "Runner downloads do not reuse the owner's browser cookie.",
            "GitHub passes a limited installation token to permit the runner's download.",
            "Sharing does not require embedding an administrator password in metadata.",
            "Private sharing is authenticated and does not provide anonymous write access."
        ],
        "concept": "Shared action download authorization",
        "hints": [
            "Consider the credential's principal, resource scope, and purpose.",
            "A download operation need not grant repository administration."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization"
    },
    {
        "id": "actions-152",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Why should maintainers review log output before sharing a private action with repositories that have outside collaborators?",
        "choices": [
            "Sharing silently makes the source repository publicly searchable.",
            "Outside collaborators automatically become enterprise owners.",
            "The action can no longer produce any logs after being shared.",
            "Those collaborators may see the action's output in caller workflow logs."
        ],
        "correct": 3,
        "explanations": [
            "Sharing for Actions does not change repository visibility to public.",
            "Action sharing grants no enterprise ownership role.",
            "Shared actions still produce logs in their caller runs.",
            "The documented indirect-access warning includes logs visible in consuming repositories."
        ],
        "concept": "Indirect exposure through shared action logs",
        "hints": [
            "Trace information to the people who can read the consuming run.",
            "Execution access and repository visibility are separate settings."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/share-with-your-organization"
    },
    {
        "id": "actions-153",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An enterprise wants many repositories to invoke a centrally versioned multi-job build definition. Which distribution model fits?",
        "choices": [
            "Reusable workflow",
            "Starter workflow",
            "Composite action",
            "Copied workflow snippet"
        ],
        "correct": 0,
        "explanations": [
            "Reusable workflows centralize job definitions behind a referenced version.",
            "Starter workflows become independent copies after creation.",
            "Composite actions encapsulate steps rather than a multi-job workflow definition.",
            "Pasted snippets do not retain a callable centrally versioned definition."
        ],
        "concept": "Centralized workflow distribution",
        "hints": [
            "Compare a live version reference with a copied starting point.",
            "The unit to distribute includes jobs, not just steps."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "actions-154",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "In an organization's .github repository, which directory stores organization workflow templates?",
        "choices": [
            ".github/actions",
            ".github/workflows",
            "workflow-templates",
            "runner-images"
        ],
        "correct": 2,
        "explanations": [
            ".github/actions is a common local action location, not the template discovery directory.",
            ".github/workflows holds executable workflow definitions, not the organization template catalog.",
            "Organization templates and their properties files live in workflow-templates.",
            "runner-images is not the organization's workflow template directory."
        ],
        "concept": "Organization template catalog location",
        "hints": [
            "Templates are offered for creation rather than executed from the catalog.",
            "Check the path within the special organization repository."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates"
    },
    {
        "id": "actions-155",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "After a repository creates a workflow from an organization starter, what happens when the original starter is edited?",
        "choices": [
            "Every created workflow immediately receives the edit.",
            "The created workflow automatically becomes a reusable workflow call.",
            "The copy is disabled until the starter's owner republishes it.",
            "The created workflow remains an independent copy."
        ],
        "correct": 3,
        "explanations": [
            "There is no automatic update relationship between the template and its copies.",
            "Creating from a template does not insert a later workflow_call dependency.",
            "Editing a template does not disable workflows previously created from it.",
            "A starter supplies a scaffold; later template changes do not synchronize existing copies."
        ],
        "concept": "Starter workflow independence",
        "hints": [
            "Determine whether the consumer stored a copy or a reference.",
            "A shared creation experience is not necessarily ongoing central governance."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates"
    },
    {
        "id": "actions-156",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "In GitHub Enterprise Cloud, which runner group policy can limit use to approved workflow files and refs, beyond repository access?",
        "choices": [
            "Custom capability labels",
            "Workflow log retention",
            "Selected workflows access",
            "Artifact compression level"
        ],
        "correct": 2,
        "explanations": [
            "Labels match runners but do not authorize workflow file identities.",
            "Retention controls stored logs, not which workflows may use a runner group.",
            "Workflow restrictions can name approved workflow paths and versions for the group.",
            "Compression changes artifact packaging, not runner group eligibility."
        ],
        "concept": "Runner group workflow authorization",
        "hints": [
            "A repository can contain both approved and unapproved workflow definitions.",
            "Consider the difference between selecting hardware and authorizing executable definitions."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
    },
    {
        "id": "actions-157",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which self-hosted runner registration is dedicated to one repository rather than shared across organization repositories?",
        "choices": [
            "Organization-level registration",
            "Repository-level registration",
            "Enterprise-level registration",
            "A workflow run name"
        ],
        "correct": 1,
        "explanations": [
            "Organization-level runners may serve multiple repositories under access policies.",
            "Repository-level runners serve the repository where they are registered.",
            "Enterprise-level runners can span organizations and are not inherently single-repository.",
            "A run name labels an execution and does not register a runner."
        ],
        "concept": "Repository runner ownership scope",
        "hints": [
            "Registration scope and runs-on selection are different decisions.",
            "Consider which administrative object owns the runner."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
    },
    {
        "id": "actions-158",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "After extracting the Linux self-hosted runner application, which script registers it with GitHub using the supplied URL and registration token?",
        "choices": [
            "./config.sh",
            "./run.sh",
            "./svc.sh",
            "./env.sh"
        ],
        "correct": 0,
        "explanations": [
            "config.sh configures the runner's GitHub registration before normal execution.",
            "run.sh starts the configured runner listener rather than registering a new runner.",
            "svc.sh manages service installation and execution after runner configuration.",
            "env.sh is not the registration command shown in the runner setup instructions."
        ],
        "concept": "Linux runner registration script",
        "hints": [
            "Separate registration, foreground execution, and service management.",
            "The token associates the application with an administrative scope."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners"
    },
    {
        "id": "actions-159",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which command installs an already configured Linux self-hosted runner as a service?",
        "choices": [
            "sudo ./svc.sh install",
            "./config.sh remove",
            "./run.sh",
            "sudo ./svc.sh status"
        ],
        "correct": 0,
        "explanations": [
            "svc.sh install installs the service; it can then be started with svc.sh start.",
            "config.sh remove unregisters the runner rather than installing a service.",
            "run.sh runs the application interactively rather than installing a service.",
            "svc.sh status inspects the service state without installing it."
        ],
        "concept": "Linux runner service installation",
        "hints": [
            "A registered application does not automatically imply a running system service.",
            "Compare installation verbs with inspection and execution verbs."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/configure-the-application"
    },
    {
        "id": "actions-160",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "For a self-hosted runner connecting to GitHub.com, which basic network direction and protocol are required?",
        "choices": [
            "Inbound HTTPS from GitHub to the runner listener",
            "Outbound unencrypted HTTP to GitHub job services",
            "Outbound HTTPS to required GitHub services",
            "Inbound SSH from GitHub to the runner host"
        ],
        "correct": 2,
        "explanations": [
            "The runner initiates the connection; GitHub does not require this inbound listener path.",
            "The documented communication protocol is encrypted HTTPS, not unencrypted HTTP.",
            "The runner initiates HTTPS connections; required destinations depend on features used.",
            "GitHub does not deliver jobs through an inbound SSH session to the host."
        ],
        "concept": "Self-hosted runner network initiation",
        "hints": [
            "Identify which process initiates the connection.",
            "Basic connectivity and feature-specific download destinations are both relevant."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "actions-161",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "On Linux, which runner command checks access to required GitHub network services? URL and PAT are placeholders.",
        "choices": [
            "./config.sh --remove --url URL --pat PAT",
            "./config.sh --check --url URL --pat PAT",
            "./svc.sh status",
            "./run.sh --version"
        ],
        "correct": 1,
        "explanations": [
            "Removing registration is not a network diagnostic.",
            "The documented connectivity check reports PASS or FAIL for required services.",
            "Service status does not test all required GitHub network endpoints.",
            "A version query does not perform the documented connectivity checks."
        ],
        "concept": "Runner connectivity diagnostic command",
        "hints": [
            "A listener can be installed but unable to reach a required service.",
            "Choose an active network test rather than a local process inspection."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "actions-162",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which files record the self-hosted runner application's startup and listener activity?",
        "choices": [
            "_diag/Worker_*.log",
            "_work/*/README.md",
            ".github/workflows/*.yml",
            "_diag/Runner_*.log"
        ],
        "correct": 3,
        "explanations": [
            "Worker_ logs contain detailed execution information for individual jobs.",
            "Checked-out README files are project documentation, not listener diagnostics.",
            "Workflow YAML configures jobs rather than records runner startup activity.",
            "Runner_ logs describe the runner application's own activity."
        ],
        "concept": "Runner application diagnostic logs",
        "hints": [
            "Separate the long-lived listener from a worker processing a job.",
            "Configuration files and diagnostic output serve different purposes."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "actions-163",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which local self-hosted runner logs contain detailed information about an individual job's execution?",
        "choices": [
            "_diag/Runner_*.log",
            ".service",
            "_diag/Worker_*.log",
            "action.yml"
        ],
        "correct": 2,
        "explanations": [
            "Runner_ logs focus on application/listener activity rather than detailed job execution.",
            ".service identifies service configuration rather than a job execution trace.",
            "Worker_ logs are generated for jobs processed by the runner.",
            "action.yml defines action metadata instead of recording job diagnostics."
        ],
        "concept": "Runner job worker diagnostics",
        "hints": [
            "Choose the log producer closest to the failing execution.",
            "A service's existence does not explain an individual command failure."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "actions-164",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which maintenance remains the operator's responsibility when the self-hosted runner application updates automatically?",
        "choices": [
            "Operating system and installed tool updates",
            "Only the runner application's automatic updates",
            "Only new workflow YAML, with no machine patching",
            "Only container tags, with no host OS patching"
        ],
        "correct": 0,
        "explanations": [
            "Runner application updates do not patch the host OS or unrelated tools.",
            "The question already gives application auto-updates; these do not maintain the host platform.",
            "Changing workflow definitions does not patch the execution machine.",
            "Updated containers do not eliminate host operating-system maintenance."
        ],
        "concept": "Self-hosted platform maintenance ownership",
        "hints": [
            "An agent application and its host operating system have separate lifecycles.",
            "Consider which infrastructure the organization actually administers."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
    },
    {
        "id": "actions-165",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "What does registering a self-hosted runner with --ephemeral change?",
        "choices": [
            "GitHub automatically deletes every file on its host disk.",
            "GitHub guarantees it can run only trusted source code.",
            "GitHub installs every required operating system patch.",
            "GitHub deregisters it after it processes one job."
        ],
        "correct": 3,
        "explanations": [
            "Deregistration is not disk sanitization or machine destruction.",
            "Ephemeral mode does not turn untrusted code into trusted code.",
            "OS patching remains an operator task on self-hosted infrastructure.",
            "Ephemeral registration is one-job registration; host cleanup still needs orchestration."
        ],
        "concept": "Ephemeral runner registration semantics",
        "hints": [
            "Differentiate GitHub's registration record from the underlying machine.",
            "A job-count lifecycle does not establish a trust boundary by itself."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "actions-166",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An autoscaler destroys ephemeral runner machines after each job. Where should runner application diagnostic logs be retained?",
        "choices": [
            "Only in the machine's local _diag directory",
            "In external log storage before the machine is destroyed",
            "Only in the image used to create the next machine",
            "Only in GitHub's automatically uploaded workflow logs"
        ],
        "correct": 1,
        "explanations": [
            "Local diagnostic files disappear when the machine storage is destroyed.",
            "GitHub recommends forwarding and preserving ephemeral runner logs externally.",
            "A base image does not automatically capture logs from later job executions.",
            "Workflow logs do not automatically preserve every runner application diagnostic file."
        ],
        "concept": "Ephemeral runner diagnostic retention",
        "hints": [
            "The evidence must outlive the resource being investigated.",
            "Workflow logs and runner application logs are distinct diagnostic streams."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "actions-167",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Why is a persistent self-hosted runner risky for pull requests from forks of a public repository?",
        "choices": [
            "A normal checkout guarantees host cleanup between jobs.",
            "Untrusted jobs can leave changes that affect later jobs.",
            "Runner labels automatically isolate each job in a new VM.",
            "A read-only API token prevents writes to the host filesystem."
        ],
        "correct": 1,
        "explanations": [
            "Checkout cleanup is not whole-host isolation or process sanitization.",
            "Persistent machines may retain malicious processes or modifications between jobs.",
            "Labels route jobs and do not provide VM isolation.",
            "API permissions do not determine the runner process's local filesystem privileges."
        ],
        "concept": "Persistent runner cross-job trust",
        "hints": [
            "Think about what survives when a job process exits.",
            "A scheduling feature is not equivalent to a disposable isolation boundary."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
    },
    {
        "id": "actions-168",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An operator adds the label cuda to a self-hosted runner. What does that label itself do?",
        "choices": [
            "Installs a matching CUDA toolkit on the host",
            "Verifies a working GPU driver on the host",
            "Changes the host architecture to match the label",
            "Makes the runner match jobs requesting that label"
        ],
        "correct": 3,
        "explanations": [
            "Assigning a custom label does not install software.",
            "GitHub does not validate custom labels against hardware or driver availability.",
            "A metadata label cannot change machine architecture.",
            "Custom labels are routing metadata; operators must provision the declared capability."
        ],
        "concept": "Declared versus provisioned runner capabilities",
        "hints": [
            "Distinguish metadata assignment from machine configuration.",
            "The scheduler uses labels, not a software installation audit."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow"
    },
    {
        "id": "actions-169",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "In the self-hosted runner list, what does Idle mean?",
        "choices": [
            "Connected and ready to execute jobs",
            "Currently executing a workflow job",
            "Disconnected from GitHub's runner service",
            "Registered but prohibited from receiving jobs"
        ],
        "correct": 0,
        "explanations": [
            "Idle indicates an online runner ready for work.",
            "Active indicates that a runner is executing a job.",
            "Offline indicates lost or absent connectivity to GitHub.",
            "Idle is an activity state, not an administrative denial state."
        ],
        "concept": "Runner activity state interpretation",
        "hints": [
            "Read status as a connection and activity signal.",
            "Availability does not override repository access policies."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "actions-170",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which GitHub-supported approach manages autoscaling self-hosted runners on Kubernetes?",
        "choices": [
            "A runner group's repository access policy",
            "The runner application's built-in updater",
            "Actions Runner Controller (ARC)",
            "A job's strategy.max-parallel setting"
        ],
        "correct": 2,
        "explanations": [
            "A group access policy authorizes use but does not create Kubernetes runner pods.",
            "The updater maintains runner application versions, not cluster capacity.",
            "ARC orchestrates runner scaling on Kubernetes.",
            "max-parallel limits matrix execution but does not provision Kubernetes infrastructure."
        ],
        "concept": "Kubernetes runner autoscaling",
        "hints": [
            "The solution needs to create and retire execution capacity.",
            "Distinguish infrastructure orchestration from repository configuration."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "actions-171",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which statement should an enterprise include when estimating self-hosted runner costs?",
        "choices": [
            "Included hosted minutes reimburse the self-hosted machine bill.",
            "Runner application updates also cover host administration costs.",
            "Ephemeral registration transfers machine costs to GitHub.",
            "The organization pays for its machines, operations, and maintenance."
        ],
        "correct": 3,
        "explanations": [
            "Hosted usage allowances do not reimburse an organization's infrastructure invoices.",
            "GitHub does not administer the organization's self-hosted OS merely because it registered a runner.",
            "Ephemeral registration changes runner lifecycle rather than infrastructure ownership.",
            "Self-hosted infrastructure and its upkeep remain the organization's responsibility."
        ],
        "concept": "Self-hosted infrastructure cost ownership",
        "hints": [
            "Separate service billing from the cost of operating execution infrastructure.",
            "Avoid interpreting a product price statement as free hardware."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
    },
    {
        "id": "actions-172",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "For standard GitHub-hosted Linux VM runners, what environment does a new job normally receive?",
        "choices": [
            "The same VM shared by all jobs in the workflow",
            "A permanent VM assigned to that workflow file",
            "A newly provisioned VM for that job",
            "The previous run's VM whenever a dependency cache hits"
        ],
        "correct": 2,
        "explanations": [
            "Separate standard VM jobs do not share one workflow-wide machine.",
            "A workflow filename does not allocate a persistent hosted VM.",
            "Standard hosted VM jobs get fresh instances; don't rely on previous local job state.",
            "A cache restores selected files; it does not restore the previous VM instance."
        ],
        "concept": "Hosted VM job lifecycle",
        "hints": [
            "Execution environments and explicitly uploaded artifacts have different lifetimes.",
            "The question scopes VM runners rather than every hosted runner implementation."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/github-hosted-runners"
    },
    {
        "id": "actions-173",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Where can an administrator identify the exact hosted runner image and installed software used by a particular job?",
        "choices": [
            "The workflow's runs-on label without consulting execution logs",
            "The job's Set up job log and its image software link",
            "The newest image manifest without checking the job's image version",
            "The preceding run's software list without checking this job"
        ],
        "correct": 1,
        "explanations": [
            "A label can resolve to changing image builds, so it is insufficient for exact versions.",
            "The setup log identifies the actual image version and links to its included software.",
            "The newest published image may differ from the image used by this job.",
            "Separate runs can use different image builds even with unchanged YAML."
        ],
        "concept": "Hosted image software evidence",
        "hints": [
            "Prefer evidence recorded for that execution over assumptions about a label.",
            "Image contents can change between runs of the same workflow."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/github-hosted-runners"
    },
    {
        "id": "actions-174",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which statement correctly describes a GitHub-hosted label ending in -latest?",
        "choices": [
            "It can migrate to a newer supported image over time.",
            "It guarantees the operating-system major version never changes.",
            "It always means the OS vendor's newest release on launch day.",
            "It guarantees every preinstalled tool keeps one fixed version."
        ],
        "correct": 0,
        "explanations": [
            "latest labels follow GitHub's supported image selection and migrations.",
            "A latest label is not a permanent major-version lock.",
            "GitHub's latest image is not necessarily the vendor's newest OS release.",
            "Hosted images receive software updates; this label does not freeze tool versions."
        ],
        "concept": "Moving hosted image labels",
        "hints": [
            "Distinguish a service-maintained label from a frozen environment.",
            "Check image migration notices when a previously working job changes behavior."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/github-hosted-runners"
    },
    {
        "id": "actions-175",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "A hosted job requires a specific supported runtime version not guaranteed by the image defaults. What should the workflow do?",
        "choices": [
            "Install/select it explicitly with an appropriate setup action.",
            "Assume the latest image always includes exactly that version.",
            "Set a version environment variable without invoking an installer.",
            "Commit a dependency lockfile without selecting the runtime."
        ],
        "correct": 0,
        "explanations": [
            "Setup actions make runtime selection explicit rather than depending on changing defaults.",
            "Image defaults are updated and cannot guarantee an arbitrary requested version.",
            "A variable alone does not install or activate the requested runtime version.",
            "A package dependency lockfile does not provision the runtime executable."
        ],
        "concept": "Explicit hosted runtime provisioning",
        "hints": [
            "A requirement must affect executable setup, not only documentation.",
            "Preinstalled software is a starting point, not the complete build contract."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/github-hosted-runners"
    },
    {
        "id": "actions-176",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "On GitHub Enterprise Cloud, which managed runner option can provide static public IP addresses for Linux or Windows firewall allowlisting?",
        "choices": [
            "Standard runners selected only by an ubuntu-latest label",
            "Any runner selected only by a custom job name",
            "Larger runners configured with static IP addresses",
            "macOS larger runners using the Linux IP setting"
        ],
        "correct": 2,
        "explanations": [
            "A standard hosted image label does not allocate a dedicated static IP range.",
            "A job's name has no network allocation effect.",
            "Static IP support is a larger-runner capability on supported Linux and Windows configurations.",
            "The documented static IP capability does not extend to macOS larger runners."
        ],
        "concept": "Hosted static egress addresses",
        "hints": [
            "A shared image label does not imply a dedicated network identity.",
            "Check the OS-specific capability, not just runner size."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/manage-larger-runners"
    },
    {
        "id": "actions-177",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An eligible GitHub Team or Enterprise Cloud organization needs Linux/Windows hosted runners to reach an Azure private network. Which supported feature should it evaluate?",
        "choices": [
            "Static public egress IPs without a private network connection",
            "Azure private networking for larger runners",
            "A runner group access policy without network configuration",
            "A job service container with a local Docker bridge network"
        ],
        "correct": 1,
        "explanations": [
            "Static public addresses alone do not provide a route to private Azure endpoints.",
            "Supported larger runners can integrate with an Azure VNET through configured private networking.",
            "Group access authorizes runner use but does not establish VNET connectivity.",
            "A local container bridge is not an Azure VNET integration."
        ],
        "concept": "Azure private networking on hosted runners",
        "hints": [
            "Network reachability requires an infrastructure integration, not only a configuration value.",
            "Keep GitHub.com plan and operating-system support in scope."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/private-networking"
    },
    {
        "id": "actions-178",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which supported mechanism preinstalls an organization's toolchain into the image used by eligible GitHub-hosted larger runners?",
        "choices": [
            "Dependency cache archives",
            "Runner capability labels",
            "Job container selection",
            "Custom runner images"
        ],
        "correct": 3,
        "explanations": [
            "Caches restore selected files during jobs rather than define the runner's base image.",
            "Capability labels describe runners without installing software into an image.",
            "A job container supplies a container environment rather than a custom runner VM image.",
            "Custom images can contain tools and dependencies before a runner job begins."
        ],
        "concept": "Hosted custom image provisioning",
        "hints": [
            "Separate image preparation from runtime labels and stored configuration.",
            "The feature requires supported platforms, permissions, and organization policy."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-custom-images"
    },
    {
        "id": "actions-179",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "A larger runner is enabled for image generation. Which job keyword requests creation of a custom image after a successful build job?",
        "choices": [
            "services",
            "container",
            "snapshot",
            "environment"
        ],
        "correct": 2,
        "explanations": [
            "services starts service containers rather than publishing a runner image.",
            "container selects a container in which to execute job steps.",
            "snapshot specifies the image to generate from an image-generation runner job.",
            "environment selects a deployment environment instead of generating an image."
        ],
        "concept": "Custom image generation keyword",
        "hints": [
            "Running inside an image and creating a runner image are different operations.",
            "The job must use an appropriately configured image-generation runner."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/larger-runners/use-custom-images"
    },
    {
        "id": "actions-180",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An organization secret should be available to only api and worker. Which organization-secret access policy fits?",
        "choices": [
            "Selected repositories: api, worker",
            "All repositories in the organization",
            "All private repositories in the organization",
            "All repositories with the same workflow filename"
        ],
        "correct": 0,
        "explanations": [
            "Selected-repository access grants only the explicitly chosen repositories the organization secret.",
            "Organization-wide access is broader than the two named repositories.",
            "Private-only access may include other private repositories beyond these two.",
            "Organization-secret policies select repositories, not matching workflow filenames."
        ],
        "concept": "Organization secret repository selection",
        "hints": [
            "Use the smallest access set that matches the actual consumers.",
            "Visibility categories and explicit repository lists express different boundaries."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
    },
    {
        "id": "actions-181",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "The same secret name exists at organization, repository, and environment levels. For a job using that environment, which secret takes precedence?",
        "choices": [
            "The repository secret",
            "The organization secret",
            "The most recently created secret",
            "The environment secret"
        ],
        "correct": 3,
        "explanations": [
            "Repository scope loses to an applicable environment secret with the same name.",
            "Organization scope does not override more specific repository or environment values.",
            "Precedence depends on scope rather than creation time.",
            "The lowest applicable scope wins; the environment is the most specific of these scopes."
        ],
        "concept": "Environment secret precedence",
        "hints": [
            "Identify every scope that applies to this particular job.",
            "Name collisions are resolved by hierarchy, not timestamp."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secrets"
    },
    {
        "id": "actions-182",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "A job references no environment. Its repository and organization both define API_KEY. Which value is read through secrets.API_KEY?",
        "choices": [
            "The organization value",
            "The repository value",
            "Both values concatenated",
            "An error instead of either value"
        ],
        "correct": 1,
        "explanations": [
            "The broader organization scope does not override the repository value.",
            "Repository secrets override organization secrets of the same name.",
            "GitHub chooses by precedence; it does not concatenate colliding secrets.",
            "A same-name secret at different scopes is supported and has defined precedence."
        ],
        "concept": "Repository secret override",
        "hints": [
            "Exclude scopes the job does not reference.",
            "Shared defaults and local configuration can intentionally use the same name."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secrets"
    },
    {
        "id": "actions-183",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "When does GitHub read an environment secret for a job referencing that environment?",
        "choices": [
            "At workflow queue time",
            "At job startup",
            "At workflow file commit",
            "At repository creation"
        ],
        "correct": 1,
        "explanations": [
            "Queue time is when organization and repository secrets are read.",
            "Environment secrets are read at job start rather than workflow queue time.",
            "Committing YAML does not capture secret values into the workflow file.",
            "Secret values are not frozen at repository creation."
        ],
        "concept": "Secret read timing by scope",
        "hints": [
            "Run queuing and individual job startup are distinct events.",
            "A workflow run may contain jobs that begin much later."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secrets"
    },
    {
        "id": "actions-184",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which storage is appropriate for a non-sensitive organization-wide setting such as a package mirror hostname?",
        "choices": [
            "A single workflow's env block",
            "A single step's output value",
            "A local runner process variable",
            "An organization configuration variable"
        ],
        "correct": 3,
        "explanations": [
            "One workflow's env block does not centrally expose the setting to other repositories.",
            "Step outputs convey run results rather than maintain shared organization configuration.",
            "A process variable on one machine is not a centrally scoped organization variable.",
            "Configuration variables store reusable non-sensitive settings and are read through vars."
        ],
        "concept": "Non-sensitive shared configuration",
        "hints": [
            "Choose storage by both sensitivity and administrative scope.",
            "Runtime scratch state is different from centrally managed configuration."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables"
    },
    {
        "id": "actions-185",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "The organization and repository both define MIRROR as a configuration variable. No environment-level configuration variable applies. Which vars.MIRROR value wins?",
        "choices": [
            "The repository's configuration variable",
            "The organization's configuration variable",
            "The most recently modified variable",
            "Both variable values concatenated"
        ],
        "correct": 0,
        "explanations": [
            "Repository configuration variables override organization configuration variables of the same name.",
            "The organization value supplies a broader default and loses to repository scope.",
            "Modification time does not replace the documented scope precedence.",
            "Name collisions select one scoped value rather than concatenate both values."
        ],
        "concept": "Configuration variable scope precedence",
        "hints": [
            "Separate scope hierarchy from the history of edits.",
            "This is the vars context, not shell variable expansion."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/variables"
    },
    {
        "id": "actions-186",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "When do environment-level configuration variables become available to a job?",
        "choices": [
            "Before workflow processing begins on GitHub",
            "Only after the entire workflow has completed",
            "After the job starts executing on the runner",
            "Only after a step writes them to GITHUB_OUTPUT"
        ],
        "correct": 2,
        "explanations": [
            "They are not available during early workflow processing before the job runs.",
            "They are usable by the running job, not only after workflow completion.",
            "Environment-level configuration variables arrive during runner execution, not every early workflow decision.",
            "Configuration variable availability does not require publishing step outputs."
        ],
        "concept": "Environment configuration availability timing",
        "hints": [
            "Separate server-side workflow preparation from runner-side execution.",
            "A scope's precedence does not make its values available in every processing phase."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/variables"
    },
    {
        "id": "actions-187",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which expression reads a repository configuration variable named PACKAGE_MIRROR?",
        "choices": [
            "${{ secrets.PACKAGE_MIRROR }}",
            "${{ inputs.PACKAGE_MIRROR }}",
            "${{ github.PACKAGE_MIRROR }}",
            "${{ vars.PACKAGE_MIRROR }}"
        ],
        "correct": 3,
        "explanations": [
            "The secrets context reads encrypted secrets, a separate store.",
            "The inputs context reads invocation parameters rather than repository configuration variables.",
            "The github context exposes run metadata, not arbitrary configuration variables.",
            "The vars context exposes configuration variables."
        ],
        "concept": "Configuration variable context",
        "hints": [
            "Identify the value's storage location before selecting a context.",
            "Equal names in different stores do not make those stores interchangeable."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables"
    },
    {
        "id": "actions-188",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "An organization owner uses authenticated GitHub CLI. Which command creates an organization secret restricted to api and worker? Enter its value only at the prompt.",
        "choices": [
            "gh secret set DEPLOY_KEY --org octo-org --visibility all",
            "gh secret set DEPLOY_KEY --repo octo-org/api",
            "gh secret set DEPLOY_KEY --org octo-org --repos api,worker",
            "gh variable set DEPLOY_KEY --org octo-org --repos api,worker"
        ],
        "correct": 2,
        "explanations": [
            "--visibility all grants broader repository access than requested.",
            "--repo creates a repository secret rather than a shared organization secret.",
            "--org selects organization scope and --repos sets the selected repository list.",
            "gh variable stores a configuration variable rather than an encrypted secret."
        ],
        "concept": "CLI selected-repository organization secret",
        "hints": [
            "Inspect both the subcommand and the access-selection flags.",
            "Do not place a real credential in a reusable command example."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
    },
    {
        "id": "actions-189",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "A repository administrator uses authenticated GitHub CLI. Which command sets DEPLOY_KEY in staging for octo-org/api? Its value will be entered interactively.",
        "choices": [
            "gh secret set DEPLOY_KEY --repo octo-org/api",
            "gh secret set DEPLOY_KEY --repo octo-org/api --env staging",
            "gh secret set DEPLOY_KEY --org octo-org --visibility private",
            "gh variable set DEPLOY_KEY --repo octo-org/api --env staging"
        ],
        "correct": 1,
        "explanations": [
            "Without --env, the command sets a repository-level secret.",
            "--env staging targets the environment secret rather than the repository-level store.",
            "The organization flag targets a different administrative scope.",
            "The variable subcommand does not create an encrypted secret."
        ],
        "concept": "CLI environment secret targeting",
        "hints": [
            "Repository identity and environment identity are both required here.",
            "Scope flags change where the value is stored."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
    },
    {
        "id": "actions-190",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "A repository administrator uses authenticated GitHub CLI. Which command sets non-sensitive REGION=west as a configuration variable in staging for octo-org/api?",
        "choices": [
            "gh variable set REGION --repo octo-org/api --env staging --body west",
            "gh variable set REGION --repo octo-org/api --body west",
            "gh secret set REGION --repo octo-org/api --env staging --body west",
            "gh variable list --repo octo-org/api --env staging"
        ],
        "correct": 0,
        "explanations": [
            "variable set with --env writes a configuration variable at environment scope.",
            "Omitting --env writes at repository scope rather than staging.",
            "secret set targets the encrypted secrets store rather than configuration variables.",
            "variable list reads the catalog and does not set a value."
        ],
        "concept": "CLI environment configuration variable",
        "hints": [
            "Choose the storage category before checking the scope flags.",
            "A read operation cannot create or update the requested value."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables"
    },
    {
        "id": "actions-191",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Before encrypting a repository Actions secret for the REST API, which resource must a client fetch?",
        "choices": [
            "GET /repos/{owner}/{repo}/actions/secrets/public-key",
            "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}",
            "GET /repos/{owner}/{repo}/actions/variables/{name}",
            "GET /repos/{owner}/{repo}/actions/runners"
        ],
        "correct": 0,
        "explanations": [
            "The public-key endpoint returns the key and key_id used for secret encryption.",
            "Secret metadata does not supply the repository encryption public key.",
            "A configuration variable is unrelated to the Actions secret encryption key.",
            "Runner listings describe machines rather than secret encryption keys."
        ],
        "concept": "REST secret public key retrieval",
        "hints": [
            "Secret creation uses client-side encryption, not a plaintext value field.",
            "Choose the resource providing encryption material rather than ordinary configuration data."
        ],
        "source": "https://docs.github.com/en/rest/actions/secrets"
    },
    {
        "id": "actions-192",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which REST request creates or updates a repository Actions secret using encrypted_value and key_id?",
        "choices": [
            "POST /repos/{owner}/{repo}/actions/secrets/{secret_name}",
            "PATCH /repos/{owner}/{repo}/actions/secrets/{secret_name}",
            "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}",
            "GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"
        ],
        "correct": 2,
        "explanations": [
            "POST is not the documented method for this named secret endpoint.",
            "PATCH is not the repository secret create-or-update method.",
            "The documented create-or-update repository secret endpoint uses PUT.",
            "GET reads metadata and cannot write the encrypted secret."
        ],
        "concept": "REST encrypted secret upsert",
        "hints": [
            "Distinguish a named resource update from a collection create operation.",
            "The payload must use the public key for the same secret scope."
        ],
        "source": "https://docs.github.com/en/rest/actions/secrets"
    },
    {
        "id": "actions-193",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "What does GET /repos/{owner}/{repo}/actions/secrets/{secret_name} return for an existing repository secret?",
        "choices": [
            "The secret's decrypted plaintext value",
            "Metadata such as the secret's name and timestamps",
            "The secret's reusable encrypted_value payload",
            "The repository's private decryption key"
        ],
        "correct": 1,
        "explanations": [
            "Secret values cannot be retrieved as plaintext through this endpoint.",
            "The read endpoint exposes metadata, not the stored secret value.",
            "The response does not return the submitted encrypted secret payload.",
            "GitHub does not expose the repository's private decryption key here."
        ],
        "concept": "Secret metadata-only read API",
        "hints": [
            "Distinguish discovering a secret's existence from reading its contents.",
            "Write payload fields need not be returned by read operations."
        ],
        "source": "https://docs.github.com/en/rest/actions/secrets"
    },
    {
        "id": "actions-194",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which REST method and path create a repository configuration variable from a name and plaintext value?",
        "choices": [
            "PUT /repos/{owner}/{repo}/actions/variables/{name}",
            "GET /repos/{owner}/{repo}/actions/variables",
            "POST /repos/{owner}/{repo}/actions/secrets",
            "POST /repos/{owner}/{repo}/actions/variables"
        ],
        "correct": 3,
        "explanations": [
            "The variable API does not use this PUT path to create variables.",
            "GET lists variables rather than creating one.",
            "Secret storage uses a different encrypted create-or-update interface.",
            "Repository variable creation uses POST to the variables collection."
        ],
        "concept": "REST configuration variable creation",
        "hints": [
            "Secrets and variables have different payloads and endpoint methods.",
            "Check both the resource family and whether the operation reads or writes."
        ],
        "source": "https://docs.github.com/en/rest/actions/variables"
    },
    {
        "id": "actions-195",
        "domain": "Manage GitHub Actions for the enterprise",
        "prompt": "Which REST request changes an existing repository configuration variable's value?",
        "choices": [
            "GET /repos/{owner}/{repo}/actions/variables/{name}",
            "DELETE /repos/{owner}/{repo}/actions/variables/{name}",
            "PATCH /repos/{owner}/{repo}/actions/variables/{name}",
            "PUT /repos/{owner}/{repo}/actions/variables/{name}"
        ],
        "correct": 2,
        "explanations": [
            "GET retrieves the variable but does not update it.",
            "DELETE removes the variable instead of changing its value.",
            "The update repository variable endpoint uses PATCH with the changed fields.",
            "PUT is used by the secret upsert API, not this variable update endpoint."
        ],
        "concept": "REST configuration variable update",
        "hints": [
            "Compare the operation's effect before choosing its HTTP method.",
            "Do not apply the secrets API's upsert convention to variables."
        ],
        "source": "https://docs.github.com/en/rest/actions/variables"
    },
    {
        "id": "actions-196",
        "domain": "Secure and optimize automation",
        "prompt": "Which explicit GITHUB_TOKEN permission allows reading repository files without granting write access?",
        "choices": [
            "contents: read",
            "issues: read",
            "packages: read",
            "actions: read"
        ],
        "correct": 0,
        "explanations": [
            "Contents read grants read access to repository content.",
            "Issues read concerns issue data, not repository files.",
            "Packages read concerns package registry content.",
            "Actions read concerns Actions resources rather than source files."
        ],
        "concept": "Grant the token only the repository capabilities required by the job.",
        "hints": [
            "Separate proof of identity from authorization at the destination.",
            "Compare the credential's scope with the operation actually required."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/authenticate-with-github_token"
    },
    {
        "id": "actions-197",
        "domain": "Secure and optimize automation",
        "prompt": "What does OIDC federation remove from a supported cloud deployment workflow?",
        "choices": [
            "The need to limit the deployment role's permissions",
            "The need to store a long-lived cloud access secret",
            "The need to configure cloud-side authorization",
            "The need to validate the workflow's identity"
        ],
        "correct": 1,
        "explanations": [
            "Federated roles still need least-privilege permissions.",
            "Federation exchanges workflow identity for short-lived cloud credentials.",
            "Cloud trust and authorization still require configuration.",
            "The cloud must still verify the presented identity claims."
        ],
        "concept": "OIDC reduces persistent credential storage, not authorization requirements.",
        "hints": [
            "Separate proof of identity from authorization at the destination.",
            "Compare the credential's scope with the operation actually required."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/openid-connect"
    },
    {
        "id": "actions-198",
        "domain": "Secure and optimize automation",
        "prompt": "Which workflow permission permits requesting a GitHub OIDC identity token?",
        "choices": [
            "deployments: write",
            "packages: write",
            "id-token: write",
            "contents: write"
        ],
        "correct": 2,
        "explanations": [
            "Deployments write concerns GitHub deployment records.",
            "Packages write concerns package registry operations.",
            "Id-token write permits requesting an OIDC token.",
            "Contents write permits repository-content operations."
        ],
        "concept": "The permission to request an identity token is separate from permission to change cloud resources.",
        "hints": [
            "Separate proof of identity from authorization at the destination.",
            "Compare the credential's scope with the operation actually required."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/openid-connect"
    },
    {
        "id": "actions-199",
        "domain": "Secure and optimize automation",
        "prompt": "An OIDC token is issued successfully. What still controls access to the target cloud resources?",
        "choices": [
            "The job's contents: write permission",
            "The runner's repository collaborator role",
            "The repository's branch protection settings",
            "The cloud trust policy and authorized role"
        ],
        "correct": 3,
        "explanations": [
            "Contents write authorizes repository-content operations, not cloud access.",
            "Repository collaboration does not grant the cloud role.",
            "Branch protection does not grant cloud-resource permissions.",
            "The cloud validates identity claims and grants the configured role's permissions."
        ],
        "concept": "Successful token issuance does not itself grant cloud-resource access.",
        "hints": [
            "Separate proof of identity from authorization at the destination.",
            "Compare the credential's scope with the operation actually required."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/openid-connect"
    },
    {
        "id": "actions-200",
        "domain": "Secure and optimize automation",
        "prompt": "Which OIDC token claim names the intended audience that a cloud trust policy can validate?",
        "choices": [
            "aud",
            "sub",
            "iss",
            "exp"
        ],
        "correct": 0,
        "explanations": [
            "Aud identifies the token's intended audience.",
            "Sub identifies the subject represented by the token.",
            "Iss identifies the token's issuer.",
            "Exp gives the token's expiration time."
        ],
        "concept": "Cloud trust evaluates the expected audience alongside subject and other identity claims.",
        "hints": [
            "Separate proof of identity from authorization at the destination.",
            "Compare the credential's scope with the operation actually required."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/openid-connect"
    },
    {
        "id": "actions-201",
        "domain": "Secure and optimize automation",
        "prompt": "A Bash step receives an untrusted pull request title in PR_TITLE. Which usage keeps it as data without evaluation?",
        "choices": [
            "sh -c \"$PR_TITLE\"",
            "printf '%s\\n' \"$PR_TITLE\"",
            "eval \"$PR_TITLE\"",
            "bash -c \"$PR_TITLE\""
        ],
        "correct": 1,
        "explanations": [
            "Sh -c executes the title as a command string.",
            "A fixed printf format and quoted expansion treat the title as data.",
            "Eval reinterprets the title as shell instructions.",
            "Bash -c executes the title as a command string."
        ],
        "concept": "Pass untrusted context through an environment variable and avoid evaluating its contents.",
        "hints": [
            "Follow the boundary between trusted instructions and untrusted data.",
            "Ask which identity, version, or execution context is actually being trusted."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-202",
        "domain": "Secure and optimize automation",
        "prompt": "What is the key danger of executing a fork's build script in a privileged pull_request_target job?",
        "choices": [
            "The script cannot access any network services",
            "The job automatically runs inside an isolated sandbox",
            "Untrusted code can use the job's privileges",
            "The event always disables repository authentication"
        ],
        "correct": 2,
        "explanations": [
            "The trigger does not guarantee network isolation.",
            "The trigger does not automatically sandbox untrusted code.",
            "Executed fork code may access credentials and privileged repository operations.",
            "This event can have privileged access rather than disabling it."
        ],
        "concept": "A privileged event is unsafe when it executes untrusted pull request code.",
        "hints": [
            "Follow the boundary between trusted instructions and untrusted data.",
            "Ask which identity, version, or execution context is actually being trusted."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-203",
        "domain": "Secure and optimize automation",
        "prompt": "A privileged workflow_run job downloads an artifact from untrusted PR tests. Which rule should govern its use?",
        "choices": [
            "Trust its contents because GitHub stored the artifact",
            "Trust its contents if the filename ends in .zip",
            "Execute its scripts before checking the source run",
            "Treat its contents as untrusted and validate before use"
        ],
        "correct": 3,
        "explanations": [
            "Hosting an artifact does not validate its contents.",
            "A file extension does not establish trustworthy provenance.",
            "Executing before validation crosses the trust boundary.",
            "Storage does not establish trust; validate producer, contents, and permitted use."
        ],
        "concept": "Passing data between workflows does not remove its original trust level.",
        "hints": [
            "Follow the boundary between trusted instructions and untrusted data.",
            "Ask which identity, version, or execution context is actually being trusted."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-204",
        "domain": "Secure and optimize automation",
        "prompt": "Which generated file locks a workflow's direct and transitive action dependencies to specific commits?",
        "choices": [
            ".github/workflows/actions.lock",
            ".github/dependabot.yml",
            ".github/CODEOWNERS",
            ".github/workflows/deploy.yml"
        ],
        "correct": 0,
        "explanations": [
            "The workflow dependency lockfile records action commits and source identities.",
            "Dependabot configuration controls update automation, not the action resolution inventory.",
            "Code owners identify reviewers rather than resolved action dependencies.",
            "An ordinary workflow file is not the generated dependency lockfile."
        ],
        "concept": "Workflow lockfiles cover action dependencies; reusable workflow calls need separate version control.",
        "hints": [
            "Follow the boundary between trusted instructions and untrusted data.",
            "Ask which identity, version, or execution context is actually being trusted."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles"
    },
    {
        "id": "actions-205",
        "domain": "Secure and optimize automation",
        "prompt": "What does a GitHub Marketplace action's Verified creator badge establish?",
        "choices": [
            "Every version reference is immutable",
            "GitHub verified the publisher's identity",
            "GitHub audited every line of the action",
            "Every release is free of vulnerabilities"
        ],
        "correct": 1,
        "explanations": [
            "A publisher badge does not make tags or branches immutable.",
            "The badge is a publisher-identity signal.",
            "Identity verification is not a complete source-code audit.",
            "A verified identity does not guarantee vulnerability-free releases."
        ],
        "concept": "Publisher identity and the security of action code are different assurances.",
        "hints": [
            "Follow the boundary between trusted instructions and untrusted data.",
            "Ask which identity, version, or execution context is actually being trusted."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-206",
        "domain": "Secure and optimize automation",
        "prompt": "Which workflow command registers a dynamically generated sensitive value for log masking?",
        "choices": [
            "::notice::VALUE",
            "::error::VALUE",
            "::add-mask::VALUE",
            "::debug::VALUE"
        ],
        "correct": 2,
        "explanations": [
            "Notice creates an annotation rather than registering masking.",
            "Error creates an error annotation rather than registering masking.",
            "Add-mask registers the value for redaction in logs.",
            "Debug emits a diagnostic message rather than registering masking."
        ],
        "concept": "Register generated sensitive values before any operation that could print them.",
        "hints": [
            "A display filter and a credential's validity are different controls.",
            "Consider transformations and storage as separate exposure paths."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-207",
        "domain": "Secure and optimize automation",
        "prompt": "Why must a Base64-encoded secret not be assumed to inherit the original value's log masking?",
        "choices": [
            "Base64 values are exempt from log masking",
            "Only organization secrets can register encoded masks",
            "Log masking only applies to error annotations",
            "Redaction does not reliably match transformed values"
        ],
        "correct": 3,
        "explanations": [
            "Encoded sensitive values can be registered for masking.",
            "Generated or transformed values can be masked regardless of secret scope.",
            "Masking is not restricted to error annotations.",
            "A transformed value may need separate masking and should not be logged."
        ],
        "concept": "Encoding is not encryption or guaranteed redaction.",
        "hints": [
            "A display filter and a credential's validity are different controls.",
            "Consider transformations and storage as separate exposure paths."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-208",
        "domain": "Secure and optimize automation",
        "prompt": "A live credential appears unredacted in a workflow log. Which response addresses both exposure and continued access?",
        "choices": [
            "Revoke or rotate it and remove the exposed logs",
            "Rename the secret and retain the exposed logs",
            "Rerun the job and keep the original credential",
            "Disable debug output and keep the credential unchanged"
        ],
        "correct": 0,
        "explanations": [
            "Rotation invalidates exposed access; deleting logs limits further disclosure.",
            "Renaming a secret does not invalidate its value.",
            "A rerun does not invalidate the leaked credential.",
            "Future logging changes do not revoke an already exposed value."
        ],
        "concept": "Reducing retained exposure and invalidating leaked credentials are separate remediation tasks.",
        "hints": [
            "A display filter and a credential's validity are different controls.",
            "Consider transformations and storage as separate exposure paths."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-209",
        "domain": "Secure and optimize automation",
        "prompt": "Why should cloud credentials be excluded from a GitHub Actions dependency cache?",
        "choices": [
            "Cache storage permanently revokes any credential it receives",
            "Untrusted workflows may restore accessible cache contents",
            "Caching automatically encrypts credentials for their owner only",
            "Only the job that created a cache can ever restore it"
        ],
        "correct": 1,
        "explanations": [
            "Storing a credential does not revoke it.",
            "Cache access can allow other workflows, including fork PRs, to read data.",
            "A cache is not an owner-only secret store.",
            "Caches are designed for reuse across eligible runs."
        ],
        "concept": "Dependency caches must not contain secrets or other sensitive files.",
        "hints": [
            "A display filter and a credential's validity are different controls.",
            "Consider transformations and storage as separate exposure paths."
        ],
        "source": "https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching"
    },
    {
        "id": "actions-210",
        "domain": "Secure and optimize automation",
        "prompt": "Which feature provides a signed statement about an artifact's build origin?",
        "choices": [
            "Dependency caching",
            "Branch protection",
            "Artifact attestation",
            "Artifact retention"
        ],
        "correct": 2,
        "explanations": [
            "Caching reuses files to reduce repeated work.",
            "Branch protection controls changes to branches.",
            "Attestations connect an artifact to its producer and build context.",
            "Retention determines how long stored output remains available."
        ],
        "concept": "Build provenance must be verified against a consumer's trust policy.",
        "hints": [
            "Distinguish a build's origin from the safety of its contents.",
            "Match both the producer's identity and the artifact's exact contents to policy."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/artifact-attestations"
    },
    {
        "id": "actions-211",
        "domain": "Secure and optimize automation",
        "prompt": "A binary-attestation job already has contents: read. Which additional permission pair enables identity signing and attestation storage?",
        "choices": [
            "packages: write; issues: write",
            "deployments: write; statuses: write",
            "checks: write; pull-requests: write",
            "id-token: write; attestations: write"
        ],
        "correct": 3,
        "explanations": [
            "Package and issue permissions do not provide the required identity and attestation access.",
            "Deployment and status permissions do not provide the required identity and attestation access.",
            "Check and pull request permissions do not provide the required identity and attestation access.",
            "Identity-token access and attestation-write access are required for this attestation workflow."
        ],
        "concept": "Attestation jobs need explicit permissions for signing identity and publishing attestations.",
        "hints": [
            "Distinguish a build's origin from the safety of its contents.",
            "Match both the producer's identity and the artifact's exact contents to policy."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations"
    },
    {
        "id": "actions-212",
        "domain": "Secure and optimize automation",
        "prompt": "Which GitHub CLI command verifies a local binary's attestation against its expected source repository?",
        "choices": [
            "gh attestation verify dist/tool -R octo-org/tool",
            "gh run download 123 -R octo-org/tool",
            "gh release view v1.0 -R octo-org/tool",
            "gh api repos/octo-org/tool/actions/artifacts"
        ],
        "correct": 0,
        "explanations": [
            "Attestation verify checks the binary against provenance associated with the expected repository.",
            "Run download retrieves artifacts without performing this attestation verification.",
            "Release view displays release information rather than verifying the binary's attestation.",
            "Listing artifacts does not verify a local binary's attestation."
        ],
        "concept": "Verification binds the local artifact to the expected producer, not merely to a download location.",
        "hints": [
            "Distinguish a build's origin from the safety of its contents.",
            "Match both the producer's identity and the artifact's exact contents to policy."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations"
    },
    {
        "id": "actions-213",
        "domain": "Secure and optimize automation",
        "prompt": "A binary's provenance is successfully verified against the expected repository and workflow. Which conclusion is still NOT justified?",
        "choices": [
            "The build context can be compared with policy",
            "The binary contains no exploitable vulnerabilities",
            "The attestation identifies the expected producer",
            "The attestation covers the binary being checked"
        ],
        "correct": 1,
        "explanations": [
            "Attested build context can support a policy decision.",
            "Verified provenance does not establish that the software is vulnerability-free.",
            "Matching provenance can establish the expected producer identity.",
            "Successful content verification binds the attestation to the checked binary."
        ],
        "concept": "Authentic origin is not a substitute for assessing software security.",
        "hints": [
            "Distinguish a build's origin from the safety of its contents.",
            "Match both the producer's identity and the artifact's exact contents to policy."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/artifact-attestations"
    },
    {
        "id": "actions-214",
        "domain": "Secure and optimize automation",
        "prompt": "Where environment required reviewers are supported, which setting prevents the deployment initiator from approving that deployment?",
        "choices": [
            "Deployment branches and tags",
            "Environment secrets",
            "Prevent self-review",
            "Wait timer"
        ],
        "correct": 2,
        "explanations": [
            "Branch and tag restrictions select deployable refs, not approving identities.",
            "Environment secrets store values rather than exclude self-approval.",
            "Prevent self-review excludes the initiator from approving that deployment.",
            "A wait timer delays deployment rather than excluding the initiator from approval."
        ],
        "concept": "Required reviewers and prevention of self-review are separate environment controls.",
        "hints": [
            "Separate who may approve from which revision may deploy.",
            "Check the environment's protection settings and feature availability."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments"
    },
    {
        "id": "actions-215",
        "domain": "Secure and optimize automation",
        "prompt": "Which environment control restricts deployments to configured branch and tag name patterns?",
        "choices": [
            "Required reviewers",
            "Wait timer",
            "Environment secrets",
            "Selected branches and tags"
        ],
        "correct": 3,
        "explanations": [
            "Required reviewers controls approval rather than ref-name patterns.",
            "A wait timer delays deployment rather than selecting refs.",
            "Environment secrets provide values rather than ref-name restrictions.",
            "Selected branches and tags allows configuring allowed name patterns."
        ],
        "concept": "Deployment ref restrictions and approval gates solve different problems.",
        "hints": [
            "Separate who may approve from which revision may deploy.",
            "Check the environment's protection settings and feature availability."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments"
    },
    {
        "id": "actions-216",
        "domain": "Secure and optimize automation",
        "prompt": "Public-fork builds must execute untrusted code. Which runner design best limits persistence and access to production?",
        "choices": [
            "Disposable isolated runners without production access",
            "Persistent deployment runners with environment approval",
            "Shared production runners with quieter log output",
            "Reusable privileged runners with fewer workflow steps"
        ],
        "correct": 0,
        "explanations": [
            "Disposable isolation limits persistence, while network and credential separation limit production access.",
            "Environment approval does not isolate a persistent runner from executed code.",
            "Less logging does not isolate production-connected infrastructure.",
            "Fewer steps do not remove privileges or persistent compromise."
        ],
        "concept": "Runner isolation, lifecycle, credentials, and network access all define the trust boundary.",
        "hints": [
            "Follow the boundary between trusted instructions and untrusted data.",
            "Ask which identity, version, or execution context is actually being trusted."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "actions-217",
        "domain": "Secure and optimize automation",
        "prompt": "Which task is the best fit for a dependency cache rather than a workflow artifact?",
        "choices": [
            "Preserve a failed build's diagnostic archive",
            "Reuse downloaded packages across compatible builds",
            "Retain a release binary for later download",
            "Share a test report with a reviewer"
        ],
        "correct": 1,
        "explanations": [
            "A diagnostic archive is retained output rather than a dependency cache.",
            "Caches accelerate builds by reusing regenerable dependency files.",
            "A retained release binary is build output suited to an artifact or release asset.",
            "A report is job output suited to artifact retention."
        ],
        "concept": "Use caches for reusable inputs and artifacts for retained outputs.",
        "hints": [
            "Distinguish reusable build inputs from retained job outputs.",
            "Consider whether the change affects execution, parallelism, or storage."
        ],
        "source": "https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching"
    },
    {
        "id": "actions-218",
        "domain": "Secure and optimize automation",
        "prompt": "An existing dependency cache has outdated contents. How can the workflow save a replacement without deleting it?",
        "choices": [
            "Change its files through restore-keys",
            "Extend its contents by setting cache-hit",
            "Create a cache using a new key",
            "Overwrite it by reusing the same key"
        ],
        "correct": 2,
        "explanations": [
            "Restore-keys selects fallback caches rather than editing them.",
            "Cache-hit reports restore status rather than modifying stored files.",
            "Existing cache contents are immutable; a new key creates a separate cache.",
            "An exact existing key does not overwrite that cache's contents."
        ],
        "concept": "Cache keys identify immutable stored cache contents.",
        "hints": [
            "Distinguish reusable build inputs from retained job outputs.",
            "Consider whether the change affects execution, parallelism, or storage."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching"
    },
    {
        "id": "actions-219",
        "domain": "Secure and optimize automation",
        "prompt": "A test matrix includes unsupported OS/runtime pairs. Which change avoids spending runner time on those combinations?",
        "choices": [
            "Lower strategy.max-parallel without changing combinations",
            "Set continue-on-error on every matrix job",
            "Increase timeout-minutes for the entire matrix",
            "Remove those combinations with strategy.matrix.exclude"
        ],
        "correct": 3,
        "explanations": [
            "Max-parallel changes concurrency, not the number of combinations.",
            "Continue-on-error changes failure handling, not which jobs are created.",
            "A larger timeout allows longer execution rather than excluding combinations.",
            "Matrix exclude removes selected combinations from the generated jobs."
        ],
        "concept": "Remove unnecessary matrix work rather than merely changing how it is scheduled or reported.",
        "hints": [
            "Distinguish reusable build inputs from retained job outputs.",
            "Consider whether the change affects execution, parallelism, or storage."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-220",
        "domain": "Secure and optimize automation",
        "prompt": "A workflow already uses a branch-specific concurrency group. Which setting cancels its older running job when a newer one enters that group?",
        "choices": [
            "cancel-in-progress: true",
            "strategy.fail-fast: true",
            "continue-on-error: true",
            "timeout-minutes: 1"
        ],
        "correct": 0,
        "explanations": [
            "Cancel-in-progress cancels older running work in the same concurrency group.",
            "Fail-fast cancels matrix work after a failure, not on a newer grouped run.",
            "Continue-on-error changes failure handling rather than concurrency cancellation.",
            "A timeout limits duration rather than responding to newer work."
        ],
        "concept": "A concurrency group selects related work; cancel-in-progress controls cancellation of running work.",
        "hints": [
            "Distinguish reusable build inputs from retained job outputs.",
            "Consider whether the change affects execution, parallelism, or storage."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency"
    },
    {
        "id": "actions-221",
        "domain": "Secure and optimize automation",
        "prompt": "Within allowed retention limits, which upload-artifact input retains a diagnostic bundle for three days?",
        "choices": [
            "if-no-files-found: warn",
            "retention-days: 3",
            "timeout-minutes: 3",
            "compression-level: 3"
        ],
        "correct": 1,
        "explanations": [
            "If-no-files-found controls handling of missing input files.",
            "Retention-days controls how long the uploaded artifact is retained.",
            "Timeout-minutes limits execution time rather than artifact storage lifetime.",
            "Compression-level changes compression effort rather than retention."
        ],
        "concept": "Artifact retention can be shortened per upload within the administrator's limits.",
        "hints": [
            "Distinguish reusable build inputs from retained job outputs.",
            "Consider whether the change affects execution, parallelism, or storage."
        ],
        "source": "https://docs.github.com/en/actions/tutorials/store-and-share-data"
    },
    {
        "id": "actions-222",
        "domain": "Secure and optimize automation",
        "prompt": "Which REST request deletes one stored workflow artifact while leaving its workflow run intact?",
        "choices": [
            "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}",
            "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
            "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
            "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
        ],
        "correct": 2,
        "explanations": [
            "Deleting the workflow run removes the run, contrary to the requirement.",
            "Canceling a run does not delete the selected stored artifact.",
            "The artifact DELETE endpoint removes that artifact without deleting its run.",
            "The GET endpoint reads artifact metadata rather than deleting the artifact."
        ],
        "concept": "Artifact lifecycle operations are distinct from workflow-run lifecycle operations.",
        "hints": [
            "Distinguish reusable build inputs from retained job outputs.",
            "Consider whether the change affects execution, parallelism, or storage."
        ],
        "source": "https://docs.github.com/en/rest/actions/artifacts#delete-an-artifact"
    },
    {
        "id": "actions-223",
        "domain": "Secure and optimize automation",
        "prompt": "Which job-level key limits a potentially stalled GitHub Actions job to twenty minutes?",
        "choices": [
            "max-parallel: 20",
            "retention-days: 20",
            "fetch-depth: 20",
            "timeout-minutes: 20"
        ],
        "correct": 3,
        "explanations": [
            "Max-parallel limits simultaneous matrix jobs rather than duration.",
            "Retention-days controls artifact storage rather than job duration.",
            "Fetch-depth controls checked-out Git history rather than job duration.",
            "Job timeout-minutes limits job execution duration."
        ],
        "concept": "Set an execution timeout at the job scope to bound stalled work.",
        "hints": [
            "Distinguish reusable build inputs from retained job outputs.",
            "Consider whether the change affects execution, parallelism, or storage."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax"
    },
    {
        "id": "actions-224",
        "domain": "Secure and optimize automation",
        "prompt": "Which package-ecosystem value enables Dependabot version updates for workflow action references?",
        "choices": [
            "github-actions",
            "docker",
            "npm",
            "gitsubmodule"
        ],
        "correct": 0,
        "explanations": [
            "Github-actions enables updates to action references and supported reusable workflow references.",
            "Docker monitors container-image dependencies rather than workflow action references.",
            "Npm monitors JavaScript package dependencies rather than action references.",
            "Gitsubmodule monitors Git submodule references rather than workflow action references."
        ],
        "concept": "Dependabot's ecosystem selects the dependency format it monitors.",
        "hints": [
            "Follow the boundary between trusted instructions and untrusted data.",
            "Ask which identity, version, or execution context is actually being trusted."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/auto-update-actions"
    },
    {
        "id": "actions-225",
        "domain": "Secure and optimize automation",
        "prompt": "When creating a container-image attestation, what identifies the image's exact content rather than a movable tag?",
        "choices": [
            "The registry's hostname alone",
            "The image's SHA256 digest",
            "The image's latest tag",
            "The workflow's display name"
        ],
        "correct": 1,
        "explanations": [
            "A registry hostname identifies a service, not a particular image's content.",
            "A digest identifies the image content and is supplied as subject-digest.",
            "A mutable tag may point to different content later.",
            "A display name describes a workflow, not image content."
        ],
        "concept": "Container provenance binds to content digests rather than mutable names.",
        "hints": [
            "Distinguish a build's origin from the safety of its contents.",
            "Match both the producer's identity and the artifact's exact contents to policy."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations"
    }
];
