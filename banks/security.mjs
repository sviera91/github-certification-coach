// Original practice content, not copied from certification assessments.
export const questions = [
    {
        "id": "ghas-ecosystem-001",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which separately purchasable GitHub product includes both code scanning and dependency review?",
        "choices": [
            "GitHub Team",
            "GitHub Enterprise Cloud",
            "GitHub Code Security",
            "GitHub Secret Protection"
        ],
        "correct": 2,
        "explanations": [
            "Team is a GitHub plan; it is not the separately purchased code-analysis product.",
            "Enterprise Cloud is a hosting plan, not a substitute for the applicable security product entitlement.",
            "This product includes code scanning, dependency review, and premium Dependabot capabilities.",
            "This product focuses on detecting and preventing credential exposure."
        ],
        "concept": "Code Security product scope",
        "hints": [
            "Separate product licensing from the underlying GitHub plan.",
            "Compare the type of risk each product addresses."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-002",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which paid security product groups credential-leak detection with push protection?",
        "choices": [
            "GitHub Team",
            "GitHub Enterprise Cloud",
            "GitHub Code Security",
            "GitHub Secret Protection"
        ],
        "correct": 3,
        "explanations": [
            "Team is a GitHub plan; it is not the separately purchased code-analysis product.",
            "Enterprise Cloud is a hosting plan, not a substitute for the applicable security product entitlement.",
            "This product includes code scanning, dependency review, and premium Dependabot capabilities.",
            "This product focuses on detecting and preventing credential exposure."
        ],
        "concept": "Secret Protection product scope",
        "hints": [
            "Separate product licensing from the underlying GitHub plan.",
            "Compare the type of risk each product addresses."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-003",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which dependency capability can an organization use without purchasing Code Security or Secret Protection?",
        "choices": [
            "Private-repository secret scanning",
            "Dependabot alerts",
            "Private-repository code scanning",
            "Public-repository code scanning"
        ],
        "correct": 1,
        "explanations": [
            "On GitHub.com, private-repository secret scanning requires the applicable Secret Protection or legacy GHAS entitlement.",
            "Basic Dependabot vulnerability alerts are available without purchasing either paid security product.",
            "On GitHub.com, this requires an eligible organization plan and Code Security entitlement or applicable legacy GHAS licensing.",
            "Code scanning is available free for public repositories; setup and permissions still matter."
        ],
        "concept": "Basic dependency alerts without a separate supply-chain license",
        "hints": [
            "Check repository visibility and the specific feature entitlement separately.",
            "An umbrella security label does not mean every capability has identical availability."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-004",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "An authorized analyst wants security overview for an organization, not one repository. Which English UI route opens that scope?",
        "choices": [
            "Repository > Security and quality > Secret scanning",
            "Organization > Security and quality",
            "Repository > Insights > Dependency graph",
            "Repository > Security and quality > Code scanning"
        ],
        "correct": 1,
        "explanations": [
            "This repository view contains credential-exposure alerts for authorized users.",
            "The organization tab provides security overview across accessible repositories.",
            "The dependency graph is an inventory reached through the repository Insights tab.",
            "This repository view lists findings from code analysis tools."
        ],
        "concept": "Organization security navigation",
        "hints": [
            "Keep repository scope distinct from organization scope.",
            "Consider whether you are inspecting findings or the dependency inventory."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-005",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which security overview view answers “Which repositories have not adopted the security features?”",
        "choices": [
            "Overview",
            "Campaigns",
            "Coverage",
            "Risk"
        ],
        "correct": 2,
        "explanations": [
            "Overview summarizes detection, remediation, and prevention trends.",
            "Campaigns coordinates targeted remediation work and tracks progress.",
            "Coverage shows adoption of security features across repositories.",
            "Risk helps investigate repositories and alerts representing current exposure."
        ],
        "concept": "Security feature adoption",
        "hints": [
            "Decide whether you need adoption, exposure, trends, or coordinated work.",
            "Match the question to the purpose of the view, not its visual layout."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-006",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which security overview view is intended for investigating current exposure across alert types?",
        "choices": [
            "Overview",
            "Campaigns",
            "Coverage",
            "Risk"
        ],
        "correct": 3,
        "explanations": [
            "Overview summarizes detection, remediation, and prevention trends.",
            "Campaigns coordinates targeted remediation work and tracks progress.",
            "Coverage shows adoption of security features across repositories.",
            "Risk helps investigate repositories and alerts representing current exposure."
        ],
        "concept": "Cross-feature risk investigation",
        "hints": [
            "Decide whether you need adoption, exposure, trends, or coordinated work.",
            "Match the question to the purpose of the view, not its visual layout."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-007",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Where does security overview summarize trends in detection, remediation, and prevention?",
        "choices": [
            "Overview",
            "Campaigns",
            "Coverage",
            "Risk"
        ],
        "correct": 0,
        "explanations": [
            "Overview summarizes detection, remediation, and prevention trends.",
            "Campaigns coordinates targeted remediation work and tracks progress.",
            "Coverage shows adoption of security features across repositories.",
            "Risk helps investigate repositories and alerts representing current exposure."
        ],
        "concept": "Security trend dashboard",
        "hints": [
            "Decide whether you need adoption, exposure, trends, or coordinated work.",
            "Match the question to the purpose of the view, not its visual layout."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-008",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which security overview view coordinates a selected remediation effort across repositories?",
        "choices": [
            "Coverage",
            "Risk",
            "Overview",
            "Campaigns"
        ],
        "correct": 3,
        "explanations": [
            "Coverage shows adoption of security features across repositories.",
            "Risk helps investigate repositories and alerts representing current exposure.",
            "Overview summarizes detection, remediation, and prevention trends.",
            "Campaigns coordinates targeted remediation work and tracks progress."
        ],
        "concept": "Campaign coordination surface",
        "hints": [
            "Decide whether you need adoption, exposure, trends, or coordinated work.",
            "Match the question to the purpose of the view, not its visual layout."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-009",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "In the English repository UI, where can you browse the recognized dependency inventory?",
        "choices": [
            "Repository > Insights > Dependency graph",
            "Repository > Security and quality > Code scanning",
            "Repository > Security and quality > Secret scanning",
            "Organization > Security and quality"
        ],
        "correct": 0,
        "explanations": [
            "The dependency graph is an inventory reached through the repository Insights tab.",
            "This repository view lists findings from code analysis tools.",
            "This repository view contains credential-exposure alerts for authorized users.",
            "The organization tab provides security overview across accessible repositories."
        ],
        "concept": "Dependency inventory navigation",
        "hints": [
            "Keep repository scope distinct from organization scope.",
            "Consider whether you are inspecting findings or the dependency inventory."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-010",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which English UI route lists repository findings from CodeQL and other integrated static analyzers?",
        "choices": [
            "Repository > Security and quality > Code scanning",
            "Repository > Security and quality > Secret scanning",
            "Organization > Security and quality",
            "Repository > Insights > Dependency graph"
        ],
        "correct": 0,
        "explanations": [
            "This repository view lists findings from code analysis tools.",
            "This repository view contains credential-exposure alerts for authorized users.",
            "The organization tab provides security overview across accessible repositories.",
            "The dependency graph is an inventory reached through the repository Insights tab."
        ],
        "concept": "Code-analysis findings navigation",
        "hints": [
            "Keep repository scope distinct from organization scope.",
            "Consider whether you are inspecting findings or the dependency inventory."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-011",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "An authorized responder needs repository credential-exposure alerts. Which English UI route fits?",
        "choices": [
            "Repository > Insights > Dependency graph",
            "Repository > Security and quality > Code scanning",
            "Repository > Security and quality > Secret scanning",
            "Organization > Security and quality"
        ],
        "correct": 2,
        "explanations": [
            "The dependency graph is an inventory reached through the repository Insights tab.",
            "This repository view lists findings from code analysis tools.",
            "This repository view contains credential-exposure alerts for authorized users.",
            "The organization tab provides security overview across accessible repositories."
        ],
        "concept": "Credential-alert navigation",
        "hints": [
            "Keep repository scope distinct from organization scope.",
            "Consider whether you are inspecting findings or the dependency inventory."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-012",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which detector matches recognized dependency versions against reviewed vulnerability advisories?",
        "choices": [
            "Dependabot alerts",
            "Dependency review",
            "Code scanning",
            "Secret scanning"
        ],
        "correct": 0,
        "explanations": [
            "Dependabot alerts relate known vulnerabilities to dependencies in the dependency graph.",
            "Dependency review highlights the impact of dependency changes in a pull request.",
            "Code scanning analyzes source code for vulnerabilities and coding errors.",
            "Secret scanning identifies exposed credentials rather than vulnerable package versions."
        ],
        "concept": "Advisory-based dependency detection",
        "hints": [
            "Identify whether the evidence is code, a credential, or a package.",
            "Detection mechanisms use different inputs; compare those inputs."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-013",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which capability investigates unsafe source-code behavior rather than matching package versions or credential patterns?",
        "choices": [
            "Dependabot alerts",
            "Dependency review",
            "Code scanning",
            "Secret scanning"
        ],
        "correct": 2,
        "explanations": [
            "Dependabot alerts relate known vulnerabilities to dependencies in the dependency graph.",
            "Dependency review highlights the impact of dependency changes in a pull request.",
            "Code scanning analyzes source code for vulnerabilities and coding errors.",
            "Secret scanning identifies exposed credentials rather than vulnerable package versions."
        ],
        "concept": "Source-code vulnerability detection",
        "hints": [
            "Identify whether the evidence is code, a credential, or a package.",
            "Detection mechanisms use different inputs; compare those inputs."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-014",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which capability searches repository content for exposed authentication material?",
        "choices": [
            "Secret scanning",
            "Dependabot alerts",
            "Dependency review",
            "Code scanning"
        ],
        "correct": 0,
        "explanations": [
            "Secret scanning identifies exposed credentials rather than vulnerable package versions.",
            "Dependabot alerts relate known vulnerabilities to dependencies in the dependency graph.",
            "Dependency review highlights the impact of dependency changes in a pull request.",
            "Code scanning analyzes source code for vulnerabilities and coding errors."
        ],
        "concept": "Credential-pattern detection",
        "hints": [
            "Identify whether the evidence is code, a credential, or a package.",
            "Detection mechanisms use different inputs; compare those inputs."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-015",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which feature explains the security impact of dependency additions and removals in a pull request?",
        "choices": [
            "Secret scanning",
            "Dependabot alerts",
            "Dependency review",
            "Code scanning"
        ],
        "correct": 2,
        "explanations": [
            "Secret scanning identifies exposed credentials rather than vulnerable package versions.",
            "Dependabot alerts relate known vulnerabilities to dependencies in the dependency graph.",
            "Dependency review highlights the impact of dependency changes in a pull request.",
            "Code scanning analyzes source code for vulnerabilities and coding errors."
        ],
        "concept": "Dependency-change review",
        "hints": [
            "Identify whether the evidence is code, a credential, or a package.",
            "Detection mechanisms use different inputs; compare those inputs."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-016",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which feature maintains recognized direct and transitive dependency relationships in GitHub rather than exporting an inventory snapshot?",
        "choices": [
            "Software bill of materials (SBOM)",
            "Artifact attestations",
            "GitHub Advisory Database",
            "Dependency graph"
        ],
        "correct": 3,
        "explanations": [
            "An SBOM exports a dependency inventory; it is not proof that all components are safe.",
            "Attestations provide verifiable build provenance and integrity evidence.",
            "This database provides published vulnerability advisories rather than a repository inventory.",
            "The dependency graph inventories recognized dependencies and their relationships."
        ],
        "concept": "Dependency relationship inventory",
        "hints": [
            "Separate inventory, provenance, vulnerability information, and upgrade automation.",
            "Ask which artifact or process supplies the evidence you need."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-017",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which control can stop a supported credential from entering a repository at push time?",
        "choices": [
            "Code scanning",
            "Repository rulesets",
            "Push protection",
            "Dependency review"
        ],
        "correct": 2,
        "explanations": [
            "Code scanning can identify source-code vulnerabilities during pull request analysis.",
            "Rulesets can require checks and other conditions before changes are accepted.",
            "Push protection blocks supported secrets during a push, before they enter the repository.",
            "Dependency review supplies pre-merge feedback about changed dependencies."
        ],
        "concept": "Credential prevention at entry",
        "hints": [
            "Place the control at the point where it supplies feedback.",
            "Distinguish a detector from the policy that requires its result."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-018",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which mechanism makes a passing check a required merge condition rather than merely showing its findings?",
        "choices": [
            "Push protection",
            "Dependency review",
            "Code scanning",
            "Repository rulesets"
        ],
        "correct": 3,
        "explanations": [
            "Push protection blocks supported secrets during a push, before they enter the repository.",
            "Dependency review supplies pre-merge feedback about changed dependencies.",
            "Code scanning can identify source-code vulnerabilities during pull request analysis.",
            "Rulesets can require checks and other conditions before changes are accepted."
        ],
        "concept": "Detection versus enforcement",
        "hints": [
            "Place the control at the point where it supplies feedback.",
            "Distinguish a detector from the policy that requires its result."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-019",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which capability provides verifiable evidence of where and how a build artifact was produced?",
        "choices": [
            "Dependency graph",
            "Software bill of materials (SBOM)",
            "Artifact attestations",
            "GitHub Advisory Database"
        ],
        "correct": 2,
        "explanations": [
            "The dependency graph inventories recognized dependencies and their relationships.",
            "An SBOM exports a dependency inventory; it is not proof that all components are safe.",
            "Attestations provide verifiable build provenance and integrity evidence.",
            "This database provides published vulnerability advisories rather than a repository inventory."
        ],
        "concept": "Build provenance evidence",
        "hints": [
            "Separate inventory, provenance, vulnerability information, and upgrade automation.",
            "Ask which artifact or process supplies the evidence you need."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-020",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which export gives a component inventory for downstream supply-chain analysis without certifying that the components are safe?",
        "choices": [
            "GitHub Advisory Database",
            "Dependency graph",
            "Software bill of materials (SBOM)",
            "Artifact attestations"
        ],
        "correct": 2,
        "explanations": [
            "This database provides published vulnerability advisories rather than a repository inventory.",
            "The dependency graph inventories recognized dependencies and their relationships.",
            "An SBOM exports a dependency inventory; it is not proof that all components are safe.",
            "Attestations provide verifiable build provenance and integrity evidence."
        ],
        "concept": "SBOM inventory limits",
        "hints": [
            "Separate inventory, provenance, vulnerability information, and upgrade automation.",
            "Ask which artifact or process supplies the evidence you need."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-021",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Where can a developer look up published vulnerability records across package ecosystems rather than inspect one repository’s dependencies?",
        "choices": [
            "GitHub Advisory Database",
            "Dependency graph",
            "Software bill of materials (SBOM)",
            "Artifact attestations"
        ],
        "correct": 0,
        "explanations": [
            "This database provides published vulnerability advisories rather than a repository inventory.",
            "The dependency graph inventories recognized dependencies and their relationships.",
            "An SBOM exports a dependency inventory; it is not proof that all components are safe.",
            "Attestations provide verifiable build provenance and integrity evidence."
        ],
        "concept": "Public vulnerability intelligence",
        "hints": [
            "Separate inventory, provenance, vulnerability information, and upgrade automation.",
            "Ask which artifact or process supplies the evidence you need."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-022",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which feature supports private collaboration on a repository vulnerability followed by coordinated public disclosure?",
        "choices": [
            "SECURITY.md",
            "Private vulnerability reporting",
            "Repository security advisories",
            "GitHub Advisory Database"
        ],
        "correct": 2,
        "explanations": [
            "A security policy explains supported versions and how to report vulnerabilities.",
            "This feature gives researchers a private reporting channel to repository maintainers.",
            "Repository advisories support private discussion, coordinated fixes, and subsequent publication.",
            "The database is a searchable collection of published security advisories."
        ],
        "concept": "Coordinated advisory workflow",
        "hints": [
            "Distinguish instructions, confidential intake, coordinated repair, and public reference data.",
            "Consider the audience and the disclosure stage."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-023",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which repository file convention communicates supported versions and the preferred vulnerability-reporting process?",
        "choices": [
            "GitHub Advisory Database",
            "SECURITY.md",
            "Private vulnerability reporting",
            "Repository security advisories"
        ],
        "correct": 1,
        "explanations": [
            "The database is a searchable collection of published security advisories.",
            "A security policy explains supported versions and how to report vulnerabilities.",
            "This feature gives researchers a private reporting channel to repository maintainers.",
            "Repository advisories support private discussion, coordinated fixes, and subsequent publication."
        ],
        "concept": "Security policy communication",
        "hints": [
            "Distinguish instructions, confidential intake, coordinated repair, and public reference data.",
            "Consider the audience and the disclosure stage."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-024",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which enabled repository feature lets an external researcher confidentially report a suspected flaw to maintainers?",
        "choices": [
            "Private vulnerability reporting",
            "Repository security advisories",
            "GitHub Advisory Database",
            "SECURITY.md"
        ],
        "correct": 0,
        "explanations": [
            "This feature gives researchers a private reporting channel to repository maintainers.",
            "Repository advisories support private discussion, coordinated fixes, and subsequent publication.",
            "The database is a searchable collection of published security advisories.",
            "A security policy explains supported versions and how to report vulnerabilities."
        ],
        "concept": "Confidential vulnerability intake",
        "hints": [
            "Distinguish instructions, confidential intake, coordinated repair, and public reference data.",
            "Consider the audience and the disclosure stage."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-025",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Who normally implements and regression-tests an application-code fix once the security team has explained the finding?",
        "choices": [
            "Repository developer",
            "Security manager",
            "Organization owner",
            "External security researcher"
        ],
        "correct": 0,
        "explanations": [
            "Developers implement and test fixes in the code they maintain; access still depends on assigned permissions.",
            "Security managers can manage security settings and alerts organization-wide without general repository write access.",
            "Organization owners can assign organization roles, including security manager.",
            "A researcher reports a suspected issue; reporting alone grants no repository administration permissions."
        ],
        "concept": "Developer remediation responsibility",
        "hints": [
            "Separate implementation work from organization-wide authority.",
            "Choose the role whose normal responsibility matches the task."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts"
    },
    {
        "id": "ghas-ecosystem-026",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which organization role fits cross-repository alert triage and security-setting management without general code-write access?",
        "choices": [
            "Security manager",
            "Organization owner",
            "External security researcher",
            "Repository developer"
        ],
        "correct": 0,
        "explanations": [
            "Security managers can manage security settings and alerts organization-wide without general repository write access.",
            "Organization owners can assign organization roles, including security manager.",
            "A researcher reports a suspected issue; reporting alone grants no repository administration permissions.",
            "Developers implement and test fixes in the code they maintain; access still depends on assigned permissions."
        ],
        "concept": "Specialized security responsibility",
        "hints": [
            "Separate implementation work from organization-wide authority.",
            "Choose the role whose normal responsibility matches the task."
        ],
        "source": "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization"
    },
    {
        "id": "ghas-ecosystem-027",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Who can assign the predefined security manager role to an organization member or team?",
        "choices": [
            "External security researcher",
            "Repository developer",
            "Security manager",
            "Organization owner"
        ],
        "correct": 3,
        "explanations": [
            "A researcher reports a suspected issue; reporting alone grants no repository administration permissions.",
            "Developers implement and test fixes in the code they maintain; access still depends on assigned permissions.",
            "Security managers can manage security settings and alerts organization-wide without general repository write access.",
            "Organization owners can assign organization roles, including security manager."
        ],
        "concept": "Accountability for security-role delegation",
        "hints": [
            "Separate implementation work from organization-wide authority.",
            "Choose the role whose normal responsibility matches the task."
        ],
        "source": "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization"
    },
    {
        "id": "ghas-ecosystem-028",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which participant reports a suspected vulnerability but gains no administration rights simply by making the report?",
        "choices": [
            "Security manager",
            "Organization owner",
            "External security researcher",
            "Repository developer"
        ],
        "correct": 2,
        "explanations": [
            "Security managers can manage security settings and alerts organization-wide without general repository write access.",
            "Organization owners can assign organization roles, including security manager.",
            "A researcher reports a suspected issue; reporting alone grants no repository administration permissions.",
            "Developers implement and test fixes in the code they maintain; access still depends on assigned permissions."
        ],
        "concept": "Reporter versus administrator",
        "hints": [
            "Separate implementation work from organization-wide authority.",
            "Choose the role whose normal responsibility matches the task."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-029",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which code-analysis use is available free on GitHub.com without a private-repository Code Security entitlement?",
        "choices": [
            "Public-repository code scanning",
            "Private-repository secret scanning",
            "Dependabot alerts",
            "Private-repository code scanning"
        ],
        "correct": 0,
        "explanations": [
            "Code scanning is available free for public repositories; setup and permissions still matter.",
            "On GitHub.com, private-repository secret scanning requires the applicable Secret Protection or legacy GHAS entitlement.",
            "Basic Dependabot vulnerability alerts are available without purchasing either paid security product.",
            "On GitHub.com, this requires an eligible organization plan and Code Security entitlement or applicable legacy GHAS licensing."
        ],
        "concept": "Public code-analysis availability",
        "hints": [
            "Check repository visibility and the specific feature entitlement separately.",
            "An umbrella security label does not mean every capability has identical availability."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-030",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which capability specifically needs Code Security or applicable legacy GHAS entitlement on a GitHub.com organization’s private repositories?",
        "choices": [
            "Dependabot alerts",
            "Private-repository code scanning",
            "Public-repository code scanning",
            "Private-repository secret scanning"
        ],
        "correct": 1,
        "explanations": [
            "Basic Dependabot vulnerability alerts are available without purchasing either paid security product.",
            "On GitHub.com, this requires an eligible organization plan and Code Security entitlement or applicable legacy GHAS licensing.",
            "Code scanning is available free for public repositories; setup and permissions still matter.",
            "On GitHub.com, private-repository secret scanning requires the applicable Secret Protection or legacy GHAS entitlement."
        ],
        "concept": "Private code-analysis licensing",
        "hints": [
            "Check repository visibility and the specific feature entitlement separately.",
            "An umbrella security label does not mean every capability has identical availability."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-031",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Security overview shows zero alerts for a repository. What is the sound interpretation step before calling it low risk?",
        "choices": [
            "Export the available view data as CSV.",
            "Check feature coverage before concluding risk is low.",
            "Compare the viewers’ alert permissions.",
            "Use default-branch scope when interpreting the metrics."
        ],
        "correct": 1,
        "explanations": [
            "Several security overview pages support CSV exports for further analysis.",
            "An empty alert view can reflect disabled detection or undetected issues, not absence of vulnerabilities.",
            "Security overview data is filtered by the current viewer’s permissions.",
            "Security overview views report on the default branches of accessible repositories."
        ],
        "concept": "Empty dashboard interpretation",
        "hints": [
            "Treat dashboard results as observations with scope, not as universal proof.",
            "Check both what was measured and what the viewer is permitted to see."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-032",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Two people see different totals in the same organization’s security overview. What should they check before assuming the data is inconsistent?",
        "choices": [
            "Check feature coverage before concluding risk is low.",
            "Compare the viewers’ alert permissions.",
            "Use default-branch scope when interpreting the metrics.",
            "Export the available view data as CSV."
        ],
        "correct": 1,
        "explanations": [
            "An empty alert view can reflect disabled detection or undetected issues, not absence of vulnerabilities.",
            "Security overview data is filtered by the current viewer’s permissions.",
            "Security overview views report on the default branches of accessible repositories.",
            "Several security overview pages support CSV exports for further analysis."
        ],
        "concept": "Permission-filtered security reporting",
        "hints": [
            "Treat dashboard results as observations with scope, not as universal proof.",
            "Check both what was measured and what the viewer is permitted to see."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-033",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "A feature branch has a finding absent from the organization dashboard. Which scope should the analyst consider first?",
        "choices": [
            "Check feature coverage before concluding risk is low.",
            "Compare the viewers’ alert permissions.",
            "Use default-branch scope when interpreting the metrics.",
            "Export the available view data as CSV."
        ],
        "correct": 2,
        "explanations": [
            "An empty alert view can reflect disabled detection or undetected issues, not absence of vulnerabilities.",
            "Security overview data is filtered by the current viewer’s permissions.",
            "Security overview views report on the default branches of accessible repositories.",
            "Several security overview pages support CSV exports for further analysis."
        ],
        "concept": "Overview default-branch boundary",
        "hints": [
            "Treat dashboard results as observations with scope, not as universal proof.",
            "Check both what was measured and what the viewer is permitted to see."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-034",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "An analyst needs to combine available security overview data with an internal reporting dataset. Which supported handoff fits?",
        "choices": [
            "Compare the viewers’ alert permissions.",
            "Use default-branch scope when interpreting the metrics.",
            "Export the available view data as CSV.",
            "Check feature coverage before concluding risk is low."
        ],
        "correct": 2,
        "explanations": [
            "Security overview data is filtered by the current viewer’s permissions.",
            "Security overview views report on the default branches of accessible repositories.",
            "Several security overview pages support CSV exports for further analysis.",
            "An empty alert view can reflect disabled detection or undetected issues, not absence of vulnerabilities."
        ],
        "concept": "Security overview data export",
        "hints": [
            "Treat dashboard results as observations with scope, not as universal proof.",
            "Check both what was measured and what the viewer is permitted to see."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-ecosystem-035",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which practice most directly shifts vulnerability discovery away from a release-only review?",
        "choices": [
            "Keep monitoring after fixes reach the default branch.",
            "Give developers security feedback before merge.",
            "Combine early detection with enforced merge checks.",
            "Coordinate a focused backlog-remediation campaign."
        ],
        "correct": 1,
        "explanations": [
            "New advisories and code changes can introduce fresh risk after an earlier fix.",
            "Early feedback helps avoid introducing vulnerabilities instead of discovering everything at release time.",
            "Detection supplies findings; enforced checks decide whether changes can proceed. They complement one another.",
            "A campaign organizes existing remediation work; it does not prevent every new vulnerability."
        ],
        "concept": "Shift-left feedback timing",
        "hints": [
            "Consider when feedback arrives and whether remediation remains necessary.",
            "A preventive control and a release condition can address different failure modes."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-036",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "How should prevention-first feedback and mandatory merge gates work together?",
        "choices": [
            "Coordinate a focused backlog-remediation campaign.",
            "Keep monitoring after fixes reach the default branch.",
            "Give developers security feedback before merge.",
            "Combine early detection with enforced merge checks."
        ],
        "correct": 3,
        "explanations": [
            "A campaign organizes existing remediation work; it does not prevent every new vulnerability.",
            "New advisories and code changes can introduce fresh risk after an earlier fix.",
            "Early feedback helps avoid introducing vulnerabilities instead of discovering everything at release time.",
            "Detection supplies findings; enforced checks decide whether changes can proceed. They complement one another."
        ],
        "concept": "Complementary SDLC controls",
        "hints": [
            "Consider when feedback arrives and whether remediation remains necessary.",
            "A preventive control and a release condition can address different failure modes."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-037",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which current campaign type can organize source-code findings and trigger Copilot Autofix suggestions?",
        "choices": [
            "Default-branch code scanning alerts",
            "Secret scanning alerts",
            "Dependabot vulnerability alerts",
            "Required status check failures"
        ],
        "correct": 0,
        "explanations": [
            "Code scanning campaigns include alerts on the default branch; they can trigger Copilot Autofix suggestions.",
            "Secret scanning campaigns are documented as public preview; credential remediation is not provided by Copilot Autofix.",
            "The current campaign documentation lists code scanning and secret scanning, not Dependabot alerts as a campaign type.",
            "A failed required check is a merge-policy result, not a supported security campaign alert type."
        ],
        "concept": "Code campaign support",
        "hints": [
            "Use the documented alert types rather than assuming every security list is supported.",
            "Separate campaign coordination from the actual remediation mechanism."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns"
    },
    {
        "id": "ghas-ecosystem-038",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which documented campaign alert type is in public preview and does not receive credential fixes from Copilot Autofix?",
        "choices": [
            "Secret scanning alerts",
            "Dependabot vulnerability alerts",
            "Required status check failures",
            "Default-branch code scanning alerts"
        ],
        "correct": 0,
        "explanations": [
            "Secret scanning campaigns are documented as public preview; credential remediation is not provided by Copilot Autofix.",
            "The current campaign documentation lists code scanning and secret scanning, not Dependabot alerts as a campaign type.",
            "A failed required check is a merge-policy result, not a supported security campaign alert type.",
            "Code scanning campaigns include alerts on the default branch; they can trigger Copilot Autofix suggestions."
        ],
        "concept": "Secret campaign preview boundary",
        "hints": [
            "Use the documented alert types rather than assuming every security list is supported.",
            "Separate campaign coordination from the actual remediation mechanism."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns"
    },
    {
        "id": "ghas-ecosystem-039",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "A repository’s known findings were fixed last month. Which practice addresses risk introduced by later code or advisory changes?",
        "choices": [
            "Give developers security feedback before merge.",
            "Combine early detection with enforced merge checks.",
            "Coordinate a focused backlog-remediation campaign.",
            "Keep monitoring after fixes reach the default branch."
        ],
        "correct": 3,
        "explanations": [
            "Early feedback helps avoid introducing vulnerabilities instead of discovering everything at release time.",
            "Detection supplies findings; enforced checks decide whether changes can proceed. They complement one another.",
            "A campaign organizes existing remediation work; it does not prevent every new vulnerability.",
            "New advisories and code changes can introduce fresh risk after an earlier fix."
        ],
        "concept": "Continuous security lifecycle",
        "hints": [
            "Consider when feedback arrives and whether remediation remains necessary.",
            "A preventive control and a release condition can address different failure modes."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-040",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which automation keeps supported dependency versions current even without a newly disclosed vulnerability?",
        "choices": [
            "Dependabot alerts",
            "Code scanning",
            "Dependabot version updates",
            "Dependabot security updates"
        ],
        "correct": 2,
        "explanations": [
            "Alerts notify maintainers of known vulnerable dependencies; an alert is not itself an upgrade pull request.",
            "Code scanning analyzes application source rather than performing package version upgrades.",
            "Version updates propose dependency upgrades even when no vulnerability advisory requires them.",
            "Security updates propose changes to resolve known vulnerabilities in dependencies."
        ],
        "concept": "Routine dependency maintenance",
        "hints": [
            "Differentiate staying current from responding to an identified vulnerability.",
            "Consider whether the requested output is an alert, a dependency change, or source-code analysis."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-secrets-001",
        "domain": "Configure and use Secret Protection",
        "prompt": "A developer commits a live cloud access token and finds a secret-scanning alert. What should happen first?",
        "choices": [
            "Revoke or rotate the token",
            "Dismiss the alert as a false positive",
            "Wait for the next scheduled scan",
            "Rewrite the repository history"
        ],
        "correct": 0,
        "explanations": [
            "Provider-side revocation stops use of the exposed credential.",
            "Dismissal changes alert status, not token validity.",
            "A later scan does not contain an active credential.",
            "History cleanup alone leaves the credential usable."
        ],
        "concept": "Credential revocation",
        "hints": [
            "What action invalidates the credential itself?",
            "Which step reduces the immediate exposure?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-002",
        "domain": "Configure and use Secret Protection",
        "prompt": "Secret scanning is enabled after a repository has existed for years. Which content is within its Git-history scan scope?",
        "choices": [
            "Only new commits to the default branch",
            "The full Git history across repository branches",
            "Only files still visible at current branch tips across the repository",
            "Only pull requests opened after secret scanning was enabled"
        ],
        "correct": 1,
        "explanations": [
            "The scan is not limited to commits made after activation.",
            "Secret scanning examines repository history across branches.",
            "Current files alone omit secrets removed from later revisions.",
            "Older commits are not excluded by the enablement date."
        ],
        "concept": "Historical scan scope",
        "hints": [
            "What repository content can retain an earlier leak?",
            "Does enabling the feature erase prior commits?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-003",
        "domain": "Configure and use Secret Protection",
        "prompt": "Push protection blocks a commit because it contains a real provider token. What should the author do to proceed safely?",
        "choices": [
            "Rename the file so the scanner cannot recognize it",
            "Disable secret scanning for the repository",
            "Remove the token; rotate it if exposed",
            "Choose a bypass reason and leave the token in the change"
        ],
        "correct": 2,
        "explanations": [
            "Changing a filename does not neutralize a credential.",
            "Disabling detection weakens protection rather than correcting the secret.",
            "Removing the credential and handling its exposure addresses the block safely.",
            "A bypass permits the push; it does not make the token safe."
        ],
        "concept": "Responding to a blocked push",
        "hints": [
            "What triggered the block, and is the value a real credential?",
            "Which correction removes the sensitive value rather than evading detection?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-004",
        "domain": "Configure and use Secret Protection",
        "prompt": "A secret-scanning alert shows no validity result for a detected token. What does that status establish?",
        "choices": [
            "The alert is necessarily a false positive",
            "The token was confirmed revoked",
            "The token was confirmed active",
            "No validity conclusion is available from that result"
        ],
        "correct": 3,
        "explanations": [
            "Validity status alone does not classify the detection as false.",
            "An unknown result does not confirm revocation.",
            "Missing validation is not proof of an active token.",
            "Unknown means the service could not determine validity."
        ],
        "concept": "Interpreting validity status",
        "hints": [
            "What does the result actually say about verification?",
            "Can lack of a check prove either valid or revoked?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/validity-checks"
    },
    {
        "id": "ghas-secrets-005",
        "domain": "Configure and use Secret Protection",
        "prompt": "An incident team has many secret alerts and wants to investigate credentials that may still work first. Which signal helps prioritize that review?",
        "choices": [
            "Whether a validity check reports the secret as active",
            "The number of files in the repository",
            "The age of the branch name",
            "Whether the alert was created on a weekday"
        ],
        "correct": 0,
        "explanations": [
            "A positive validity result indicates a credential may still be usable.",
            "Repository size does not establish credential status.",
            "Branch naming age is unrelated to validity.",
            "Alert creation day is not an activity check."
        ],
        "concept": "Validity-based prioritization",
        "hints": [
            "Which signal relates directly to credential usability?",
            "What can a provider validation result tell responders?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/validity-checks"
    },
    {
        "id": "ghas-secrets-006",
        "domain": "Configure and use Secret Protection",
        "prompt": "A supported partner token's displayed validity result predates a provider-side change. Partner validity checks are enabled. Which alert control requests a current result?",
        "choices": [
            "Close as revoked",
            "Verify secret",
            "Report leak",
            "Reopen alert"
        ],
        "correct": 1,
        "explanations": [
            "Closing records a resolution; it does not request another provider check.",
            "Verify secret performs an on-demand validity check for a supported secret.",
            "Report leak is a separate workflow for eligible leaked GitHub personal access tokens.",
            "Reopening changes alert disposition, not the age of its validation result."
        ],
        "concept": "On-demand validity refresh",
        "hints": [
            "Consider which operation contacts the issuing provider.",
            "A stored result and a new check are different operations."
        ],
        "source": "https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts"
    },
    {
        "id": "ghas-secrets-007",
        "domain": "Configure and use Secret Protection",
        "prompt": "A company issues credentials with a format that GitHub's built-in patterns do not recognize. What can Secret Protection add for this format?",
        "choices": [
            "A Dependabot registry entry",
            "A repository ruleset that rewrites commits",
            "A custom secret-scanning pattern",
            "A CodeQL query pack for dependency alerts"
        ],
        "correct": 2,
        "explanations": [
            "Registries tell Dependabot where packages are hosted.",
            "Rulesets govern repository actions but do not define secret detectors.",
            "Custom patterns extend detection to organization-specific secret formats.",
            "CodeQL query packs analyze source code, not secret formats."
        ],
        "concept": "Custom credential detection",
        "hints": [
            "Is the credential format provider-specific or unique to the organization?",
            "Which detection mechanism accepts a pattern for an organization-specific secret?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns"
    },
    {
        "id": "ghas-secrets-008",
        "domain": "Configure and use Secret Protection",
        "prompt": "An administrator has drafted a custom secret pattern and wants to assess matches before publishing it. Which step is intended for that check?",
        "choices": [
            "Publish the pattern before enabling push protection",
            "Upload SARIF results from an external scanner",
            "Dismiss existing alerts to treat the matches as known",
            "Run a dry run on representative repository content"
        ],
        "correct": 3,
        "explanations": [
            "Publishing and enabling push protection are later activation steps, not a prepublication check.",
            "SARIF uploads external analysis results; it does not preview a custom secret pattern.",
            "Dismissing alerts changes their handling, but does not test the pattern's matching behavior.",
            "A dry run previews pattern matches in repository content before publication."
        ],
        "concept": "Custom-pattern dry runs",
        "hints": [
            "What should be checked before turning a new detector on?",
            "Which pattern workflow previews matches without publishing the pattern?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns"
    },
    {
        "id": "ghas-secrets-009",
        "domain": "Configure and use Secret Protection",
        "prompt": "During a pilot, a custom secret pattern flags synthetic identifiers that cannot authenticate. What should the administrator adjust before enabling the detector?",
        "choices": [
            "Adjust the expression and test representative positive and negative examples",
            "Publish it and dismiss every resulting alert",
            "Use the same expression as a package version constraint",
            "Exclude the repository from all security features"
        ],
        "correct": 0,
        "explanations": [
            "Testing both matches and nonmatches helps reduce false positives.",
            "Publishing a noisy pattern transfers avoidable triage to responders.",
            "Package constraints do not define secret formats.",
            "Turning off all security features is broader than tuning one detector."
        ],
        "concept": "Pattern precision tuning",
        "hints": [
            "What evidence shows whether a proposed match is a real secret?",
            "Which step can refine recall without accepting known false matches?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns"
    },
    {
        "id": "ghas-secrets-010",
        "domain": "Configure and use Secret Protection",
        "prompt": "A custom pattern's dry run produces acceptable results. What sequence makes it an active detector?",
        "choices": [
            "Wait for Dependabot to import the pattern",
            "Publish the pattern, then enable push protection for it if prevention is needed",
            "Enable push protection first, then discard the pattern",
            "Create a branch protection rule with the regex"
        ],
        "correct": 1,
        "explanations": [
            "Dependabot does not manage secret-scanning patterns.",
            "A pattern must be published before its optional push-protection setting can be enabled.",
            "A protection setting cannot activate an unpublished detector.",
            "Branch rules do not register custom secret patterns."
        ],
        "concept": "Custom-pattern activation sequence",
        "hints": [
            "What lifecycle step follows successful testing?",
            "Does the prevention toggle apply before the detector is published?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns"
    },
    {
        "id": "ghas-secrets-011",
        "domain": "Configure and use Secret Protection",
        "prompt": "A contributor bypasses push protection because a blocked token is needed briefly for a test. What should the team do next?",
        "choices": [
            "Delete the bypass audit event",
            "Disable all future secret alerts",
            "Assess the secret; promptly revoke or remove it",
            "Assume the token is safe because GitHub recorded a reason"
        ],
        "correct": 2,
        "explanations": [
            "Audit records should remain available for review.",
            "Suppressing alerts does not address the credential.",
            "A bypass does not remove exposure or make a credential harmless.",
            "Recording a reason documents the decision but does not neutralize the secret."
        ],
        "concept": "Deferred-fix bypass lifecycle",
        "hints": [
            "What does a bypass change, and what remains exposed?",
            "Which follow-up handles both the exception and the credential risk?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-012",
        "domain": "Configure and use Secret Protection",
        "prompt": "A GitHub.com user has user-level push protection enabled but has not enabled repository-level secret scanning. Which statement describes the user-level control?",
        "choices": [
            "It scans the full history of every private repository in the account",
            "It creates a repository alert for each bypass without secret scanning",
            "It replaces organization-managed Secret Protection",
            "It blocks supported secret pushes to public repositories"
        ],
        "correct": 3,
        "explanations": [
            "User-level protection is not a full-history private-repository scan.",
            "A bypass alert is not guaranteed by the user-only control.",
            "Account-level controls do not replace repository or organization features.",
            "User-level push protection is an account-scoped control for public repositories."
        ],
        "concept": "User push-protection destination scope",
        "hints": [
            "Which repositories does the account-level feature cover?",
            "Is user-level prevention the same as repository-level alerting?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-013",
        "domain": "Configure and use Secret Protection",
        "prompt": "An enterprise wants contributors to request approval instead of independently bypassing a push-protection block. Which control matches that policy?",
        "choices": [
            "Delegated bypass for push protection",
            "A Dependabot ignore rule",
            "A required code review",
            "A secret-scanning validity check"
        ],
        "correct": 0,
        "explanations": [
            "Delegated bypass routes an exception request for approval.",
            "Dependabot ignore rules affect dependency updates.",
            "Code review is not the delegated push-protection bypass workflow.",
            "Validity checks assess detected credentials rather than approve bypasses."
        ],
        "concept": "Delegated bypass governance",
        "hints": [
            "Which action needs an approver rather than a contributor-only decision?",
            "What feature puts bypass authority under a review process?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-014",
        "domain": "Configure and use Secret Protection",
        "prompt": "A security team wants a contributor to bypass a specific blocked push after review, without exempting future matching secrets. What should it use?",
        "choices": [
            "A repository-wide disablement of push protection",
            "A bypass request or approved bypass for that push",
            "A global exclusion for the secret's file path",
            "A new custom pattern that never matches"
        ],
        "correct": 1,
        "explanations": [
            "Disabling protection is broader than granting a reviewed exception.",
            "A bypass applies to the reviewed push rather than creating a permanent exception.",
            "A path exclusion can hide future detections in that location.",
            "A pattern that never matches disables detection for its format."
        ],
        "concept": "Bypass privileges versus exclusions",
        "hints": [
            "Is the intent to approve one push or suppress later detection?",
            "Which mechanism scopes the exception to the blocked event?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-015",
        "domain": "Configure and use Secret Protection",
        "prompt": "A repository administrator wants visibility when someone bypasses repository-level push protection. What should they expect?",
        "choices": [
            "The push is rejected after the commit is already stored",
            "Only a Dependabot alert is generated",
            "A secret-scanning alert may be created",
            "The bypass silently changes the secret into a test value"
        ],
        "correct": 2,
        "explanations": [
            "The bypass permits the push rather than rejecting it afterward.",
            "Dependabot alerts concern vulnerable dependencies.",
            "Repository-level bypasses can produce an alert for follow-up.",
            "A bypass does not alter the credential's value or exposure."
        ],
        "concept": "Repository bypass visibility",
        "hints": [
            "What should remain visible after a contributor overrides prevention?",
            "Which detection record can support follow-up on a bypass?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-016",
        "domain": "Configure and use Secret Protection",
        "prompt": "A repository receives changes through command-line pushes and a GitHub web edit. Which statement about push protection is accurate?",
        "choices": [
            "It applies only to commits created in the web editor",
            "It is a scheduled scan that runs after merging",
            "It checks package advisories instead of credentials",
            "Multiple supported GitHub push entry points"
        ],
        "correct": 3,
        "explanations": [
            "The control is not limited to web-created commits.",
            "Push protection acts during the push, not as a scheduled post-merge scan.",
            "Dependency advisories are a separate security function.",
            "Protection covers supported pushes through multiple supported interfaces."
        ],
        "concept": "Push-protection entry points",
        "hints": [
            "When in the contribution flow should the secret be blocked?",
            "Is this control limited to one interface or one type of finding?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-017",
        "domain": "Configure and use Secret Protection",
        "prompt": "A team member pastes a credential into a pull-request comment rather than a source file. Which statement is accurate?",
        "choices": [
            "Supported pull-request content",
            "Secret scanning only scans compiled binaries",
            "Comments are checked only by CodeQL",
            "The credential is safe because it is outside Git history"
        ],
        "correct": 0,
        "explanations": [
            "Secret scanning includes supported pull-request content, not only code files.",
            "Binary analysis is not the sole scope of secret scanning.",
            "CodeQL is not the only feature that can inspect textual content.",
            "A secret in a comment can still be exposed."
        ],
        "concept": "Non-code secret exposure",
        "hints": [
            "Where was the credential published?",
            "Can text in collaboration features expose a usable secret?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-018",
        "domain": "Configure and use Secret Protection",
        "prompt": "GitHub adds detection support for a newly recognized provider token. What can secret scanning do with existing repositories?",
        "choices": [
            "Stop scanning older branches permanently",
            "Rescan repository content for the new secret type",
            "Change all historical commits to remove matching values",
            "Rotate every credential without involving its provider"
        ],
        "correct": 1,
        "explanations": [
            "New detectors do not inherently disable historical branch scans.",
            "GitHub periodically rescans repositories as new secret types are added.",
            "Detection does not rewrite commit history.",
            "Credential rotation is performed with the issuing provider."
        ],
        "concept": "Rescanning with new detectors",
        "hints": [
            "What changed in the detection capability?",
            "Can new pattern support reveal earlier exposures?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-019",
        "domain": "Configure and use Secret Protection",
        "prompt": "A scanner detects a provider-issued token and notifies the service provider through its partner integration. How does that differ from generic detection?",
        "choices": [
            "Partner patterns are only for package manifests",
            "Both types prevent every secret from being committed",
            "Partner patterns may add provider validation",
            "Generic patterns automatically revoke every provider token"
        ],
        "correct": 2,
        "explanations": [
            "Package manifests are not the defining scope of partner patterns.",
            "Detection does not guarantee every leak is blocked.",
            "Partner integration can validate a known provider credential; generic detection has no such provider-specific check.",
            "A detector does not itself revoke every credential."
        ],
        "concept": "Provider and generic patterns",
        "hints": [
            "Does the credential type have a service provider able to validate it?",
            "Which distinction is about provider integration rather than format alone?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-020",
        "domain": "Configure and use Secret Protection",
        "prompt": "A secret-scanning finding appears to match a test fixture, but the team has not verified whether the value is inert. What is the sound response?",
        "choices": [
            "Close it because test directories are always safe",
            "Delete the alert without checking the credential",
            "Assume a validity check will always identify test values",
            "Confirm the value is nonfunctional or revoked before closing the alert as resolved"
        ],
        "correct": 3,
        "explanations": [
            "A test location does not prove a value is harmless.",
            "Removing a record does not verify or contain the credential.",
            "Validity checks are not guaranteed for every secret type.",
            "Resolution should reflect evidence that the credential cannot be used."
        ],
        "concept": "Accurate alert closure",
        "hints": [
            "What evidence supports a safe closure?",
            "Can a filename or folder name prove a credential is inert?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-021",
        "domain": "Configure and use Secret Protection",
        "prompt": "A response integration already has a secret-scanning alert number. Which REST request lists that alert's recorded secret locations, rather than listing other alerts?",
        "choices": [
            "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
            "GET /repos/{owner}/{repo}/secret-scanning/alerts",
            "GET /orgs/{org}/secret-scanning/alerts",
            "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
        ],
        "correct": 0,
        "explanations": [
            "The locations subresource enumerates occurrences belonging to the specified secret alert.",
            "The repository alert collection lists alerts, not one alert's location records.",
            "The organization collection spans alerts across eligible repositories, not one alert's occurrences.",
            "Code-scanning alerts are a different resource and do not enumerate secret locations."
        ],
        "concept": "Secret occurrence enumeration",
        "hints": [
            "Determine whether the requested resource is a collection of alerts or of occurrences.",
            "The alert identity is already known."
        ],
        "source": "https://docs.github.com/en/rest/secret-scanning/secret-scanning#list-locations-for-a-secret-scanning-alert"
    },
    {
        "id": "ghas-secrets-022",
        "domain": "Configure and use Secret Protection",
        "prompt": "Several repositories need consistent detection of an organization-issued token format. Which configuration scope lets security administrators share the detector?",
        "choices": [
            "In the code-scanning SARIF upload",
            "Organization custom-pattern settings",
            "In each developer's local Git configuration",
            "In a Dependabot package registry"
        ],
        "correct": 1,
        "explanations": [
            "SARIF uploads findings rather than configuring credential detection.",
            "Organization custom patterns can be applied across chosen repositories.",
            "Local Git settings do not publish an organization detector.",
            "Dependabot registries provide package access, not secret patterns."
        ],
        "concept": "Organization custom patterns",
        "hints": [
            "What scope should own a detector shared by multiple repositories?",
            "Which configuration belongs to the secret-detection feature itself?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns"
    },
    {
        "id": "ghas-secrets-023",
        "domain": "Configure and use Secret Protection",
        "prompt": "The provider has confirmed revocation, and maintainers have removed the exposed token from current files. Its secret-scanning alert remains open. What completes the alert workflow?",
        "choices": [
            "Wait for cleanup to close the alert",
            "Rerun the CodeQL analysis workflow",
            "Close the alert with the appropriate reason",
            "Republish the repository's custom pattern"
        ],
        "correct": 2,
        "explanations": [
            "Removing a token from files does not automatically close its secret-scanning alert.",
            "CodeQL analyzes code weaknesses; rerunning it does not resolve a credential alert.",
            "After remediation, manually close the alert and record its resolution reason.",
            "Publishing a detector is unrelated to closing this remediated credential alert."
        ],
        "concept": "Secret alert closure after remediation",
        "hints": [
            "Separate provider remediation from GitHub alert disposition.",
            "Which step updates the alert record itself?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/resolving-alerts"
    },
    {
        "id": "ghas-secrets-024",
        "domain": "Configure and use Secret Protection",
        "prompt": "A team expects provider-backed validity results, but the alert lacks that information. Which prerequisite should they check?",
        "choices": [
            "Whether the repository has a package lockfile",
            "Whether CodeQL uses the security-extended suite",
            "Whether the token was committed on the default branch",
            "Check secret-type support and feature availability"
        ],
        "correct": 3,
        "explanations": [
            "A lockfile is unrelated to credential validation.",
            "CodeQL query selection does not enable provider validation.",
            "The branch location alone does not determine support for validity checks.",
            "Validity checks are available only for supported secret types and configurations."
        ],
        "concept": "Validity-check support",
        "hints": [
            "Does the detected credential type have a supported validation integration?",
            "Which capability is separate from finding the secret in source?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/validity-checks"
    },
    {
        "id": "ghas-secrets-025",
        "domain": "Configure and use Secret Protection",
        "prompt": "An administrator reviews a push-protection bypass. Which information is useful for understanding and auditing the exception?",
        "choices": [
            "The contributor, reason, and affected secret or push context",
            "The repository's Dependabot schedule only",
            "The CodeQL database size",
            "The number of stars the repository has"
        ],
        "correct": 0,
        "explanations": [
            "The bypass record provides context for reviewing who bypassed and why.",
            "Dependency schedules do not explain a secret-protection exception.",
            "Database size does not describe the bypass event.",
            "Popularity is not evidence about the decision."
        ],
        "concept": "Push-bypass auditability",
        "hints": [
            "What facts explain the decision to override the block?",
            "Which record helps reviewers investigate an exception afterward?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-026",
        "domain": "Configure and use Secret Protection",
        "prompt": "Push protection flags a value that the author verifies is a nonfunctional placeholder. Which bypass reason most accurately records the situation?",
        "choices": [
            "The provider has no security policy",
            "It's a false positive",
            "It's used in tests",
            "It's a low-impact credential"
        ],
        "correct": 1,
        "explanations": [
            "A provider policy does not determine whether a value is a false match.",
            "A verified placeholder that is not a credential is a false positive.",
            "A test location alone does not identify why detection was incorrect.",
            "A real low-impact credential remains a credential."
        ],
        "concept": "False-positive bypass classification",
        "hints": [
            "Is the detected value actually a credential?",
            "Which reason distinguishes incorrect detection from a deliberate test use?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-027",
        "domain": "Configure and use Secret Protection",
        "prompt": "A repository uses `.github/secret_scanning.yml` with `paths-ignore` for generated documentation. What is the main consequence?",
        "choices": [
            "The rule encrypts files in excluded paths",
            "The file suppresses Dependabot alerts for matching packages",
            "Excluded paths bypass secret scanning and push protection",
            "It hides alerts but leaves push protection active for those paths"
        ],
        "correct": 2,
        "explanations": [
            "Path exclusions do not encrypt or otherwise neutralize credentials.",
            "Secret-scanning exclusions do not suppress package vulnerability alerts.",
            "The configuration excludes matching paths from secret scanning and push protection.",
            "The exclusion affects push protection too; it is not merely an alert-visibility setting."
        ],
        "concept": "Detection exclusion risk",
        "hints": [
            "What security coverage is reduced by an ignored path?",
            "Could a real credential appear in the excluded content?"
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-secrets/customize-leak-detection/exclude-folders-and-files"
    },
    {
        "id": "ghas-secrets-028",
        "domain": "Configure and use Secret Protection",
        "prompt": "Responders need to discuss an exposed credential in a public repository. Which practice avoids creating another leak?",
        "choices": [
            "Paste the complete token into a public issue for context",
            "Add the token to a pull-request description",
            "Include the value in a commit message naming the incident",
            "Share a redacted alert reference and coordinate in a restricted channel"
        ],
        "correct": 3,
        "explanations": [
            "Public issue text can create another exposure.",
            "Pull-request descriptions can be exposed and scanned too.",
            "Commit messages can persist in repository history.",
            "A redacted reference supports investigation without redisclosing the credential."
        ],
        "concept": "Safe secret-incident collaboration",
        "hints": [
            "Can the discussion repeat the sensitive value?",
            "What communication preserves context without reproducing the credential?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-029",
        "domain": "Configure and use Secret Protection",
        "prompt": "A secret is found in an old commit but is absent from the current file. Why can it still require response?",
        "choices": [
            "The value remains in Git history and may still be usable",
            "Secret scanning reports only values in the current branch",
            "An old commit automatically invalidates the credential",
            "The alert proves the token has never been copied"
        ],
        "correct": 0,
        "explanations": [
            "Removing a value from the latest file does not erase earlier commits or invalidate it.",
            "Secret scanning covers repository history on branches.",
            "Commit age does not revoke a credential.",
            "Detection cannot establish whether the value was copied elsewhere."
        ],
        "concept": "Historical exposure investigation",
        "hints": [
            "Could the value remain accessible in an earlier revision?",
            "Does disappearance from the latest file revoke a credential?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-030",
        "domain": "Configure and use Secret Protection",
        "prompt": "Secret scanning already detects provider-issued tokens. A team also needs built-in detection of private keys and connection strings that are not tied to one provider. Which extension fits?",
        "choices": [
            "Partner validity checks",
            "Generic patterns",
            "Organization custom patterns",
            "Push-protection exemptions"
        ],
        "correct": 1,
        "explanations": [
            "Validity checks evaluate supported detected credentials, not add generic formats.",
            "Generic patterns cover secrets such as private keys and connection strings without a specific provider.",
            "Custom patterns require organization-defined expressions; the request is for built-in formats.",
            "Exemptions skip prevention for selected actors; they do not extend detection."
        ],
        "concept": "Generic secret detection",
        "hints": [
            "Distinguish a known provider from a general credential structure.",
            "The requirement is not a proprietary token format."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-031",
        "domain": "Configure and use Secret Protection",
        "prompt": "A custom secret expression works in a different regex tester but uses constructs GitHub's custom-pattern engine does not support. Which compatibility target should the author use?",
        "choices": [
            "JavaScript RegExp syntax",
            "All PCRE constructs and modifiers",
            "Hyperscan's supported PCRE subset",
            "Git pathspec wildcard syntax"
        ],
        "correct": 2,
        "explanations": [
            "A JavaScript tester can accept syntax unavailable to the custom-pattern engine.",
            "GitHub does not support all PCRE constructs or Hyperscan option modifiers.",
            "Custom patterns use Hyperscan and its documented subset of PCRE syntax.",
            "Pathspec syntax selects paths; it is not the custom secret regex language."
        ],
        "concept": "Custom-pattern regex compatibility",
        "hints": [
            "A successful test in one regex engine is not portable proof.",
            "Check the detector's documented syntax rather than only the examples."
        ],
        "source": "https://docs.github.com/en/code-security/reference/secret-security/custom-patterns"
    },
    {
        "id": "ghas-secrets-032",
        "domain": "Configure and use Secret Protection",
        "prompt": "A team enables push protection and assumes no credential can ever reach the repository. Which assessment is most accurate?",
        "choices": [
            "It retroactively revokes every secret in history",
            "It scans only dependency manifests",
            "It prevents credentials from being shared outside GitHub",
            "Blocks supported pushes, not every secret leak"
        ],
        "correct": 3,
        "explanations": [
            "Push protection does not revoke historical credentials.",
            "Dependency manifests are not its only content scope.",
            "A repository control cannot prevent all external disclosure.",
            "Coverage depends on supported secret types and push paths; protection is not a universal guarantee."
        ],
        "concept": "Push-protection detection limits",
        "hints": [
            "What kinds of coverage can a preventive control reasonably guarantee?",
            "Could an unsupported or already exposed secret fall outside this control?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-033",
        "domain": "Configure and use Secret Protection",
        "prompt": "A custom pattern already captures the token's length and alphabet. It must also require a digit inside the token, without constraining surrounding text. Which field fits?",
        "choices": [
            "Additional match requirements",
            "Before secret",
            "After secret",
            "Pattern name"
        ],
        "correct": 0,
        "explanations": [
            "Additional match requirements can require the secret itself to match a digit expression.",
            "Before secret constrains preceding content, not characters inside the secret.",
            "After secret constrains following content, not the secret's internal composition.",
            "Pattern name labels the detector but does not impose matching conditions."
        ],
        "concept": "Internal constraints in custom patterns",
        "hints": [
            "Identify whether the condition concerns the captured value or its neighbors.",
            "The token's basic format is already configured."
        ],
        "source": "https://docs.github.com/en/code-security/reference/secret-security/custom-patterns"
    },
    {
        "id": "ghas-secrets-034",
        "domain": "Configure and use Secret Protection",
        "prompt": "A repository integration writes content through the GitHub REST API. Which statement should the team use when assessing push-protection coverage?",
        "choices": [
            "Replace the integration with Dependabot",
            "Check the documented API behavior and enable the supported repository-level protection path",
            "Assume every API write bypasses all secret checks",
            "Assume user-level push protection creates repository alerts for API writes"
        ],
        "correct": 1,
        "explanations": [
            "Dependabot does not protect API writes from secret exposure.",
            "API behavior and repository configuration determine which protections apply.",
            "A blanket bypass claim is not a safe assumption about supported write paths.",
            "User-level protections do not substitute for repository-level coverage and alerting."
        ],
        "concept": "API content-write protection",
        "hints": [
            "Which write interface is being used, and what does its documentation promise?",
            "What should be verified before claiming an integration is covered or exempt?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-035",
        "domain": "Configure and use Secret Protection",
        "prompt": "A push-protection bypass request is marked Approved, but its commits have not reached the repository. Which interpretation follows the documented request statuses?",
        "choices": [
            "Approval confirms the commits were pushed",
            "Approval permanently exempts the contributor",
            "Approval permits the push but does not perform it",
            "Approval closes the related credential incident"
        ],
        "correct": 2,
        "explanations": [
            "Approved explicitly allows for commits that have not yet been pushed.",
            "A request approval is not an actor-level exemption from future protection.",
            "The contributor still has to push; approval alone does not publish commits.",
            "Bypass approval does not revoke a credential or finish incident remediation."
        ],
        "concept": "Bypass approval versus delivery",
        "hints": [
            "Distinguish permission to perform an operation from its execution.",
            "Read the status in the context of the commits' delivery."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/manage-bypass-requests/review-bypass-requests"
    },
    {
        "id": "ghas-secrets-036",
        "domain": "Configure and use Secret Protection",
        "prompt": "A real API key is valid but currently grants access only to a low-risk test service. Which bypass reason is more accurate than calling it a false positive?",
        "choices": [
            "It's a false positive",
            "The scanner found a package advisory",
            "The key is not a credential",
            "It's used in tests"
        ],
        "correct": 3,
        "explanations": [
            "A valid key is not a false match just because its impact seems limited.",
            "Secret detection does not report package advisories.",
            "The scenario confirms the value is a real API key.",
            "A real credential used in a test context is not automatically a false positive."
        ],
        "concept": "False positive versus lower impact",
        "hints": [
            "Is the finding incorrect, or is a real secret used in a limited context?",
            "Which distinction preserves an accurate record of the detection?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
    },
    {
        "id": "ghas-secrets-037",
        "domain": "Configure and use Secret Protection",
        "prompt": "An organization published a custom pattern and enabled push protection for that pattern. One repository has secret scanning but repository-level push protection is off. What is required for this pattern to block supported pushes there?",
        "choices": [
            "Enable push protection on that repository",
            "Republish the pattern at enterprise scope",
            "Increase the organization's dry-run sample",
            "Rename the pattern in organization settings"
        ],
        "correct": 0,
        "explanations": [
            "Organization custom-pattern push protection applies only where repository push protection is enabled.",
            "An enterprise-scoped copy does not replace the repository enablement requirement.",
            "Dry-run sampling evaluates matches; it does not enable repository prevention.",
            "Renaming a detector does not change repository-level protection settings."
        ],
        "concept": "Custom-pattern prevention applicability",
        "hints": [
            "Check the repository prerequisites independently of the shared detector.",
            "Publication and local prevention are separate configuration layers."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns"
    },
    {
        "id": "ghas-secrets-038",
        "domain": "Configure and use Secret Protection",
        "prompt": "A team wants the repository's security responders to receive secret-scanning alerts. What should an administrator configure?",
        "choices": [
            "An SPDX license identifier",
            "Review alert access and notification settings",
            "The package manager's registry URL",
            "A CodeQL build mode"
        ],
        "correct": 1,
        "explanations": [
            "SPDX identifiers describe licenses, not alert recipients.",
            "Alert access and notification settings determine who can see or receive supported alerts.",
            "Registry URLs configure package retrieval.",
            "Build mode affects compiled-code analysis."
        ],
        "concept": "Actionable secret notifications",
        "hints": [
            "Who needs access to review and remediate the alert?",
            "Which settings govern alert visibility and delivery rather than detection syntax?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-039",
        "domain": "Configure and use Secret Protection",
        "prompt": "A developer removes a leaked token from the latest file and closes its alert. What evidence should responders still seek?",
        "choices": [
            "A successful CodeQL query-pack download",
            "A green dependency-review check",
            "Confirmation from the provider that the credential was revoked or replaced",
            "A smaller repository size"
        ],
        "correct": 2,
        "explanations": [
            "Query-pack retrieval is unrelated to credential containment.",
            "Dependency review checks dependency changes, not token status.",
            "Provider confirmation verifies that the exposed credential cannot be used.",
            "Repository size says nothing about token validity."
        ],
        "concept": "Verifying credential containment",
        "hints": [
            "What proves the original credential is no longer usable?",
            "Does deleting the visible occurrence invalidate copies already taken?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-secrets-040",
        "domain": "Configure and use Secret Protection",
        "prompt": "Secret scanning reports a credential months after it was committed. Which statement best describes the timing?",
        "choices": [
            "The credential became exposed only when the alert was created",
            "The late alert proves the credential was never used",
            "Detection automatically resets the credential's expiration date",
            "The alert time is when detection occurred, not necessarily when exposure began"
        ],
        "correct": 3,
        "explanations": [
            "An alert timestamp does not define when the value first became public.",
            "Delayed detection does not establish whether the credential was used.",
            "Scanning cannot change provider-side credential expiration.",
            "A finding can be discovered after the original commit and exposure."
        ],
        "concept": "Detection time versus exposure time",
        "hints": [
            "When did the value first enter an accessible location?",
            "Does the alert timestamp necessarily mark the beginning of exposure?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
    },
    {
        "id": "ghas-supply-001",
        "domain": "Configure and use supply chain security",
        "prompt": "A vulnerable package is not listed directly in a manifest, but appears in the dependency graph. What should the maintainer inspect to learn how it entered the project?",
        "choices": [
            "The package's SPDX license only",
            "The transitive dependency path",
            "The repository's secret-scanning bypass history",
            "The CodeQL query suite"
        ],
        "correct": 1,
        "explanations": [
            "License metadata does not show how a package was included.",
            "A path view traces indirect relationships back to a direct dependency.",
            "Bypass history records secret exceptions, not package ancestry.",
            "Query suites analyze source code."
        ],
        "concept": "Tracing indirect dependencies",
        "hints": [
            "Which relationship connects the package to a declared dependency?",
            "What graph detail explains how a transitive component arrived?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph"
    },
    {
        "id": "ghas-supply-002",
        "domain": "Configure and use supply chain security",
        "prompt": "A procurement team requests a machine-readable list of a repository's current dependencies. Which GitHub artifact fits this request?",
        "choices": [
            "A Dependabot bypass record",
            "A branch protection ruleset",
            "An exported SBOM in SPDX format",
            "A code-scanning SARIF file"
        ],
        "correct": 2,
        "explanations": [
            "A bypass record documents an exception to secret protection.",
            "Rulesets govern repository policies, not software composition output.",
            "GitHub can export the dependency graph as an SPDX SBOM.",
            "SARIF contains code-analysis results rather than the dependency inventory."
        ],
        "concept": "Native SBOM export format",
        "hints": [
            "What artifact inventories software components for downstream tools?",
            "Which standard format does GitHub's dependency-graph export use?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom"
    },
    {
        "id": "ghas-supply-003",
        "domain": "Configure and use supply chain security",
        "prompt": "A build resolves dependencies that are absent from parseable repository manifests. Which mechanism can add that build's dependency snapshot to GitHub?",
        "choices": [
            "SARIF upload",
            "A custom secret pattern",
            "Dependabot auto-triage",
            "Dependency submission API"
        ],
        "correct": 3,
        "explanations": [
            "SARIF uploads code-analysis findings.",
            "Secret patterns detect credential formats.",
            "Auto-triage changes alert handling, not dependency inventory.",
            "Dependency submission adds resolved dependency data to the graph."
        ],
        "concept": "Supplemental dependency snapshots",
        "hints": [
            "What data is missing from static manifest parsing?",
            "Which interface submits a resolved build inventory?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph"
    },
    {
        "id": "ghas-supply-004",
        "domain": "Configure and use supply chain security",
        "prompt": "A pull request changes a lockfile and upgrades a transitive package. Which feature shows the dependency impact before merging?",
        "choices": [
            "Dependency review",
            "Dependabot alerts only",
            "Secret scanning history",
            "CodeQL data-flow analysis"
        ],
        "correct": 0,
        "explanations": [
            "Dependency review displays added, removed, and updated dependencies in the pull request.",
            "Alerts report vulnerable dependencies but do not provide the full change diff.",
            "History scanning searches for exposed credentials.",
            "Data-flow analysis evaluates paths through application code."
        ],
        "concept": "Lockfile change review",
        "hints": [
            "What changed in the pull request beyond the direct manifest entry?",
            "Which view summarizes package additions and version changes before merge?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review"
    },
    {
        "id": "ghas-supply-005",
        "domain": "Configure and use supply chain security",
        "prompt": "Branch protection currently treats dependency review as informational. Which control changes the workflow result into a required merge condition?",
        "choices": [
            "Set a Dependabot update schedule",
            "Require dependency review before merging",
            "Enable the dependency graph without requiring a check",
            "Add a CODEOWNERS entry for the lockfile"
        ],
        "correct": 1,
        "explanations": [
            "Schedules create update proposals, not merge requirements.",
            "A failing check blocks merging only when repository policy requires it to pass.",
            "An inventory feature alone does not enforce a status check.",
            "CODEOWNERS requests review but does not make this action a required status."
        ],
        "concept": "Required dependency-review checks",
        "hints": [
            "What turns a workflow result into an enforcement condition?",
            "Does a failed check block merges without a repository rule requiring success?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-review"
    },
    {
        "id": "ghas-supply-006",
        "domain": "Configure and use supply chain security",
        "prompt": "A pull request introduces a package under a license prohibited by company policy. Which dependency-review action setting can enforce that policy?",
        "choices": [
            "A CodeQL query suite",
            "A Dependabot `registries` credential",
            "A license allowlist or denylist",
            "A secret-scanning `paths-ignore` entry"
        ],
        "correct": 2,
        "explanations": [
            "Query suites select code-analysis rules.",
            "Registry credentials authenticate package retrieval.",
            "The dependency-review action can evaluate license identifiers against policy.",
            "Path exclusions configure secret-scanning scope."
        ],
        "concept": "Dependency license policy",
        "hints": [
            "Which pull-request check evaluates license metadata for changed packages?",
            "Is the restriction about package terms or secret detection?"
        ],
        "source": "https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action"
    },
    {
        "id": "ghas-supply-007",
        "domain": "Configure and use supply chain security",
        "prompt": "A repository wants its dependency-review workflow to fail only when a newly introduced vulnerability is at least high severity. Which setting expresses that threshold?",
        "choices": [
            "`schedule: weekly`",
            "`paths-ignore: high`",
            "`query-filters: security-extended`",
            "`fail-on-severity: high`"
        ],
        "correct": 3,
        "explanations": [
            "A schedule controls when Dependabot checks for updates.",
            "`paths-ignore` is not a dependency-review severity option.",
            "Query filters configure code analysis, not dependency review.",
            "`fail-on-severity` sets the vulnerability severity threshold for the action."
        ],
        "concept": "Review severity thresholds",
        "hints": [
            "Which action input directly names a vulnerability severity cutoff?",
            "What setting should distinguish high findings from lower severities?"
        ],
        "source": "https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action"
    },
    {
        "id": "ghas-supply-008",
        "domain": "Configure and use supply chain security",
        "prompt": "A new advisory is published for a package already present in a repository's dependency graph. Which feature notifies maintainers about the affected dependency?",
        "choices": [
            "Dependabot alerts",
            "Dependabot version updates",
            "Dependency submission",
            "Secret scanning"
        ],
        "correct": 0,
        "explanations": [
            "Dependabot alerts match repository dependencies to advisories in GitHub Advisory Database.",
            "Version updates maintain packages but are not the vulnerability-notification feature.",
            "Submission adds dependency data rather than advisory notifications.",
            "Secret scanning detects exposed credentials."
        ],
        "concept": "Dependabot alert scope",
        "hints": [
            "What connects newly published vulnerability data to existing packages?",
            "Which feature reports known vulnerable dependencies in the graph?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts"
    },
    {
        "id": "ghas-supply-009",
        "domain": "Configure and use supply chain security",
        "prompt": "A dependency is several releases behind, but no advisory marks its version vulnerable. Which statement distinguishes the two conditions?",
        "choices": [
            "It cannot appear in the dependency graph",
            "Outdated does not mean vulnerable",
            "It must have a Dependabot security alert",
            "It is safe to ignore all future updates"
        ],
        "correct": 1,
        "explanations": [
            "The dependency graph can list packages regardless of alert status.",
            "Being behind the latest release is different from matching a known vulnerable range.",
            "Alerts depend on known vulnerability data, not merely a newer release.",
            "An outdated package can still need maintenance or later security updates."
        ],
        "concept": "Vulnerable versus outdated",
        "hints": [
            "Is the concern a known affected version or simply an older release?",
            "What evidence causes a vulnerability alert rather than a routine update?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts"
    },
    {
        "id": "ghas-supply-010",
        "domain": "Configure and use supply chain security",
        "prompt": "A repository has a Dependabot alert for a vulnerable package but receives no proposed fix. Which setting should an administrator verify first?",
        "choices": [
            "Whether the README has an SPDX header",
            "Whether CodeQL scans on a schedule",
            "Whether security updates are enabled",
            "Whether the repository has a custom secret pattern"
        ],
        "correct": 2,
        "explanations": [
            "An SPDX header does not configure Dependabot.",
            "CodeQL scheduling is independent of Dependabot security updates.",
            "Security-update pull requests are created when that update feature is enabled and a fix is available.",
            "Secret-pattern configuration does not enable package updates."
        ],
        "concept": "Security update enablement",
        "hints": [
            "What feature creates a proposed package fix after an alert?",
            "Do alerts alone guarantee an automatic update pull request?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates"
    },
    {
        "id": "ghas-supply-011",
        "domain": "Configure and use supply chain security",
        "prompt": "A dependency is at 1.2.0. Version 1.2.4 is the first patched release and resolves without breaking the graph; 2.0.0 is newer. Which target follows Dependabot security updates' documented objective?",
        "choices": [
            "2.0.0 because security updates always choose latest",
            "1.2.0 with the advisory added to an ignore list",
            "The highest 1.x release regardless of the patch boundary",
            "1.2.4 as the minimum resolving patched version"
        ],
        "correct": 3,
        "explanations": [
            "Always choosing the latest release describes neither the minimal security fix nor its compatibility goal.",
            "Keeping the vulnerable version and ignoring an advisory is not an upgrade to a fix.",
            "Security updates are not an unconditional highest-minor release selection.",
            "Dependabot seeks the minimum patched version that can resolve the dependency graph."
        ],
        "concept": "Minimal patched-version selection",
        "hints": [
            "Distinguish correcting a vulnerability from routine version freshness.",
            "The scenario already establishes that the first patched release resolves."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates"
    },
    {
        "id": "ghas-supply-012",
        "domain": "Configure and use supply chain security",
        "prompt": "A maintainer needs to set package ecosystems, directories, and update schedules for Dependabot. Which repository file should they edit?",
        "choices": [
            "`.github/dependabot.yml`",
            "`.github/codeql.yml`",
            "`.github/secret_scanning.yml`",
            "`CODEOWNERS`"
        ],
        "correct": 0,
        "explanations": [
            "Dependabot update behavior is configured in `.github/dependabot.yml`.",
            "This is not the default file for Dependabot schedules and ecosystems.",
            "This file configures secret-scanning path exclusions.",
            "CODEOWNERS assigns code review responsibility."
        ],
        "concept": "Version update configuration location",
        "hints": [
            "Which configuration owns Dependabot's package update entries?",
            "Where are ecosystem, directory, and schedule settings defined?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference"
    },
    {
        "id": "ghas-supply-013",
        "domain": "Configure and use supply chain security",
        "prompt": "A private package source must be available to Dependabot updates. Which section of `.github/dependabot.yml` declares registry definitions?",
        "choices": [
            "`ignore`",
            "`registries`",
            "`groups`",
            "`updates`"
        ],
        "correct": 1,
        "explanations": [
            "`ignore` excludes matching dependencies or versions from updates.",
            "The top-level `registries` section defines registry access for Dependabot.",
            "`groups` combines compatible package updates.",
            "`updates` configures ecosystem-specific update jobs and can reference registries."
        ],
        "concept": "Dependabot registry configuration",
        "hints": [
            "Which configuration section defines package sources used by Dependabot?",
            "Does this section define a source, a schedule, or an update exclusion?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference"
    },
    {
        "id": "ghas-supply-014",
        "domain": "Configure and use supply chain security",
        "prompt": "A team wants fewer Dependabot pull requests by combining compatible package updates. Where can it define package grouping rules?",
        "choices": [
            "A `queries` block in a CodeQL workflow",
            "The repository's SPDX SBOM",
            "The `groups` configuration in `.github/dependabot.yml`",
            "A `paths-ignore` block in `.github/secret_scanning.yml`"
        ],
        "correct": 2,
        "explanations": [
            "CodeQL query configuration is for code analysis.",
            "An SBOM is inventory output, not update policy.",
            "Dependabot grouping rules are defined in its YAML configuration.",
            "Secret-scanning exclusions do not group package updates."
        ],
        "concept": "Grouped security updates",
        "hints": [
            "Which configuration controls how Dependabot combines package update pull requests?",
            "What file already defines ecosystems and schedules?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference"
    },
    {
        "id": "ghas-supply-015",
        "domain": "Configure and use supply chain security",
        "prompt": "A repository configures Dependabot groups for routine version updates. What should the team verify before assuming security-update pull requests use those same groups?",
        "choices": [
            "Whether the repository has a secret-scanning alert",
            "Whether CodeQL uses a compiled-language build mode",
            "Whether its SBOM contains dependents",
            "Security-update grouping is enabled in this scope"
        ],
        "correct": 3,
        "explanations": [
            "Secret alerts do not determine package-update grouping.",
            "CodeQL build modes do not configure Dependabot.",
            "SBOM dependents are not included in the exported inventory.",
            "Security-update grouping has an enablement setting that may be needed for applicable directories."
        ],
        "concept": "Security update grouping boundaries",
        "hints": [
            "Are routine update groups and security-update groups always enabled together?",
            "Which configuration scope should be checked for grouped security pull requests?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates"
    },
    {
        "id": "ghas-supply-016",
        "domain": "Configure and use supply chain security",
        "prompt": "A Dependabot auto-triage rule snoozes an alert. What does that action do?",
        "choices": [
            "Changes alert handling, not the package",
            "Releases a fixed package version automatically",
            "Removes the vulnerable package from every branch",
            "Disables future advisory matching"
        ],
        "correct": 0,
        "explanations": [
            "Triage rules manage alert treatment, not source changes.",
            "A snooze does not publish a package fix.",
            "An alert rule cannot rewrite every dependency declaration.",
            "Snoozing is not the same as disabling vulnerability detection."
        ],
        "concept": "Auto-triage is not patching",
        "hints": [
            "Did the dependency version change, or only the alert's handling?",
            "Which separate mechanism would propose a code update?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules"
    },
    {
        "id": "ghas-supply-017",
        "domain": "Configure and use supply chain security",
        "prompt": "A Dependabot alert was auto-dismissed under a rule for development-only dependencies. Its dependency is later classified as production. What can happen when the alert metadata changes?",
        "choices": [
            "The original dismissal remains permanent despite metadata changes",
            "The alert can be automatically reopened",
            "A new alert must be manually created for the production scope",
            "The alert can reopen only after a patched version is published"
        ],
        "correct": 1,
        "explanations": [
            "Automatic dismissal is not permanent when the metadata underlying it changes.",
            "Auto-dismissed alerts can reopen when metadata such as dependency scope changes.",
            "The existing auto-dismissed alert can reopen; a manually created replacement is unnecessary.",
            "Metadata changes can trigger reopening without waiting for a patched release."
        ],
        "concept": "Metadata-driven alert reopening",
        "hints": [
            "The rule's original eligibility depended on dependency scope.",
            "Consider whether automatic dismissal is permanent."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules"
    },
    {
        "id": "ghas-supply-018",
        "domain": "Configure and use supply chain security",
        "prompt": "An auto-triage rule dismisses alerts that meet a metadata condition. What safeguard best reduces accidental suppression of important findings?",
        "choices": [
            "Disable notifications for alerts matched by the rule",
            "Limit the rule to one ecosystem and rarely review matches",
            "Review rule criteria and audit affected alerts regularly",
            "Apply the rule to all matches and defer manual review"
        ],
        "correct": 2,
        "explanations": [
            "Turning off notifications reduces visibility rather than preventing unsafe suppression.",
            "A narrower scope can help, but rarely reviewing matches leaves mistakes undiscovered.",
            "Reviewing conditions and affected alerts helps catch unintended dismissals.",
            "Applying a rule broadly before review can suppress unrelated vulnerability alerts."
        ],
        "concept": "Reviewing automated triage",
        "hints": [
            "What risk follows from a rule that matches too broadly?",
            "Which practice provides oversight without abandoning automation?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules"
    },
    {
        "id": "ghas-supply-019",
        "domain": "Configure and use supply chain security",
        "prompt": "An organization wants an auto-triage rule to target a specific package ecosystem and dependency scope. Which information should its conditions use?",
        "choices": [
            "The contributor's push-protection bypass reason",
            "A SARIF source line",
            "The repository's star count",
            "The alert's package and dependency metadata"
        ],
        "correct": 3,
        "explanations": [
            "Push-protection reasons belong to secret scanning.",
            "SARIF locations describe code-analysis findings.",
            "Repository popularity does not describe dependency risk.",
            "Dependabot rules can target alert metadata such as package and scope."
        ],
        "concept": "Metadata-targeted auto-triage",
        "hints": [
            "Which attributes distinguish the package alerts that should match?",
            "What kind of data should an alert-handling rule evaluate?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules"
    },
    {
        "id": "ghas-supply-020",
        "domain": "Configure and use supply chain security",
        "prompt": "A build workflow submits a dependency snapshot before its dependency-resolution job finishes. What is the likely issue?",
        "choices": [
            "Unresolved dependencies may be missing from the inventory",
            "Secret scanning will convert the snapshot to SARIF",
            "Dependabot will infer every package from the workflow name",
            "The snapshot will automatically include package dependents"
        ],
        "correct": 0,
        "explanations": [
            "A snapshot should reflect the resolved dependency set from the build.",
            "Secret scanning does not transform dependency submissions.",
            "Workflow names do not identify resolved packages.",
            "A repository SBOM lists dependencies, not all projects that depend on the repository."
        ],
        "concept": "Dependency submission ordering",
        "hints": [
            "At what point is the build's full dependency set known?",
            "Could an early snapshot omit components that resolution has not produced?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph"
    },
    {
        "id": "ghas-supply-021",
        "domain": "Configure and use supply chain security",
        "prompt": "A team wants dependency checks to run on changes targeting its main branch. Where does it configure the dependency-review action trigger?",
        "choices": [
            "In a CodeQL query pack",
            "In a GitHub Actions workflow triggered by `pull_request`",
            "In `dependabot.yml` under `registries`",
            "In the repository's SBOM"
        ],
        "correct": 1,
        "explanations": [
            "Query packs configure static analysis.",
            "The action is run from a workflow, commonly on pull requests.",
            "Registries configure package sources, not workflow events.",
            "An SBOM is an exported inventory, not a workflow trigger."
        ],
        "concept": "Dependency-review workflow orchestration",
        "hints": [
            "What event should evaluate the proposed dependency diff before merging?",
            "Which file type declares GitHub Actions event triggers?"
        ],
        "source": "https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action"
    },
    {
        "id": "ghas-supply-022",
        "domain": "Configure and use supply chain security",
        "prompt": "A dependency-review action cannot find dependency data for a pull request. Which foundation should an administrator verify?",
        "choices": [
            "That the repository has a CodeQL database",
            "That custom secret patterns are published",
            "Enable graph support for that ecosystem",
            "That push protection is set to block"
        ],
        "correct": 2,
        "explanations": [
            "CodeQL databases contain code for query analysis.",
            "Secret patterns do not supply package metadata.",
            "Dependency review relies on dependency-graph data and supported ecosystems.",
            "Push protection scans for credentials, not package inventory."
        ],
        "concept": "Dependency-review data prerequisites",
        "hints": [
            "What source of package inventory does dependency review use?",
            "Which repository feature should be enabled for dependency information?"
        ],
        "source": "https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action"
    },
    {
        "id": "ghas-supply-023",
        "domain": "Configure and use supply chain security",
        "prompt": "A generated SPDX SBOM is used as evidence that every deployed component is safe. Which limitation should reviewers keep in mind?",
        "choices": [
            "An SBOM automatically patches vulnerable packages",
            "An SBOM contains only direct dependencies",
            "An SBOM replaces a dependency graph",
            "An inventory is not a vulnerability assessment"
        ],
        "correct": 3,
        "explanations": [
            "An SBOM reports components rather than applying package fixes.",
            "The export can include transitive paths and dependencies.",
            "GitHub exports the graph state; it does not replace the graph.",
            "Inventory supports transparency but does not prove security."
        ],
        "concept": "SBOM assurance limits",
        "hints": [
            "What question does a component inventory answer, and what does it not prove?",
            "Does listing a component establish that its version has no known vulnerabilities?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom"
    },
    {
        "id": "ghas-supply-024",
        "domain": "Configure and use supply chain security",
        "prompt": "After requesting a repository SBOM through the REST API, automation polls the returned sbom_url and receives HTTP 202. Which behavior follows the documented export flow?",
        "choices": [
            "Continue polling; follow the 302 redirect when ready",
            "Parse the 202 response as the completed SPDX document",
            "Treat 202 as a permanent authorization failure",
            "Submit a new generation request after every poll"
        ],
        "correct": 0,
        "explanations": [
            "The export flow uses 202 while preparing and a 302 redirect to the completed download.",
            "A pending response is not the finished SBOM artifact.",
            "202 indicates accepted processing here, not a permanent denial of access.",
            "Poll the returned URL instead of repeatedly starting separate generation requests."
        ],
        "concept": "Asynchronous SBOM export",
        "hints": [
            "Distinguish pending generation from the downloadable artifact.",
            "Use the continuation URL returned by the service."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom"
    },
    {
        "id": "ghas-supply-025",
        "domain": "Configure and use supply chain security",
        "prompt": "A package has no fixed version yet, but its Dependabot alert is valid. Which response preserves visibility while the team mitigates the risk?",
        "choices": [
            "Remove the direct reference and assume transitive copies are gone",
            "Keep the alert open and record the scoped mitigation",
            "Dismiss it as fixed without a patched version",
            "Suppress all ecosystem alerts until a patch is published"
        ],
        "correct": 1,
        "explanations": [
            "Removing one direct reference may leave another path and does not preserve alert tracking.",
            "A scoped mitigation keeps the valid alert visible for later reassessment.",
            "Without a patched release, marking the alert fixed overstates remediation.",
            "Suppressing an entire ecosystem hides unrelated risks instead of containing this issue."
        ],
        "concept": "Dependency exception management",
        "hints": [
            "Is the vulnerability resolved, or only temporarily mitigated?",
            "What keeps the issue visible for review when no fixed version exists?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts"
    },
    {
        "id": "ghas-supply-026",
        "domain": "Configure and use supply chain security",
        "prompt": "A team prioritizes a vulnerable dependency using both CVSS and EPSS. What distinction should guide its interpretation?",
        "choices": [
            "Both scores measure package age",
            "EPSS identifies the fixed version; CVSS counts dependency paths",
            "CVSS describes severity; EPSS estimates exploitation probability",
            "CVSS measures exploit likelihood; EPSS describes license compatibility"
        ],
        "correct": 2,
        "explanations": [
            "Neither score is a package-age metric.",
            "Fixed versions and dependency paths are separate alert details.",
            "CVSS rates vulnerability severity, while EPSS estimates exploitation likelihood.",
            "License compatibility is not what EPSS measures."
        ],
        "concept": "EPSS versus CVSS",
        "hints": [
            "Which signal describes impact and which estimates exploitation likelihood?",
            "Are these scores interchangeable measures of the same property?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alert-metrics"
    },
    {
        "id": "ghas-supply-027",
        "domain": "Configure and use supply chain security",
        "prompt": "An npm dependency A allows only B 1.x, but B's fix starts at 2.0. Dependabot proposes upgrading A as well as B. Why can changing the non-vulnerable parent be necessary?",
        "choices": [
            "A's version must always match B's major version",
            "A's lockfile entry alone overrides its declared range for B",
            "A must be upgraded before B's vulnerability can be dismissed as false positive",
            "A newer parent can permit B's patched version"
        ],
        "correct": 3,
        "explanations": [
            "Parent and child major-version numbers do not have to match.",
            "A lockfile edit alone does not remove the parent's incompatible version constraint.",
            "This is a real child vulnerability, not a false positive caused by the parent's version.",
            "Updating A can relax the constraint that otherwise excludes B 2.0."
        ],
        "concept": "Parent constraints in transitive remediation",
        "hints": [
            "The package manager must satisfy the parent's declared version range.",
            "A valid fix must also yield a resolvable dependency graph."
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-errors"
    },
    {
        "id": "ghas-supply-028",
        "domain": "Configure and use supply chain security",
        "prompt": "A dependency-review workflow should load repository-specific policy from a local YAML file. Which action input points to the documented default file path?",
        "choices": [
            "`config-file: './.github/dependency-review-config.yml'`",
            "`config-file: './.github/dependency-review.yml'`",
            "`config-file: './.github/dependency-review-config.yaml'`",
            "`config-file: './.github/dependency-config.yml'`"
        ],
        "correct": 0,
        "explanations": [
            "This is the documented default example path for the local dependency-review configuration file.",
            "This filename is not the documented default path for the action configuration.",
            "The action can use another path, but this is not its documented default example.",
            "The action can use another path, but this is not its documented default example."
        ],
        "concept": "Dependency-review configuration path",
        "hints": [
            "Which input names a file instead of setting a policy directly?",
            "Where is the documented repository-local dependency-review configuration stored?"
        ],
        "source": "https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customize-dependency-review-action"
    },
    {
        "id": "ghas-supply-029",
        "domain": "Configure and use supply chain security",
        "prompt": "A repository wants one Dependabot pull request to combine routine updates from multiple package ecosystems. Which configuration feature is designed for that?",
        "choices": [
            "A CodeQL query suite",
            "Multi-ecosystem groups in `dependabot.yml`",
            "A single `paths-ignore` list",
            "The dependency graph's SBOM export"
        ],
        "correct": 1,
        "explanations": [
            "Query suites select code-analysis rules.",
            "Multi-ecosystem groups coordinate eligible updates across ecosystems.",
            "Path exclusions configure secret-scanning scope.",
            "SBOM export generates an inventory, not grouped updates."
        ],
        "concept": "Multi-ecosystem update configuration",
        "hints": [
            "Does the desired grouping cross ecosystem boundaries?",
            "Which Dependabot option groups updates from more than one package manager?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference"
    },
    {
        "id": "ghas-supply-030",
        "domain": "Configure and use supply chain security",
        "prompt": "A workflow pins actions such as `actions/checkout` to version tags. Which Dependabot ecosystem can propose updates to those references?",
        "choices": [
            "`docker`",
            "`pip`",
            "`github-actions`",
            "`npm`"
        ],
        "correct": 2,
        "explanations": [
            "Docker monitors container image dependencies.",
            "pip handles Python packages.",
            "Dependabot supports a `github-actions` ecosystem for workflow action references.",
            "npm tracks JavaScript packages, not workflow action references."
        ],
        "concept": "Workflow dependency maintenance",
        "hints": [
            "Which package ecosystem identifies reusable actions in workflow files?",
            "What type of dependency is written in an Actions `uses` field?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates"
    },
    {
        "id": "ghas-supply-031",
        "domain": "Configure and use supply chain security",
        "prompt": "A dependabot.yml entry sets target-branch: release for routine version updates. What should the maintainer expect for Dependabot security updates?",
        "choices": [
            "They move to release with the version updates",
            "They run on every branch containing a manifest",
            "They alternate between release and the default branch",
            "They still target the repository's default branch"
        ],
        "correct": 3,
        "explanations": [
            "target-branch changes version-update targeting; it does not redirect security updates.",
            "Security updates do not automatically fan out to every branch with a manifest.",
            "The branch setting does not establish an alternating security-update schedule.",
            "Dependabot security updates target the default branch, independently of this version-update entry."
        ],
        "concept": "Dependabot security-update branch scope",
        "hints": [
            "Check which update type the branch customization applies to.",
            "A shared configuration file does not make all options universal."
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference"
    },
    {
        "id": "ghas-supply-032",
        "domain": "Configure and use supply chain security",
        "prompt": "The update passes CI, but changes a transitive package as well as its parent. What should the maintainer still evaluate before merging?",
        "choices": [
            "Review the parent and transitive changes even when CI passes",
            "Treat passing CI as proof the updated package is safe everywhere",
            "Assume updating erases the package's advisory record",
            "Stop checking dependency paths after the direct package changes"
        ],
        "correct": 0,
        "explanations": [
            "Local checks help validate the proposed change but do not guarantee all behavior.",
            "A passing workflow cannot guarantee safety in every environment.",
            "Updating a package does not erase its advisory record.",
            "The graph remains useful for tracking the new version and its dependencies."
        ],
        "concept": "Reviewing automated updates",
        "hints": [
            "What evidence is specific to this repository's tested change?",
            "Does passing CI remove the need to inspect scope and behavior?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-version-updates"
    },
    {
        "id": "ghas-supply-033",
        "domain": "Configure and use supply chain security",
        "prompt": "Routine Dependabot version updates create more pull requests than a team can review. Which setting can cap the number of open update pull requests?",
        "choices": [
            "`category` in a SARIF upload",
            "`open-pull-requests-limit` in `dependabot.yml`",
            "`fail-on-severity` in the dependency-review action",
            "`paths-ignore` in `secret_scanning.yml`"
        ],
        "correct": 1,
        "explanations": [
            "SARIF categories distinguish code-scanning analyses.",
            "Dependabot uses this option to limit open pull requests for an update entry.",
            "`fail-on-severity` sets a review-action vulnerability threshold.",
            "`paths-ignore` concerns secret-scanning paths."
        ],
        "concept": "Routine update workload management",
        "hints": [
            "Which option limits outstanding update proposals?",
            "Is the problem update volume or vulnerability severity?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference"
    },
    {
        "id": "ghas-supply-034",
        "domain": "Configure and use supply chain security",
        "prompt": "A Dependabot security-update pull request has a high compatibility score. Which evidence does that score summarize?",
        "choices": [
            "The percentage of vulnerable call paths removed",
            "The percentage of this repository's tests covering the package",
            "The percentage of passing CI runs in other public repositories",
            "The percentage of package versions verified free of vulnerabilities"
        ],
        "correct": 2,
        "explanations": [
            "The score is not a reachability or vulnerability-elimination measurement.",
            "It does not measure local test coverage or prove this project's compatibility.",
            "It summarizes CI success in other public repositories for that dependency version transition.",
            "The score does not certify the security of a package's release history."
        ],
        "concept": "Compatibility-score provenance",
        "hints": [
            "Ask whose CI produced the underlying evidence.",
            "Compatibility evidence is different from vulnerability severity."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-security-updates"
    },
    {
        "id": "ghas-supply-035",
        "domain": "Configure and use supply chain security",
        "prompt": "A vulnerability report marks a package as transitive. What does that classification mean?",
        "choices": [
            "It is not reachable from any declared package",
            "It is present only as a development dependency",
            "It was reported through a SARIF upload",
            "Another dependency brings it into the project"
        ],
        "correct": 3,
        "explanations": [
            "Transitive status alone does not prove the package is unreachable.",
            "Dependency relationship and runtime scope are separate properties.",
            "SARIF is a code-analysis format, not a dependency classification.",
            "A transitive dependency is brought in by another dependency."
        ],
        "concept": "Direct versus transitive classification",
        "hints": [
            "Does the project declare this package or inherit it from another package?",
            "What relationship does the dependency graph show?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph"
    },
    {
        "id": "ghas-supply-036",
        "domain": "Configure and use supply chain security",
        "prompt": "A team wants version updates only for selected packages, except for one package it has chosen to exclude. Which Dependabot configuration expresses both policies?",
        "choices": [
            "Set `allow` for selected dependencies, then exclude one with `ignore`",
            "Set `ignore` for selected dependencies, then exclude one with `allow`",
            "Set `registries` for selected dependencies, then exclude one with `ignore`",
            "Set `groups` for selected dependencies, then exclude one with `ignore`"
        ],
        "correct": 0,
        "explanations": [
            "`allow` selects dependencies for updates; a matching `ignore` rule is applied afterward and excludes that match.",
            "`ignore` filters matching dependencies rather than selecting which dependencies receive updates.",
            "`registries` configures access to package sources, not a dependency-selection policy.",
            "`groups` combines updates; it neither selects the allowed set nor expresses exclusions."
        ],
        "concept": "Dependabot allow and ignore",
        "hints": [
            "Which rules select dependencies, and which rule takes precedence for an excluded match?",
            "How can a narrow exclusion coexist with an update allowlist?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference"
    },
    {
        "id": "ghas-supply-037",
        "domain": "Configure and use supply chain security",
        "prompt": "An analyst exports a repository SBOM on Monday and compares it with a release from last quarter. What does the export represent?",
        "choices": [
            "The set of repositories that depend on this project",
            "The current dependency-graph state when the SBOM is generated",
            "An immutable record of every dependency used in all past builds",
            "Only components with Dependabot alerts"
        ],
        "correct": 1,
        "explanations": [
            "Dependents are not included in the exported repository SBOM.",
            "GitHub exports the current dependency-graph state for the repository.",
            "A current export is not a historical archive of all builds.",
            "An SBOM includes dependencies whether or not they have alerts."
        ],
        "concept": "SBOM snapshot freshness",
        "hints": [
            "What time does a newly generated inventory describe?",
            "Does a current graph export preserve all past release contents?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/export-dependencies-as-sbom"
    },
    {
        "id": "ghas-supply-038",
        "domain": "Configure and use supply chain security",
        "prompt": "Dependabot reports that the security-update pull-request limit is reached. Version updates have a separate configurable limit. Which action addresses the exhausted security-update capacity?",
        "choices": [
            "Raise open-pull-requests-limit for version updates",
            "Change the version-update schedule to daily",
            "Merge or close existing security-update pull requests",
            "Move the version-update target to another branch"
        ],
        "correct": 2,
        "explanations": [
            "The configurable version-update limit does not raise the separate security-update limit.",
            "A more frequent schedule does not free security-update pull-request capacity.",
            "Finishing or closing existing security-update pull requests frees that pool's capacity.",
            "Changing a version-update branch does not release security-update slots."
        ],
        "concept": "Separate Dependabot pull-request limits",
        "hints": [
            "Identify which pull-request pool the error names.",
            "Configuration for routine updates may not govern security updates."
        ],
        "source": "https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-errors"
    },
    {
        "id": "ghas-supply-039",
        "domain": "Configure and use supply chain security",
        "prompt": "A vulnerable library appears through two different direct dependencies. Why should a maintainer inspect each dependency path?",
        "choices": [
            "The graph shows only one path by design",
            "The package must be a direct dependency",
            "Secret scanning needs each path to validate the credential",
            "Updating one parent may leave another path to the vulnerable version"
        ],
        "correct": 3,
        "explanations": [
            "Dependency paths are not limited to one relationship.",
            "The scenario specifically describes indirect inclusion.",
            "Secret validation is unrelated to package graph paths.",
            "A transitive package can be brought in through multiple parents."
        ],
        "concept": "Multiple transitive paths",
        "hints": [
            "Could another parent still introduce the same vulnerable version?",
            "What should be checked after changing only one direct dependency?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph"
    },
    {
        "id": "ghas-supply-040",
        "domain": "Configure and use supply chain security",
        "prompt": "A dependency-review workflow should block vulnerabilities in runtime dependencies, not development-only dependencies. Which action input selects that blocking scope?",
        "choices": [
            "fail-on-scopes: runtime",
            "fail-on-severity: high",
            "deny-licenses: MIT",
            "allow-ghsas: GHSA-abcd-1234-5679"
        ],
        "correct": 0,
        "explanations": [
            "fail-on-scopes selects dependency scopes whose vulnerabilities cause the check to fail.",
            "Severity selects impact levels, not runtime versus development dependency use.",
            "License identifiers express license policy, not vulnerable dependency scope.",
            "An advisory exception skips a specific advisory rather than selects runtime dependencies."
        ],
        "concept": "Dependency-review scope gating",
        "hints": [
            "Separate deployment scope from severity and license metadata.",
            "The policy concerns where a dependency is used."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependency-review-action"
    },
    {
        "id": "ghas-ecosystem-041",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which automation proposes dependency-upgrade pull requests specifically to address known vulnerabilities?",
        "choices": [
            "Code scanning",
            "Dependabot version updates",
            "Dependabot security updates",
            "Dependabot alerts"
        ],
        "correct": 2,
        "explanations": [
            "Code scanning analyzes application source rather than performing package version upgrades.",
            "Version updates propose dependency upgrades even when no vulnerability advisory requires them.",
            "Security updates propose changes to resolve known vulnerabilities in dependencies.",
            "Alerts notify maintainers of known vulnerable dependencies; an alert is not itself an upgrade pull request."
        ],
        "concept": "Vulnerability-driven dependency upgrades",
        "hints": [
            "Differentiate staying current from responding to an identified vulnerability.",
            "Consider whether the requested output is an alert, a dependency change, or source-code analysis."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/github-security-features"
    },
    {
        "id": "ghas-ecosystem-042",
        "domain": "Describe GitHub Security suites, features, and ecosystem",
        "prompt": "Which security resource can integrations query through GitHub’s REST or GraphQL API for published advisory information?",
        "choices": [
            "SECURITY.md",
            "Private vulnerability reporting",
            "Repository security advisories",
            "GitHub Advisory Database"
        ],
        "correct": 3,
        "explanations": [
            "A security policy explains supported versions and how to report vulnerabilities.",
            "This feature gives researchers a private reporting channel to repository maintainers.",
            "Repository advisories support private discussion, coordinated fixes, and subsequent publication.",
            "The database is a searchable collection of published security advisories."
        ],
        "concept": "Advisory ecosystem integration",
        "hints": [
            "Distinguish instructions, confidential intake, coordinated repair, and public reference data.",
            "Consider the audience and the disclosure stage."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/browse-advisory-database"
    },
    {
        "id": "ghas-secrets-041",
        "domain": "Configure and use Secret Protection",
        "prompt": "A provider-backed check now reports an exposed token as inactive. The team has not investigated the period before revocation. Which follow-up addresses the remaining incident question?",
        "choices": [
            "Review provider logs for unauthorized use",
            "Repeat repository cleanup to prove non-use",
            "Treat inactive status as an access audit",
            "Dismiss the detection as a format mismatch"
        ],
        "correct": 0,
        "explanations": [
            "Inactive status does not establish whether the token was abused while it worked.",
            "Removing copies does not show who used the token before revocation.",
            "Validity describes present usability, not a history of access attempts.",
            "An inactive real credential is not thereby a pattern false positive."
        ],
        "concept": "Historical misuse after token deactivation",
        "hints": [
            "Separate current credential usability from past activity.",
            "Which evidence could reveal use before containment?"
        ],
        "source": "https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts"
    },
    {
        "id": "ghas-supply-041",
        "domain": "Configure and use supply chain security",
        "prompt": "A dependency-review action configuration contains both allow-licenses and deny-licenses. The team wants an allowlist-only policy. Which correction matches the documented input constraint?",
        "choices": [
            "Keep both; the denylist always takes precedence",
            "Remove deny-licenses and retain allow-licenses",
            "Move deny-licenses into the same local config file",
            "Replace both lists with fail-on-scopes"
        ],
        "correct": 1,
        "explanations": [
            "The documented constraint permits only one of these two license inputs.",
            "Removing the denylist preserves the requested allowlist and avoids the prohibited combination.",
            "Moving the conflicting input does not make the two policies compatible.",
            "Dependency scope filtering does not enforce a license allowlist."
        ],
        "concept": "Mutually exclusive review license inputs",
        "hints": [
            "A policy preference does not override an action's input contract.",
            "First distinguish configuration validity from the choice of allowed licenses."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-dependency-review-action"
    },
    {
        "id": "ghas-code-001",
        "domain": "Configure and use Code Security",
        "prompt": "A repository needs a quick CodeQL configuration and has no special workflow requirements. Which setup should its administrator consider first?",
        "choices": [
            "A SARIF-only upload",
            "A Dependabot update entry",
            "Default setup",
            "Advanced setup"
        ],
        "correct": 2,
        "explanations": [
            "SARIF upload imports results produced by another analysis process.",
            "Dependabot entries configure package updates.",
            "Default setup automatically selects languages, a query suite, and scan events.",
            "Advanced setup is intended for customized workflow control."
        ],
        "concept": "Selecting default setup",
        "hints": [
            "Does the repository need customization, or a straightforward managed start?",
            "Which setup chooses common CodeQL defaults automatically?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "ghas-code-002",
        "domain": "Configure and use Code Security",
        "prompt": "A team must define custom build commands and scan events in a CodeQL workflow. Which setup provides that control?",
        "choices": [
            "Default setup with no workflow changes",
            "Dependabot version updates",
            "Secret-scanning custom patterns",
            "Advanced setup with a customizable workflow"
        ],
        "correct": 3,
        "explanations": [
            "Default setup manages common configuration without those workflow edits.",
            "Dependabot updates packages rather than building CodeQL databases.",
            "Secret patterns detect credential formats.",
            "Advanced setup provides a customizable workflow for CodeQL analysis."
        ],
        "concept": "Selecting advanced setup",
        "hints": [
            "What part of analysis must the team control directly?",
            "Which setup exposes the CodeQL workflow for customization?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning"
    },
    {
        "id": "ghas-code-003",
        "domain": "Configure and use Code Security",
        "prompt": "Which sequence describes how CodeQL produces code-scanning findings?",
        "choices": [
            "Create a database, run queries, publish results",
            "Export an SPDX SBOM, run Dependabot, and upload a secret pattern",
            "Build a SARIF file from a repository's license list",
            "Run a query before creating any representation of the code"
        ],
        "correct": 0,
        "explanations": [
            "CodeQL represents the code in a database, queries it, then presents results.",
            "An SBOM and secret patterns serve different security features.",
            "License inventory is not the CodeQL analysis pipeline.",
            "Queries operate on a database representation of the code."
        ],
        "concept": "CodeQL analysis pipeline",
        "hints": [
            "What representation does the query engine analyze?",
            "Which steps turn source code into repository alerts?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "ghas-code-004",
        "domain": "Configure and use Code Security",
        "prompt": "A CodeQL alert traces request input through a source to a dangerous sink. How should the developer use that trace?",
        "choices": [
            "Assume CodeQL has automatically rewritten the path",
            "Validate the reported data flow in the code",
            "Treat the trace as proof that an attacker already exploited the code",
            "Dismiss the alert because data flow is only a dependency finding"
        ],
        "correct": 1,
        "explanations": [
            "An alert trace does not itself edit source code.",
            "A trace explains a potential flow that the team should assess in context.",
            "Static analysis evidence does not prove exploitation occurred.",
            "Dataflow is code-analysis evidence, not dependency inventory."
        ],
        "concept": "Dataflow evidence interpretation",
        "hints": [
            "What does the source-to-sink path show about the code?",
            "What must be validated before choosing a remediation?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts"
    },
    {
        "id": "ghas-code-005",
        "domain": "Configure and use Code Security",
        "prompt": "A third-party analyzer is preparing results for GitHub code scanning. Which SARIF version should its output use?",
        "choices": [
            "3.0.0",
            "A custom format unrelated to SARIF",
            "2.1.0",
            "1.0.0"
        ],
        "correct": 2,
        "explanations": [
            "SARIF 3.0.0 is not the supported version described for uploads.",
            "The upload must be a compatible SARIF file.",
            "GitHub supports a subset of SARIF 2.1.0 for code-scanning uploads.",
            "Version 1.0.0 is not the documented supported format."
        ],
        "concept": "SARIF version compatibility",
        "hints": [
            "Which standard version does GitHub document for code-scanning results?",
            "What file format allows third-party analysis to create GitHub alerts?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support"
    },
    {
        "id": "ghas-code-006",
        "domain": "Configure and use Code Security",
        "prompt": "A third-party tool uploads the same finding on every scan, but GitHub creates repeated alerts. Which SARIF data helps match the result across runs?",
        "choices": [
            "A new random category for every analysis",
            "The repository's `dependabot.yml` schedule",
            "The alert's display title alone",
            "Stable paths and fingerprints"
        ],
        "correct": 3,
        "explanations": [
            "Changing categories can separate analyses rather than identify a stable result.",
            "Dependabot schedules do not affect SARIF matching.",
            "A title alone is not the documented fingerprint mechanism.",
            "Stable rule identity, paths, and fingerprints let GitHub track logically identical findings."
        ],
        "concept": "Stable SARIF result identity",
        "hints": [
            "Which result properties should remain consistent across analyses?",
            "What metadata helps distinguish a continuing finding from a new one?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support"
    },
    {
        "id": "ghas-code-007",
        "domain": "Configure and use Code Security",
        "prompt": "A SARIF producer stores each finding's location and message alongside reusable detector descriptions. Where should per-occurrence evidence go?",
        "choices": [
            "In run.results, referencing the relevant rule",
            "In tool.driver.rules, replacing the rule description",
            "In run.automationDetails, replacing the analysis category",
            "In the SARIF version field, alongside the schema version"
        ],
        "correct": 0,
        "explanations": [
            "Each result holds occurrence details and can reference its detector's rule.",
            "Rules describe detectors and should not be replaced with each occurrence's evidence.",
            "Automation details identify the analysis rather than individual finding locations.",
            "The version field identifies the SARIF format, not analyzer findings."
        ],
        "concept": "SARIF rules versus results",
        "hints": [
            "Separate a detector definition from one instance of its output.",
            "Which structure changes when the same rules analyze a different codebase?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support"
    },
    {
        "id": "ghas-code-008",
        "domain": "Configure and use Code Security",
        "prompt": "An advanced CodeQL workflow must analyze both Java and Python. Which configuration should the maintainer inspect?",
        "choices": [
            "The secret-scanning `paths-ignore` list",
            "A matrix listing both languages",
            "The repository's SBOM SPDX version",
            "The Dependabot `registries` section"
        ],
        "correct": 1,
        "explanations": [
            "Secret-scanning exclusions do not configure code scanning.",
            "The CodeQL workflow defines which languages each analysis job scans.",
            "An SPDX version does not select CodeQL languages.",
            "Registries configure package access."
        ],
        "concept": "Language matrix configuration",
        "hints": [
            "Which languages are actually passed to the analysis job?",
            "Where does an advanced workflow declare its analysis matrix?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning"
    },
    {
        "id": "ghas-code-009",
        "domain": "Configure and use Code Security",
        "prompt": "A C/C++ project needs explicit build commands that CodeQL's autodetection cannot supply. Which build mode fits its advanced workflow?",
        "choices": [
            "`autobuild`",
            "`security-extended`",
            "`manual`",
            "`none`"
        ],
        "correct": 2,
        "explanations": [
            "`autobuild` attempts to detect and run a supported build system.",
            "`security-extended` names a query suite, not a build mode.",
            "`manual` lets the workflow run the project's explicit build steps for extraction.",
            "`none` analyzes without running a build, which may reduce accuracy."
        ],
        "concept": "Compiled-language build modes",
        "hints": [
            "Can CodeQL infer the required build, or must the workflow provide its steps?",
            "Which mode uses build commands defined by the workflow?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/codeql/build-options-for-compiled-languages"
    },
    {
        "id": "ghas-code-010",
        "domain": "Configure and use Code Security",
        "prompt": "A team wants broader security coverage than CodeQL's default query suite and accepts reviewing additional findings. Which suite should it evaluate?",
        "choices": [
            "`default` only",
            "`dependabot`",
            "`secret-scanning`",
            "`security-extended`"
        ],
        "correct": 3,
        "explanations": [
            "The default suite does not provide the requested expansion.",
            "Dependabot manages dependency alerts and updates.",
            "Secret scanning detects credentials rather than CodeQL queries.",
            "The extended suite adds security queries beyond the default selection."
        ],
        "concept": "Extended query-suite trade-offs",
        "hints": [
            "Which CodeQL suite extends the default security queries?",
            "What operational cost can accompany broader query coverage?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites"
    },
    {
        "id": "ghas-code-011",
        "domain": "Configure and use Code Security",
        "prompt": "A team wants to include a maintained set of additional CodeQL queries in advanced analysis. Which artifact should it configure?",
        "choices": [
            "A CodeQL query pack",
            "A dependency-review license list",
            "A secret-scanning path exclusion",
            "An SPDX SBOM"
        ],
        "correct": 0,
        "explanations": [
            "Query packs package reusable CodeQL queries for analysis.",
            "License lists configure dependency-review policy.",
            "Path exclusions configure secret-scanning scope.",
            "An SBOM inventories software components."
        ],
        "concept": "Reusable CodeQL query packs",
        "hints": [
            "What packages a reusable set of analysis queries?",
            "Which CodeQL configuration can add queries beyond the built-in selection?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "ghas-code-012",
        "domain": "Configure and use Code Security",
        "prompt": "A code-scanning alert is labeled high severity. What does that label primarily describe?",
        "choices": [
            "The percentage of tests that failed",
            "Potential impact, not exploitation certainty",
            "The probability that the code was already attacked",
            "The number of repositories using the dependency"
        ],
        "correct": 1,
        "explanations": [
            "Test failure rate is not the meaning of alert severity.",
            "Severity characterizes the issue's potential impact in the alert context.",
            "A severity label does not prove exploitation occurred.",
            "Repository counts are separate dependency information."
        ],
        "concept": "Security severity interpretation",
        "hints": [
            "What property of the weakness does severity communicate?",
            "Does a high severity label prove an attacker used the flaw?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts"
    },
    {
        "id": "ghas-code-013",
        "domain": "Configure and use Code Security",
        "prompt": "An eligible CodeQL alert offers an autofix suggestion. What should the maintainer do with it?",
        "choices": [
            "Dismiss the alert without inspecting the source",
            "Use the suggestion to update every dependency",
            "Review, test, and adapt the proposed change before merging",
            "Assume the suggestion is guaranteed correct and merge automatically"
        ],
        "correct": 2,
        "explanations": [
            "Dismissal does not remediate the code.",
            "Autofix addresses code-scanning alerts, not every dependency update.",
            "Autofix proposes a potential correction that still needs validation.",
            "A generated suggestion is not a guarantee of correctness."
        ],
        "concept": "Autofix does not guarantee a fix",
        "hints": [
            "What remains the maintainer's responsibility after a suggestion appears?",
            "Could a proposed edit require context-specific testing?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning"
    },
    {
        "id": "ghas-code-014",
        "domain": "Configure and use Code Security",
        "prompt": "A developer believes a code-scanning alert is a false positive. What should they do before dismissing it?",
        "choices": [
            "Dismiss it because the workflow passed",
            "Change the alert's title",
            "Delete the repository's CodeQL database",
            "Review the code and record evidence"
        ],
        "correct": 3,
        "explanations": [
            "Passing a workflow does not establish that a specific finding is invalid.",
            "Renaming an alert does not evaluate the reported behavior.",
            "Deleting a database does not justify dismissing an alert.",
            "The alert should be assessed against the code and its dismissal reason recorded."
        ],
        "concept": "Evidence-based code-alert dismissal",
        "hints": [
            "What evidence would show the flagged behavior cannot occur or is not a flaw?",
            "Which action records an intentional triage decision?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts"
    },
    {
        "id": "ghas-code-015",
        "domain": "Configure and use Code Security",
        "prompt": "A company runs CodeQL analysis in an external CI service rather than GitHub Actions. How can its findings appear in GitHub code scanning?",
        "choices": [
            "Run CodeQL CLI in external CI and upload SARIF",
            "Convert alerts to a Dependabot lockfile",
            "Create a custom secret-scanning pattern for each result",
            "Enable default setup and leave the external results local"
        ],
        "correct": 0,
        "explanations": [
            "CodeQL CLI supports analysis in external CI with results uploaded to GitHub.",
            "A lockfile represents dependencies, not code-scanning findings.",
            "Secret patterns detect credentials rather than import results.",
            "Local-only results are not uploaded to the repository."
        ],
        "concept": "External analysis result delivery",
        "hints": [
            "Where is the analysis running, and where must its findings be sent?",
            "Which interface supports CodeQL outside GitHub Actions?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "ghas-code-016",
        "domain": "Configure and use Code Security",
        "prompt": "A team wants code scanning on pull requests and on a recurring schedule for newly disclosed issues. Which configuration should define these events?",
        "choices": [
            "The Dependabot registry credentials",
            "Configure the scan events",
            "The dependency graph export settings",
            "The repository's secret-pattern regex"
        ],
        "correct": 1,
        "explanations": [
            "Registry credentials configure package access.",
            "Code scanning can run on repository events and on a schedule, depending on its setup.",
            "SBOM export does not schedule code analysis.",
            "A secret regex does not define scan triggers."
        ],
        "concept": "Analysis trigger strategy",
        "hints": [
            "When should analysis run to provide pre-merge and recurring feedback?",
            "Which setup owns code-scanning events and schedule?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning"
    },
    {
        "id": "ghas-code-017",
        "domain": "Configure and use Code Security",
        "prompt": "Two SARIF uploads from the same tool analyze separate product areas. Which input can keep their analyses distinct in GitHub?",
        "choices": [
            "The repository's default Dependabot schedule",
            "A secret-scanning bypass reason",
            "A stable, meaningful `category` for each analysis",
            "A different random `ruleId` on every scan"
        ],
        "correct": 2,
        "explanations": [
            "Dependabot schedules do not separate SARIF analyses.",
            "Bypass reasons are unrelated to code-scanning categories.",
            "The category identifies a particular analysis and helps keep result sets separate.",
            "Changing rule IDs between runs undermines stable alert tracking."
        ],
        "concept": "Separating analysis categories",
        "hints": [
            "What metadata labels the analysis run for a distinct source or configuration?",
            "Which upload field helps distinguish multiple analyses from one tool?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support"
    },
    {
        "id": "ghas-code-018",
        "domain": "Configure and use Code Security",
        "prompt": "A third-party SARIF alert has less context than a default CodeQL alert. What should the maintainer understand?",
        "choices": [
            "GitHub automatically fills every missing SARIF field from source code",
            "The alert is invalid because it is not from CodeQL",
            "The repository has no code-scanning access",
            "Third-party findings may omit CodeQL-specific details"
        ],
        "correct": 3,
        "explanations": [
            "GitHub does not guarantee every optional detail can be reconstructed.",
            "Code scanning supports compatible third-party SARIF findings.",
            "A difference in alert details does not establish an access failure.",
            "Alert details depend on the information supplied by each analysis tool."
        ],
        "concept": "Tool-dependent alert detail",
        "hints": [
            "Which tool generated the result and what did it include?",
            "Could an alert be valid while showing fewer analysis properties?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts"
    },
    {
        "id": "ghas-code-019",
        "domain": "Configure and use Code Security",
        "prompt": "Several source paths reach the same unsafe operation. How can code scanning present those related findings?",
        "choices": [
            "Present one alert with multiple paths to the same issue",
            "Create a separate alert for each path to the same issue",
            "Keep only the shortest path as evidence",
            "Merge paths from different issues into one alert"
        ],
        "correct": 0,
        "explanations": [
            "Related paths can be grouped under one alert for their underlying issue.",
            "A separate alert for each path can fragment one weakness into duplicates.",
            "Dropping paths loses useful evidence about how the issue can be reached.",
            "Different weaknesses should not be merged into one alert."
        ],
        "concept": "Multiple-path alert grouping",
        "hints": [
            "Do these paths represent distinct weaknesses or routes to one weakness?",
            "How can one alert show several ways the same issue is reached?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-alerts"
    },
    {
        "id": "ghas-code-020",
        "domain": "Configure and use Code Security",
        "prompt": "An accepted SARIF result appears in code scanning, but its only location is on an unchanged line outside a pull request's diff. Why might it lack a pull-request check annotation?",
        "choices": [
            "Accepted SARIF results never produce pull-request annotations",
            "The identified lines must be added or edited in the diff",
            "Each pull request needs a newly invented analysis category",
            "The rule must use a CVE identifier as its ruleId"
        ],
        "correct": 1,
        "explanations": [
            "Code scanning can annotate pull requests using eligible SARIF results.",
            "For check display, the identified lines must be present in added or edited diff lines.",
            "Categories distinguish result sets; changing them does not move locations into a diff.",
            "An arbitrary rule need not be named with a CVE to qualify for display."
        ],
        "concept": "SARIF pull-request annotation eligibility",
        "hints": [
            "Upload acceptance and contextual check display have different requirements.",
            "Compare the finding's source location with the pull request's changed lines."
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support"
    },
    {
        "id": "ghas-code-021",
        "domain": "Configure and use Code Security",
        "prompt": "A repository using CodeQL default setup now requires a customized workflow. What should its maintainer do when switching to advanced setup?",
        "choices": [
            "Delete all existing code-scanning alerts",
            "Replace the CodeQL workflow with a Dependabot schedule",
            "Use `Switch to advanced`; confirm `Disable CodeQL`",
            "Enable advanced setup while leaving default setup active"
        ],
        "correct": 2,
        "explanations": [
            "Removing alerts does not change which setup runs.",
            "Dependabot schedules do not configure code scanning.",
            "GitHub's switch flow disables default CodeQL setup before the advanced workflow is configured.",
            "The setup types are switched rather than left active together for the same CodeQL configuration."
        ],
        "concept": "Switching CodeQL setup types",
        "hints": [
            "Which setup must be disabled as the repository moves to its customizable workflow?",
            "What does the switch confirmation change before advanced configuration?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning"
    },
    {
        "id": "ghas-code-022",
        "domain": "Configure and use Code Security",
        "prompt": "A CodeQL analysis stops producing alerts after a workflow edit. What should the maintainer inspect first?",
        "choices": [
            "The repository's SPDX license list",
            "The secret-scanning validity status",
            "Dependabot's open pull-request limit",
            "Check run logs and upload status"
        ],
        "correct": 3,
        "explanations": [
            "License metadata does not diagnose a CodeQL run.",
            "Validity status is about detected credentials.",
            "The Dependabot limit only caps update pull requests.",
            "Logs and workflow configuration reveal analysis or upload failures."
        ],
        "concept": "Evidence-driven scan troubleshooting",
        "hints": [
            "Did the job analyze the intended languages and finish uploading results?",
            "Which run evidence distinguishes a configuration failure from a clean scan?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options"
    },
    {
        "id": "ghas-code-023",
        "domain": "Configure and use Code Security",
        "prompt": "A CodeQL workflow uses a `pull_request.paths-ignore` filter for documentation. Another source file in the same pull request changes. What should the team expect?",
        "choices": [
            "The workflow may run; `paths-ignore` filters triggers, not analyzed files",
            "Only non-ignored files are analyzed because the filter excludes those paths",
            "The filter removes matching documentation from Git history",
            "The filter dismisses alerts in ignored paths"
        ],
        "correct": 0,
        "explanations": [
            "A matching source-file change can start the workflow; the trigger filter does not exclude files from the analysis itself.",
            "Workflow path filters do not automatically remove matched files from the analysis scope.",
            "A workflow filter does not rewrite or remove repository history.",
            "The trigger filter does not dismiss code-scanning alerts for matching paths."
        ],
        "concept": "Trigger filtering versus analysis exclusions",
        "hints": [
            "Does a workflow trigger filter control execution or file selection inside a run?",
            "What can happen when a non-ignored file also changes?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options"
    },
    {
        "id": "ghas-code-024",
        "domain": "Configure and use Code Security",
        "prompt": "A SARIF alert points to the wrong file after upload. Which property should the integration verify first?",
        "choices": [
            "That the CodeQL database has more queries",
            "That `artifactLocation.uri` maps consistently to the repository's source path",
            "That the Dependabot schedule matches the upload time",
            "That the secret pattern contains a capture group"
        ],
        "correct": 1,
        "explanations": [
            "Query count does not fix a mismatched source path.",
            "SARIF source locations need paths GitHub can map to repository files.",
            "Dependabot schedules do not control SARIF file locations.",
            "Secret regex groups do not locate code-scanning results."
        ],
        "concept": "SARIF source-location mapping",
        "hints": [
            "Which result field identifies the affected source file?",
            "Do uploaded paths match the repository layout used by analysis?"
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support"
    },
    {
        "id": "ghas-code-025",
        "domain": "Configure and use Code Security",
        "prompt": "An advanced CodeQL workflow needs to analyze Kotlin. Which language identifier groups Kotlin with Java?",
        "choices": [
            "`jvm-bytecode`",
            "`java` only",
            "`java-kotlin`",
            "`kotlin-java`"
        ],
        "correct": 2,
        "explanations": [
            "This is not the supported CodeQL language key.",
            "The documented combined identifier includes Kotlin.",
            "CodeQL uses `java-kotlin` for Java, Kotlin, or both.",
            "The reversed label is not the documented identifier."
        ],
        "concept": "CodeQL language identifiers",
        "hints": [
            "Which configured language key covers the JVM languages in this repository?",
            "How does CodeQL name the Java-and-Kotlin analysis target?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "ghas-code-026",
        "domain": "Configure and use Code Security",
        "prompt": "A codebase contains both JavaScript and TypeScript. How should the CodeQL workflow name that language analysis?",
        "choices": [
            "`javascript` and `typescript` as unrelated required databases",
            "`node-web`",
            "`typescript-only`",
            "`javascript-typescript`"
        ],
        "correct": 3,
        "explanations": [
            "The documented language identifier combines these languages.",
            "This is not the listed CodeQL language identifier.",
            "The combined analysis supports both languages.",
            "CodeQL uses `javascript-typescript` to analyze JavaScript, TypeScript, or both."
        ],
        "concept": "Combined JavaScript and TypeScript analysis",
        "hints": [
            "Does CodeQL treat these source files as one supported analysis target?",
            "Which configured identifier includes both languages?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "ghas-code-027",
        "domain": "Configure and use Code Security",
        "prompt": "A third-party tool produces a SARIF file that is 12 MB after gzip compression. Which change addresses GitHub's documented per-file upload constraint?",
        "choices": [
            "Reduce the compressed file below the 10 MB limit",
            "Change its declared SARIF version to 2.0.0",
            "Retry the same payload with a new category",
            "Change every result's severity to warning"
        ],
        "correct": 0,
        "explanations": [
            "GitHub rejects gzip-compressed SARIF files larger than 10 MB; reduce the payload.",
            "GitHub code scanning supports SARIF 2.1.0, and changing the version does not reduce size.",
            "A category distinguishes analysis sets but does not increase the upload size limit.",
            "Relabeling severity does not reliably shrink the file or change its size ceiling."
        ],
        "concept": "Compressed SARIF upload size",
        "hints": [
            "Evaluate the limit against the compressed payload, not the tool's success exit code.",
            "Metadata changes do not enlarge an upload allowance."
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/sarif-files/sarif-support"
    },
    {
        "id": "ghas-code-028",
        "domain": "Configure and use Code Security",
        "prompt": "What does a CodeQL database represent in the analysis process?",
        "choices": [
            "An SPDX software inventory",
            "A queryable representation of source code",
            "A catalog of vulnerable package versions",
            "A history of repository push-protection bypasses"
        ],
        "correct": 1,
        "explanations": [
            "An SPDX inventory is an SBOM, not a CodeQL database.",
            "CodeQL databases represent source code and relevant structure for queries.",
            "Vulnerable package records are advisory and dependency data.",
            "Bypass events belong to push protection."
        ],
        "concept": "CodeQL database purpose",
        "hints": [
            "What does the query engine need to inspect beyond raw text?",
            "Which artifact prepares a codebase for CodeQL queries?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "ghas-code-029",
        "domain": "Configure and use Code Security",
        "prompt": "After switching to an expanded CodeQL query suite, a team sees additional alerts. What is the best interpretation?",
        "choices": [
            "The repository has switched to Dependabot",
            "The extra alerts prove that the build was compromised",
            "More queries may run, so review the new findings",
            "The new alerts must all be false positives"
        ],
        "correct": 2,
        "explanations": [
            "CodeQL query selection does not switch dependency tooling.",
            "Finding more issues does not prove a compromise.",
            "Broader suites can increase the query set and require normal alert triage.",
            "A new result should be assessed, not dismissed wholesale."
        ],
        "concept": "Interpreting suite expansion",
        "hints": [
            "What changed in the selected analysis coverage?",
            "How should new findings be evaluated before changing the suite?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites"
    },
    {
        "id": "ghas-code-030",
        "domain": "Configure and use Code Security",
        "prompt": "A project wants its CodeQL analysis to include security findings as well as code-quality checks. Which query suite is designed for both?",
        "choices": [
            "`security-extended` only",
            "`default` only",
            "`github-actions`",
            "`security-and-quality`"
        ],
        "correct": 3,
        "explanations": [
            "Security-extended focuses on additional security queries.",
            "Default is the standard suite rather than the combined quality suite.",
            "`github-actions` is a language identifier, not a query suite.",
            "The security-and-quality suite includes security and quality query coverage."
        ],
        "concept": "Security and quality query suite",
        "hints": [
            "Does the team need only security checks or quality checks too?",
            "Which named suite combines both query goals?"
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites"
    },
    {
        "id": "ghas-operations-001",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which identifier names a specific publicly disclosed vulnerability rather than a weakness category or advisory record?",
        "choices": [
            "CVE",
            "CWE",
            "GHSA",
            "CVSS"
        ],
        "correct": 0,
        "explanations": [
            "A CVE identifies a publicly disclosed vulnerability, not a general weakness class.",
            "A CWE identifies a category of software weakness, such as improper input validation.",
            "A GHSA identifier uniquely names an advisory in the GitHub Advisory Database.",
            "CVSS expresses vulnerability severity; it is not a vulnerability or advisory identifier."
        ],
        "concept": "Vulnerability identity",
        "hints": [
            "Separate an individual vulnerability from a recurring weakness category.",
            "An identifier names something; a score measures a property."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/github-advisory-database"
    },
    {
        "id": "ghas-operations-002",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A training report groups findings by the underlying weakness, such as improper input validation. Which classification belongs there?",
        "choices": [
            "CVSS",
            "CVE",
            "CWE",
            "GHSA"
        ],
        "correct": 2,
        "explanations": [
            "CVSS expresses vulnerability severity; it is not a vulnerability or advisory identifier.",
            "A CVE identifies a publicly disclosed vulnerability, not a general weakness class.",
            "A CWE identifies a category of software weakness, such as improper input validation.",
            "A GHSA identifier uniquely names an advisory in the GitHub Advisory Database."
        ],
        "concept": "Weakness taxonomy",
        "hints": [
            "Separate an individual vulnerability from a recurring weakness category.",
            "An identifier names something; a score measures a property."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/github-advisory-database"
    },
    {
        "id": "ghas-operations-003",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which identifier is assigned to every record in the GitHub Advisory Database, including records without a CVE?",
        "choices": [
            "CVSS",
            "CVE",
            "CWE",
            "GHSA"
        ],
        "correct": 3,
        "explanations": [
            "CVSS expresses vulnerability severity; it is not a vulnerability or advisory identifier.",
            "A CVE identifies a publicly disclosed vulnerability, not a general weakness class.",
            "A CWE identifies a category of software weakness, such as improper input validation.",
            "A GHSA identifier uniquely names an advisory in the GitHub Advisory Database."
        ],
        "concept": "GitHub advisory identity",
        "hints": [
            "Separate an individual vulnerability from a recurring weakness category.",
            "An identifier names something; a score measures a property."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/github-advisory-database"
    },
    {
        "id": "ghas-operations-004",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which signal represents vulnerability severity rather than the predicted probability of exploitation?",
        "choices": [
            "CVSS",
            "EPSS",
            "Reachability",
            "Dependency scope"
        ],
        "correct": 0,
        "explanations": [
            "CVSS measures severity; business exposure and exploitation likelihood require additional context.",
            "EPSS estimates the probability of exploitation in the wild; it does not prove a specific application is exploitable.",
            "Reachability analysis examines whether application code can reach vulnerable dependency code, where supported.",
            "Dependency scope distinguishes production and development use; development dependencies can still matter to security."
        ],
        "concept": "Severity versus exploitation probability",
        "hints": [
            "Do not equate intrinsic severity with the likelihood or impact of exploitation here.",
            "Combine independent signals and account for missing analysis."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-005",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which signal estimates exploitation in the wild and should be combined with repository-specific context?",
        "choices": [
            "CVSS",
            "EPSS",
            "Reachability",
            "Dependency scope"
        ],
        "correct": 1,
        "explanations": [
            "CVSS measures severity; business exposure and exploitation likelihood require additional context.",
            "EPSS estimates the probability of exploitation in the wild; it does not prove a specific application is exploitable.",
            "Reachability analysis examines whether application code can reach vulnerable dependency code, where supported.",
            "Dependency scope distinguishes production and development use; development dependencies can still matter to security."
        ],
        "concept": "EPSS interpretation",
        "hints": [
            "Do not equate intrinsic severity with the likelihood or impact of exploitation here.",
            "Combine independent signals and account for missing analysis."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-006",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Where supported, which analysis asks whether application code can call the vulnerable dependency code?",
        "choices": [
            "CVSS",
            "EPSS",
            "Reachability",
            "Dependency scope"
        ],
        "correct": 2,
        "explanations": [
            "CVSS measures severity; business exposure and exploitation likelihood require additional context.",
            "EPSS estimates the probability of exploitation in the wild; it does not prove a specific application is exploitable.",
            "Reachability analysis examines whether application code can reach vulnerable dependency code, where supported.",
            "Dependency scope distinguishes production and development use; development dependencies can still matter to security."
        ],
        "concept": "Dependency reachability evidence",
        "hints": [
            "Do not equate intrinsic severity with the likelihood or impact of exploitation here.",
            "Combine independent signals and account for missing analysis."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-007",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which alert context distinguishes a package used at runtime from one declared only for development?",
        "choices": [
            "CVSS",
            "EPSS",
            "Reachability",
            "Dependency scope"
        ],
        "correct": 3,
        "explanations": [
            "CVSS measures severity; business exposure and exploitation likelihood require additional context.",
            "EPSS estimates the probability of exploitation in the wild; it does not prove a specific application is exploitable.",
            "Reachability analysis examines whether application code can reach vulnerable dependency code, where supported.",
            "Dependency scope distinguishes production and development use; development dependencies can still matter to security."
        ],
        "concept": "Production and development dependency context",
        "hints": [
            "Do not equate intrinsic severity with the likelihood or impact of exploitation here.",
            "Combine independent signals and account for missing analysis."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-008",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "An advisory identifies a patched release. What makes the proposed dependency remediation ready for a safe merge decision?",
        "choices": [
            "Review the fixed version and test upgrade compatibility.",
            "Use severity and other signals when reachability is unavailable.",
            "Lower priority cautiously and reassess an Unreachable result.",
            "Prioritize exposed production use with credible exploit evidence."
        ],
        "correct": 0,
        "explanations": [
            "A published fix makes remediation actionable, but compatibility and actual adoption still need verification.",
            "Unavailable analysis is unknown, not a finding that vulnerable code is unreachable.",
            "An unreachable result can change with code or advisory updates and is not sufficient alone for dismissal.",
            "Production exposure and exploitation evidence can make a dependency urgent beyond its severity label."
        ],
        "concept": "Actionable patch validation",
        "hints": [
            "Absence of evidence is different from evidence that a path is absent.",
            "Prioritization should reflect exposure, exploitability, and remediation evidence."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-009",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Two findings have similar severity. Which response best prioritizes one used in an exposed production path with credible exploitation evidence?",
        "choices": [
            "Lower priority cautiously and reassess an Unreachable result.",
            "Prioritize exposed production use with credible exploit evidence.",
            "Review the fixed version and test upgrade compatibility.",
            "Use severity and other signals when reachability is unavailable."
        ],
        "correct": 1,
        "explanations": [
            "An unreachable result can change with code or advisory updates and is not sufficient alone for dismissal.",
            "Production exposure and exploitation evidence can make a dependency urgent beyond its severity label.",
            "A published fix makes remediation actionable, but compatibility and actual adoption still need verification.",
            "Unavailable analysis is unknown, not a finding that vulnerable code is unreachable."
        ],
        "concept": "Contextual remediation priority",
        "hints": [
            "Absence of evidence is different from evidence that a path is absent.",
            "Prioritization should reflect exposure, exploitability, and remediation evidence."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-010",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A Dependabot alert says “Reachability unavailable.” What is the appropriate prioritization response?",
        "choices": [
            "Lower priority cautiously and reassess an Unreachable result.",
            "Prioritize exposed production use with credible exploit evidence.",
            "Review the fixed version and test upgrade compatibility.",
            "Use severity and other signals when reachability is unavailable."
        ],
        "correct": 3,
        "explanations": [
            "An unreachable result can change with code or advisory updates and is not sufficient alone for dismissal.",
            "Production exposure and exploitation evidence can make a dependency urgent beyond its severity label.",
            "A published fix makes remediation actionable, but compatibility and actual adoption still need verification.",
            "Unavailable analysis is unknown, not a finding that vulnerable code is unreachable."
        ],
        "concept": "Missing reachability is not safety evidence",
        "hints": [
            "Absence of evidence is different from evidence that a path is absent.",
            "Prioritization should reflect exposure, exploitability, and remediation evidence."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-011",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "How should an analyst treat an “Unreachable” dependency finding when no other dismissal justification exists?",
        "choices": [
            "Review the fixed version and test upgrade compatibility.",
            "Use severity and other signals when reachability is unavailable.",
            "Lower priority cautiously and reassess an Unreachable result.",
            "Prioritize exposed production use with credible exploit evidence."
        ],
        "correct": 2,
        "explanations": [
            "A published fix makes remediation actionable, but compatibility and actual adoption still need verification.",
            "Unavailable analysis is unknown, not a finding that vulnerable code is unreachable.",
            "An unreachable result can change with code or advisory updates and is not sufficient alone for dismissal.",
            "Production exposure and exploitation evidence can make a dependency urgent beyond its severity label."
        ],
        "concept": "Cautious use of unreachable verdicts",
        "hints": [
            "Absence of evidence is different from evidence that a path is absent.",
            "Prioritization should reflect exposure, exploitability, and remediation evidence."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-dependabot-alerts/view-dependabot-alerts"
    },
    {
        "id": "ghas-operations-012",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Responders revoked an exposed token. A scheduled production integration still references it and now fails authentication. Which follow-up restores the integration without reversing containment?",
        "choices": [
            "Create a replacement token but retain the service's current configuration",
            "Configure the service to use a replacement credential",
            "Redeploy the service using the same revoked credential value",
            "Retry the scheduled job without changing its runtime credentials"
        ],
        "correct": 1,
        "explanations": [
            "Creating a token alone does not update the service that still references the revoked value.",
            "The remediation workflow includes updating services that used the compromised token.",
            "Redeploying the old revoked value does not restore its authority at the provider.",
            "Retrying with the same revoked credential does not repair authentication."
        ],
        "concept": "Dependent-service credential replacement",
        "hints": [
            "Containment is complete; the remaining failure is in a credential consumer.",
            "Which system actually supplies the integration's authentication material?"
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/resolving-alerts"
    },
    {
        "id": "ghas-operations-013",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A developer has changed the code for a code scanning alert. What is needed before calling the issue fixed?",
        "choices": [
            "Verify the fix with fresh, relevant analysis.",
            "Reopen the alert when the dismissal is no longer justified.",
            "Document a justified false-positive dismissal.",
            "Record accepted risk and its rationale."
        ],
        "correct": 0,
        "explanations": [
            "A fix is established by relevant analysis of the changed code, not by merely editing or dismissing an alert.",
            "A changed assumption or newly applicable code path can invalidate an earlier dismissal.",
            "A false-positive dismissal needs evidence that the reported vulnerability does not apply to the analyzed code.",
            "Accepted risk acknowledges an unresolved issue; it must not be reported as a verified code fix."
        ],
        "concept": "Evidence-based fix verification",
        "hints": [
            "Separate evidence about a finding from a decision to tolerate risk.",
            "Choose a disposition that remains truthful when another reviewer reads it."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts"
    },
    {
        "id": "ghas-operations-014",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A team deliberately tolerates a real code vulnerability for now. Which disposition describes that decision honestly?",
        "choices": [
            "Verify the fix with fresh, relevant analysis.",
            "Reopen the alert when the dismissal is no longer justified.",
            "Document a justified false-positive dismissal.",
            "Record accepted risk and its rationale."
        ],
        "correct": 3,
        "explanations": [
            "A fix is established by relevant analysis of the changed code, not by merely editing or dismissing an alert.",
            "A changed assumption or newly applicable code path can invalidate an earlier dismissal.",
            "A false-positive dismissal needs evidence that the reported vulnerability does not apply to the analyzed code.",
            "Accepted risk acknowledges an unresolved issue; it must not be reported as a verified code fix."
        ],
        "concept": "Accepted risk versus fixed status",
        "hints": [
            "Separate evidence about a finding from a decision to tolerate risk.",
            "Choose a disposition that remains truthful when another reviewer reads it."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts"
    },
    {
        "id": "ghas-operations-015",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A reviewer demonstrates that an alert’s modeled unsafe path cannot occur in the analyzed implementation. Which documented disposition fits?",
        "choices": [
            "Verify the fix with fresh, relevant analysis.",
            "Reopen the alert when the dismissal is no longer justified.",
            "Document a justified false-positive dismissal.",
            "Record accepted risk and its rationale."
        ],
        "correct": 2,
        "explanations": [
            "A fix is established by relevant analysis of the changed code, not by merely editing or dismissing an alert.",
            "A changed assumption or newly applicable code path can invalidate an earlier dismissal.",
            "A false-positive dismissal needs evidence that the reported vulnerability does not apply to the analyzed code.",
            "Accepted risk acknowledges an unresolved issue; it must not be reported as a verified code fix."
        ],
        "concept": "Evidence-supported false-positive dismissal",
        "hints": [
            "Separate evidence about a finding from a decision to tolerate risk.",
            "Choose a disposition that remains truthful when another reviewer reads it."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts"
    },
    {
        "id": "ghas-operations-016",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A bulk dismissal is approved for findings sharing a verified condition. What record best preserves why they were not treated as fixes?",
        "choices": [
            "Audit log",
            "Alert dismissal rationale",
            "Periodic exception review",
            "Permission-scoped reporting"
        ],
        "correct": 1,
        "explanations": [
            "Audit logs record supported secret scanning and Dependabot events; code scanning alert timeline events are not included.",
            "A meaningful rationale explains why a finding was dismissed rather than implying it was fixed.",
            "Revisiting exceptions tests whether earlier risk assumptions and ownership still hold.",
            "Security reporting must respect alert access rather than distributing sensitive details to unauthorized readers."
        ],
        "concept": "Bulk dismissal documentation",
        "hints": [
            "Distinguish operational convenience from durable governance evidence.",
            "Ask what a future reviewer would need to understand the decision."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts"
    },
    {
        "id": "ghas-operations-017",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A risk exception was based on an old deployment assumption. Which governance practice detects when that justification becomes stale?",
        "choices": [
            "Periodic exception review",
            "Permission-scoped reporting",
            "Audit log",
            "Alert dismissal rationale"
        ],
        "correct": 0,
        "explanations": [
            "Revisiting exceptions tests whether earlier risk assumptions and ownership still hold.",
            "Security reporting must respect alert access rather than distributing sensitive details to unauthorized readers.",
            "Audit logs record supported secret scanning and Dependabot events; code scanning alert timeline events are not included.",
            "A meaningful rationale explains why a finding was dismissed rather than implying it was fixed."
        ],
        "concept": "Exception reassessment",
        "hints": [
            "Distinguish operational convenience from durable governance evidence.",
            "Ask what a future reviewer would need to understand the decision."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts"
    },
    {
        "id": "ghas-operations-018",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "An auditor needs Dependabot alerts dismissed automatically by auto-triage, separate from manual dismissals. Which documented close-reason filter selects that population?",
        "choices": [
            "resolution:revoked",
            "resolution:false-positive",
            "resolution:fix-started",
            "resolution:auto-dismiss"
        ],
        "correct": 3,
        "explanations": [
            "Revocation is a credential-response concept, not the auto-triage close reason.",
            "A false-positive label does not specifically identify automatic triage activity.",
            "Starting a fix is not the documented close reason for automatic dismissal.",
            "Auto-dismissed Dependabot alerts use the resolution:auto-dismiss close reason."
        ],
        "concept": "Auditing automatically dismissed dependency alerts",
        "hints": [
            "The report needs the mechanism of closure, not only the current open or closed state.",
            "Use the documented reason rather than infer it from alert severity."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-auto-triage-rules"
    },
    {
        "id": "ghas-operations-019",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which built-in CodeQL suite is the baseline choice when high precision and fewer false positives are the priority?",
        "choices": [
            "security-and-quality",
            "Custom .qls suite",
            "default",
            "security-extended"
        ],
        "correct": 2,
        "explanations": [
            "This advanced-setup suite adds maintainability and reliability queries to security-extended.",
            "A custom query suite selects queries by metadata, location, or other criteria and requires advanced setup.",
            "The default suite emphasizes high-precision security findings and fewer false positives.",
            "This includes default queries plus additional, lower-precision security queries; triage may increase."
        ],
        "concept": "High-precision CodeQL baseline",
        "hints": [
            "Compare precision, breadth, and the kinds of findings sought.",
            "A broader query set changes triage workload as well as detection."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites"
    },
    {
        "id": "ghas-operations-020",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A CodeQL init step loads a config-file containing additional queries. The workflow must add security-extended without replacing that configured additional-query list. Which input does that?",
        "choices": [
            "queries: security-extended",
            "disable-default-queries: true",
            "queries: +security-extended",
            "category: security-extended"
        ],
        "correct": 2,
        "explanations": [
            "Without the plus prefix, workflow additional queries replace those from the configuration file.",
            "Disabling defaults is not how to combine workflow and configuration-file additions.",
            "The plus prefix combines workflow-specified additional queries with the configured list.",
            "Category labels an analysis; it does not select or merge query lists."
        ],
        "concept": "Additive CodeQL query configuration",
        "hints": [
            "Consider precedence between workflow inputs and the referenced configuration.",
            "A suite name alone does not express how to combine two lists."
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options"
    },
    {
        "id": "ghas-operations-021",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Existing CodeQL Java queries miss flows through an internal library because its behavior is not modeled. Which package type supplies library models to those queries, rather than a new set of executable queries?",
        "choices": [
            "A SARIF result archive",
            "A dependency snapshot",
            "A custom .qls query list",
            "A CodeQL model pack"
        ],
        "correct": 3,
        "explanations": [
            "SARIF contains analysis results, not library semantics for evaluating future data flow.",
            "A dependency snapshot records package relationships, not sources and sinks for CodeQL.",
            "A query list selects queries but does not supply missing library behavior models.",
            "A model pack extends the library or framework semantics available to existing queries."
        ],
        "concept": "Library modeling for CodeQL",
        "hints": [
            "Distinguish selecting more checks from teaching existing checks about a library.",
            "The unsupported behavior is in a Java dependency, not in the query schedule."
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options"
    },
    {
        "id": "ghas-operations-022",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which approach selects a tailored CodeQL query set by metadata or location rather than choosing an unchanged built-in suite?",
        "choices": [
            "Custom .qls suite",
            "default",
            "security-extended",
            "security-and-quality"
        ],
        "correct": 0,
        "explanations": [
            "A custom query suite selects queries by metadata, location, or other criteria and requires advanced setup.",
            "The default suite emphasizes high-precision security findings and fewer false positives.",
            "This includes default queries plus additional, lower-precision security queries; triage may increase.",
            "This advanced-setup suite adds maintainability and reliability queries to security-extended."
        ],
        "concept": "Risk-tailored CodeQL query selection",
        "hints": [
            "Compare precision, breadth, and the kinds of findings sought.",
            "A broader query set changes triage workload as well as detection."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites"
    },
    {
        "id": "ghas-operations-023",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A multi-language repository adopts one CodeQL suite name. What review is needed before assuming equal weakness detection across languages?",
        "choices": [
            "Use alert volume alone as the detection-success metric.",
            "Review each language’s query coverage against relevant weaknesses.",
            "Measure useful findings and false-positive workload in a pilot.",
            "Treat every language as having identical query coverage."
        ],
        "correct": 1,
        "explanations": [
            "More alerts can include more false positives; count alone does not show detection value.",
            "CodeQL queries differ by language; a suite name does not imply identical checks for every language.",
            "Broader suites add lower-precision queries, so a pilot can evaluate whether their extra findings justify triage effort.",
            "The documented query lists are language-specific; equal suite labels do not establish equal coverage."
        ],
        "concept": "Language-aware detection tailoring",
        "hints": [
            "Detection coverage should reflect the languages and risks actually present.",
            "Evaluate analysis usefulness as well as the raw number of findings."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites"
    },
    {
        "id": "ghas-operations-024",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which evaluation best informs an organization deciding whether to expand beyond the default CodeQL suite?",
        "choices": [
            "Use alert volume alone as the detection-success metric.",
            "Review each language’s query coverage against relevant weaknesses.",
            "Measure useful findings and false-positive workload in a pilot.",
            "Treat every language as having identical query coverage."
        ],
        "correct": 2,
        "explanations": [
            "More alerts can include more false positives; count alone does not show detection value.",
            "CodeQL queries differ by language; a suite name does not imply identical checks for every language.",
            "Broader suites add lower-precision queries, so a pilot can evaluate whether their extra findings justify triage effort.",
            "The documented query lists are language-specific; equal suite labels do not establish equal coverage."
        ],
        "concept": "Query-suite workload planning",
        "hints": [
            "Detection coverage should reflect the languages and risks actually present.",
            "Evaluate analysis usefulness as well as the raw number of findings."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/codeql/codeql-query-suites"
    },
    {
        "id": "ghas-operations-025",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "An alert total falls after a workflow failure. Which English UI surface helps check whether analysis actually ran?",
        "choices": [
            "Affected branches",
            "Assignees",
            "Show paths",
            "Tool status page"
        ],
        "correct": 3,
        "explanations": [
            "Affected branches shows the state of an alert on branches other than the default branch.",
            "Assignees identifies the person responsible for fixing an alert rather than validating an analysis run.",
            "For data-flow alerts, Show paths traces the source-to-sink steps that support triage.",
            "The tool status page shows when analysis ran and helps identify analysis problems."
        ],
        "concept": "Analysis health before risk conclusions",
        "hints": [
            "Check which evidence answers the immediate analysis question.",
            "A clean result is meaningful only if the intended analysis actually ran."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts"
    },
    {
        "id": "ghas-operations-026",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "For a CodeQL data-flow alert, which English UI control displays the steps from untrusted input to the unsafe operation?",
        "choices": [
            "Show paths",
            "Tool status page",
            "Affected branches",
            "Assignees"
        ],
        "correct": 0,
        "explanations": [
            "For data-flow alerts, Show paths traces the source-to-sink steps that support triage.",
            "The tool status page shows when analysis ran and helps identify analysis problems.",
            "Affected branches shows the state of an alert on branches other than the default branch.",
            "Assignees identifies the person responsible for fixing an alert rather than validating an analysis run."
        ],
        "concept": "Data-flow evidence for triage",
        "hints": [
            "Check which evidence answers the immediate analysis question.",
            "A clean result is meaningful only if the intended analysis actually ran."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts"
    },
    {
        "id": "ghas-operations-027",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A required security status check should be satisfied only by the installed scanning GitHub App, not another integration posting the same status name. Which rule configuration addresses that?",
        "choices": [
            "Select any source for the required check",
            "Select the scanning App as the expected source",
            "Give all integrations the same check name",
            "Require a linear history instead of the check"
        ],
        "correct": 1,
        "explanations": [
            "Any source does not enforce the requested identity boundary for status updates.",
            "A required status check can specify the GitHub App expected to supply its result.",
            "Sharing a status name does not establish the trusted issuer of a result.",
            "Linear history constrains commit structure, not the issuer of a security status."
        ],
        "concept": "Required-check source binding",
        "hints": [
            "A familiar check label is not proof of who submitted it.",
            "The policy concerns the issuer of the result, not only whether it passed."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "ghas-operations-028",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which selection makes a code scanning campaign a focused learning and remediation exercise rather than an unrelated alert dump?",
        "choices": [
            "Group related default-branch code scanning alerts.",
            "Name a campaign point of contact.",
            "Assign alerts to eligible repository writers.",
            "Track remediation progress for the selected alerts."
        ],
        "correct": 0,
        "explanations": [
            "Related findings let developers reuse remediation knowledge; code campaigns target default-branch alerts.",
            "A named contact gives contributors a clear route for questions, reviews, and collaboration.",
            "Code and secret campaign alerts can be assigned to users with write access; secret alert access may be raised temporarily.",
            "Campaign tracking measures the focused remediation effort; campaign creation is not itself a fix."
        ],
        "concept": "Focused campaign scoping",
        "hints": [
            "Separate the campaign’s scope, coordination, ownership, and progress.",
            "A remediation program needs traceable work, not only a smaller displayed count."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns"
    },
    {
        "id": "ghas-operations-029",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Developers need a clear route for campaign questions and fix reviews. Which campaign practice addresses that need?",
        "choices": [
            "Group related default-branch code scanning alerts.",
            "Name a campaign point of contact.",
            "Assign alerts to eligible repository writers.",
            "Track remediation progress for the selected alerts."
        ],
        "correct": 1,
        "explanations": [
            "Related findings let developers reuse remediation knowledge; code campaigns target default-branch alerts.",
            "A named contact gives contributors a clear route for questions, reviews, and collaboration.",
            "Code and secret campaign alerts can be assigned to users with write access; secret alert access may be raised temporarily.",
            "Campaign tracking measures the focused remediation effort; campaign creation is not itself a fix."
        ],
        "concept": "Campaign collaboration contact",
        "hints": [
            "Separate the campaign’s scope, coordination, ownership, and progress.",
            "A remediation program needs traceable work, not only a smaller displayed count."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns"
    },
    {
        "id": "ghas-operations-030",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "After launching a campaign, which ongoing activity shows whether its selected remediation work is progressing?",
        "choices": [
            "Assign alerts to eligible repository writers.",
            "Track remediation progress for the selected alerts.",
            "Group related default-branch code scanning alerts.",
            "Name a campaign point of contact."
        ],
        "correct": 1,
        "explanations": [
            "Code and secret campaign alerts can be assigned to users with write access; secret alert access may be raised temporarily.",
            "Campaign tracking measures the focused remediation effort; campaign creation is not itself a fix.",
            "Related findings let developers reuse remediation knowledge; code campaigns target default-branch alerts.",
            "A named contact gives contributors a clear route for questions, reviews, and collaboration."
        ],
        "concept": "Campaign remediation measurement",
        "hints": [
            "Separate the campaign’s scope, coordination, ownership, and progress.",
            "A remediation program needs traceable work, not only a smaller displayed count."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns"
    },
    {
        "id": "ghas-operations-031",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which proposed alert group should not be promised a security campaign based on the currently documented campaign types?",
        "choices": [
            "Default-branch SQL injection code scanning alerts",
            "Credential-exposure secret scanning alerts in public preview",
            "Known-vulnerability Dependabot dependency alerts",
            "Default-branch path traversal code scanning alerts"
        ],
        "correct": 2,
        "explanations": [
            "These are code scanning alerts on the default branch, a documented campaign alert type.",
            "Secret scanning campaigns are explicitly documented, with a public-preview qualification.",
            "Current campaign documentation lists code scanning and secret scanning, not Dependabot vulnerability alerts.",
            "These are also default-branch code scanning alerts and can be grouped for a campaign."
        ],
        "concept": "Campaign support versus blueprint wording",
        "hints": [
            "Check whether the documented campaign alert types include the proposed detector.",
            "A blueprint objective is not an availability guarantee for every related feature."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns"
    },
    {
        "id": "ghas-operations-032",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A campaign needs named remediation ownership for its code and secret alerts. Which supported action establishes it?",
        "choices": [
            "Track remediation progress for the selected alerts.",
            "Group related default-branch code scanning alerts.",
            "Name a campaign point of contact.",
            "Assign alerts to eligible repository writers."
        ],
        "correct": 3,
        "explanations": [
            "Campaign tracking measures the focused remediation effort; campaign creation is not itself a fix.",
            "Related findings let developers reuse remediation knowledge; code campaigns target default-branch alerts.",
            "A named contact gives contributors a clear route for questions, reviews, and collaboration.",
            "Code and secret campaign alerts can be assigned to users with write access; secret alert access may be raised temporarily."
        ],
        "concept": "Eligible campaign alert ownership",
        "hints": [
            "Separate the campaign’s scope, coordination, ownership, and progress.",
            "A remediation program needs traceable work, not only a smaller displayed count."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-campaigns"
    },
    {
        "id": "ghas-operations-033",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A cross-team report contains sensitive alert details. Which reporting approach preserves the alert-access boundary?",
        "choices": [
            "Audit log",
            "Alert dismissal rationale",
            "Periodic exception review",
            "Permission-scoped reporting"
        ],
        "correct": 3,
        "explanations": [
            "Audit logs record supported secret scanning and Dependabot events; code scanning alert timeline events are not included.",
            "A meaningful rationale explains why a finding was dismissed rather than implying it was fixed.",
            "Revisiting exceptions tests whether earlier risk assumptions and ownership still hold.",
            "Security reporting must respect alert access rather than distributing sensitive details to unauthorized readers."
        ],
        "concept": "Confidential security reporting",
        "hints": [
            "Distinguish operational convenience from durable governance evidence.",
            "Ask what a future reviewer would need to understand the decision."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts"
    },
    {
        "id": "ghas-operations-034",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A repository was archived today. An analyst views last week's security overview, when its alerts were open. Which interpretation matches the dashboard's documented data model?",
        "choices": [
            "Both repository status and alert state revert to last week",
            "Archived repositories vanish from every historical view",
            "Current closure rewrites every historical alert state",
            "Repository filters use current status; alert state is historical"
        ],
        "correct": 3,
        "explanations": [
            "Repository attributes used for filtering reflect current state, not the selected historical date.",
            "An archived repository can appear when the archived-repository filter includes it.",
            "Historical alert state can remain open even though archiving closed alerts today.",
            "The dashboard combines historical alert states with current repository attributes."
        ],
        "concept": "Historical dashboard state versus current filters",
        "hints": [
            "The selected date range need not time-travel every repository attribute.",
            "Consider alert history and repository filtering separately."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/security-overview"
    },
    {
        "id": "ghas-operations-035",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A public project's maintainers and an invited researcher need to collaborate on an embargoed patch while the security advisory remains a draft. Which workspace supports private code collaboration?",
        "choices": [
            "A temporary private fork associated with the advisory",
            "A normal public fork with a neutral branch name",
            "A draft pull request in the public repository",
            "A public issue with details hidden in collapsed text"
        ],
        "correct": 0,
        "explanations": [
            "Repository security advisories support private patch collaboration in a temporary private fork.",
            "A neutral name does not make code in a public fork confidential.",
            "Draft pull-request status does not make a public repository's changes private.",
            "Collapsed public issue content remains publicly accessible and is not an embargo boundary."
        ],
        "concept": "Embargoed patch workspace",
        "hints": [
            "Distinguish workflow labels from actual repository visibility.",
            "The need is to share code privately before disclosure."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/vulnerability-reporting-and-management/repository-security-advisories"
    },
    {
        "id": "ghas-operations-036",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A CodeQL workflow runs on pull_request, but no scan is triggered when a change enters the repository's merge queue. Which additional event is documented for scanning the queued merge group?",
        "choices": [
            "workflow_dispatch",
            "merge_group",
            "release",
            "issues"
        ],
        "correct": 1,
        "explanations": [
            "Manual dispatch can start a run but is not the merge-queue event.",
            "The merge_group event triggers analysis for changes added to a merge queue.",
            "A release event occurs in a different workflow stage, not on merge-queue grouping.",
            "Issue activity is not a trigger for validating the queued merge commit."
        ],
        "concept": "Code scanning in merge queues",
        "hints": [
            "A queued merge group is not the same event as opening a pull request.",
            "Choose the event representing the commit set that the queue will merge."
        ],
        "source": "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options"
    },
    {
        "id": "ghas-operations-037",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A code scanning alert is fixed on the default branch but still open on a release branch. Which English UI section distinguishes those states?",
        "choices": [
            "Assignees",
            "Show paths",
            "Tool status page",
            "Affected branches"
        ],
        "correct": 3,
        "explanations": [
            "Assignees identifies the person responsible for fixing an alert rather than validating an analysis run.",
            "For data-flow alerts, Show paths traces the source-to-sink steps that support triage.",
            "The tool status page shows when analysis ran and helps identify analysis problems.",
            "Affected branches shows the state of an alert on branches other than the default branch."
        ],
        "concept": "Branch-specific remediation verification",
        "hints": [
            "Check which evidence answers the immediate analysis question.",
            "A clean result is meaningful only if the intended analysis actually ran."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts"
    },
    {
        "id": "ghas-operations-038",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which literal code scanning filter selects open high-severity alerts on main?",
        "choices": [
            "is:closed severity:high branch:main",
            "is:open severity:high branch:main",
            "is:open severity:low branch:main",
            "is:open severity:high branch:release"
        ],
        "correct": 1,
        "explanations": [
            "This matches closed high-severity code scanning alerts present on main.",
            "This matches open high-severity code scanning alerts on main.",
            "This restricts open alerts to low severity rather than high severity.",
            "This uses release as the branch scope rather than main."
        ],
        "concept": "Scoped alert-list filtering",
        "hints": [
            "Read each qualifier as a constraint on the result set.",
            "Distinguish alert state from severity and branch scope."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts"
    },
    {
        "id": "ghas-operations-039",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "Which evidence source should an investigator consult to attribute supported security-alert actions to actors?",
        "choices": [
            "Audit log",
            "Alert dismissal rationale",
            "Periodic exception review",
            "Permission-scoped reporting"
        ],
        "correct": 0,
        "explanations": [
            "Audit logs record supported secret scanning and Dependabot events; code scanning alert timeline events are not included.",
            "A meaningful rationale explains why a finding was dismissed rather than implying it was fixed.",
            "Revisiting exceptions tests whether earlier risk assumptions and ownership still hold.",
            "Security reporting must respect alert access rather than distributing sensitive details to unauthorized readers."
        ],
        "concept": "Security-action auditability",
        "hints": [
            "Distinguish operational convenience from durable governance evidence.",
            "Ask what a future reviewer would need to understand the decision."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/audit-security-alerts"
    },
    {
        "id": "ghas-operations-040",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "An enterprise administrator disallows Copilot Autofix for code scanning. A repository administrator wants to enable it locally. What must happen first?",
        "choices": [
            "Switch the repository from default to advanced setup",
            "Generate a new SARIF category for the same findings",
            "Reverse the enterprise setting at an authorized level",
            "Assign a Copilot seat to each repository collaborator"
        ],
        "correct": 2,
        "explanations": [
            "Copilot Autofix policy applies across default and advanced CodeQL setup.",
            "An analysis category does not override enterprise policy.",
            "Disabling at enterprise level prevents lower levels from enabling it until that policy is reversed.",
            "A collaborator license assignment does not override the enterprise feature restriction."
        ],
        "concept": "Autofix policy inheritance",
        "hints": [
            "Higher-level feature restrictions constrain lower-level choices.",
            "Changing analysis mechanics does not change policy authority."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning"
    },
    {
        "id": "ghas-operations-041",
        "domain": "Security operations: best practices, prioritization, remediation",
        "prompt": "A dismissed alert becomes applicable after a code change invalidates its original justification. Which disposition is appropriate?",
        "choices": [
            "Document a justified false-positive dismissal.",
            "Record accepted risk and its rationale.",
            "Verify the fix with fresh, relevant analysis.",
            "Reopen the alert when the dismissal is no longer justified."
        ],
        "correct": 3,
        "explanations": [
            "A false-positive dismissal needs evidence that the reported vulnerability does not apply to the analyzed code.",
            "Accepted risk acknowledges an unresolved issue; it must not be reported as a verified code fix.",
            "A fix is established by relevant analysis of the changed code, not by merely editing or dismissing an alert.",
            "A changed assumption or newly applicable code path can invalidate an earlier dismissal."
        ],
        "concept": "Revisiting alert dismissals",
        "hints": [
            "Separate evidence about a finding from a decision to tolerate risk.",
            "Choose a disposition that remains truthful when another reviewer reads it."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts"
    },
    {
        "id": "ghas-administration-001",
        "domain": "GitHub Security suites administration",
        "prompt": "An authorized GitHub.com organization administrator needs to create a security configuration. Which English UI route is correct?",
        "choices": [
            "Repository > Settings > Rules > Rulesets",
            "Organization > Security and quality > Risk",
            "Repository > Insights > Dependency graph",
            "Organization > Settings > Advanced Security > Configurations"
        ],
        "correct": 3,
        "explanations": [
            "Repository rulesets govern branch, tag, or push constraints rather than organization security configurations.",
            "Risk is an investigation view, not the editor for security configurations.",
            "This route opens dependency inventory rather than organization enablement policies.",
            "Organization security configurations are administered in this settings area."
        ],
        "concept": "Organization configuration administration",
        "hints": [
            "Choose the administrative scope before choosing the setting.",
            "Configuration administration and alert investigation are different tasks."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-002",
        "domain": "GitHub Security suites administration",
        "prompt": "Which English configuration policy applies a selected baseline automatically to newly created repositories of a chosen visibility?",
        "choices": [
            "Apply the configuration to selected repositories.",
            "Use as default for newly created repositories",
            "Enforce configuration",
            "Keep existing settings"
        ],
        "correct": 1,
        "explanations": [
            "Applying attaches the configuration to selected existing repositories rather than merely defining a future default.",
            "This policy automatically applies the selected configuration to new repositories of the chosen visibility.",
            "Enforcement prevents repository administrators changing features explicitly enabled or disabled by the configuration.",
            "Leaving a feature unset preserves its existing setting; that feature is not enforced by this configuration."
        ],
        "concept": "New-repository configuration defaults",
        "hints": [
            "Separate a default for future repositories from an action on existing ones.",
            "Being selected, applied, and enforced are different states."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-003",
        "domain": "GitHub Security suites administration",
        "prompt": "A repository is transferred into an organization with a default security configuration. What configuration action is still needed?",
        "choices": [
            "Check the attached configuration and its enforcement status.",
            "Review paid-feature entitlement before applying at scale.",
            "Apply an appropriate configuration manually after transfer.",
            "Create a custom configuration for the required feature mix."
        ],
        "correct": 2,
        "explanations": [
            "Repository behavior depends on the configuration relationship and enforcement, not its display name alone.",
            "Applying paid features to private or internal repositories can consume licensed usage and requires the applicable entitlement.",
            "Organization defaults apply to newly created repositories, not automatically to transferred repositories.",
            "Custom configurations let the organization choose a tailored combination of feature enablement settings."
        ],
        "concept": "Transferred repository coverage",
        "hints": [
            "Check whether the repository is new, transferred, or already managed.",
            "Do not assume a default retroactively changes every repository."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-004",
        "domain": "GitHub Security suites administration",
        "prompt": "Which English policy prevents repository administrators from changing features explicitly enabled or disabled by their applied configuration?",
        "choices": [
            "Keep existing settings",
            "Apply the configuration to selected repositories.",
            "Use as default for newly created repositories",
            "Enforce configuration"
        ],
        "correct": 3,
        "explanations": [
            "Leaving a feature unset preserves its existing setting; that feature is not enforced by this configuration.",
            "Applying attaches the configuration to selected existing repositories rather than merely defining a future default.",
            "This policy automatically applies the selected configuration to new repositories of the chosen visibility.",
            "Enforcement prevents repository administrators changing features explicitly enabled or disabled by the configuration."
        ],
        "concept": "Configuration enforcement boundary",
        "hints": [
            "Separate a default for future repositories from an action on existing ones.",
            "Being selected, applied, and enforced are different states."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-005",
        "domain": "GitHub Security suites administration",
        "prompt": "In an enforced security configuration, which choice leaves a feature’s current enablement untouched and unenforced by that configuration?",
        "choices": [
            "Keep existing settings",
            "Apply the configuration to selected repositories.",
            "Use as default for newly created repositories",
            "Enforce configuration"
        ],
        "correct": 0,
        "explanations": [
            "Leaving a feature unset preserves its existing setting; that feature is not enforced by this configuration.",
            "Applying attaches the configuration to selected existing repositories rather than merely defining a future default.",
            "This policy automatically applies the selected configuration to new repositories of the chosen visibility.",
            "Enforcement prevents repository administrators changing features explicitly enabled or disabled by the configuration."
        ],
        "concept": "Unset settings under enforcement",
        "hints": [
            "Separate a default for future repositories from an action on existing ones.",
            "Being selected, applied, and enforced are different states."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-006",
        "domain": "GitHub Security suites administration",
        "prompt": "A repository group needs an enablement mix different from the GitHub-recommended baseline. Which administrative approach fits?",
        "choices": [
            "Apply an appropriate configuration manually after transfer.",
            "Create a custom configuration for the required feature mix.",
            "Check the attached configuration and its enforcement status.",
            "Review paid-feature entitlement before applying at scale."
        ],
        "correct": 1,
        "explanations": [
            "Organization defaults apply to newly created repositories, not automatically to transferred repositories.",
            "Custom configurations let the organization choose a tailored combination of feature enablement settings.",
            "Repository behavior depends on the configuration relationship and enforcement, not its display name alone.",
            "Applying paid features to private or internal repositories can consume licensed usage and requires the applicable entitlement."
        ],
        "concept": "Custom configuration design",
        "hints": [
            "Check whether the repository is new, transferred, or already managed.",
            "Do not assume a default retroactively changes every repository."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-007",
        "domain": "GitHub Security suites administration",
        "prompt": "A new-repository default has been saved. How does an administrator bring already existing repositories under that configuration?",
        "choices": [
            "Enforce configuration",
            "Keep existing settings",
            "Apply the configuration to selected repositories.",
            "Use as default for newly created repositories"
        ],
        "correct": 2,
        "explanations": [
            "Enforcement prevents repository administrators changing features explicitly enabled or disabled by the configuration.",
            "Leaving a feature unset preserves its existing setting; that feature is not enforced by this configuration.",
            "Applying attaches the configuration to selected existing repositories rather than merely defining a future default.",
            "This policy automatically applies the selected configuration to new repositories of the chosen visibility."
        ],
        "concept": "Existing repository configuration attachment",
        "hints": [
            "Separate a default for future repositories from an action on existing ones.",
            "Being selected, applied, and enforced are different states."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-008",
        "domain": "GitHub Security suites administration",
        "prompt": "Which configuration status means a repository attachment is in progress rather than complete?",
        "choices": [
            "attaching",
            "enforced",
            "failed",
            "attached"
        ],
        "correct": 0,
        "explanations": [
            "The configuration is still being applied; this transient state is not completion evidence.",
            "The configuration is active and enforced, restricting changes to controlled feature enablement.",
            "A failed attachment needs investigation and is not evidence that the intended features are active.",
            "The configuration is actively applied and the repository inherits its settings."
        ],
        "concept": "Pending configuration application",
        "hints": [
            "A request being accepted is not the same as a completed attachment.",
            "Interpret the repository’s current relationship to the configuration."
        ],
        "source": "https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses"
    },
    {
        "id": "ghas-administration-009",
        "domain": "GitHub Security suites administration",
        "prompt": "Which configuration status requires investigating an unsuccessful attachment rather than counting the repository as covered?",
        "choices": [
            "enforced",
            "failed",
            "attached",
            "attaching"
        ],
        "correct": 1,
        "explanations": [
            "The configuration is active and enforced, restricting changes to controlled feature enablement.",
            "A failed attachment needs investigation and is not evidence that the intended features are active.",
            "The configuration is actively applied and the repository inherits its settings.",
            "The configuration is still being applied; this transient state is not completion evidence."
        ],
        "concept": "Failed configuration attachment",
        "hints": [
            "A request being accepted is not the same as a completed attachment.",
            "Interpret the repository’s current relationship to the configuration."
        ],
        "source": "https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses"
    },
    {
        "id": "ghas-administration-010",
        "domain": "GitHub Security suites administration",
        "prompt": "Which status indicates both active configuration inheritance and restrictions on repository-admin enablement changes?",
        "choices": [
            "attaching",
            "enforced",
            "failed",
            "attached"
        ],
        "correct": 1,
        "explanations": [
            "The configuration is still being applied; this transient state is not completion evidence.",
            "The configuration is active and enforced, restricting changes to controlled feature enablement.",
            "A failed attachment needs investigation and is not evidence that the intended features are active.",
            "The configuration is actively applied and the repository inherits its settings."
        ],
        "concept": "Enforced configuration relationship",
        "hints": [
            "A request being accepted is not the same as a completed attachment.",
            "Interpret the repository’s current relationship to the configuration."
        ],
        "source": "https://docs.github.com/en/code-security/reference/security-at-scale/configuration-statuses"
    },
    {
        "id": "ghas-administration-011",
        "domain": "GitHub Security suites administration",
        "prompt": "In an organization on GitHub Enterprise Cloud with Secret Protection enabled, a response team must manage secret-scanning results and bypass requests without controlling every security feature. Which role design best fits least privilege?",
        "choices": [
            "Assign organization owner to every responder",
            "Assign the predefined security manager role",
            "Assign repository admin across the organization",
            "Create a custom organization role for these duties"
        ],
        "correct": 3,
        "explanations": [
            "Organization owner grants broad authority beyond the requested response duties.",
            "The predefined role includes organization-wide security-feature settings beyond this narrow scope.",
            "Repository admin across repositories also grants unnecessary general administration privileges.",
            "Use a Read base with View secret scanning alerts; Dismiss, reopen, or assign secret scanning alerts; and Review and manage secret scanning bypass requests. Adding repository permissions to custom organization roles is currently in public preview."
        ],
        "concept": "Narrow custom security roles",
        "hints": [
            "Compare the requested duties with the full predefined role's scope.",
            "Least privilege may require a role smaller than the standard security role."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles"
    },
    {
        "id": "ghas-administration-012",
        "domain": "GitHub Security suites administration",
        "prompt": "Which permission combination is supplied by the predefined security manager role without requiring general code-write access?",
        "choices": [
            "Configure organization-level security features.",
            "Read repositories and manage security alerts organization-wide.",
            "Write application code across all repositories.",
            "Assign the security manager organization role."
        ],
        "correct": 1,
        "explanations": [
            "The role grants security administration authority; feature licensing remains a separate requirement.",
            "Security manager grants repository read access and write access to security alerts across the organization.",
            "Security manager alone does not grant general write permission to application source code.",
            "Assignment of this organization role is an organization-owner responsibility."
        ],
        "concept": "Security manager least privilege",
        "hints": [
            "Distinguish code access from authority over security alerts and settings.",
            "A specialized organization role need not be a general repository administrator."
        ],
        "source": "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization"
    },
    {
        "id": "ghas-administration-013",
        "domain": "GitHub Security suites administration",
        "prompt": "A member has an explicit Write grant on one repository and also the organization's security manager role. The owner removes only security manager. What should the access review expect on that repository?",
        "choices": [
            "The independent Write grant becomes Read automatically",
            "All repository access is removed with security manager",
            "The independent Write grant becomes Admin automatically",
            "The independently granted Write access remains"
        ],
        "correct": 3,
        "explanations": [
            "Security manager permissions are additional to existing access; removing the role does not downgrade that grant.",
            "Removing one role is not revocation of every independent repository permission.",
            "Security-role removal does not promote a separate repository grant.",
            "Review independent grants separately; the Write access was not supplied by security manager."
        ],
        "concept": "Independent grants during security-role removal",
        "hints": [
            "Identify which grant originally supplied code-write access.",
            "Removing an additive role is not the same as revoking all access paths."
        ],
        "source": "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization"
    },
    {
        "id": "ghas-administration-014",
        "domain": "GitHub Security suites administration",
        "prompt": "Without custom alert permissions, which minimum standard repository role can view the full code scanning alert summary, not just pull request annotations?",
        "choices": [
            "Triage",
            "Write",
            "Admin",
            "Read"
        ],
        "correct": 1,
        "explanations": [
            "Triage provides issue and pull request management beyond Read, but is below the write access needed for the full code scanning alert list.",
            "Write is the minimum standard repository role for the full code scanning alert summary, absent additional custom alert permissions.",
            "Admin includes repository administration and can view the alert summary, but is broader than the minimum role needed.",
            "Read permits viewing code scanning pull request annotations and inspecting active rulesets, but not the full code scanning alert list by itself."
        ],
        "concept": "Repository code-alert visibility",
        "hints": [
            "Compare the minimum standard role rather than every role with broader authority.",
            "Viewing annotations, viewing an alert list, and administering a repository are distinct permissions."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/assess-alerts"
    },
    {
        "id": "ghas-administration-015",
        "domain": "GitHub Security suites administration",
        "prompt": "A branch matches two rulesets and a branch protection rule. How are their applicable restrictions resolved?",
        "choices": [
            "All applicable rules combine; the stricter duplicate requirement wins.",
            "Grant bypass only to explicitly selected eligible actors.",
            "Match the ruleset’s branch or tag target patterns.",
            "Inspect active rulesets with repository read access."
        ],
        "correct": 0,
        "explanations": [
            "Rulesets layer with other rulesets and branch protection; they do not have a priority ordering.",
            "Rulesets can name roles, teams, or GitHub Apps for bypass instead of implicitly exempting everyone.",
            "Branch and tag rulesets apply to the refs targeted by their configured patterns.",
            "Readers can inspect active rulesets without receiving permission to change them."
        ],
        "concept": "Policy layering without priority order",
        "hints": [
            "Check rule targeting, applicability, and explicit bypass actors.",
            "Multiple policy sources can constrain the same change."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "ghas-administration-016",
        "domain": "GitHub Security suites administration",
        "prompt": "A ruleset needs a narrow exception for an approved automation app. Which governance approach fits?",
        "choices": [
            "All applicable rules combine; the stricter duplicate requirement wins.",
            "Grant bypass only to explicitly selected eligible actors.",
            "Match the ruleset’s branch or tag target patterns.",
            "Inspect active rulesets with repository read access."
        ],
        "correct": 1,
        "explanations": [
            "Rulesets layer with other rulesets and branch protection; they do not have a priority ordering.",
            "Rulesets can name roles, teams, or GitHub Apps for bypass instead of implicitly exempting everyone.",
            "Branch and tag rulesets apply to the refs targeted by their configured patterns.",
            "Readers can inspect active rulesets without receiving permission to change them."
        ],
        "concept": "Ruleset bypass actor governance",
        "hints": [
            "Check rule targeting, applicability, and explicit bypass actors.",
            "Multiple policy sources can constrain the same change."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "ghas-administration-017",
        "domain": "GitHub Security suites administration",
        "prompt": "What does the English ruleset enforcement state Active do?",
        "choices": [
            "Keep the definition without enforcing its rules.",
            "Grant every repository reader permission to edit rules.",
            "Give repository writers an automatic bypass exemption.",
            "Enforce the configured rules on matching targets."
        ],
        "correct": 3,
        "explanations": [
            "Retaining a ruleset without enforcement describes Disabled rather than Active.",
            "Readers can inspect active rulesets; activation does not give readers rule-editing authority.",
            "An Active ruleset does not automatically exempt all writers; bypass actors are configured separately.",
            "Active means enforcing the rules on matching targets, subject to the configured bypass policy."
        ],
        "concept": "Active ruleset enforcement",
        "hints": [
            "Interpret enforcement state separately from policy content.",
            "Visibility of a rule does not necessarily mean authority to edit it."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "ghas-administration-018",
        "domain": "GitHub Security suites administration",
        "prompt": "Which minimum repository access lets a contributor inspect active rulesets without administering them?",
        "choices": [
            "Admin",
            "Read",
            "Triage",
            "Write"
        ],
        "correct": 1,
        "explanations": [
            "Admin includes repository administration and can view the alert summary, but is broader than the minimum role needed.",
            "Read permits viewing code scanning pull request annotations and inspecting active rulesets, but not the full code scanning alert list by itself.",
            "Triage provides issue and pull request management beyond Read, but is below the write access needed for the full code scanning alert list.",
            "Write is the minimum standard repository role for the full code scanning alert summary, absent additional custom alert permissions."
        ],
        "concept": "Read-only policy transparency",
        "hints": [
            "Compare the minimum standard role rather than every role with broader authority.",
            "Viewing annotations, viewing an alert list, and administering a repository are distinct permissions."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "ghas-administration-019",
        "domain": "GitHub Security suites administration",
        "prompt": "An approved migration bot must skip push protection entirely for its commits. The organization has accepted this narrowly scoped exception. Which delegated-bypass capability implements that requirement?",
        "choices": [
            "Grant the bot a push-protection exemption",
            "Grant the bot permission to bypass detected blocks",
            "Add the bot as a bypass-request reviewer",
            "Approve one pending request from the bot"
        ],
        "correct": 0,
        "explanations": [
            "An exemption skips push protection for that selected actor's commits and should be tightly scoped.",
            "Bypass permission lets an actor bypass blocks; it does not skip protection entirely.",
            "Reviewing others' requests does not implement actor-level scanning exemption.",
            "One request approval is limited to that request, not the bot's future commits."
        ],
        "concept": "Push-protection exemptions versus bypass rights",
        "hints": [
            "The requirement distinguishes skipping a check from overriding its result.",
            "Keep an actor-wide exception separate from approval of one push."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass"
    },
    {
        "id": "ghas-administration-020",
        "domain": "GitHub Security suites administration",
        "prompt": "A person is added as a push-protection bypass reviewer. What should remain separate from that delegated duty?",
        "choices": [
            "Configure designated bypass reviewers.",
            "Grant an explicit bypass privilege.",
            "Grant a push-protection exemption.",
            "Retain ordinary repository permissions."
        ],
        "correct": 3,
        "explanations": [
            "Delegated bypass routes requests from contributors without bypass rights to designated reviewers.",
            "A bypass privilege allows selected actors to bypass; it is not the same as requesting approval.",
            "An exemption skips push protection for selected actors, which differs from reviewing individual requests.",
            "Bypass delegation does not itself grant general repository administration or code access."
        ],
        "concept": "Bypass delegation versus repository administration",
        "hints": [
            "A delegated exception should not expand unrelated permissions.",
            "Separate requesting an exception from being authorized to approve one."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass"
    },
    {
        "id": "ghas-administration-021",
        "domain": "GitHub Security suites administration",
        "prompt": "On GHES 3.19 with Actions installed, both Secret Protection and Code Security controls are missing. Which prerequisites should be checked?",
        "choices": [
            "Check site-installed features and the applicable security license.",
            "Check that GitHub Actions is installed on the instance.",
            "Use the GHES 3.19 documentation for that deployment.",
            "Review organization-level enablement after site prerequisites."
        ],
        "correct": 0,
        "explanations": [
            "On GHES 3.19, the configuration UI depends on site-installed features and product entitlement.",
            "GHES 3.19 code scanning default setup and Dependabot security updates require GitHub Actions installation.",
            "A named Server release can differ from current Cloud behavior; release-specific documentation governs the comparison.",
            "Installing a capability on Server does not replace applying appropriate organization and repository settings."
        ],
        "concept": "Versioned Server feature availability",
        "hints": [
            "Use the documentation for the installed Server release, not Cloud assumptions.",
            "Check installation prerequisites separately from organization settings."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-022",
        "domain": "GitHub Security suites administration",
        "prompt": "On GHES 3.19, what installation prerequisite is shared by code scanning default setup and Dependabot security updates?",
        "choices": [
            "Check site-installed features and the applicable security license.",
            "Check that GitHub Actions is installed on the instance.",
            "Use the GHES 3.19 documentation for that deployment.",
            "Review organization-level enablement after site prerequisites."
        ],
        "correct": 1,
        "explanations": [
            "On GHES 3.19, the configuration UI depends on site-installed features and product entitlement.",
            "GHES 3.19 code scanning default setup and Dependabot security updates require GitHub Actions installation.",
            "A named Server release can differ from current Cloud behavior; release-specific documentation governs the comparison.",
            "Installing a capability on Server does not replace applying appropriate organization and repository settings."
        ],
        "concept": "Server Actions prerequisite",
        "hints": [
            "Use the documentation for the installed Server release, not Cloud assumptions.",
            "Check installation prerequisites separately from organization settings."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-023",
        "domain": "GitHub Security suites administration",
        "prompt": "An Enterprise Cloud owner lacks security overview data for an organization where they have no organization role. What action does the permissions reference prescribe?",
        "choices": [
            "Join an organization team with repository read access.",
            "Enable security email notifications for the organization.",
            "Join the organization as an organization owner.",
            "Rely on enterprise ownership without an organization role."
        ],
        "correct": 2,
        "explanations": [
            "Read or triage repository access does not grant organization security overview alert views.",
            "Notification preferences do not create the organization roles needed to view security data.",
            "The permissions reference directs enterprise owners to join as organization owners to see that organization’s repository data.",
            "Enterprise ownership alone does not grant unrestricted security overview data for every organization."
        ],
        "concept": "Enterprise ownership versus organization security access",
        "hints": [
            "Enterprise ownership and organization-level security access are separate roles.",
            "Check the role within the organization whose data is missing."
        ],
        "source": "https://docs.github.com/en/code-security/reference/permissions/security-overview"
    },
    {
        "id": "ghas-administration-024",
        "domain": "GitHub Security suites administration",
        "prompt": "Which literal REST operation lists the security configurations available to an organization?",
        "choices": [
            "POST /orgs/{org}/code-security/configurations",
            "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
            "GET /repos/{owner}/{repo}/code-security-configuration",
            "GET /orgs/{org}/code-security/configurations"
        ],
        "correct": 3,
        "explanations": [
            "This endpoint creates an organization security configuration rather than attaching an existing one.",
            "This endpoint attaches an existing configuration to selected repositories with appropriate authorization.",
            "This endpoint retrieves the security configuration associated with one repository.",
            "This endpoint lists security configurations available to the organization."
        ],
        "concept": "Configuration discovery API",
        "hints": [
            "Distinguish reading configuration definitions from applying them.",
            "Match the HTTP method and resource scope to the requested operation."
        ],
        "source": "https://docs.github.com/en/rest/code-security/configurations"
    },
    {
        "id": "ghas-administration-025",
        "domain": "GitHub Security suites administration",
        "prompt": "An authorized automation already knows a security configuration ID. Which REST operation applies it to selected repositories?",
        "choices": [
            "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
            "GET /repos/{owner}/{repo}/code-security-configuration",
            "GET /orgs/{org}/code-security/configurations",
            "POST /orgs/{org}/code-security/configurations"
        ],
        "correct": 0,
        "explanations": [
            "This endpoint attaches an existing configuration to selected repositories with appropriate authorization.",
            "This endpoint retrieves the security configuration associated with one repository.",
            "This endpoint lists security configurations available to the organization.",
            "This endpoint creates an organization security configuration rather than attaching an existing one."
        ],
        "concept": "Bulk configuration attachment API",
        "hints": [
            "Distinguish reading configuration definitions from applying them.",
            "Match the HTTP method and resource scope to the requested operation."
        ],
        "source": "https://docs.github.com/en/rest/code-security/configurations"
    },
    {
        "id": "ghas-administration-026",
        "domain": "GitHub Security suites administration",
        "prompt": "Which literal REST operation reads the security configuration associated with a single repository?",
        "choices": [
            "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach",
            "GET /repos/{owner}/{repo}/code-security-configuration",
            "GET /orgs/{org}/code-security/configurations",
            "POST /orgs/{org}/code-security/configurations"
        ],
        "correct": 1,
        "explanations": [
            "This endpoint attaches an existing configuration to selected repositories with appropriate authorization.",
            "This endpoint retrieves the security configuration associated with one repository.",
            "This endpoint lists security configurations available to the organization.",
            "This endpoint creates an organization security configuration rather than attaching an existing one."
        ],
        "concept": "Repository configuration readback",
        "hints": [
            "Distinguish reading configuration definitions from applying them.",
            "Match the HTTP method and resource scope to the requested operation."
        ],
        "source": "https://docs.github.com/en/rest/code-security/configurations"
    },
    {
        "id": "ghas-administration-027",
        "domain": "GitHub Security suites administration",
        "prompt": "An API call attempting to override an enforced enablement setting appears successful. What verifies whether it actually changed anything?",
        "choices": [
            "Investigate changes to default-setup language exclusions.",
            "Review the central configuration instead of forcing a local override.",
            "Read back effective feature settings after the API call.",
            "Check required Actions availability and policy."
        ],
        "correct": 2,
        "explanations": [
            "Changing which languages default setup excludes is a documented circumstance that can break enforcement.",
            "Repository administrators cannot alter enablement explicitly controlled by an enforced configuration.",
            "An API attempt to override an enforced enablement setting can appear successful without changing that setting.",
            "Disabling Actions or making required actions unavailable can break code scanning configuration enforcement."
        ],
        "concept": "Effective-state automation verification",
        "hints": [
            "Verify effective state, not just the transport response.",
            "Central enforcement and automation permissions remain independent constraints."
        ],
        "source": "https://docs.github.com/en/code-security/reference/security-at-scale/configuration-enforcement"
    },
    {
        "id": "ghas-administration-028",
        "domain": "GitHub Security suites administration",
        "prompt": "An enforced configuration previously enabled code scanning, but analysis stops after repository policy changes. Which dependency should be checked?",
        "choices": [
            "Read back effective feature settings after the API call.",
            "Check required Actions availability and policy.",
            "Investigate changes to default-setup language exclusions.",
            "Review the central configuration instead of forcing a local override."
        ],
        "correct": 1,
        "explanations": [
            "An API attempt to override an enforced enablement setting can appear successful without changing that setting.",
            "Disabling Actions or making required actions unavailable can break code scanning configuration enforcement.",
            "Changing which languages default setup excludes is a documented circumstance that can break enforcement.",
            "Repository administrators cannot alter enablement explicitly controlled by an enforced configuration."
        ],
        "concept": "Configuration enforcement prerequisites",
        "hints": [
            "Verify effective state, not just the transport response.",
            "Central enforcement and automation permissions remain independent constraints."
        ],
        "source": "https://docs.github.com/en/code-security/reference/security-at-scale/configuration-enforcement"
    },
    {
        "id": "ghas-administration-029",
        "domain": "GitHub Security suites administration",
        "prompt": "Which English configuration option enables CodeQL default setup where needed while preserving repositories actively using advanced setup?",
        "choices": [
            "Enforce configuration",
            "Use as default for newly created repositories",
            "Enabled with advanced setup allowed",
            "Keep existing settings"
        ],
        "correct": 2,
        "explanations": [
            "Enforcement locks controlled enablement settings; it does not author an approved custom workflow.",
            "A new-repository default chooses future configuration attachment, not detailed custom workflow content.",
            "This option enables default setup where CodeQL is not actively running and allows existing advanced setup.",
            "Keeping existing settings avoids imposing a new enablement value for that feature."
        ],
        "concept": "Default setup with approved advanced workflows",
        "hints": [
            "Preserve approved analysis while evaluating what the central rollout will change.",
            "Feature enablement and the detailed analysis workflow are different layers."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    },
    {
        "id": "ghas-administration-030",
        "domain": "GitHub Security suites administration",
        "prompt": "Before applying paid security features to many private and internal repositories, which administrative review prevents assuming the base plan is enough?",
        "choices": [
            "Review paid-feature entitlement before applying at scale.",
            "Apply an appropriate configuration manually after transfer.",
            "Create a custom configuration for the required feature mix.",
            "Check the attached configuration and its enforcement status."
        ],
        "correct": 0,
        "explanations": [
            "Applying paid features to private or internal repositories can consume licensed usage and requires the applicable entitlement.",
            "Organization defaults apply to newly created repositories, not automatically to transferred repositories.",
            "Custom configurations let the organization choose a tailored combination of feature enablement settings.",
            "Repository behavior depends on the configuration relationship and enforcement, not its display name alone."
        ],
        "concept": "License-aware security rollout",
        "hints": [
            "Check whether the repository is new, transferred, or already managed.",
            "Do not assume a default retroactively changes every repository."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration"
    }
];
