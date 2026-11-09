// Original practice content, not copied from certification assessments.
export const questions = [
    {
        "id": "admin-001",
        "domain": "Manage GitHub identities and access",
        "prompt": "What defines an Enterprise Managed Users account in GitHub Enterprise Cloud?",
        "choices": [
            "A personal account restricted by repository rulesets",
            "An outside collaborator invited to selected repositories",
            "An account provisioned and authenticated through the enterprise IdP",
            "A personal account linked to an organization SAML identity"
        ],
        "correct": 2,
        "explanations": [
            "Rulesets govern repository activity, not account ownership.",
            "A repository invitation does not establish an IdP-managed identity.",
            "The IdP manages the managed account's lifecycle and authentication.",
            "SAML linking alone does not create a managed account."
        ],
        "concept": "Managed account ownership",
        "hints": [
            "Separate ownership of an account from permission to use resources.",
            "Consider the boundary between enterprise and public collaboration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users"
    },
    {
        "id": "admin-002",
        "domain": "Manage GitHub identities and access",
        "prompt": "In a GitHub Enterprise Cloud enterprise with personal accounts, who creates and maintains each member's GitHub account?",
        "choices": [
            "The enterprise SCIM service",
            "The organization's team maintainer",
            "The enterprise billing manager",
            "The individual user"
        ],
        "correct": 3,
        "explanations": [
            "Enterprise-level account provisioning is an EMU capability.",
            "Team maintenance does not include ownership of members' accounts.",
            "Billing authority does not include personal-account creation.",
            "Users own and maintain personal accounts even when SAML protects enterprise access."
        ],
        "concept": "Personal account responsibility",
        "hints": [
            "Separate ownership of an account from permission to use resources.",
            "Consider the boundary between enterprise and public collaboration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type"
    },
    {
        "id": "admin-003",
        "domain": "Manage GitHub identities and access",
        "prompt": "What does SAML SSO add for personal accounts accessing a protected GitHub Enterprise Cloud organization?",
        "choices": [
            "Authentication against the organization's external IdP",
            "Automatic provisioning of new personal accounts",
            "Automatic assignment of repository Admin access",
            "Replacement of GitHub account sign-in"
        ],
        "correct": 0,
        "explanations": [
            "SAML adds an external authentication requirement for protected resources.",
            "SAML authentication is not an account-provisioning service.",
            "Repository authorization is separate from SAML authentication.",
            "Personal-account sign-in remains required."
        ],
        "concept": "SAML authentication scope",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise"
    },
    {
        "id": "admin-004",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which protocol provisions and updates managed user accounts for GitHub Enterprise Cloud?",
        "choices": [
            "SSH",
            "SCIM",
            "SAML",
            "WebAuthn"
        ],
        "correct": 1,
        "explanations": [
            "SSH authenticates connections, not account provisioning.",
            "SCIM supplies account-lifecycle provisioning.",
            "SAML handles federated authentication.",
            "WebAuthn supports public-key authentication."
        ],
        "concept": "Identity provisioning protocol",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users"
    },
    {
        "id": "admin-005",
        "domain": "Manage GitHub identities and access",
        "prompt": "For personal accounts on GitHub Enterprise Cloud, what is the primary purpose of team synchronization?",
        "choices": [
            "Set repository roles directly in the IdP",
            "Replace the organization's SAML authentication",
            "Reflect IdP group membership in a GitHub team",
            "Create personal accounts for all IdP users"
        ],
        "correct": 2,
        "explanations": [
            "Repository access for the team is configured on GitHub.",
            "It complements rather than replaces SAML.",
            "Team synchronization updates team membership from connected IdP groups.",
            "It is not a personal-account provisioning service."
        ],
        "concept": "Team synchronization purpose",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group"
    },
    {
        "id": "admin-006",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which partner IdP supports OIDC authentication for Enterprise Managed Users?",
        "choices": [
            "Okta",
            "PingFederate",
            "OneLogin",
            "Microsoft Entra ID"
        ],
        "correct": 3,
        "explanations": [
            "Okta's partner EMU authentication integration uses SAML.",
            "PingFederate is not the documented EMU OIDC partner.",
            "OneLogin is not the documented EMU OIDC partner.",
            "Microsoft Entra ID supports the documented EMU OIDC integration."
        ],
        "concept": "EMU OIDC provider",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users"
    },
    {
        "id": "admin-007",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which identity design follows GitHub's recommended partner integration for EMU authentication and provisioning?",
        "choices": [
            "Use one partner IdP for both functions",
            "Use Okta for SSO and Microsoft Entra ID for SCIM",
            "Use Microsoft Entra ID for SSO and Okta for SCIM",
            "Use SAML alone for both functions"
        ],
        "correct": 0,
        "explanations": [
            "A single partner IdP provides the documented paved-path integration.",
            "This mixed-provider combination is explicitly unsupported.",
            "The reverse mixed-provider combination is also unsupported.",
            "SAML alone does not provide lifecycle provisioning."
        ],
        "concept": "Supported EMU integration",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users"
    },
    {
        "id": "admin-008",
        "domain": "Manage GitHub identities and access",
        "prompt": "In GitHub Enterprise Cloud's English SAML configuration, what belongs in Public Certificate?",
        "choices": [
            "A repository's TLS client certificate",
            "The IdP's public certificate for verifying SAML responses",
            "The IdP's private signing key",
            "A member's personal SSH public key"
        ],
        "correct": 1,
        "explanations": [
            "A repository client certificate does not verify the IdP's SAML signatures.",
            "GitHub uses the public certificate to verify signed SAML responses.",
            "The IdP must retain its private signing key.",
            "A user's SSH key authenticates Git connections."
        ],
        "concept": "SAML response verification",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise"
    },
    {
        "id": "admin-009",
        "domain": "Manage GitHub identities and access",
        "prompt": "When configuring enterprise SAML for personal accounts in GitHub Enterprise Cloud, what is the Sign on URL?",
        "choices": [
            "The IdP's issuer identifier rather than its login endpoint",
            "The enterprise's ordinary GitHub home page",
            "The IdP's HTTPS endpoint for SSO requests",
            "GitHub's assertion consumer service endpoint"
        ],
        "correct": 2,
        "explanations": [
            "The issuer identifies the sender and is configured separately.",
            "The enterprise home page is not the IdP's authentication endpoint.",
            "This field directs authentication requests to the IdP.",
            "The assertion consumer service receives responses at GitHub rather than sign-in requests at the IdP."
        ],
        "concept": "SAML endpoint configuration",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise"
    },
    {
        "id": "admin-010",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which description distinguishes two-factor authentication from signing in with a password alone?",
        "choices": [
            "It grants an additional repository role",
            "It provisions a second GitHub account",
            "It creates an additional organization membership",
            "It requires an additional authentication factor"
        ],
        "correct": 3,
        "explanations": [
            "Authentication factors do not grant repository roles.",
            "2FA does not create accounts.",
            "2FA does not assign organization membership.",
            "2FA adds another factor to verify account access."
        ],
        "concept": "Authentication factors",
        "hints": [
            "Separate proof of identity from access to a particular resource.",
            "Check whether the question concerns a personal account or enterprise access."
        ],
        "source": "https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication"
    },
    {
        "id": "admin-011",
        "domain": "Manage GitHub identities and access",
        "prompt": "For a personal account on GitHub.com, what can a passkey satisfy in a single sign-in step?",
        "choices": [
            "Both the password and 2FA requirements",
            "Only the organization's SAML requirement",
            "Only the password requirement",
            "Only the repository authorization requirement"
        ],
        "correct": 0,
        "explanations": [
            "A passkey can satisfy both account password and 2FA requirements.",
            "An account passkey does not replace organization SAML.",
            "Passkeys can meet 2FA as well as password requirements.",
            "Repository permissions remain separate from account authentication."
        ],
        "concept": "Passkey sign-in",
        "hints": [
            "Separate proof of identity from access to a particular resource.",
            "Check whether the question concerns a personal account or enterprise access."
        ],
        "source": "https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication"
    },
    {
        "id": "admin-012",
        "domain": "Manage GitHub identities and access",
        "prompt": "A GitHub.com personal-account user loses their 2FA device but has saved recovery codes. Which credential supports recovery?",
        "choices": [
            "The enterprise's license file",
            "An unused 2FA recovery code",
            "The organization's SAML signing certificate",
            "The repository's CODEOWNERS file"
        ],
        "correct": 1,
        "explanations": [
            "A license file cannot prove possession of a personal account.",
            "Saved recovery codes provide a documented recovery method.",
            "An IdP certificate cannot recover personal-account 2FA.",
            "Code ownership is unrelated to account recovery."
        ],
        "concept": "Account recovery preparation",
        "hints": [
            "Separate proof of identity from access to a particular resource.",
            "Check whether the question concerns a personal account or enterprise access."
        ],
        "source": "https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication"
    },
    {
        "id": "admin-013",
        "domain": "Manage GitHub identities and access",
        "prompt": "As a GitHub Enterprise Cloud organization owner using the English UI, where do you require 2FA for personal accounts?",
        "choices": [
            "Repository Settings → Rules → Rulesets",
            "Enterprise People → Enterprise teams",
            "Organization Settings → Authentication security",
            "Organization Settings → Member privileges"
        ],
        "correct": 2,
        "explanations": [
            "Rulesets govern repository contributions, not account 2FA.",
            "Enterprise teams manages groups rather than the organization's 2FA setting.",
            "Authentication security contains the organization's 2FA requirement.",
            "Member privileges controls organization member capabilities."
        ],
        "concept": "Organization 2FA navigation",
        "hints": [
            "Start at the administrative scope named in the question.",
            "Match the setting's purpose, not just a familiar menu label."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization"
    },
    {
        "id": "admin-014",
        "domain": "Manage GitHub identities and access",
        "prompt": "An enterprise owner is configuring enterprise-wide SAML for personal accounts in GitHub Enterprise Cloud's English UI. Which section contains Require SAML authentication?",
        "choices": [
            "Enterprise People → Enterprise teams",
            "Organization Settings → Member privileges",
            "Repository Settings → Collaborators & teams",
            "Enterprise Settings → Authentication security"
        ],
        "correct": 3,
        "explanations": [
            "Enterprise teams contains team administration.",
            "Member privileges governs organization permissions.",
            "Repository access settings do not configure enterprise authentication.",
            "Enterprise Authentication security contains the enterprise SAML requirement."
        ],
        "concept": "Enterprise SAML navigation",
        "hints": [
            "Start at the administrative scope named in the question.",
            "Match the setting's purpose, not just a familiar menu label."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise"
    },
    {
        "id": "admin-015",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which SCIM configuration is available for a GitHub Enterprise Cloud enterprise that uses personal accounts rather than EMU?",
        "choices": [
            "Organization-level SCIM with organization-level SAML",
            "Enterprise-level SCIM with enterprise-level SAML",
            "Enterprise-level SCIM without SAML",
            "Organization-level SCIM that creates managed accounts"
        ],
        "correct": 0,
        "explanations": [
            "For personal accounts, SCIM provisions organization access with organization-level SAML.",
            "Enterprise-level SCIM account provisioning requires EMU.",
            "Removing SAML does not enable enterprise SCIM for personal accounts.",
            "Organization SCIM does not turn personal accounts into managed accounts."
        ],
        "concept": "SCIM scope for personal accounts",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise"
    },
    {
        "id": "admin-016",
        "domain": "Manage GitHub identities and access",
        "prompt": "Where is a managed user's profile email maintained for Enterprise Managed Users?",
        "choices": [
            "In the team's repository permissions",
            "In the identity provider",
            "In the user's GitHub personal settings",
            "In the repository's contributor settings"
        ],
        "correct": 1,
        "explanations": [
            "Team permissions control access, not identity profile attributes.",
            "The IdP supplies managed-user profile names and email addresses.",
            "Managed users cannot change their profile email on GitHub.",
            "Contributor settings do not own managed-user profile data."
        ],
        "concept": "Managed profile attributes",
        "hints": [
            "Separate ownership of an account from permission to use resources.",
            "Consider the boundary between enterprise and public collaboration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users"
    },
    {
        "id": "admin-017",
        "domain": "Manage GitHub identities and access",
        "prompt": "A GitHub Enterprise Cloud organization team using personal accounts is synchronized with an IdP group. Where must its membership changes be made?",
        "choices": [
            "In repository collaborator invitations",
            "In the enterprise billing contact list",
            "In the connected IdP group",
            "In the team's GitHub member editor"
        ],
        "correct": 2,
        "explanations": [
            "Repository invitations do not change the connected IdP group.",
            "Billing contacts are unrelated to synchronized membership.",
            "The IdP controls membership once the team is synchronized.",
            "GitHub does not allow manual team membership edits for synchronized teams."
        ],
        "concept": "Membership source of truth",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group"
    },
    {
        "id": "admin-018",
        "domain": "Manage GitHub identities and access",
        "prompt": "A user signs in successfully but lacks permission to push to an organization repository. Which distinction explains the failure?",
        "choices": [
            "Authorization succeeded; authentication is insufficient",
            "SCIM provisioning automatically grants push access",
            "A valid sign-in automatically grants Write access",
            "Authentication succeeded; authorization is insufficient"
        ],
        "correct": 3,
        "explanations": [
            "The user already authenticated, but lacks the required permission.",
            "Provisioning does not automatically confer repository write privileges.",
            "Authentication alone does not grant Write.",
            "Sign-in proves identity; repository permissions determine allowed actions."
        ],
        "concept": "Authentication versus authorization",
        "hints": [
            "Separate proof of identity from access to a particular resource.",
            "Check whether the question concerns a personal account or enterprise access."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    {
        "id": "admin-019",
        "domain": "Manage GitHub identities and access",
        "prompt": "For personal accounts in a SAML-enforced GitHub Enterprise Cloud organization, what additional step permits an existing SSH key to access protected resources?",
        "choices": [
            "Authorize the SSH key for the organization",
            "Add the key to the SAML Public Certificate field",
            "Upload the private key to the organization's IdP",
            "Assign the user the enterprise Billing manager role"
        ],
        "correct": 0,
        "explanations": [
            "The SSH credential must be authorized for the protected organization.",
            "The SAML certificate field verifies IdP signatures, not SSH users.",
            "Private SSH keys should remain private and are not the SSO authorization step.",
            "Billing authority does not authorize an SSH credential."
        ],
        "concept": "SAML-authorized SSH credentials",
        "hints": [
            "Separate proof of identity from access to a particular resource.",
            "Check whether the question concerns a personal account or enterprise access."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise"
    },
    {
        "id": "admin-020",
        "domain": "Manage GitHub identities and access",
        "prompt": "What happens to IdP-synchronized team membership when a personal-account user's linked SAML identity is revoked in GitHub Enterprise Cloud?",
        "choices": [
            "The user's personal account becomes a managed account",
            "The user is removed from teams mapped to IdP groups",
            "The user becomes a team maintainer",
            "The user receives direct repository Write access"
        ],
        "correct": 1,
        "explanations": [
            "Revoking a SAML link does not change the account model.",
            "Revoking the linked identity removes membership in mapped teams.",
            "Revocation does not promote users.",
            "Revocation does not replace team access with a direct grant."
        ],
        "concept": "Linked identity and team access",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group"
    },
    {
        "id": "admin-021",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which standard repository role is the least privileged for viewing code and discussing issues in a private organization repository?",
        "choices": [
            "Write",
            "Maintain",
            "Read",
            "Triage"
        ],
        "correct": 2,
        "explanations": [
            "Write adds code contribution permissions.",
            "Maintain adds broader repository management.",
            "Read supports viewing and discussion without broader management rights.",
            "Triage adds issue and pull-request management."
        ],
        "concept": "Read-only contribution",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    {
        "id": "admin-022",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which standard role fits someone who manages other contributors' issues and pull requests but must not push code to an organization repository?",
        "choices": [
            "Read",
            "Write",
            "Admin",
            "Triage"
        ],
        "correct": 3,
        "explanations": [
            "Read does not provide the full triage capability set.",
            "Write grants unnecessary code-pushing rights.",
            "Admin grants unnecessary sensitive administrative powers.",
            "Triage supports proactive issue and pull-request management without write access."
        ],
        "concept": "Triage without code writes",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    {
        "id": "admin-023",
        "domain": "Manage GitHub identities and access",
        "prompt": "What is the lowest standard repository role that permits pushing code, subject to applicable branch rules?",
        "choices": [
            "Write",
            "Read",
            "Triage",
            "Maintain"
        ],
        "correct": 0,
        "explanations": [
            "Write is the first standard role that permits pushing code.",
            "Read permits viewing, not pushing.",
            "Triage manages issues and pull requests without write access.",
            "Maintain can push but grants more privileges than required."
        ],
        "concept": "Code contribution role",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    {
        "id": "admin-024",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which standard organization-repository role is intended for project managers who manage the repository without sensitive or destructive administrative actions?",
        "choices": [
            "Admin",
            "Maintain",
            "Triage",
            "Write"
        ],
        "correct": 1,
        "explanations": [
            "Admin includes the sensitive powers the task excludes.",
            "Maintain is designed for repository management without sensitive or destructive actions.",
            "Triage is focused on issues and pull requests.",
            "Write is focused on contributing code."
        ],
        "concept": "Repository maintenance boundary",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    {
        "id": "admin-025",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which standard repository role can manage individual and team access to an organization repository?",
        "choices": [
            "Write",
            "Triage",
            "Admin",
            "Maintain"
        ],
        "correct": 2,
        "explanations": [
            "Write does not allow managing repository access.",
            "Triage does not administer access permissions.",
            "Admin includes management of repository access.",
            "Maintain does not include individual and team access administration."
        ],
        "concept": "Repository access administration",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    {
        "id": "admin-026",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which organization role includes administrative access to every repository owned by that organization?",
        "choices": [
            "Organization member",
            "Billing manager",
            "Team maintainer",
            "Organization owner"
        ],
        "correct": 3,
        "explanations": [
            "Members receive access through base permissions and explicit grants.",
            "Billing management does not grant organization-wide repository administration.",
            "Team maintainers administer their team, not every repository.",
            "Organization owners have admin access to all organization repositories."
        ],
        "concept": "Organization owner authority",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization"
    },
    {
        "id": "admin-027",
        "domain": "Manage GitHub identities and access",
        "prompt": "An organization owner on GitHub Enterprise Cloud wants to change members' default repository permissions. Which English UI path contains Base permissions?",
        "choices": [
            "Organization Settings → Member privileges",
            "Organization Settings → Authentication security",
            "Enterprise People → Enterprise teams",
            "Repository Settings → Rules → Rulesets"
        ],
        "correct": 0,
        "explanations": [
            "Member privileges contains organization-wide base permissions.",
            "Authentication security controls authentication requirements.",
            "Enterprise teams manages enterprise groups.",
            "Rulesets govern repository activity rather than membership defaults."
        ],
        "concept": "Base-permission navigation",
        "hints": [
            "Start at the administrative scope named in the question.",
            "Match the setting's purpose, not just a familiar menu label."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization"
    },
    {
        "id": "admin-028",
        "domain": "Manage GitHub identities and access",
        "prompt": "In a GitHub Enterprise Cloud organization with personal accounts, what identifies an outside collaborator?",
        "choices": [
            "A team maintainer who manages synchronized groups",
            "A non-member with access to one or more organization repositories",
            "An organization member without administrative permissions",
            "An enterprise owner who manages organization policies"
        ],
        "correct": 1,
        "explanations": [
            "Team maintainers are not defined by outside-collaborator status.",
            "Outside collaborators have repository access without organization membership.",
            "A non-admin member is still an organization member.",
            "Enterprise ownership is an enterprise administrative role."
        ],
        "concept": "Outside collaboration boundary",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization"
    },
    {
        "id": "admin-029",
        "domain": "Manage GitHub identities and access",
        "prompt": "An organization member has base Read permission and a direct Write grant on a private repository. What is their effective repository role?",
        "choices": [
            "Triage",
            "No access",
            "Write",
            "Read"
        ],
        "correct": 2,
        "explanations": [
            "Neither grant specifies Triage, and Write is available.",
            "The member has two valid sources of access.",
            "The higher direct repository grant takes precedence over base Read.",
            "Base Read does not reduce a higher explicit grant."
        ],
        "concept": "Effective permission grants",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization"
    },
    {
        "id": "admin-030",
        "domain": "Manage GitHub identities and access",
        "prompt": "Does becoming an enterprise owner automatically provide access to every organization's private repository content in GitHub Enterprise Cloud?",
        "choices": [
            "Yes; enterprise ownership directly grants repository Admin everywhere",
            "No; an enterprise owner can never join organizations",
            "Yes; the billing entitlement includes all private code",
            "No; the owner can join organizations to gain access"
        ],
        "correct": 3,
        "explanations": [
            "Enterprise ownership does not automatically grant this content access.",
            "Enterprise owners can join organizations they own.",
            "Billing authority does not provide blanket access to private code.",
            "Enterprise owners do not receive organization content access by default but can join organizations."
        ],
        "concept": "Enterprise owner content boundary",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles"
    },
    {
        "id": "admin-031",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which predefined enterprise role fits a finance administrator who needs enterprise billing settings but not enterprise-wide policy administration?",
        "choices": [
            "Billing manager",
            "Enterprise owner",
            "App manager",
            "User"
        ],
        "correct": 0,
        "explanations": [
            "Billing manager provides the billing authority required.",
            "Enterprise owner adds unnecessary control over members and policies.",
            "App manager manages enterprise-owned GitHub App registrations.",
            "User has no enterprise administrative access by default."
        ],
        "concept": "Delegated enterprise billing",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles"
    },
    {
        "id": "admin-032",
        "domain": "Manage GitHub identities and access",
        "prompt": "How can a GitHub Enterprise Cloud owner delegate a selected set of enterprise-settings permissions without granting full enterprise ownership?",
        "choices": [
            "Grant base Write permission in one organization",
            "Create and assign a custom enterprise role",
            "Assign repository Admin on one repository",
            "Make the user an organization team maintainer"
        ],
        "correct": 1,
        "explanations": [
            "Organization base permissions apply to repositories, not enterprise administration.",
            "Custom enterprise roles define selected enterprise permissions.",
            "Repository Admin controls a repository, not enterprise settings.",
            "Team maintenance does not grant enterprise-settings permissions."
        ],
        "concept": "Granular enterprise delegation",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles"
    },
    {
        "id": "admin-033",
        "domain": "Manage GitHub identities and access",
        "prompt": "Which GitHub Enterprise Cloud construct groups users centrally for enterprise role assignments and access to multiple organizations?",
        "choices": [
            "Repository collaborator list",
            "Organization base permission",
            "Enterprise team",
            "Organization project"
        ],
        "correct": 2,
        "explanations": [
            "A repository collaborator list is scoped to one repository.",
            "Base permissions are a default access level, not a central group.",
            "Enterprise teams can receive enterprise roles and be added to organizations.",
            "Projects organize work rather than enterprise membership and roles."
        ],
        "concept": "Enterprise team purpose",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams"
    },
    {
        "id": "admin-034",
        "domain": "Manage GitHub identities and access",
        "prompt": "An enterprise owner wants to create an enterprise team in GitHub Enterprise Cloud's English UI. Which route is documented?",
        "choices": [
            "Organization Settings → Member privileges → Create Enterprise team",
            "Repository Settings → Collaborators & teams → Create Enterprise team",
            "Enterprise Settings → Authentication security → Create Enterprise team",
            "Enterprise People → Enterprise teams → Create Enterprise team"
        ],
        "correct": 3,
        "explanations": [
            "Organization member privileges does not create enterprise teams.",
            "Repository collaborator administration does not create enterprise teams.",
            "Authentication security configures sign-in requirements, not team creation.",
            "The enterprise People tab contains Enterprise teams and its creation control."
        ],
        "concept": "Enterprise team navigation",
        "hints": [
            "Start at the administrative scope named in the question.",
            "Match the setting's purpose, not just a familiar menu label."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams"
    },
    {
        "id": "admin-035",
        "domain": "Manage GitHub identities and access",
        "prompt": "When an enterprise team is granted organization access in GitHub Enterprise Cloud, what repository access do its members initially receive through organization membership?",
        "choices": [
            "The organization's base repository permissions",
            "Admin on every organization repository",
            "Write on every organization repository",
            "No organization membership until invitations are accepted"
        ],
        "correct": 0,
        "explanations": [
            "Members are added directly and receive the organization's base permission level.",
            "Team organization access does not automatically grant Admin.",
            "Write is not automatic unless it is the applicable base level or separately granted.",
            "The documented enterprise-team flow adds members without invitations."
        ],
        "concept": "Enterprise team organization access",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams"
    },
    {
        "id": "admin-036",
        "domain": "Manage GitHub identities and access",
        "prompt": "What is the documented effect of removing someone from an enterprise team in GitHub Enterprise Cloud?",
        "choices": [
            "Every independent repository grant is revoked",
            "Privileges granted by the team are removed",
            "The account is deleted from GitHub",
            "The user is removed from the enterprise account"
        ],
        "correct": 1,
        "explanations": [
            "Independent grants are not automatically revoked by a team-membership change.",
            "Removal withdraws the privileges associated with that team.",
            "Team removal does not delete the user's account.",
            "Removing team membership does not itself remove enterprise membership."
        ],
        "concept": "Enterprise team offboarding scope",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams"
    },
    {
        "id": "admin-037",
        "domain": "Manage GitHub identities and access",
        "prompt": "For an enterprise using EMU, how are changes in an IdP group propagated to a linked enterprise team's membership?",
        "choices": [
            "Through SSH certificate authentication",
            "Through WebAuthn authentication",
            "Through SCIM synchronization",
            "Through SAML assertions alone"
        ],
        "correct": 2,
        "explanations": [
            "SSH certificates authenticate connections rather than provision team membership.",
            "WebAuthn verifies authentication rather than synchronize groups.",
            "EMU enterprise-team group synchronization uses SCIM.",
            "SAML assertions authenticate users rather than synchronize these group memberships."
        ],
        "concept": "EMU enterprise-team synchronization",
        "hints": [
            "Distinguish sign-in, lifecycle provisioning, and group membership.",
            "Identify which system supplies the information GitHub needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams"
    },
    {
        "id": "admin-038",
        "domain": "Manage GitHub identities and access",
        "prompt": "An enterprise team is added to an organization in GitHub Enterprise Cloud. Can organization administrators remove permissions granted to that team by enterprise administrators?",
        "choices": [
            "Yes; any organization owner can override enterprise grants",
            "Yes; assigning Read always cancels enterprise grants",
            "No; organization administrators cannot grant the team any additional access",
            "No; enterprise-granted permissions cannot be removed at organization level"
        ],
        "correct": 3,
        "explanations": [
            "Organization ownership does not authorize removal of these inherited grants.",
            "A lower local grant does not cancel higher enterprise-granted permissions.",
            "Organization administrators can grant additional access and organization roles.",
            "Organization administrators cannot remove enterprise-granted team permissions."
        ],
        "concept": "Enterprise team permission inheritance",
        "hints": [
            "Identify which administrative level owns the control.",
            "Consider inherited requirements as well as local settings."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams"
    },
    {
        "id": "admin-039",
        "domain": "Manage GitHub identities and access",
        "prompt": "A repository administrator on GitHub Enterprise Cloud is auditing who has access to a private organization repository. Which English UI area lists its collaborators and teams?",
        "choices": [
            "Repository Settings → Collaborators & teams",
            "Repository Settings → Webhooks",
            "Organization Settings → Authentication security",
            "Organization Settings → Member privileges"
        ],
        "correct": 0,
        "explanations": [
            "Collaborators & teams is the repository access-management area.",
            "Webhooks lists event delivery integrations.",
            "Authentication security concerns sign-in requirements, not this repository's access list.",
            "Member privileges sets organization-wide defaults rather than listing this repository's grants."
        ],
        "concept": "Repository access audit",
        "hints": [
            "Start at the administrative scope named in the question.",
            "Match the setting's purpose, not just a familiar menu label."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository"
    },
    {
        "id": "admin-040",
        "domain": "Manage GitHub identities and access",
        "prompt": "To whom do an organization's base repository permissions apply?",
        "choices": [
            "All members of every enterprise organization",
            "Organization members",
            "All outside collaborators",
            "All users of GitHub.com"
        ],
        "correct": 1,
        "explanations": [
            "Membership in another organization does not confer this organization's base permissions.",
            "Base permissions apply to members of that organization.",
            "Outside collaborators are explicitly outside base-permission scope.",
            "Organization settings do not grant access to all GitHub users."
        ],
        "concept": "Base-permission population",
        "hints": [
            "Trace all membership and permission sources.",
            "Distinguish enterprise, organization, team, and repository boundaries."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization"
    },
    {
        "id": "admin-041",
        "domain": "Manage GitHub identities and access",
        "prompt": "In GitHub Enterprise Cloud, two active rulesets target the same branch and require different numbers of approving reviews. For a contributor without bypass, which requirement applies?",
        "choices": [
            "Only the repository-level ruleset",
            "The less restrictive review requirement",
            "The more restrictive review requirement",
            "Only the most recently created ruleset"
        ],
        "correct": 2,
        "explanations": [
            "A local ruleset does not replace other applicable rulesets.",
            "The weaker requirement does not override the stronger one.",
            "Applicable rules aggregate, and the most restrictive version of the same rule applies.",
            "Rulesets do not use creation-order priority."
        ],
        "concept": "Ruleset aggregation",
        "hints": [
            "Identify which administrative level owns the control.",
            "Consider inherited requirements as well as local settings."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "admin-042",
        "domain": "Manage GitHub identities and access",
        "prompt": "What is the minimum repository access needed to view its active rulesets in GitHub Enterprise Cloud?",
        "choices": [
            "Triage",
            "Maintain",
            "Admin",
            "Read"
        ],
        "correct": 3,
        "explanations": [
            "Triage is more access than required for viewing rulesets.",
            "Maintain is unnecessary for viewing active rules.",
            "Admin is required for many changes, not for merely viewing active rulesets.",
            "Anyone with Read access can view active repository rulesets."
        ],
        "concept": "Ruleset visibility for auditors",
        "hints": [
            "Identify the smallest set of capabilities the task requires.",
            "Separate reading, contribution, maintenance, and administration."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "admin-043",
        "domain": "Manage GitHub identities and access",
        "prompt": "A GitHub Enterprise Cloud owner enforces a policy restricting repository visibility changes across organizations. Who can relax that enterprise-enforced restriction?",
        "choices": [
            "An enterprise owner changing the enterprise policy",
            "An organization owner changing a local preference",
            "A repository administrator changing repository settings",
            "A team maintainer changing team membership"
        ],
        "correct": 0,
        "explanations": [
            "The restriction is owned and enforced at enterprise scope.",
            "An organization cannot override an enforced enterprise policy.",
            "Repository administration cannot bypass an enterprise-enforced policy.",
            "Team maintenance does not control enterprise policy."
        ],
        "concept": "Enterprise policy authority",
        "hints": [
            "Identify which administrative level owns the control.",
            "Consider inherited requirements as well as local settings."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise"
    },
    {
        "id": "admin-044",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which deployment lets an enterprise host GitHub in its own data center or a supported cloud environment?",
        "choices": [
            "GitHub Enterprise Cloud with data residency",
            "GitHub Enterprise Server",
            "GitHub Enterprise Cloud with personal accounts",
            "GitHub Enterprise Cloud with EMU"
        ],
        "correct": 1,
        "explanations": [
            "Cloud data residency provides regional hosting, not a self-hosted appliance.",
            "GitHub Enterprise Server is self-hosted on customer-managed infrastructure.",
            "Cloud with personal accounts remains a GitHub-operated service.",
            "Cloud with EMU changes identity control, not infrastructure ownership."
        ],
        "concept": "Self-hosted deployment",
        "hints": [
            "Separate hosting responsibility from the identity model.",
            "Consider data location, operations, and collaboration requirements independently."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use"
    },
    {
        "id": "admin-045",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which operational task is handled by GitHub rather than the customer when using GitHub Enterprise Cloud instead of GitHub Enterprise Server?",
        "choices": [
            "Defining the organization's review standards",
            "Assigning enterprise billing administrators",
            "Maintaining and upgrading the hosted platform",
            "Choosing repository collaborators"
        ],
        "correct": 2,
        "explanations": [
            "Customers still define their developer-process standards.",
            "Customers still choose their enterprise administrators.",
            "GitHub operates the Cloud platform, avoiding customer-managed platform upgrades.",
            "Customers still manage repository access."
        ],
        "concept": "Cloud operations boundary",
        "hints": [
            "Separate hosting responsibility from the identity model.",
            "Consider data location, operations, and collaboration requirements independently."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency"
    },
    {
        "id": "admin-046",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "An enterprise needs GitHub-operated hosting on GitHub.com and IdP-controlled user-account lifecycles, without selecting regional data residency. Which deployment fits?",
        "choices": [
            "GitHub Enterprise Cloud with personal accounts",
            "GitHub Enterprise Server with local accounts",
            "GitHub Enterprise Server with SAML authentication",
            "GitHub Enterprise Cloud with EMU on GitHub.com"
        ],
        "correct": 3,
        "explanations": [
            "Personal accounts remain individually owned.",
            "Server is customer-hosted and local accounts lack the required IdP lifecycle.",
            "Server SAML does not make the deployment a GitHub-operated Cloud service.",
            "EMU is available on GitHub.com and provides IdP-managed accounts."
        ],
        "concept": "Cloud managed-identity deployment",
        "hints": [
            "Separate hosting responsibility from the identity model.",
            "Consider data location, operations, and collaboration requirements independently."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type"
    },
    {
        "id": "admin-047",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "What combination is required for GitHub Enterprise Cloud with data residency?",
        "choices": [
            "Enterprise Managed Users on a dedicated GHE.com subdomain",
            "Personal accounts on a dedicated GitHub.com organization",
            "Local accounts on a customer-hosted GHES appliance",
            "Personal accounts on an arbitrary custom GitHub.com domain"
        ],
        "correct": 0,
        "explanations": [
            "Data-resident Cloud enterprises use EMU and a dedicated GHE.com subdomain.",
            "A GitHub.com organization with personal accounts is not the data-residency model.",
            "GHES is a separate self-hosted deployment.",
            "An arbitrary custom domain does not establish a data-resident Cloud enterprise."
        ],
        "concept": "Data-residency identity and host",
        "hints": [
            "Separate hosting responsibility from the identity model.",
            "Consider data location, operations, and collaboration requirements independently."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency"
    },
    {
        "id": "admin-048",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "What does adopting EMU require for an existing GitHub.com enterprise that currently uses personal accounts?",
        "choices": [
            "A billing-manager role assignment",
            "Migration to a new enterprise account",
            "An in-place conversion of every personal account",
            "A repository visibility change to internal"
        ],
        "correct": 1,
        "explanations": [
            "Billing role assignments do not change the account model.",
            "GitHub documents migration to a new enterprise account for this identity-model change.",
            "Existing personal accounts are not converted in place into managed accounts.",
            "Changing visibility does not change enterprise identity type."
        ],
        "concept": "Identity-model migration",
        "hints": [
            "Separate hosting responsibility from the identity model.",
            "Consider data location, operations, and collaboration requirements independently."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type"
    },
    {
        "id": "admin-049",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "In a combined GitHub Enterprise Cloud and Server deployment, how are most administrative policies managed?",
        "choices": [
            "Exclusively in the Server Management Console for both deployments",
            "Automatically through license-usage synchronization",
            "Separately in each enterprise account",
            "Exclusively in the Cloud account for both deployments"
        ],
        "correct": 2,
        "explanations": [
            "Server's Management Console does not administer Cloud policies.",
            "License synchronization does not synchronize enterprise policies.",
            "Most administration, including policies, remains separate per enterprise account.",
            "The Cloud account does not universally administer Server policies."
        ],
        "concept": "Hybrid administration boundaries",
        "hints": [
            "Separate hosting responsibility from the identity model.",
            "Consider data location, operations, and collaboration requirements independently."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use"
    },
    {
        "id": "admin-050",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "An organization repository contributor needs a repository role changed from Read to Write. Who can make this routine access change directly?",
        "choices": [
            "An enterprise billing manager without repository access",
            "A member with only Read access",
            "An outside collaborator with only Triage access",
            "A repository administrator"
        ],
        "correct": 3,
        "explanations": [
            "Billing authority alone does not grant repository access administration.",
            "Read does not include permission management.",
            "Triage does not include permission management.",
            "Repository administrators can manage individual and team repository roles."
        ],
        "concept": "Administrator-resolvable access requests",
        "hints": [
            "Separate customer-controlled settings from product or service faults.",
            "Match the evidence and entitlement to the affected deployment."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
    },
    {
        "id": "admin-051",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "A reproducible GitHub Enterprise Cloud product error remains after administrators verify configuration. Which evidence best helps an entitled support engineer reproduce it?",
        "choices": [
            "Steps, exact errors, affected URLs, and expected results",
            "Contract dates, license quantities, and invoice numbers",
            "Team names, job titles, and billing contact details",
            "Repository counts, renewal dates, and purchase orders"
        ],
        "correct": 0,
        "explanations": [
            "These details identify the failing behavior and how to reproduce it.",
            "Commercial details do not describe the failing behavior.",
            "Administrative contact details do not provide reproduction instructions.",
            "Inventory and procurement data do not reproduce the product error."
        ],
        "concept": "Actionable support escalation",
        "hints": [
            "Separate customer-controlled settings from product or service faults.",
            "Match the evidence and entitlement to the affected deployment."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/support/contacting-github-support/creating-a-support-ticket"
    },
    {
        "id": "admin-052",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Why may GitHub Support ask a GitHub Enterprise Server administrator to provide diagnostics and a support bundle?",
        "choices": [
            "The bundle automatically changes the instance's configuration",
            "Support does not have direct access to the customer's environment",
            "Support bundles replace the enterprise's licensing agreement",
            "Diagnostics automatically grant Support permanent administrative access"
        ],
        "correct": 1,
        "explanations": [
            "Generating a bundle collects information rather than reconfiguring the instance.",
            "Administrators supply environment information and logs for investigation.",
            "Bundles provide troubleshooting evidence, not licensing rights.",
            "Diagnostic files do not grant persistent administrative access."
        ],
        "concept": "Server support evidence boundary",
        "hints": [
            "Separate customer-controlled settings from product or service faults.",
            "Match the evidence and entitlement to the affected deployment."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-053",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "In GitHub Enterprise Server 3.19, which artifact is a plaintext overview of the instance's settings and environment?",
        "choices": [
            "Extended support bundle",
            "Repository source archive",
            "Diagnostic file",
            "Support bundle"
        ],
        "correct": 2,
        "explanations": [
            "An extended bundle is also an archive with a longer log range.",
            "A source archive contains repository files rather than instance diagnostics.",
            "A diagnostic file summarizes settings and environment information.",
            "A support bundle is an archive containing diagnostics and sanitized logs."
        ],
        "concept": "Server diagnostic artifact",
        "hints": [
            "Consider whether settings alone or logs are required.",
            "Check the deployment topology and the documented administrative interface."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-054",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "What does a GitHub Enterprise Server 3.19 support bundle add beyond a standalone diagnostic file?",
        "choices": [
            "A complete repository backup for disaster recovery",
            "A source-code export of every repository",
            "An export of organization membership without instance logs",
            "Sanitized instance logs packaged with diagnostics"
        ],
        "correct": 3,
        "explanations": [
            "A support bundle is not a disaster-recovery backup.",
            "Its purpose is collecting diagnostic evidence, not exporting all source code.",
            "Membership-only data omits the logs included in a support bundle.",
            "Support bundles combine diagnostic information with relevant sanitized logs."
        ],
        "concept": "Support bundle contents",
        "hints": [
            "Consider whether settings alone or logs are required.",
            "Check the deployment topology and the documented administrative interface."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-055",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "An administrator has an administrative SSH session on GitHub Enterprise Server 3.19. Which utility retrieves the instance's diagnostic information?",
        "choices": [
            "ghe-diagnostics",
            "ghe-support-bundle",
            "ghe-cluster-support-bundle",
            "git archive"
        ],
        "correct": 0,
        "explanations": [
            "ghe-diagnostics produces the instance diagnostic information.",
            "ghe-support-bundle collects a support archive rather than only diagnostics.",
            "The cluster utility collects a topology-specific support bundle.",
            "git archive packages repository content, not instance diagnostics."
        ],
        "concept": "Server diagnostics utility",
        "hints": [
            "Consider whether settings alone or logs are required.",
            "Check the deployment topology and the documented administrative interface."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-056",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "For a standalone GitHub Enterprise Server 3.19 instance, which documented SSH command downloads a support bundle to the local machine?",
        "choices": [
            "git bundle create repository.bundle --all",
            "ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz",
            "ssh -p 122 admin@HOSTNAME -- 'ghe-diagnostics' > diagnostics.txt",
            "git archive --format=tar HEAD > repository.tar"
        ],
        "correct": 1,
        "explanations": [
            "git bundle exports Git objects, not instance diagnostics and logs.",
            "This administrative SSH command streams the support archive to a local file.",
            "This command downloads diagnostics without the support-bundle logs.",
            "git archive exports repository source, not a Server support bundle."
        ],
        "concept": "Downloading a Server support bundle",
        "hints": [
            "Consider whether settings alone or logs are required.",
            "Check the deployment topology and the documented administrative interface."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-057",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which support-bundle utility is documented for GitHub Enterprise Server 3.19 instances using clustering or geo-replication?",
        "choices": [
            "git bundle",
            "git archive",
            "ghe-cluster-support-bundle",
            "ghe-diagnostics"
        ],
        "correct": 2,
        "explanations": [
            "git bundle transports Git objects.",
            "git archive exports a repository tree.",
            "The cluster utility is documented for cluster and geo-replication topologies.",
            "ghe-diagnostics produces diagnostic information rather than the required topology-wide bundle."
        ],
        "concept": "Topology-aware support collection",
        "hints": [
            "Consider whether settings alone or logs are required.",
            "Check the deployment topology and the documented administrative interface."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-058",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "An administrator can access the GitHub Enterprise Server 3.19 Management Console but not SSH. Which English UI path downloads diagnostics?",
        "choices": [
            "Management Console → Support → Download support bundle",
            "Repository Settings → Collaborators & teams",
            "Organization Settings → Authentication security",
            "Management Console → Support → Download diagnostics info"
        ],
        "correct": 3,
        "explanations": [
            "This downloads a bundle with logs, not the standalone diagnostic file requested.",
            "Repository access administration does not produce instance diagnostics.",
            "Organization authentication settings do not export Server diagnostics.",
            "The Support tab offers Download diagnostics info without requiring SSH."
        ],
        "concept": "Management Console diagnostics",
        "hints": [
            "Start at the administrative scope named in the question.",
            "Match the setting's purpose, not just a familiar menu label."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-059",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "For an enterprise customer, what is GitHub Premium Support?",
        "choices": [
            "A paid supplemental tier with additional support commitments",
            "The default Enterprise support included with user licensing",
            "A professional-services engagement limited to implementation consulting",
            "A community forum dedicated to enterprise administration"
        ],
        "correct": 0,
        "explanations": [
            "Premium Support supplements Enterprise support with plan-specific commitments.",
            "Included Enterprise support is not the supplemental Premium offering.",
            "Premium Support is a support tier, not merely an implementation project.",
            "Community forums do not provide the Premium Support service commitments."
        ],
        "concept": "Enterprise support tiers",
        "hints": [
            "Separate customer-controlled settings from product or service faults.",
            "Match the evidence and entitlement to the affected deployment."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/support/learning-about-github-support/about-github-premium-support"
    },
    {
        "id": "admin-060",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "A GitHub Enterprise Cloud customer with Premium Support has critical service errors blocking production workflows and directly affecting business operations. Which documented ticket priority fits?",
        "choices": [
            "Low",
            "Urgent",
            "High",
            "Normal"
        ],
        "correct": 1,
        "explanations": [
            "Low covers non-time-sensitive questions and suggestions.",
            "Urgent covers critical production service failures with direct business impact for Premium Support customers.",
            "High covers the documented limited-impact account or security cases.",
            "Normal covers limited or moderate issues and general questions."
        ],
        "concept": "Premium Support incident priority",
        "hints": [
            "Separate customer-controlled settings from product or service faults.",
            "Match the evidence and entitlement to the affected deployment."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/support/learning-about-github-support/about-ticket-priority"
    },
    {
        "id": "admin-061",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "A repository administrator wants changes to the default branch to arrive through pull requests rather than direct pushes. Which branch-ruleset rule establishes that standard?",
        "choices": [
            "Require linear history",
            "Block force pushes",
            "Require a pull request before merging",
            "Require signed commits"
        ],
        "correct": 2,
        "explanations": [
            "Linear history restricts merge-commit structure, not the contribution route.",
            "Blocking force pushes does not prevent ordinary direct pushes.",
            "The pull-request rule requires changes to be associated with a pull request, subject to bypass settings.",
            "Signed commits verify signatures but do not require a pull request."
        ],
        "concept": "Pull-request branching standard",
        "hints": [
            "Distinguish written conventions from enforced controls.",
            "Identify the artifact or rule that governs this part of development."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "admin-062",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which repository file assigns individuals or organization teams responsibility for reviewing changes to matching paths?",
        "choices": [
            "CONTRIBUTING.md",
            "SECURITY.md",
            "README.md",
            "CODEOWNERS"
        ],
        "correct": 3,
        "explanations": [
            "CONTRIBUTING.md describes contribution guidelines without assigning path-based review owners.",
            "SECURITY.md describes security reporting policy.",
            "README.md introduces the project rather than defining review routing.",
            "CODEOWNERS maps paths to owners and triggers review requests for eligible pull requests."
        ],
        "concept": "Path-based review ownership",
        "hints": [
            "Distinguish written conventions from enforced controls.",
            "Identify the artifact or rule that governs this part of development."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners"
    },
    {
        "id": "admin-063",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "A repository has CODEOWNERS, but code-owner approval must be mandatory before merging protected changes. What additional control is needed?",
        "choices": [
            "Require review from code owners in the branch protection or ruleset",
            "Add the owners to the repository's watchers",
            "Mention the owners only in the pull-request template",
            "Give the owners a repository notification subscription"
        ],
        "correct": 0,
        "explanations": [
            "CODEOWNERS requests reviews; an enforced review rule makes owner approval required.",
            "Watching affects notifications, not merge requirements.",
            "A template mention does not enforce approval.",
            "Notification subscriptions do not enforce merge gates."
        ],
        "concept": "Enforcing code-owner approval",
        "hints": [
            "Distinguish written conventions from enforced controls.",
            "Identify the artifact or rule that governs this part of development."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners"
    },
    {
        "id": "admin-064",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "What anchors a GitHub release to a specific point in repository history?",
        "choices": [
            "A project milestone",
            "A Git tag",
            "A moving branch tip",
            "A pull-request number"
        ],
        "correct": 1,
        "explanations": [
            "A milestone groups work rather than locating a release in Git history.",
            "GitHub releases are based on Git tags marking points in repository history.",
            "A branch tip changes as commits arrive and is not the release's version anchor.",
            "A pull-request number identifies a proposed change, not the release tag."
        ],
        "concept": "Release version anchors",
        "hints": [
            "Distinguish written conventions from enforced controls.",
            "Identify the artifact or rule that governs this part of development."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/releasing-projects-on-github/about-releases"
    },
    {
        "id": "admin-065",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "In the English GitHub release editor, which control preserves an unfinished release for later work instead of publishing it?",
        "choices": [
            "Generate release notes",
            "This is a pre-release",
            "Save draft",
            "Publish release"
        ],
        "correct": 2,
        "explanations": [
            "Generating notes prepares text without saving the release as a draft.",
            "A pre-release designation is not the same as keeping a release unpublished.",
            "Save draft retains the release for further preparation.",
            "Publish release makes the release public to its permitted audience."
        ],
        "concept": "Release preparation state",
        "hints": [
            "Start at the administrative scope named in the question.",
            "Match the setting's purpose, not just a familiar menu label."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/releasing-projects-on-github/managing-releases-in-a-repository"
    },
    {
        "id": "admin-066",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which mechanism supplies reusable prompts or structure in the issue and pull-request creation experience?",
        "choices": [
            "Repository topic tags",
            "CODEOWNERS path assignments",
            "Project milestone descriptions",
            "Issue and pull-request templates"
        ],
        "correct": 3,
        "explanations": [
            "Topics classify repositories rather than structure new contributions.",
            "CODEOWNERS routes code reviews rather than structure issue and pull-request descriptions.",
            "Milestones group related work rather than supply creation templates.",
            "Templates structure the information contributors provide when creating issues and pull requests."
        ],
        "concept": "Standardized contribution intake",
        "hints": [
            "Distinguish written conventions from enforced controls.",
            "Identify the artifact or rule that governs this part of development."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates"
    },
    {
        "id": "admin-067",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which approach shares a centrally maintained, multi-job CI workflow across repositories without copying its implementation into each caller?",
        "choices": [
            "Call a reusable workflow",
            "Generate independent copies from a workflow template",
            "Package only a step sequence in a composite action",
            "Maintain separate full workflow copies in each repository"
        ],
        "correct": 0,
        "explanations": [
            "A reusable workflow shares workflow-level logic, including multiple jobs.",
            "Templates help create workflows but produce copies rather than a shared implementation.",
            "A composite action reuses steps within a job, not an entire multi-job workflow.",
            "Independent copies duplicate the implementation and its maintenance."
        ],
        "concept": "Reusable process standards",
        "hints": [
            "Distinguish written conventions from enforced controls.",
            "Identify the artifact or rule that governs this part of development."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/actions/concepts/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "admin-068",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "A single GitHub account is a member of several organizations within one GitHub Enterprise Cloud deployment. How does unique-user enterprise licensing count that person?",
        "choices": [
            "Once per team membership",
            "Once across the enterprise deployment",
            "Once per organization membership",
            "Once per repository with Write access"
        ],
        "correct": 1,
        "explanations": [
            "Team memberships do not multiply the person's enterprise license count.",
            "The unique-user model counts one person once across organizations in the deployment.",
            "Organization memberships do not multiply that person's licenses.",
            "Repository grants do not multiply the person's enterprise license count."
        ],
        "concept": "Unique-user enterprise licensing",
        "hints": [
            "Separate licensed people from consumption of paid services.",
            "Check the billing model and scope before counting or allocating charges."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use"
    },
    {
        "id": "admin-069",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "In GitHub Enterprise Cloud with personal accounts, which outside collaborator consumes an enterprise license under the documented repository-access criterion?",
        "choices": [
            "One with only a pending public-repository invitation",
            "One whose private-repository invitation failed",
            "One with accepted access to a private non-fork repository",
            "One with access only to public repositories"
        ],
        "correct": 2,
        "explanations": [
            "A pending invitation for public-only outside collaboration does not consume one.",
            "Failed invitations are excluded from license consumption.",
            "Outside collaborators with access to private non-fork repositories consume licenses.",
            "Public-only outside collaboration does not consume an enterprise license."
        ],
        "concept": "Outside-collaborator license scope",
        "hints": [
            "Separate licensed people from consumption of paid services.",
            "Check the billing model and scope before counting or allocating charges."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/reference/github-license-users"
    },
    {
        "id": "admin-070",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which pair names the two documented billing models for GitHub Enterprise user licenses?",
        "choices": [
            "Monthly and annual",
            "Credit card and invoice",
            "Cloud and Server",
            "Usage-based and volume"
        ],
        "correct": 3,
        "explanations": [
            "Monthly and annual describe billing frequency, not these license models.",
            "Credit card and invoice concern payment arrangements, not license models.",
            "Cloud and Server are deployment options rather than license billing models.",
            "GitHub documents usage-based and volume models for enterprise licenses."
        ],
        "concept": "Enterprise license billing models",
        "hints": [
            "Separate licensed people from consumption of paid services.",
            "Check the billing model and scope before counting or allocating charges."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/billing-for-enterprises"
    },
    {
        "id": "admin-071",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "Which statement correctly describes the relationship between GitHub Enterprise Cloud user licenses and paid feature consumption?",
        "choices": [
            "User licenses and billable feature usage can both contribute charges",
            "User-license charges always include all paid feature consumption",
            "Billable feature consumption replaces enterprise user-license charges",
            "Each additional organization membership replaces feature charges"
        ],
        "correct": 0,
        "explanations": [
            "The bill can include enterprise licenses, paid feature usage, and extra purchased products.",
            "Included allowances do not make all additional usage free.",
            "Feature usage does not replace the enterprise-license component.",
            "Organization membership does not substitute for feature billing."
        ],
        "concept": "License charges versus service consumption",
        "hints": [
            "Separate licensed people from consumption of paid services.",
            "Check the billing model and scope before counting or allocating charges."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/billing-for-enterprises"
    },
    {
        "id": "admin-072",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "What is the purpose of cost centers in GitHub Enterprise Cloud billing?",
        "choices": [
            "Deduplicate Cloud and Server user licenses",
            "Attribute metered spending to business units",
            "Pool separate enterprise license contracts",
            "Convert volume subscriptions to usage-based licenses"
        ],
        "correct": 1,
        "explanations": [
            "License synchronization, not cost centers, deduplicates users across deployments.",
            "Cost centers allocate metered spending, not volume or subscription billing.",
            "Cost centers do not combine separate license contracts.",
            "Cost centers do not change the license billing model."
        ],
        "concept": "Enterprise cost allocation",
        "hints": [
            "Separate licensed people from consumption of paid services.",
            "Check the billing model and scope before counting or allocating charges."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/cost-centers"
    },
    {
        "id": "admin-073",
        "domain": "Administer GitHub Enterprise environment",
        "prompt": "What is needed to deduplicate a person's license usage across GitHub Enterprise Cloud and GitHub Enterprise Server?",
        "choices": [
            "Connect both deployments to the same SAML IdP alone",
            "Combine invoice contacts without license synchronization",
            "Synchronize license usage between environments",
            "Configure matching usernames without license synchronization"
        ],
        "correct": 2,
        "explanations": [
            "A shared IdP does not by itself synchronize license data.",
            "Shared billing contacts do not establish license synchronization.",
            "License synchronization enables GitHub to deduplicate users using documented identity-matching criteria.",
            "Matching usernames alone do not synchronize license usage."
        ],
        "concept": "Combined deployment license synchronization",
        "hints": [
            "Separate licensed people from consumption of paid services.",
            "Check the billing model and scope before counting or allocating charges."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/enterprise-billing/combined-enterprise-use"
    },
    {
        "id": "admin-074",
        "domain": "Implement secure software development and compliance",
        "prompt": "How do two active rulesets combine when both target the same branch and the actor has no bypass?",
        "choices": [
            "All applicable rules are enforced",
            "Only the newest ruleset is enforced",
            "Only the repository ruleset is enforced",
            "The actor chooses one ruleset"
        ],
        "correct": 0,
        "explanations": [
            "Matching rulesets apply together, using the most restrictive requirements.",
            "Creation order does not select the active ruleset.",
            "Repository rules do not replace higher-level rules.",
            "Actors cannot choose which applicable rules to follow."
        ],
        "concept": "Ruleset layering",
        "hints": [
            "Consider whether rulesets replace or accumulate controls.",
            "Distinguish targeting from bypass privileges."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "admin-075",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which ruleset enforcement status records potential violations without blocking operations on GitHub Enterprise Cloud?",
        "choices": [
            "Active",
            "Disabled",
            "Evaluate",
            "Archived"
        ],
        "correct": 2,
        "explanations": [
            "Active rulesets enforce their requirements.",
            "Disabled rulesets do not evaluate activity.",
            "Evaluate measures effects without enforcing the rules.",
            "Archived is not a ruleset enforcement status."
        ],
        "concept": "Nonblocking ruleset evaluation",
        "hints": [
            "Separate observing a policy from enforcing it.",
            "An inactive policy need not collect evaluation results."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "admin-076",
        "domain": "Implement secure software development and compliance",
        "prompt": "A release GitHub App needs an exception to one branch ruleset. Which change limits the exception to that integration?",
        "choices": [
            "Add that app to the bypass list",
            "Grant bypass to the write role",
            "Disable enforcement for the branch",
            "Grant bypass to all repository admins"
        ],
        "correct": 0,
        "explanations": [
            "An app-specific entry scopes bypass to the installation actor.",
            "A role-based exemption covers all users with that role.",
            "Disabling enforcement exempts every actor.",
            "An admin-wide exemption is broader than the integration."
        ],
        "concept": "Scoped ruleset exceptions",
        "hints": [
            "Identify the actor that actually performs the release.",
            "Compare individual exceptions with role-wide exceptions."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets"
    },
    {
        "id": "admin-077",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which branch ruleset rule rejects non-fast-forward pushes by actors without bypass?",
        "choices": [
            "Require linear history",
            "Restrict deletions",
            "Block force pushes",
            "Require signed commits"
        ],
        "correct": 2,
        "explanations": [
            "Linear history prevents merge commits, not all history rewrites.",
            "Deletion restrictions protect the branch reference from removal.",
            "Blocking force pushes prevents non-fast-forward updates.",
            "Signed commits can still rewrite branch history."
        ],
        "concept": "Protecting branch history",
        "hints": [
            "Separate commit shape from reference updates.",
            "A signed history can still be rewritten."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "admin-078",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which review setting invalidates earlier approvals when a push changes the pull request's diff?",
        "choices": [
            "Dismiss stale pull request approvals when new commits are pushed",
            "Require review from Code Owners",
            "Require conversation resolution before merging",
            "Require approval of the most recent reviewable push"
        ],
        "correct": 0,
        "explanations": [
            "Stale-review dismissal removes approvals tied to the earlier diff.",
            "Code-owner review selects responsible reviewers.",
            "Conversation resolution addresses discussion threads.",
            "Latest-push approval can retain earlier approvals."
        ],
        "concept": "Stale approval dismissal",
        "hints": [
            "Consider whether approvals are removed or merely supplemented.",
            "Focus on what changes after the reviewed diff changes."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "admin-079",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which required status check attribute restricts its accepted results to a particular installed GitHub App?",
        "choices": [
            "The check name",
            "The expected source",
            "The workflow filename",
            "The branch targeting pattern"
        ],
        "correct": 1,
        "explanations": [
            "A check name alone does not establish its producer.",
            "The expected source binds the check to the chosen app.",
            "A filename is not the check's authenticated producer.",
            "Branch patterns select branches, not check producers."
        ],
        "concept": "Required check provenance",
        "hints": [
            "A check name alone does not establish its producer.",
            "Look for the setting that constrains result origin."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "admin-080",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which branch rule requires cryptographically verified signatures on commits?",
        "choices": [
            "Require signed commits",
            "Require linear history",
            "Require a pull request before merging",
            "Require status checks to pass"
        ],
        "correct": 0,
        "explanations": [
            "This rule requires verified commit signatures.",
            "Linear history excludes merge commits without verifying signatures.",
            "A pull request requirement controls the merge process.",
            "Status checks report configured checks, not inherently commit signatures."
        ],
        "concept": "Commit signature enforcement",
        "hints": [
            "Distinguish authorship evidence from review approval.",
            "Consider which control operates on each commit."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "admin-081",
        "domain": "Implement secure software development and compliance",
        "prompt": "On GitHub Enterprise Cloud, which push rule blocks files under a prohibited directory pattern across a private repository's fork network?",
        "choices": [
            "Restrict file extensions",
            "Restrict file path length",
            "Restrict file size",
            "Restrict file paths"
        ],
        "correct": 3,
        "explanations": [
            "Extension restrictions match file suffixes rather than directory patterns.",
            "Path-length restrictions measure length, not directory identity.",
            "Size restrictions measure file size.",
            "File-path restrictions match prohibited path patterns."
        ],
        "concept": "Path-based push restrictions",
        "hints": [
            "Match the rule to the property being prohibited.",
            "A directory name is not a file-size limit."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "admin-082",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which enterprise repository policy controls whether private and internal repositories can be forked in GitHub Enterprise Cloud?",
        "choices": [
            "Repository forking policy",
            "Repository creation policy",
            "Repository visibility policy",
            "Repository transfer policy"
        ],
        "correct": 0,
        "explanations": [
            "Forking policy governs creation of private and internal forks.",
            "Creation policy controls who can create repositories.",
            "Visibility policy controls visibility changes.",
            "Transfer policy governs moving repository ownership."
        ],
        "concept": "Enterprise data protection policies",
        "hints": [
            "Identify the operation that creates a related copy.",
            "Do not confuse copying with transferring ownership."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise"
    },
    {
        "id": "admin-083",
        "domain": "Implement secure software development and compliance",
        "prompt": "A user's address is on a GitHub Enterprise Cloud IP allow list. What access does this alone grant to private repositories?",
        "choices": [
            "Read access throughout the enterprise",
            "Write access within the home organization",
            "No additional repository permissions",
            "Read access to explicitly listed repositories"
        ],
        "correct": 2,
        "explanations": [
            "Network admission does not grant enterprise-wide read access.",
            "The network list does not assign organization roles.",
            "Repository authorization is still required independently.",
            "IP entries describe networks, not repository grants."
        ],
        "concept": "Network controls versus authorization",
        "hints": [
            "Separate where a request originates from who may access data.",
            "A network condition is only one part of access control."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list"
    },
    {
        "id": "admin-084",
        "domain": "Implement secure software development and compliance",
        "prompt": "In the English GitHub.com UI, which organization settings path lets an organization owner apply security configurations to repositories?",
        "choices": [
            "Settings > Member privileges",
            "Settings > Advanced Security > Configurations",
            "Settings > Authentication security",
            "Settings > Third-party access"
        ],
        "correct": 1,
        "explanations": [
            "Member privileges governs member capabilities, not security configuration assignment.",
            "Configurations provides repository selection and configuration assignment.",
            "Authentication security governs authentication controls.",
            "Third-party access governs integrations rather than security bundles."
        ],
        "concept": "Applying organization security configurations",
        "hints": [
            "Look for repository security enablement rather than user authentication.",
            "Consider the distinction between integration access and feature coverage."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration"
    },
    {
        "id": "admin-085",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which security configuration option prevents repository administrators from changing its managed feature settings where enforcement is supported?",
        "choices": [
            "Set it as the default configuration",
            "Enforce the configuration",
            "Detach it from the repositories",
            "Apply it to all current repositories"
        ],
        "correct": 1,
        "explanations": [
            "Default assignment affects new repositories, not administrator override rights.",
            "Enforcement restricts changes to the managed settings.",
            "Detaching removes the managed configuration relationship.",
            "Broad application does not itself enforce the managed settings."
        ],
        "concept": "Security configuration enforcement",
        "hints": [
            "Assignment scope and modification restrictions are different.",
            "Keeping a managed relationship differs from preventing overrides."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/security-at-scale/about-security-configurations"
    },
    {
        "id": "admin-086",
        "domain": "Implement secure software development and compliance",
        "prompt": "Who can view security data across all repositories in an organization through security overview, subject to feature availability?",
        "choices": [
            "All repository maintainers",
            "All organization members",
            "Organization owners and security managers",
            "All outside collaborators"
        ],
        "correct": 2,
        "explanations": [
            "Maintainer access is limited to authorized repositories.",
            "Membership alone does not expose every repository's security data.",
            "These roles have organization-wide security visibility.",
            "Outside collaboration does not confer organization-wide visibility."
        ],
        "concept": "Security overview visibility boundaries",
        "hints": [
            "Consider whether a role is organization-wide or repository-scoped.",
            "Access to one repository does not imply access to all alerts."
        ],
        "source": "https://docs.github.com/en/code-security/security-overview/about-security-overview"
    },
    {
        "id": "admin-087",
        "domain": "Implement secure software development and compliance",
        "prompt": "An enterprise owner cannot see an older non-Git event in the default audit-log view, but it is still within retention. What should they change first?",
        "choices": [
            "The enterprise's default branch",
            "The repository's visibility",
            "The audit-log date filter",
            "The member's notification settings"
        ],
        "correct": 2,
        "explanations": [
            "The default branch does not control audit search dates.",
            "Repository visibility is not an audit search time filter.",
            "The default view covers less than the full retention window.",
            "Notification settings do not expand audit-log searches."
        ],
        "concept": "Audit search window versus retention",
        "hints": [
            "The initial display window may be narrower than stored history.",
            "Change the search scope before changing security policies."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise"
    },
    {
        "id": "admin-088",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which design supports retaining GitHub Enterprise Cloud audit evidence beyond GitHub's native retention?",
        "choices": [
            "Save the audit-log search URL",
            "Subscribe owners to email notifications",
            "Increase repository archive frequency",
            "Stream events to externally retained storage"
        ],
        "correct": 3,
        "explanations": [
            "A search URL does not preserve the underlying events.",
            "Email notifications do not constitute a complete audit stream.",
            "Repository archives preserve code, not enterprise audit events.",
            "External storage can apply the organization's retention policy."
        ],
        "concept": "Audit evidence retention architecture",
        "hints": [
            "Consider where the event records themselves will persist.",
            "A saved view is not a retained copy."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise"
    },
    {
        "id": "admin-089",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which value supports identifying enterprise audit-log events performed by a particular access token?",
        "choices": [
            "The token owner's display name",
            "The token's expiration date",
            "The token's requested scopes",
            "The token's SHA-256 hash"
        ],
        "correct": 3,
        "explanations": [
            "A display name does not distinguish a user's tokens.",
            "Expiration dates are not unique token identifiers.",
            "Many tokens can share the same scopes.",
            "Token-specific audit searches use the token's hash."
        ],
        "concept": "Token-level audit attribution",
        "hints": [
            "A user can own several credentials.",
            "Prefer an identifier tied to one credential rather than its capabilities."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token"
    },
    {
        "id": "admin-090",
        "domain": "Implement secure software development and compliance",
        "prompt": "A valid production API key appears in a secret-scanning alert. Which action contains the credential exposure?",
        "choices": [
            "Revoke or rotate the key at its provider",
            "Delete the latest commit containing the key",
            "Close the alert as resolved",
            "Make the repository read-only"
        ],
        "correct": 0,
        "explanations": [
            "Provider-side revocation or rotation invalidates the exposed credential.",
            "Deleting a commit does not invalidate copied credentials.",
            "Closing an alert does not revoke a key.",
            "Read-only access does not prevent use of an exposed key."
        ],
        "concept": "Containing a leaked credential",
        "hints": [
            "Distinguish removing evidence from disabling access.",
            "The credential may already exist outside the repository."
        ],
        "source": "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning"
    },
    {
        "id": "admin-091",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which repository feature can block supported secrets during a push, before they enter the repository?",
        "choices": [
            "Secret-scanning push protection",
            "Secret-scanning validity checks",
            "Dependabot security updates",
            "CodeQL default setup"
        ],
        "correct": 0,
        "explanations": [
            "Push protection checks pushes for supported secret patterns.",
            "Validity checks assess whether detected credentials remain active.",
            "Security updates remediate vulnerable dependencies.",
            "CodeQL analyzes application code rather than providing this push gate."
        ],
        "concept": "Preventive secret protection",
        "hints": [
            "Separate prevention at ingestion from post-detection triage.",
            "Not every security feature runs during a push."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/about-push-protection"
    },
    {
        "id": "admin-092",
        "domain": "Implement secure software development and compliance",
        "prompt": "With delegated bypass enabled, what must a contributor without bypass privileges do to push a blocked test credential?",
        "choices": [
            "Rename the branch and retry",
            "Close the resulting scanning alert",
            "Request a bypass for review",
            "Add a comment to the commit"
        ],
        "correct": 2,
        "explanations": [
            "Changing the branch name does not grant bypass privileges.",
            "Closing an alert does not authorize the blocked push.",
            "Delegated bypass routes an exception request to authorized reviewers.",
            "A commit comment does not grant a bypass."
        ],
        "concept": "Delegated secret bypass review",
        "hints": [
            "Consider who is authorized to approve an exception.",
            "A developer's classification is not itself an authorization."
        ],
        "source": "https://docs.github.com/en/code-security/concepts/secret-security/delegated-bypass"
    },
    {
        "id": "admin-093",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which secret-scanning capability detects an organization's own credential format when no built-in pattern covers it?",
        "choices": [
            "Custom patterns",
            "Dependency submission",
            "CodeQL query suites",
            "Validity checks"
        ],
        "correct": 0,
        "explanations": [
            "Custom patterns define matching rules for organization-specific secrets.",
            "Dependency submission inventories software dependencies.",
            "CodeQL queries analyze code rather than configure secret patterns.",
            "Validity checks test detected credentials, not define new formats."
        ],
        "concept": "Custom secret detection",
        "hints": [
            "The missing capability is recognition of a format.",
            "Distinguish discovery rules from credential validation."
        ],
        "source": "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns"
    },
    {
        "id": "admin-094",
        "domain": "Implement secure software development and compliance",
        "prompt": "What does an empty secret-scanning alert list establish about a repository?",
        "choices": [
            "Every credential in history has been revoked",
            "No alerts are visible within the enabled coverage",
            "All sensitive data formats have been scanned",
            "No supported secret can enter a future commit"
        ],
        "correct": 1,
        "explanations": [
            "An empty list does not prove provider-side revocation.",
            "Results depend on scanning coverage, settings, and access.",
            "Secret scanning does not recognize every sensitive data format.",
            "An empty list does not guarantee future prevention."
        ],
        "concept": "Limits of negative scanning evidence",
        "hints": [
            "Absence of findings is not proof of universal coverage.",
            "Consider configuration, supported patterns, and visibility."
        ],
        "source": "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning"
    },
    {
        "id": "admin-095",
        "domain": "Implement secure software development and compliance",
        "prompt": "A leaked credential has been revoked, but its secret-scanning alert remains open. What should a maintainer record when closing it?",
        "choices": [
            "A false-positive reason because access ended",
            "A test-secret reason because the token is inactive",
            "A revoked reason reflecting the remediation",
            "No reason because removing the file closes it"
        ],
        "correct": 2,
        "explanations": [
            "Revocation does not make the original detection incorrect.",
            "A production credential does not become a test secret.",
            "The closure reason should reflect the actual revocation.",
            "Removing a file does not automatically close the alert."
        ],
        "concept": "Accurate secret alert resolution",
        "hints": [
            "Classify the original finding separately from its current status.",
            "Record the action actually taken to remediate it."
        ],
        "source": "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning/resolving-alerts"
    },
    {
        "id": "admin-096",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which CodeQL setup chooses analysis languages and scan triggers without adding a customizable workflow file to the repository?",
        "choices": [
            "Default setup",
            "External CI setup",
            "Advanced setup",
            "Dependency submission"
        ],
        "correct": 0,
        "explanations": [
            "Default setup manages these choices without a checked-in workflow.",
            "External CI requires configuring the external analysis process.",
            "Advanced setup uses a customizable workflow file.",
            "Dependency submission supplies inventory data, not CodeQL scans."
        ],
        "concept": "CodeQL default setup",
        "hints": [
            "Compare managed setup with workflow-file customization.",
            "The question concerns code analysis, not dependency inventory."
        ],
        "source": "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning"
    },
    {
        "id": "admin-097",
        "domain": "Implement secure software development and compliance",
        "prompt": "A repository needs custom build commands in its GitHub Actions CodeQL analysis. Which setup supports editing those steps?",
        "choices": [
            "Default setup with a different query suite",
            "Advanced setup with a workflow file",
            "Default setup with different runner labels",
            "Default setup with different analysis languages"
        ],
        "correct": 1,
        "explanations": [
            "Changing the query suite does not expose custom build steps.",
            "Advanced setup exposes workflow steps for customization.",
            "Runner labels select execution hosts rather than custom build steps.",
            "Language selection does not provide custom build commands."
        ],
        "concept": "Custom CodeQL build configuration",
        "hints": [
            "Consider where executable build steps are defined.",
            "Changing alert state does not change analysis execution."
        ],
        "source": "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning"
    },
    {
        "id": "admin-098",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which result format lets a supported third-party analyzer upload findings to GitHub code scanning?",
        "choices": [
            "SPDX",
            "SARIF",
            "JUnit XML",
            "LCOV"
        ],
        "correct": 1,
        "explanations": [
            "SPDX describes software bills of materials.",
            "SARIF represents static-analysis results accepted by code scanning.",
            "JUnit XML typically describes test results.",
            "LCOV describes code coverage results."
        ],
        "concept": "Code scanning result interchange",
        "hints": [
            "Match the format to static-analysis findings.",
            "Inventory, test, and coverage reports serve different purposes."
        ],
        "source": "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning"
    },
    {
        "id": "admin-099",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which capability analyzes supported application source code for unsafe data flows such as SQL injection?",
        "choices": [
            "Dependabot alerts",
            "CodeQL code scanning",
            "Secret-scanning validity checks",
            "Dependency review"
        ],
        "correct": 1,
        "explanations": [
            "Dependabot alerts identify known vulnerabilities in dependencies.",
            "CodeQL can analyze source-to-sink data flows in supported code.",
            "Validity checks assess detected credentials.",
            "Dependency review examines dependency changes rather than application data flow."
        ],
        "concept": "Application analysis versus supply-chain analysis",
        "hints": [
            "Identify whether the risk lies in application logic or package versions.",
            "Consider how untrusted input reaches a sensitive operation."
        ],
        "source": "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning"
    },
    {
        "id": "admin-100",
        "domain": "Implement secure software development and compliance",
        "prompt": "A reviewed code-scanning finding is demonstrably a false positive. How should a maintainer dismiss it?",
        "choices": [
            "Select the false-positive reason and document why",
            "Delete the workflow's result files",
            "Disable scanning for the language",
            "Reduce repository visibility and rerun"
        ],
        "correct": 0,
        "explanations": [
            "A supported reason and comment preserve the triage rationale.",
            "Deleting results is not an accountable dismissal.",
            "Disabling a language removes coverage for other findings.",
            "Visibility changes do not resolve a false-positive finding."
        ],
        "concept": "Documented code-scanning dismissal",
        "hints": [
            "Keep evidence of the decision without removing useful coverage.",
            "A triage action should explain why the finding is inapplicable."
        ],
        "source": "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts"
    },
    {
        "id": "admin-101",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which GitHub Enterprise Cloud ruleset control can block merges based on a chosen code-scanning tool and alert severity thresholds?",
        "choices": [
            "Require signed commits",
            "Require linear history",
            "Require deployments to succeed",
            "Require code scanning results"
        ],
        "correct": 3,
        "explanations": [
            "Signatures verify commits rather than vulnerability thresholds.",
            "Linear history governs commit structure.",
            "Deployment checks depend on environment deployment success.",
            "This rule selects scanning tools and severity thresholds."
        ],
        "concept": "Security-based merge gates",
        "hints": [
            "A successful analysis run can still contain vulnerabilities.",
            "Look for a control that evaluates findings, not just execution."
        ],
        "source": "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
    },
    {
        "id": "admin-102",
        "domain": "Implement secure software development and compliance",
        "prompt": "On GitHub Enterprise Server 3.19, what prerequisite is explicitly required before repositories can use code scanning?",
        "choices": [
            "The organization owner publishes every repository",
            "The repository owner links a GitHub.com public repository",
            "The site administrator enables code scanning on the appliance",
            "The user authorizes an OAuth App with repo scope"
        ],
        "correct": 2,
        "explanations": [
            "Publishing repositories is neither required nor appropriate for private code.",
            "A linked public repository is not this GHES prerequisite.",
            "GHES requires appliance-level code-scanning enablement by the site administrator.",
            "An OAuth grant does not enable the appliance feature."
        ],
        "concept": "GHES-specific code scanning prerequisites",
        "hints": [
            "Distinguish appliance administration from repository configuration.",
            "Use documentation matching the deployed Server version."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/code-security/concepts/code-scanning/codeql/codeql-code-scanning"
    },
    {
        "id": "admin-103",
        "domain": "Implement secure software development and compliance",
        "prompt": "For private repositories on GitHub Team, which product pairing covers code scanning and secret scanning respectively?",
        "choices": [
            "GitHub Secret Protection; GitHub Code Security",
            "GitHub Copilot Business; GitHub Code Security",
            "GitHub Code Security; GitHub Secret Protection",
            "GitHub Team alone; GitHub Secret Protection"
        ],
        "correct": 2,
        "explanations": [
            "The products are reversed: secret protection addresses credentials.",
            "Copilot Business alone is not the code-scanning entitlement.",
            "Code Security covers code scanning; Secret Protection covers secret scanning.",
            "GitHub Team alone does not include private-repository code scanning."
        ],
        "concept": "Current security product licensing",
        "hints": [
            "Separate source-code vulnerability analysis from credential leak detection.",
            "A base collaboration plan is not every security entitlement."
        ],
        "source": "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security"
    },
    {
        "id": "admin-104",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which repository capability supplies dependency inventory used by Dependabot alerts?",
        "choices": [
            "CodeQL database",
            "Secret-scanning custom patterns",
            "Dependency graph",
            "Repository security advisories"
        ],
        "correct": 2,
        "explanations": [
            "A CodeQL database represents source code for analysis.",
            "Secret patterns identify credentials, not package inventory.",
            "Dependabot alerts use the dependency graph to identify vulnerable dependencies.",
            "Advisories describe vulnerabilities rather than inventorying this repository."
        ],
        "concept": "Dependency graph and vulnerability alerts",
        "hints": [
            "Alerts need both an inventory and vulnerability information.",
            "Identify the repository's inventory component."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts"
    },
    {
        "id": "admin-105",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which Dependabot feature opens pull requests to keep supported dependencies current even without a known vulnerability?",
        "choices": [
            "Dependabot version updates",
            "Dependabot security updates",
            "Dependency review",
            "Dependabot alerts"
        ],
        "correct": 0,
        "explanations": [
            "Version updates propose routine dependency upgrades.",
            "Security updates target vulnerable dependencies.",
            "Dependency review evaluates dependency changes in pull requests.",
            "Alerts notify about known vulnerable dependencies."
        ],
        "concept": "Routine versus security dependency updates",
        "hints": [
            "Separate freshness maintenance from vulnerability remediation.",
            "A notification is not an update pull request."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates"
    },
    {
        "id": "admin-106",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which file defines package ecosystems, directories, and schedules for Dependabot version updates?",
        "choices": [
            ".github/SECURITY.md",
            ".github/CODEOWNERS",
            ".github/dependabot.yml",
            ".github/workflows/codeql.yml"
        ],
        "correct": 2,
        "explanations": [
            "SECURITY.md describes vulnerability reporting and supported versions.",
            "CODEOWNERS defines code review responsibility.",
            "Dependabot reads version-update configuration from this file.",
            "A CodeQL workflow configures code analysis, not Dependabot schedules."
        ],
        "concept": "Dependabot configuration location",
        "hints": [
            "Match the filename to the automation being configured.",
            "Security documentation differs from executable configuration."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates"
    },
    {
        "id": "admin-107",
        "domain": "Implement secure software development and compliance",
        "prompt": "Dependabot needs a private registry credential. Which secret store should its registry configuration reference?",
        "choices": [
            "A Dependabot secret",
            "An Actions secret only",
            "A Codespaces secret only",
            "A webhook secret"
        ],
        "correct": 0,
        "explanations": [
            "Dependabot registry authentication uses Dependabot secrets.",
            "Actions secrets alone are not supplied to Dependabot update jobs.",
            "Codespaces secrets serve development environments, not update jobs.",
            "Webhook secrets authenticate deliveries rather than package registry access."
        ],
        "concept": "Dependabot registry authentication",
        "hints": [
            "Secrets belong to distinct consumers and stores.",
            "A credential's existence does not make it available to every feature."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot"
    },
    {
        "id": "admin-108",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which feature shows dependencies added or removed by a pull request and flags known vulnerabilities in those changes?",
        "choices": [
            "CodeQL database creation",
            "Secret-scanning alert review",
            "Dependency review",
            "Repository advisory publication"
        ],
        "correct": 2,
        "explanations": [
            "CodeQL database creation prepares source-code analysis.",
            "Secret review concerns credentials, not dependency diffs.",
            "Dependency review exposes changed dependencies and associated vulnerability information.",
            "Advisory publication discloses vulnerabilities rather than reviewing dependency changes."
        ],
        "concept": "Pull-request dependency risk",
        "hints": [
            "Focus on changes introduced before merging.",
            "The relevant input is a dependency diff, not credential content."
        ],
        "source": "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review"
    },
    {
        "id": "admin-109",
        "domain": "Implement secure software development and compliance",
        "prompt": "A public repository maintainer must coordinate a vulnerability fix privately with invited researchers. Which feature supports that collaboration?",
        "choices": [
            "A public issue with a security label",
            "A Dependabot alert dismissal",
            "A published release discussion",
            "A draft repository security advisory"
        ],
        "correct": 3,
        "explanations": [
            "A public issue exposes the vulnerability before coordinated disclosure.",
            "Alert dismissal does not create a private collaboration workspace.",
            "A published discussion is not private coordination.",
            "Draft advisories support private discussion and coordinated fixes."
        ],
        "concept": "Private vulnerability coordination",
        "hints": [
            "Choose a disclosure workflow with restricted participants.",
            "A label does not change public visibility."
        ],
        "source": "https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories"
    },
    {
        "id": "admin-110",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which repository file documents supported versions and instructions for reporting vulnerabilities?",
        "choices": [
            "dependabot.yml",
            "CODEOWNERS",
            "SECURITY.md",
            "CODE_OF_CONDUCT.md"
        ],
        "correct": 2,
        "explanations": [
            "dependabot.yml configures dependency update automation.",
            "CODEOWNERS maps files to responsible reviewers.",
            "SECURITY.md is the repository's security policy document.",
            "CODE_OF_CONDUCT.md defines community behavior standards."
        ],
        "concept": "Repository vulnerability reporting policy",
        "hints": [
            "Identify guidance for researchers rather than automation settings.",
            "Community behavior and vulnerability reporting are different policies."
        ],
        "source": "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository"
    },
    {
        "id": "admin-111",
        "domain": "Implement secure software development and compliance",
        "prompt": "Where can a public repository maintainer request a CVE identifier for a vulnerability without an existing CVE?",
        "choices": [
            "In a branch protection rule",
            "In a repository security advisory",
            "In a Dependabot configuration file",
            "In an organization audit-log search"
        ],
        "correct": 1,
        "explanations": [
            "Branch protection does not allocate vulnerability identifiers.",
            "GitHub can assign a CVE through the advisory workflow.",
            "Dependabot configuration controls updates rather than CVE assignment.",
            "Audit searches retrieve events, not vulnerability identifiers."
        ],
        "concept": "CVE assignment through GitHub",
        "hints": [
            "Consider how vulnerability disclosure is coordinated.",
            "An identifier request is not a repository access policy."
        ],
        "source": "https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories"
    },
    {
        "id": "admin-112",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which information most directly helps prioritize Dependabot alerts by security risk?",
        "choices": [
            "Alert age and package popularity",
            "Package release date and update frequency",
            "Severity, exploitability, and use",
            "Maintainer activity and repository popularity"
        ],
        "correct": 2,
        "explanations": [
            "Age and popularity do not establish exploitability or impact.",
            "Release timing alone does not measure vulnerability exposure.",
            "These signals connect vulnerability impact with actual use.",
            "Maintenance and popularity alone do not measure this application's exposure."
        ],
        "concept": "Risk-based dependency triage",
        "hints": [
            "Separate display metadata from evidence of exposure.",
            "Impact alone may not describe the affected code's use."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts"
    },
    {
        "id": "admin-113",
        "domain": "Implement secure software development and compliance",
        "prompt": "A team dismisses a Dependabot alert because the vulnerable code is not used. Which record best supports later reassessment?",
        "choices": [
            "The alert URL without a dismissal rationale",
            "A fixed version without applicability evidence",
            "The package version without a dismissal reason",
            "The dismissal reason with usage evidence"
        ],
        "correct": 3,
        "explanations": [
            "An alert link locates the finding but does not explain acceptance.",
            "A fixed version identifies a remedy, not why it was deferred.",
            "A package version alone does not explain the decision.",
            "A reason and evidence preserve the basis for reassessment."
        ],
        "concept": "Traceable dependency risk acceptance",
        "hints": [
            "Future reviewers need to understand the applicability decision.",
            "Record why the affected functionality is not exposed."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts"
    },
    {
        "id": "admin-114",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which responsibilities should an enterprise security response plan assign to its own team rather than assume GitHub Support will perform?",
        "choices": [
            "Placing GitHub audit data on an indefinite legal hold",
            "Repairing GitHub's underlying hosted infrastructure",
            "Changing GitHub's native audit retention for one incident",
            "Containment, evidence collection, and incident investigation"
        ],
        "correct": 3,
        "explanations": [
            "GitHub Support does not place audit data on investigation holds.",
            "GitHub's hosted infrastructure is outside customer administration.",
            "A support ticket does not extend native audit retention.",
            "The organization owns incident response and preservation of its evidence."
        ],
        "concept": "Security incident response ownership",
        "hints": [
            "Distinguish assistance with product features from running the investigation.",
            "Plan evidence preservation before records expire."
        ],
        "source": "https://docs.github.com/en/support/learning-about-github-support/understanding-how-github-support-can-help-during-a-security-incident"
    },
    {
        "id": "admin-115",
        "domain": "Implement secure software development and compliance",
        "prompt": "A supported REST operation only reads issues in two organization repositories. Which fine-grained PAT permission best fits?",
        "choices": [
            "Contents: write",
            "Members: read",
            "Administration: write",
            "Issues: read"
        ],
        "correct": 3,
        "explanations": [
            "Contents write access is unrelated and overprivileged.",
            "Organization member access does not authorize reading repository issues.",
            "Repository administration write access exceeds the task.",
            "Read-only issue access matches the operation; select only the two repositories."
        ],
        "concept": "Fine-grained PAT least privilege",
        "hints": [
            "Match the resource permission to the endpoint's operation.",
            "Repository selection and permission level both limit access."
        ],
        "source": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
    },
    {
        "id": "admin-116",
        "domain": "Implement secure software development and compliance",
        "prompt": "An organization requires approval of fine-grained PATs. Who can approve a member's pending token request?",
        "choices": [
            "An organization owner",
            "Any repository contributor",
            "Any member of the organization",
            "The token creator acting alone"
        ],
        "correct": 0,
        "explanations": [
            "Organization owners review and approve pending token requests.",
            "Contribution rights do not grant organization token approval.",
            "Ordinary membership does not confer token approval authority.",
            "Creating a token does not bypass the organization's approval requirement."
        ],
        "concept": "Fine-grained PAT approval authority",
        "hints": [
            "Separate requesting access from authorizing it.",
            "The policy is enforced at organization scope."
        ],
        "source": "https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization"
    },
    {
        "id": "admin-117",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which organization policy limits how long eligible personal access tokens may remain usable for its resources?",
        "choices": [
            "Repository archive policy",
            "OAuth App approval policy",
            "SAML session policy",
            "Personal access token maximum lifetime policy"
        ],
        "correct": 3,
        "explanations": [
            "Archiving controls repository activity, not token age.",
            "OAuth approval governs applications, not PAT lifetime.",
            "SAML session duration is not a PAT expiration policy.",
            "Maximum lifetime policies govern PAT lifetimes for organization access."
        ],
        "concept": "Token expiration governance",
        "hints": [
            "Match the control to credential lifetime rather than browser sessions.",
            "Approval and expiration solve different governance problems."
        ],
        "source": "https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization"
    },
    {
        "id": "admin-118",
        "domain": "Implement secure software development and compliance",
        "prompt": "In the English organization UI, an owner opens Settings > Personal access tokens > Active tokens. Which action removes one fine-grained PAT's access without removing its user?",
        "choices": [
            "Remove the user from all teams",
            "Revoke that token's organization access",
            "Delete every OAuth App authorization",
            "Archive the affected repositories"
        ],
        "correct": 1,
        "explanations": [
            "Team removal changes the user's legitimate access more broadly.",
            "Revocation targets the selected token's access to organization resources.",
            "OAuth authorizations are separate from this PAT.",
            "Archiving changes repository behavior, not token authorization."
        ],
        "concept": "Targeted organization token revocation",
        "hints": [
            "Choose a control on the compromised credential, not the person's membership.",
            "Different credential types have separate authorizations."
        ],
        "source": "https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization"
    },
    {
        "id": "admin-119",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which authentication design avoids tying unattended repository automation to an employee's continued membership?",
        "choices": [
            "The employee's classic PAT",
            "The employee's OAuth access token",
            "A GitHub App installation token",
            "The employee's fine-grained PAT"
        ],
        "correct": 2,
        "explanations": [
            "A classic PAT depends on its user's access.",
            "An OAuth user token remains tied to that user.",
            "Installation authentication acts as the installed app, not the employee.",
            "A fine-grained PAT still depends on its user's access."
        ],
        "concept": "Service identity for long-lived integrations",
        "hints": [
            "Permission granularity does not remove a credential's user dependency.",
            "Identify whether the actor is a person or an installation."
        ],
        "source": "https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/deciding-when-to-build-a-github-app"
    },
    {
        "id": "admin-120",
        "domain": "Implement secure software development and compliance",
        "prompt": "A member has a linked SAML identity and a classic PAT with suitable scopes. Organization policy permits the token, but it lacks SSO authorization. What is required?",
        "choices": [
            "Authorize the token for that organization",
            "Disable the organization's SAML SSO",
            "Regenerate the token with every scope",
            "Convert the repository to internal visibility"
        ],
        "correct": 0,
        "explanations": [
            "Classic PATs need authorization for the SSO organization.",
            "Disabling SSO weakens policy and is not required.",
            "Additional scopes do not replace SSO authorization.",
            "Changing visibility does not supply the missing authorization."
        ],
        "concept": "Classic PAT SSO authorization",
        "hints": [
            "Separate scopes from the organization's identity authorization.",
            "A usable token can still lack access to an SSO-protected organization."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/authorizing-a-personal-access-token-for-use-with-single-sign-on"
    },
    {
        "id": "admin-121",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which GitHub App property supports an integration that only needs read-only contents access to selected repositories?",
        "choices": [
            "Classic repo scope across the user's repositories",
            "Fine-grained permissions and repository selection",
            "Write access to every installed organization's repository",
            "Organization owner access inherited from its creator"
        ],
        "correct": 1,
        "explanations": [
            "Classic repo scope is broader and belongs to OAuth-style scope authorization.",
            "GitHub Apps support selected repositories and specific permission levels.",
            "Installation does not imply write access to every repository.",
            "An app does not inherit organization ownership from its creator."
        ],
        "concept": "GitHub App least-privilege installation",
        "hints": [
            "Compare resource selection with broad user scopes.",
            "Installation and permission level are separate access boundaries."
        ],
        "source": "https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/deciding-when-to-build-a-github-app"
    },
    {
        "id": "admin-122",
        "domain": "Implement secure software development and compliance",
        "prompt": "An OAuth App says it only reads private source code but requests repo scope. What capability does that scope actually include?",
        "choices": [
            "Read and write access to public and private repositories",
            "Read-only access to the selected private repository",
            "Only access to public repository metadata",
            "Only access to repository security advisories"
        ],
        "correct": 0,
        "explanations": [
            "The broad repo scope includes write capabilities, subject to user access.",
            "repo is not a fine-grained read-only repository grant.",
            "repo extends beyond public metadata.",
            "repo is not limited to security advisories."
        ],
        "concept": "OAuth scope review",
        "hints": [
            "Evaluate the requested scope, not the vendor's description.",
            "A user-scoped grant is not the same as a selected-repository permission."
        ],
        "source": "https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps"
    },
    {
        "id": "admin-123",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which credential authenticates REST requests as a GitHub App installation after the app exchanges its JWT?",
        "choices": [
            "The app's webhook secret",
            "The app's public key",
            "An OAuth client identifier",
            "An installation access token"
        ],
        "correct": 3,
        "explanations": [
            "A webhook secret validates deliveries, not installation API calls.",
            "A public key cannot authorize installation API operations.",
            "A client identifier alone does not authenticate these requests.",
            "The exchanged installation token authorizes installation-level API operations."
        ],
        "concept": "GitHub App installation authentication",
        "hints": [
            "Distinguish app identity from the credential used for repository operations.",
            "A verification secret is not an API access token."
        ],
        "source": "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation"
    },
    {
        "id": "admin-124",
        "domain": "Implement secure software development and compliance",
        "prompt": "An installed GitHub App requests additional permissions. What happens if the organization owner does not approve them?",
        "choices": [
            "The app immediately receives the new permissions",
            "The installation is automatically uninstalled",
            "The app retains its existing permissions",
            "The app's existing permissions are revoked"
        ],
        "correct": 2,
        "explanations": [
            "New permissions require approval.",
            "Declining to approve does not automatically uninstall the app.",
            "Existing permissions remain, though new functionality may not work.",
            "Not approving an expansion does not revoke existing permissions."
        ],
        "concept": "Reviewing app permission expansion",
        "hints": [
            "An upgrade request is not an automatic authorization.",
            "Separate existing access from requested new capabilities."
        ],
        "source": "https://docs.github.com/en/apps/using-github-apps/approving-updated-permissions-for-a-github-app"
    },
    {
        "id": "admin-125",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which action permanently removes a GitHub App installation's authorized access from an organization?",
        "choices": [
            "Delete the app's webhook subscription",
            "Remove one repository from its installation",
            "Suspend the installation temporarily",
            "Uninstall the app from the organization"
        ],
        "correct": 3,
        "explanations": [
            "Removing webhook delivery does not remove the app's API access.",
            "Removing one repository leaves access to other selected repositories.",
            "Suspension blocks access temporarily and is reversible.",
            "Uninstalling removes that organization's installation."
        ],
        "concept": "Removing integration access",
        "hints": [
            "Distinguish temporary disablement from removing an installation.",
            "Changing notification behavior does not revoke authorization."
        ],
        "source": "https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps"
    },
    {
        "id": "admin-126",
        "domain": "Implement secure software development and compliance",
        "prompt": "A REST request is rate limited with x-ratelimit-remaining: 0 and no Retry-After header. Which header tells the client when the primary window resets?",
        "choices": [
            "x-ratelimit-used",
            "x-ratelimit-reset",
            "x-ratelimit-resource",
            "x-github-request-id"
        ],
        "correct": 1,
        "explanations": [
            "x-ratelimit-used reports consumption, not the reset time.",
            "x-ratelimit-reset gives the reset time as UTC epoch seconds.",
            "x-ratelimit-resource names the limit category.",
            "The request identifier is for tracing rather than retry scheduling."
        ],
        "concept": "Primary REST rate-limit recovery",
        "hints": [
            "Use the server's timing information instead of immediate retries.",
            "Consumption counts and reset timestamps serve different purposes."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api"
    },
    {
        "id": "admin-127",
        "domain": "Implement secure software development and compliance",
        "prompt": "A rate-limited GitHub REST response includes Retry-After: 60. What should the client do before retrying?",
        "choices": [
            "Retry immediately with a new request identifier",
            "Wait until 60 successful requests finish",
            "Send 60 parallel requests",
            "Wait at least 60 seconds"
        ],
        "correct": 3,
        "explanations": [
            "A new identifier does not bypass the rate limit.",
            "The header specifies a delay, not a success count.",
            "Parallel retries can worsen secondary throttling.",
            "Retry-After specifies the minimum waiting period in seconds."
        ],
        "concept": "Server-directed retry timing",
        "hints": [
            "Interpret the response header's unit correctly.",
            "Retrying more aggressively is not a recovery strategy."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api"
    },
    {
        "id": "admin-128",
        "domain": "Implement secure software development and compliance",
        "prompt": "A REST client has primary allowance remaining but is throttled after many concurrent requests. Which mechanism can explain this?",
        "choices": [
            "Secondary rate limiting",
            "Access token expiration",
            "Primary REST rate limiting",
            "SSO authorization revocation"
        ],
        "correct": 0,
        "explanations": [
            "Secondary limits can apply independently of the primary allowance.",
            "Expiration invalidates a credential rather than throttling request bursts.",
            "The primary allowance has not been exhausted in this scenario.",
            "Revocation removes authorization rather than throttling request concurrency."
        ],
        "concept": "Secondary API rate limits",
        "hints": [
            "The primary request counter is not the only protection.",
            "Consider burst patterns and concurrent work."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api"
    },
    {
        "id": "admin-129",
        "domain": "Implement secure software development and compliance",
        "prompt": "A REST GET response includes an ETag. Which request header lets the client check whether that representation has changed?",
        "choices": [
            "X-Hub-Signature-256",
            "X-GitHub-Event",
            "Retry-After",
            "If-None-Match"
        ],
        "correct": 3,
        "explanations": [
            "X-Hub-Signature-256 validates webhook payload signatures.",
            "X-GitHub-Event identifies a webhook event.",
            "Retry-After is retry guidance in a response.",
            "If-None-Match sends the saved ETag for a conditional request."
        ],
        "concept": "Conditional REST requests",
        "hints": [
            "Use a validator returned with the resource representation.",
            "A webhook header serves a different transport workflow."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api"
    },
    {
        "id": "admin-130",
        "domain": "Implement secure software development and compliance",
        "prompt": "How does primary REST rate-limit accounting differ between a user's PAT and a GitHub App installation access token?",
        "choices": [
            "Both always share the repository owner's allowance",
            "Each PAT has an independent allowance; all installations share the creator's allowance",
            "The PAT uses the user's allowance; the installation token uses its installation allowance",
            "Both always have identical allowances regardless of plan"
        ],
        "correct": 2,
        "explanations": [
            "Installation requests are not charged to the repository owner's user bucket.",
            "Additional PATs do not each create a separate user allowance.",
            "User tokens and installation tokens have different primary limit accounting.",
            "Authentication type and enterprise context can affect limits."
        ],
        "concept": "User versus installation rate-limit accounting",
        "hints": [
            "Determine which identity owns the request budget.",
            "Do not infer a universal numeric limit across plans."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api"
    },
    {
        "id": "admin-131",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which organization policy requires owner approval before OAuth Apps can access organization resources?",
        "choices": [
            "Fine-grained PAT approval",
            "OAuth App access restrictions",
            "Repository creation restrictions",
            "GitHub App installation suspension"
        ],
        "correct": 1,
        "explanations": [
            "PAT approval applies to personal tokens, not OAuth App grants.",
            "OAuth App restrictions govern approval of third-party OAuth access.",
            "Repository creation restrictions do not approve OAuth integrations.",
            "Suspension affects one GitHub App installation, a different app model."
        ],
        "concept": "Organization OAuth App approval",
        "hints": [
            "Choose the policy matching the application's authorization model.",
            "GitHub Apps, OAuth Apps, and PATs have distinct controls."
        ],
        "source": "https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions"
    },
    {
        "id": "admin-132",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which verification authenticates a GitHub webhook payload using its configured shared secret?",
        "choices": [
            "Compare the sender's IP with allowed addresses",
            "Validate X-Hub-Signature-256 using HMAC-SHA256",
            "Verify User-Agent against GitHub-Hookshot",
            "Check X-GitHub-Delivery against prior delivery IDs"
        ],
        "correct": 1,
        "explanations": [
            "An IP check alone does not verify the payload's contents.",
            "A secret-derived HMAC verifies authenticity and payload integrity.",
            "A User-Agent string can be forged.",
            "Delivery IDs help detect duplicates but do not authenticate contents."
        ],
        "concept": "Webhook authenticity and integrity",
        "hints": [
            "Sender-controlled headers alone do not prove authenticity.",
            "The verification must bind the secret to the exact payload."
        ],
        "source": "https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries"
    },
    {
        "id": "admin-133",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which integration mechanism sends event notifications when repositories are created instead of requiring repeated API polling?",
        "choices": [
            "A scheduled REST inventory job",
            "An organization webhook subscription",
            "A conditional GET loop",
            "A saved audit-log search"
        ],
        "correct": 1,
        "explanations": [
            "A scheduled inventory job still polls for state.",
            "Organization webhooks can deliver subscribed repository events.",
            "Conditional GET requests still require polling.",
            "A saved search does not deliver event notifications."
        ],
        "concept": "Event-driven integration design",
        "hints": [
            "Distinguish a pushed event from periodically checking state.",
            "Choose a mechanism scoped to organization activity."
        ],
        "source": "https://docs.github.com/en/webhooks/about-webhooks"
    },
    {
        "id": "admin-134",
        "domain": "Implement secure software development and compliance",
        "prompt": "An organization team is named in CODEOWNERS but receives no review requests. Which team condition is required for code ownership?",
        "choices": [
            "The team is visible and has explicit write access",
            "The team is secret and has read access",
            "The team is visible and has triage access",
            "The team is secret and its members individually have write access"
        ],
        "correct": 0,
        "explanations": [
            "A code-owner team must be visible and have its own write access.",
            "A secret team with read access does not meet the requirements.",
            "Triage is insufficient for code ownership.",
            "Individual member access does not replace the team's required access or visibility."
        ],
        "concept": "CODEOWNERS team eligibility",
        "hints": [
            "Evaluate permissions granted to the team itself.",
            "Membership permissions and team permissions are not interchangeable."
        ],
        "source": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners"
    },
    {
        "id": "admin-135",
        "domain": "Implement secure software development and compliance",
        "prompt": "What does a code-scanning alert's path view help a responder inspect?",
        "choices": [
            "The chain of dependency version upgrades",
            "Data flow from source to sink",
            "The execution order of workflow jobs",
            "The list of files changed by a pull request"
        ],
        "correct": 1,
        "explanations": [
            "Dependency upgrade history is not the alert's data-flow path.",
            "The path traces how data reaches the reported vulnerable operation.",
            "Workflow job order is not the application's data flow.",
            "A changed-file list does not show the reported flow through code."
        ],
        "concept": "Interpreting CodeQL path findings",
        "hints": [
            "A highlighted path describes program behavior, not administrative history.",
            "Follow the input through transformations to its destination."
        ],
        "source": "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository"
    },
    {
        "id": "admin-136",
        "domain": "Implement secure software development and compliance",
        "prompt": "Which feature attempts remediation pull requests for vulnerable supported dependencies after Dependabot alerts are enabled?",
        "choices": [
            "Secret-scanning push protection",
            "Dependabot security updates",
            "Dependency review",
            "Dependabot alert notifications"
        ],
        "correct": 1,
        "explanations": [
            "Push protection blocks secrets rather than updating packages.",
            "Security updates propose fixes when Dependabot can generate a compatible update.",
            "Dependency review assesses changes but does not generate these remediation PRs.",
            "Alert notifications report findings without themselves opening fix PRs."
        ],
        "concept": "Dependabot automated vulnerability remediation",
        "hints": [
            "Distinguish identifying a vulnerable package from proposing its fix.",
            "Not every alert can produce a compatible update."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates"
    },
    {
        "id": "admin-137",
        "domain": "Implement secure software development and compliance",
        "prompt": "Where should a script obtain a required PAT instead of keeping it in a tracked source file?",
        "choices": [
            "A private repository's README",
            "An encoded constant in the script",
            "A commit message on a protected branch",
            "An approved secret store at runtime"
        ],
        "correct": 3,
        "explanations": [
            "Private repository access still exposes credentials to readers.",
            "Encoding is not secure secret storage.",
            "Branch protection does not conceal commit messages.",
            "A secret store separates the credential from tracked source."
        ],
        "concept": "Secure personal access token handling",
        "hints": [
            "Access restrictions do not make committed credentials safe.",
            "Encoding changes representation, not confidentiality."
        ],
        "source": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
    },
    {
        "id": "admin-138",
        "domain": "Implement secure software development and compliance",
        "prompt": "In the English GitHub Enterprise Cloud UI, an enterprise owner opens Settings > Audit log > Settings. Which option adds source IPs to eligible audit events?",
        "choices": [
            "Require fine-grained PAT approval",
            "Require signed commits",
            "Restrict repository forking",
            "Enable source IP disclosure"
        ],
        "correct": 3,
        "explanations": [
            "PAT approval does not govern audit IP disclosure.",
            "Commit signatures do not configure audit IP fields.",
            "Forking policy does not enable source IP recording.",
            "Source IP disclosure controls inclusion of IP data for eligible events."
        ],
        "concept": "Audit source IP disclosure",
        "hints": [
            "A network allow list and event field disclosure serve different purposes.",
            "Do not assume every event exposes an address."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise"
    },
    {
        "id": "admin-139",
        "domain": "Implement secure software development and compliance",
        "prompt": "Dependabot opens a security update pull request. What should determine whether it is merged?",
        "choices": [
            "The bot author alone",
            "The absence of a human-written title",
            "The package name alone",
            "The repository's required checks and review policy"
        ],
        "correct": 3,
        "explanations": [
            "Bot authorship does not prove compatibility or satisfy all merge requirements.",
            "Title authorship does not establish correctness.",
            "The package name does not establish update safety.",
            "Dependency updates should pass applicable checks and review before merging."
        ],
        "concept": "Reviewing automated dependency fixes",
        "hints": [
            "Automation proposes a change; it does not prove every effect.",
            "Apply the same relevant integration controls to dependency changes."
        ],
        "source": "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates"
    },
    {
        "id": "admin-140",
        "domain": "Implement secure software development and compliance",
        "prompt": "What does enabling repository security tools establish for an enterprise's compliance program?",
        "choices": [
            "Certification against every regulatory standard",
            "Controls and findings that still require risk assessment",
            "Proof that all vulnerabilities are absent",
            "Replacement of incident response and access reviews"
        ],
        "correct": 1,
        "explanations": [
            "Feature enablement is not universal regulatory certification.",
            "Tools provide evidence and protections that require interpretation and response.",
            "Scanning cannot prove the absence of all vulnerabilities.",
            "Incident response and access governance remain necessary."
        ],
        "concept": "Security tooling and residual compliance risk",
        "hints": [
            "Distinguish a technical control from a compliance determination.",
            "Consider responsibilities that remain after detection is enabled."
        ],
        "source": "https://docs.github.com/en/code-security/security-overview/about-security-overview"
    },
    {
        "id": "admin-141",
        "domain": "Manage GitHub Actions",
        "prompt": "In GitHub Enterprise Cloud, who can relax an Actions restriction enforced by enterprise policy?",
        "choices": [
            "A repository administrator",
            "An enterprise owner",
            "An organization member",
            "A workflow maintainer"
        ],
        "correct": 1,
        "explanations": [
            "Repository settings cannot override it.",
            "Enterprise owners control enterprise policies.",
            "Membership does not grant policy control.",
            "Editing YAML cannot relax enterprise policy."
        ],
        "concept": "Actions policy inheritance",
        "hints": [
            "Identify the enforcing scope.",
            "Separate workflow edits from policy authority."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-142",
        "domain": "Manage GitHub Actions",
        "prompt": "An enterprise permits only actions defined inside its own repositories. Why is actions/checkout blocked?",
        "choices": [
            "Its runner label is missing",
            "Its repository must be forked first",
            "GitHub-authored actions are outside that policy",
            "Public actions require an environment secret"
        ],
        "correct": 2,
        "explanations": [
            "Labels select runners, not allowed actions.",
            "Forking is not a general prerequisite.",
            "Enterprise-only permission excludes GitHub's external organizations.",
            "A secret does not bypass action policy."
        ],
        "concept": "Enterprise-only action policies",
        "hints": [
            "Consider who owns the action repository.",
            "Distinguish publisher trust from policy scope."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-143",
        "domain": "Manage GitHub Actions",
        "prompt": "An enterprise owner wants Actions enabled in only two organizations. Which control matches that scope?",
        "choices": [
            "Enable Actions for specific organizations",
            "Allow only enterprise actions and reusable workflows",
            "Disable repository-level self-hosted runner creation",
            "Require actions to use full-length commit SHAs"
        ],
        "correct": 0,
        "explanations": [
            "Enterprise policy can select organizations.",
            "Dependency restrictions do not select organizations that can use Actions.",
            "Runner registration policy does not disable Actions itself.",
            "Pinning controls dependencies, not organization availability."
        ],
        "concept": "Enterprise Actions availability",
        "hints": [
            "Match the setting to the organizational boundary.",
            "Availability differs from job routing."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-144",
        "domain": "Manage GitHub Actions",
        "prompt": "In an Actions allowlist, which pattern permits all actions and reusable workflows owned by octo-tools?",
        "choices": [
            "octo-tools",
            "@octo-tools",
            "*/octo-tools",
            "octo-tools/*"
        ],
        "correct": 3,
        "explanations": [
            "The owner alone is not the documented pattern.",
            "An @ prefix does not select an owner.",
            "This selects a repository name under any owner.",
            "The wildcard covers repositories under that owner."
        ],
        "concept": "Action allowlist syntax",
        "hints": [
            "Read owner and repository positions.",
            "A wildcard expands one part of a reference."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-145",
        "domain": "Manage GitHub Actions",
        "prompt": "Without a dependency lockfile, which action reference has the form required by a full-length commit-SHA pinning policy?",
        "choices": [
            "octo-tools/build@v2",
            "octo-tools/build@0123456789abcdef0123456789abcdef01234567",
            "octo-tools/build@main",
            "octo-tools/build@0123456"
        ],
        "correct": 1,
        "explanations": [
            "A release tag is mutable.",
            "This has the full 40-character commit form.",
            "A branch can move.",
            "An abbreviated SHA is not full-length."
        ],
        "concept": "Full-SHA action references",
        "hints": [
            "Distinguish commit identity from named references.",
            "The policy specifies reference length."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-146",
        "domain": "Manage GitHub Actions",
        "prompt": "Which dependency can still use a tag under the enterprise setting 'Require actions to be pinned to a full-length commit SHA'?",
        "choices": [
            "A GitHub-authored action",
            "An internal JavaScript action fetched remotely",
            "A reusable workflow",
            "A verified Marketplace action"
        ],
        "correct": 2,
        "explanations": [
            "GitHub-authored actions are included.",
            "Remotely referenced internal actions are included.",
            "This policy permits tag references for reusable workflows.",
            "Verified status does not exempt an action."
        ],
        "concept": "Pinning policy coverage",
        "hints": [
            "Actions and workflows are different dependency types.",
            "Publisher identity does not define the exception."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-147",
        "domain": "Manage GitHub Actions",
        "prompt": "Which action reference is outside the enterprise allowlist restrictions on remotely sourced actions?",
        "choices": [
            "./.github/actions/check",
            "octo-tools/check@v1",
            "actions/checkout@v6",
            "partner/check@main"
        ],
        "correct": 0,
        "explanations": [
            "Local filesystem actions are not restricted by this policy.",
            "This is a remote action reference.",
            "GitHub ownership does not make it local.",
            "This also fetches a remote action."
        ],
        "concept": "Local action policy boundaries",
        "hints": [
            "Examine where the code is loaded from.",
            "Repository ownership and filesystem locality differ."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-148",
        "domain": "Manage GitHub Actions",
        "prompt": "Where must a reusable workflow file be stored in its repository?",
        "choices": [
            ".github/actions/build.yml",
            "workflow-templates/build.yml",
            ".github/workflows/shared/build.yml",
            ".github/workflows/build.yml"
        ],
        "correct": 3,
        "explanations": [
            "This is not the workflow directory.",
            "This is a template directory, not an executable workflow location.",
            "Workflow subdirectories are unsupported.",
            "Reusable workflows belong directly in .github/workflows."
        ],
        "concept": "Reusable workflow location",
        "hints": [
            "A reusable workflow is still a workflow.",
            "Check whether nested directories are supported."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "admin-149",
        "domain": "Manage GitHub Actions",
        "prompt": "Which trigger exposes a workflow for calls from other workflows?",
        "choices": [
            "workflow_call",
            "workflow_dispatch",
            "workflow_run",
            "repository_dispatch"
        ],
        "correct": 0,
        "explanations": [
            "It declares the reusable workflow interface.",
            "It enables manual or API dispatch.",
            "It reacts to another workflow's run activity.",
            "It receives a custom repository event."
        ],
        "concept": "Reusable workflow trigger",
        "hints": [
            "Calling a component differs from dispatching a run.",
            "Look for an explicit input interface."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "admin-150",
        "domain": "Manage GitHub Actions",
        "prompt": "At which YAML location does a caller reference a reusable workflow?",
        "choices": [
            "jobs.build.steps[0].run",
            "on.workflow_call",
            "jobs.build.uses",
            "defaults.run"
        ],
        "correct": 2,
        "explanations": [
            "run executes shell commands in a step.",
            "This declares the called workflow's trigger.",
            "Reusable workflows are called at job level.",
            "defaults configures shell execution defaults."
        ],
        "concept": "Job-level workflow calls",
        "hints": [
            "Separate a job from its steps.",
            "The caller needs a component reference."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "admin-151",
        "domain": "Manage GitHub Actions",
        "prompt": "Which reusable component can define separate build and deploy jobs rather than run inside a single step?",
        "choices": [
            "A JavaScript action",
            "A reusable workflow",
            "A composite action",
            "A Docker container action"
        ],
        "correct": 1,
        "explanations": [
            "A JavaScript action runs within a step.",
            "Reusable workflows can contain multiple jobs.",
            "Composite actions combine steps, not separate jobs.",
            "A container action runs within a step."
        ],
        "concept": "Choosing a reuse unit",
        "hints": [
            "Consider whether reuse includes orchestration.",
            "Match the component to the execution boundary."
        ],
        "source": "https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "admin-152",
        "domain": "Manage GitHub Actions",
        "prompt": "An organization publishes ci.yml as a workflow template. Which repository and path are correct?",
        "choices": [
            "Repository .github; .github/workflows/ci.yml",
            "Repository templates; .github/workflows/ci.yml",
            "Repository .github; .github/workflow-templates/ci.yml",
            "Repository .github; workflow-templates/ci.yml"
        ],
        "correct": 3,
        "explanations": [
            "This stores a workflow, not an organization template.",
            "The organization template repository must be .github.",
            "The extra .github directory is incorrect.",
            "Templates use workflow-templates at the .github repository root."
        ],
        "concept": "Organization workflow template location",
        "hints": [
            "Distinguish the repository name from a directory.",
            "Templates and runnable workflows have different locations."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates"
    },
    {
        "id": "admin-153",
        "domain": "Manage GitHub Actions",
        "prompt": "Which file supplies display metadata for the organization workflow template ci.yml?",
        "choices": [
            "ci.properties.json",
            "ci.metadata.yml",
            "ci.action.yml",
            "ci.properties.yml"
        ],
        "correct": 0,
        "explanations": [
            "The basename is followed by .properties.json.",
            "This is not the documented metadata filename.",
            "Action metadata is a different mechanism.",
            "Template metadata uses JSON, not this YAML file."
        ],
        "concept": "Workflow template metadata",
        "hints": [
            "Match the template basename.",
            "Presentation metadata is separate from workflow YAML."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates"
    },
    {
        "id": "admin-154",
        "domain": "Manage GitHub Actions",
        "prompt": "Which placeholder lets an organization workflow template target each consuming repository's default branch?",
        "choices": [
            "${{ github.template_branch }}",
            "$main-branch",
            "$default-branch",
            "${{ defaults.branch }}"
        ],
        "correct": 2,
        "explanations": [
            "This is not a supported template context.",
            "This is not the documented placeholder.",
            "GitHub replaces it when creating the workflow.",
            "This is not a supported branch expression."
        ],
        "concept": "Template branch substitution",
        "hints": [
            "The value is substituted when creating a workflow.",
            "Do not confuse template placeholders with runtime expressions."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates"
    },
    {
        "id": "admin-155",
        "domain": "Manage GitHub Actions",
        "prompt": "Workflow A calls B with contents: read. Can B obtain contents: write by declaring it locally?",
        "choices": [
            "Yes, if B is private",
            "No, a called workflow cannot elevate token permissions",
            "Yes, if B uses a full commit SHA",
            "No, reusable workflows cannot use GITHUB_TOKEN"
        ],
        "correct": 1,
        "explanations": [
            "Visibility does not elevate permissions.",
            "The caller's permissions are an upper bound.",
            "Pinning does not grant token privileges.",
            "Reusable workflows can use GITHUB_TOKEN."
        ],
        "concept": "Permission limits in workflow reuse",
        "hints": [
            "Follow permissions along the call chain.",
            "Code identity and authorization are separate."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "admin-156",
        "domain": "Manage GitHub Actions",
        "prompt": "A passes a secret to reusable workflow B, which calls C. What must B do for C to receive that secret?",
        "choices": [
            "Pass it to C explicitly or through permitted inheritance",
            "Declare it only as a workflow-level environment variable in B",
            "Grant C contents: read without mapping any secrets",
            "Rely on A's secrets: inherit to skip the B-to-C call boundary"
        ],
        "correct": 0,
        "explanations": [
            "Secrets move only across direct calls.",
            "A local environment value is not a secret-passing interface.",
            "Content permissions do not pass secret values.",
            "Inheritance applies to direct calls, not every descendant."
        ],
        "concept": "Secrets across nested workflow calls",
        "hints": [
            "Trace each edge of the call chain.",
            "A shared location does not imply shared credentials."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
    },
    {
        "id": "admin-157",
        "domain": "Manage GitHub Actions",
        "prompt": "An allowed reusable workflow in a private organization repository is inaccessible to another private repository. Which setting should its administrator check?",
        "choices": [
            "The runner group's repository access policy",
            "The calling job's deployment environment protection",
            "The called repository's branch protection rules",
            "The called repository's Actions access policy"
        ],
        "correct": 3,
        "explanations": [
            "Runner access does not grant private component access.",
            "Environment approval does not grant access to the called repository.",
            "Branch protection governs changes, not component sharing.",
            "Private components require an explicit sharing access policy."
        ],
        "concept": "Sharing private workflow components",
        "hints": [
            "Check permission to fetch the component.",
            "Allowing a dependency and sharing its repository are separate."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations"
    },
    {
        "id": "admin-158",
        "domain": "Manage GitHub Actions",
        "prompt": "A job only checks out repository files. Which GITHUB_TOKEN permission is appropriate for that operation?",
        "choices": [
            "contents: write",
            "packages: write",
            "contents: read",
            "issues: read"
        ],
        "correct": 2,
        "explanations": [
            "Checkout does not require repository writes.",
            "Package writes do not authorize checkout.",
            "Reading repository contents supports checkout.",
            "Issue access is unrelated to reading files."
        ],
        "concept": "Least-privilege job tokens",
        "hints": [
            "Identify the resource being read.",
            "Grant only what the operation needs."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "admin-159",
        "domain": "Manage GitHub Actions",
        "prompt": "Which authentication approach avoids storing a long-lived cloud access key as an Actions secret?",
        "choices": [
            "A repository variable holding the key",
            "OIDC federation with the cloud provider",
            "A key embedded in a runner label",
            "A cached credentials file shared across runs"
        ],
        "correct": 1,
        "explanations": [
            "Variables do not eliminate long-lived credentials.",
            "The provider issues short-lived credentials after validating identity.",
            "Labels are not a credential store.",
            "Caching credentials preserves and exposes them."
        ],
        "concept": "Federated workflow authentication",
        "hints": [
            "Consider credential lifetime and issuance.",
            "Identity verification can replace a stored access key."
        ],
        "source": "https://docs.github.com/en/actions/concepts/security/openid-connect"
    },
    {
        "id": "admin-160",
        "domain": "Manage GitHub Actions",
        "prompt": "Which job permission allows requesting a GitHub OIDC token for a third-party vault?",
        "choices": [
            "id-token: write",
            "contents: write",
            "secrets: read",
            "deployments: write"
        ],
        "correct": 0,
        "explanations": [
            "It allows fetching an OIDC token, not writing cloud resources.",
            "Repository content writes do not enable OIDC.",
            "This is not a GITHUB_TOKEN permission key.",
            "Deployment writes do not enable OIDC."
        ],
        "concept": "OIDC request permission",
        "hints": [
            "Separate token issuance from resource authorization.",
            "The vault still evaluates its own trust policy."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-hashicorp-vault"
    },
    {
        "id": "admin-161",
        "domain": "Manage GitHub Actions",
        "prompt": "What should a Vault administrator restrict when trusting GitHub Actions OIDC?",
        "choices": [
            "Only the workflow's display name",
            "Only the runner's temporary hostname",
            "Only the order of workflow steps",
            "Accepted identity claims and readable secret paths"
        ],
        "correct": 3,
        "explanations": [
            "A display name alone is not a robust trust boundary.",
            "Temporary hostnames do not bind workflow identity.",
            "Step ordering does not authorize vault access.",
            "Claims bind identity; vault policies limit secret access."
        ],
        "concept": "Vault trust and authorization",
        "hints": [
            "Authentication and authorization need separate limits.",
            "Bind access to the intended workload."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-hashicorp-vault"
    },
    {
        "id": "admin-162",
        "domain": "Manage GitHub Actions",
        "prompt": "An organization secret should be available to only three private repositories on GitHub Enterprise Cloud. Which access policy fits?",
        "choices": [
            "All repositories",
            "Private repositories",
            "Selected repositories",
            "Repositories with matching runner labels"
        ],
        "correct": 2,
        "explanations": [
            "This also grants other repositories access.",
            "This grants every eligible private repository access.",
            "An explicit repository selection limits access.",
            "Runner labels do not scope organization secrets."
        ],
        "concept": "Organization secret access",
        "hints": [
            "Scope credentials independently of runner routing.",
            "Choose the smallest repository audience."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
    },
    {
        "id": "admin-163",
        "domain": "Manage GitHub Actions",
        "prompt": "DEPLOY_KEY exists at organization, repository, and production environment scope. Which value does a job referencing production receive?",
        "choices": [
            "The organization value",
            "The environment value",
            "The repository value",
            "The most recently created value"
        ],
        "correct": 1,
        "explanations": [
            "A lower applicable scope overrides it.",
            "Environment secrets take precedence over repository and organization secrets.",
            "The environment overrides this value.",
            "Creation order does not determine precedence."
        ],
        "concept": "Secret precedence",
        "hints": [
            "Find the applicable scopes for this job.",
            "Precedence is structural, not chronological."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secrets"
    },
    {
        "id": "admin-164",
        "domain": "Manage GitHub Actions",
        "prompt": "In a private GitHub Enterprise Cloud repository, a production job must wait for human approval before receiving deployment secrets. Which mechanism fits?",
        "choices": [
            "Environment secrets with required reviewers",
            "Repository secrets with longer names",
            "Organization secrets restricted to private repositories",
            "Masked variables in a workflow template"
        ],
        "correct": 0,
        "explanations": [
            "Environment protection can gate access to its secrets.",
            "Names do not create an approval gate.",
            "Repository visibility does not provide per-job approval.",
            "Masking does not control job approval."
        ],
        "concept": "Gating deployment credentials",
        "hints": [
            "Choose a scope with deployment protection.",
            "Storage and release of credentials are different controls."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "admin-165",
        "domain": "Manage GitHub Actions",
        "prompt": "With default fork settings, why does a pull_request workflow from a public fork lack the base repository's deployment secret?",
        "choices": [
            "Secrets require a larger runner",
            "Fork authors must rename the secret",
            "Public repositories cannot store secrets",
            "Fork pull requests do not receive these secrets by default"
        ],
        "correct": 3,
        "explanations": [
            "Runner size does not grant secret access.",
            "Renaming does not change the trust boundary.",
            "Public repositories can store Actions secrets.",
            "Withholding secrets protects against untrusted fork code."
        ],
        "concept": "Fork workflow secret boundaries",
        "hints": [
            "Consider the source of the submitted code.",
            "A triggered run does not imply credential access."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
    },
    {
        "id": "admin-166",
        "domain": "Manage GitHub Actions",
        "prompt": "What does an expression referencing an unavailable Actions secret evaluate to?",
        "choices": [
            "The secret's name",
            "The organization owner's token",
            "An empty string",
            "The previous run's value"
        ],
        "correct": 2,
        "explanations": [
            "GitHub does not substitute the name.",
            "There is no owner-token fallback.",
            "An unset secret reference returns an empty string.",
            "Previous values are not a fallback."
        ],
        "concept": "Unavailable secret behavior",
        "hints": [
            "Missing credentials need explicit validation.",
            "Do not assume automatic fallback values."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
    },
    {
        "id": "admin-167",
        "domain": "Manage GitHub Actions",
        "prompt": "A workflow transforms a secret into a new sensitive value. What should it do before logging could expose that value?",
        "choices": [
            "Rely on automatic masking of the original secret",
            "Register the transformed value for masking",
            "Mask only after the transformed value first appears in the log",
            "Rely on disabling debug logging to hide all sensitive output"
        ],
        "correct": 1,
        "explanations": [
            "Redaction of transformed values is not guaranteed.",
            "Sensitive derived values need their own masking registration.",
            "Masking must be in place before potential disclosure.",
            "Sensitive output can appear in ordinary logs too."
        ],
        "concept": "Limits of automatic masking",
        "hints": [
            "Transformations change the text matched by redaction.",
            "Prevent disclosure rather than testing with a real secret."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "admin-168",
        "domain": "Manage GitHub Actions",
        "prompt": "An Actions log contains an unredacted cloud credential. Which response addresses both exposure and continued access?",
        "choices": [
            "Delete the exposed log and rotate the credential",
            "Rename the secret and retain the same credential",
            "Rerun the job with debug logging disabled",
            "Reduce artifact retention without changing the credential"
        ],
        "correct": 0,
        "explanations": [
            "Log removal limits exposure; rotation invalidates the leaked credential.",
            "Renaming does not invalidate a credential.",
            "A rerun does not revoke the exposed credential.",
            "Artifact retention does not revoke credentials or remove this log."
        ],
        "concept": "Responding to workflow credential exposure",
        "hints": [
            "Consider who may already possess the disclosed value.",
            "How long could that value remain usable?"
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "admin-169",
        "domain": "Manage GitHub Actions",
        "prompt": "Using GitHub CLI in a repository, which command creates or updates the production environment's API_KEY secret?",
        "choices": [
            "gh variable set API_KEY --env production",
            "gh secret set API_KEY --org production",
            "gh secret set API_KEY --repo production",
            "gh secret set API_KEY --env production"
        ],
        "correct": 3,
        "explanations": [
            "This stores a variable, not an encrypted secret.",
            "This targets an organization named production.",
            "This targets a repository, not an environment.",
            "The --env flag selects the environment secret scope."
        ],
        "concept": "CLI secret scope selection",
        "hints": [
            "Distinguish a variable from a secret.",
            "The target is inside a repository."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets"
    },
    {
        "id": "admin-170",
        "domain": "Manage GitHub Actions",
        "prompt": "Which runner type gives an administrator direct control over physical hardware and installed operating-system software?",
        "choices": [
            "A standard GitHub-hosted runner",
            "A GitHub-hosted larger runner",
            "A self-hosted runner",
            "A GitHub-hosted runner using a custom image"
        ],
        "correct": 2,
        "explanations": [
            "GitHub manages the underlying hosted machine.",
            "More hosted resources do not transfer physical hardware control.",
            "The customer deploys and administers the machine.",
            "A custom image does not transfer physical hardware administration."
        ],
        "concept": "Runner hosting responsibilities",
        "hints": [
            "Distinguish machine ownership from resource size.",
            "Control brings maintenance responsibilities."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
    },
    {
        "id": "admin-171",
        "domain": "Manage GitHub Actions",
        "prompt": "A self-hosted runner application updates automatically. Who remains responsible for patching its host operating system?",
        "choices": [
            "GitHub's hosted-runner image team",
            "The administrator of the self-hosted machine",
            "The maintainer of the checkout action",
            "The repository's dependency update service"
        ],
        "correct": 1,
        "explanations": [
            "The hosted-image team does not administer this machine.",
            "Runner application updates do not patch the host OS.",
            "An action maintainer does not manage the host.",
            "Dependency updates do not administer the host OS."
        ],
        "concept": "Runner application versus operating-system updates",
        "hints": [
            "Identify the component being updated.",
            "Hosting ownership determines OS maintenance."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
    },
    {
        "id": "admin-172",
        "domain": "Manage GitHub Actions",
        "prompt": "An organization owner needs to restrict a self-hosted runner pool to selected repositories. Which feature provides the access boundary?",
        "choices": [
            "Runner groups",
            "Runner display names",
            "Workflow run names",
            "Job output names"
        ],
        "correct": 0,
        "explanations": [
            "Groups have repository access policies.",
            "Names identify runners but do not grant access.",
            "Run names are descriptive metadata.",
            "Outputs pass data rather than control runner access."
        ],
        "concept": "Runner group authorization",
        "hints": [
            "Routing and authorization are separate concerns.",
            "Look for a policy-bearing collection of runners."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
    },
    {
        "id": "admin-173",
        "domain": "Manage GitHub Actions",
        "prompt": "Which workflow key selects a runner using labels such as self-hosted and linux?",
        "choices": [
            "needs",
            "environment",
            "permissions",
            "runs-on"
        ],
        "correct": 3,
        "explanations": [
            "needs declares job dependencies.",
            "environment selects a deployment environment.",
            "permissions scopes the job token.",
            "runs-on selects matching runner capabilities."
        ],
        "concept": "Runner label selection",
        "hints": [
            "Identify the job's execution platform.",
            "Do not confuse deployment scope with machine selection."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-174",
        "domain": "Manage GitHub Actions",
        "prompt": "A non-ARC job specifies runs-on: [self-hosted, linux, gpu]. Which runner matches?",
        "choices": [
            "Any runner with at least one listed label",
            "Any Linux runner, regardless of its other labels",
            "An accessible runner with all three labels",
            "Any runner in a group named gpu"
        ],
        "correct": 2,
        "explanations": [
            "The label list is not an OR condition.",
            "The other requested labels must also match.",
            "All requested labels must match an accessible runner.",
            "A group name does not substitute for matching labels."
        ],
        "concept": "Combining runner labels",
        "hints": [
            "Determine whether the constraints are cumulative.",
            "Group access still applies to matching machines."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-175",
        "domain": "Manage GitHub Actions",
        "prompt": "A self-hosted runner is registered directly to repository alpha. Which repositories can schedule jobs on that registration?",
        "choices": [
            "Every repository owned by alpha's organization",
            "Only repository alpha",
            "Every private repository in the enterprise",
            "Any repository sharing alpha's runner labels"
        ],
        "correct": 1,
        "explanations": [
            "Repository registrations are not organization-wide.",
            "Repository-level runners are dedicated to that repository.",
            "Enterprise sharing requires a different registration scope.",
            "Matching labels do not grant cross-repository access."
        ],
        "concept": "Runner registration scope",
        "hints": [
            "Locate where the runner was registered.",
            "Scope limits access before labels select a machine."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
    },
    {
        "id": "admin-176",
        "domain": "Manage GitHub Actions",
        "prompt": "What happens when a runner is registered to an organization without specifying a runner group?",
        "choices": [
            "It enters the default runner group",
            "It creates a group named after its hostname",
            "It becomes available to every enterprise organization",
            "Its registration fails until a custom group exists"
        ],
        "correct": 0,
        "explanations": [
            "Unspecified groups default to the organization's default group.",
            "Hostnames do not automatically create groups.",
            "Organization registration does not grant enterprise-wide access.",
            "A custom group is not required."
        ],
        "concept": "Default runner group placement",
        "hints": [
            "Consider the organization's existing group structure.",
            "Registration defaults do not expand organizational scope."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
    },
    {
        "id": "admin-177",
        "domain": "Manage GitHub Actions",
        "prompt": "Which self-hosted configuration supports Docker container actions and service containers?",
        "choices": [
            "Windows with Docker installed",
            "macOS with Docker installed",
            "Linux with Docker installed",
            "Linux with only a Git client installed"
        ],
        "correct": 2,
        "explanations": [
            "GitHub requires a Linux host for these jobs.",
            "A macOS host does not meet this runner requirement.",
            "These workflows require Linux and installed Docker.",
            "A Git client does not supply the container runtime."
        ],
        "concept": "Container job host requirements",
        "hints": [
            "The workflow platform has host requirements.",
            "A container runtime and a supported OS are both needed."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-178",
        "domain": "Manage GitHub Actions",
        "prompt": "How many jobs does GitHub assign to a self-hosted runner registered with --ephemeral?",
        "choices": [
            "As many as its CPU count",
            "All jobs in one workflow run",
            "Jobs until a nightly cleanup",
            "One job before deregistration"
        ],
        "correct": 3,
        "explanations": [
            "CPU count does not determine ephemeral lifetime.",
            "A workflow run can contain multiple jobs.",
            "Deregistration is not scheduled nightly.",
            "GitHub deregisters the runner after one processed job."
        ],
        "concept": "Ephemeral runner lifetime",
        "hints": [
            "The isolation unit is a job, not a workflow.",
            "Registration lifecycle differs from machine deletion."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-179",
        "domain": "Manage GitHub Actions",
        "prompt": "After an ephemeral self-hosted runner deregisters, what ensures its workspace cannot contaminate the next machine?",
        "choices": [
            "Automation that destroys or wipes the host",
            "Renaming the runner's registration",
            "Reusing the same disk under a new runner label",
            "Moving the runner into the default group"
        ],
        "correct": 0,
        "explanations": [
            "Host cleanup remains the operator's responsibility.",
            "A new name does not erase disk contents.",
            "A label change does not clean the disk.",
            "Group placement does not remove local data."
        ],
        "concept": "Ephemeral infrastructure cleanup",
        "hints": [
            "Deregistration is a GitHub-side operation.",
            "Consider the state left on the host."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-180",
        "domain": "Manage GitHub Actions",
        "prompt": "Which logging practice preserves troubleshooting evidence when ephemeral runner hosts are destroyed?",
        "choices": [
            "Keep logs only in the runner installation directory",
            "Increase the workflow's displayed run number",
            "Forward runner logs to external storage",
            "Store logs only in the destroyed host's shell history"
        ],
        "correct": 2,
        "explanations": [
            "Host destruction removes these local logs.",
            "Run numbers do not preserve application logs.",
            "External preservation survives host destruction.",
            "Local shell history is neither durable nor sufficient."
        ],
        "concept": "Ephemeral runner observability",
        "hints": [
            "Evidence must outlive the resource.",
            "Workflow logs and runner application logs differ."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-181",
        "domain": "Manage GitHub Actions",
        "prompt": "A runner image is registered with --disableupdate. What maintenance obligation remains?",
        "choices": [
            "Update only when jobs request newly introduced features",
            "Maintain runner versions within GitHub's update requirements",
            "Keep one runner version for the entire image's operating-system lifecycle",
            "Apply host OS patches without replacing the runner binary"
        ],
        "correct": 1,
        "explanations": [
            "Runner update requirements apply beyond new-feature use.",
            "Disabling automatic updates transfers update scheduling to the operator.",
            "The OS lifecycle does not replace runner update requirements.",
            "OS patches do not replace runner application updates."
        ],
        "concept": "Manually maintained runner versions",
        "hints": [
            "Disabling automation does not remove the requirement.",
            "Distinguish application updates from host updates."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-182",
        "domain": "Manage GitHub Actions",
        "prompt": "A self-hosted runner appears Offline. Which condition can directly explain that state?",
        "choices": [
            "It has no job waiting in the queue",
            "Its last completed job failed a test",
            "Its group contains only one repository",
            "Its runner application cannot communicate with GitHub"
        ],
        "correct": 3,
        "explanations": [
            "A connected runner without work is Idle.",
            "A test failure does not itself mean disconnected.",
            "Group size does not define connectivity.",
            "Offline indicates the runner is not connected."
        ],
        "concept": "Interpreting runner status",
        "hints": [
            "Status describes connectivity or execution state.",
            "Separate a failed job from a disconnected runner."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "admin-183",
        "domain": "Manage GitHub Actions",
        "prompt": "On a Linux self-hosted runner, which command checks connectivity to required GitHub services using an authorized diagnostic token?",
        "choices": [
            "./config.sh --check --url URL --pat TOKEN",
            "./config.sh --ephemeral --url URL --token TOKEN",
            "./run.sh --labels network-check",
            "./config.sh --remove --token TOKEN"
        ],
        "correct": 0,
        "explanations": [
            "The --check mode tests required service connectivity.",
            "This registers an ephemeral runner.",
            "This is not the documented connectivity check.",
            "This removes a registration rather than checking connectivity."
        ],
        "concept": "Runner connectivity diagnostics",
        "hints": [
            "Use the runner's diagnostic mode.",
            "Registration tokens and diagnostic credentials have different purposes."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "admin-184",
        "domain": "Manage GitHub Actions",
        "prompt": "Which files contain detailed per-job execution logs in a self-hosted runner installation?",
        "choices": [
            "_diag/Runner_*.log",
            ".git/logs/HEAD",
            "_diag/Worker_*.log",
            ".github/workflows/*.yml"
        ],
        "correct": 2,
        "explanations": [
            "Runner_ files describe the runner application.",
            "Git reflogs are not runner execution logs.",
            "Worker_ files contain each processed job's detailed logs.",
            "These are workflow definitions, not execution logs."
        ],
        "concept": "Runner application and worker logs",
        "hints": [
            "Identify whether the issue concerns a process or a job.",
            "The diagnostic directory contains different log types."
        ],
        "source": "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/monitor-and-troubleshoot"
    },
    {
        "id": "admin-185",
        "domain": "Manage GitHub Actions",
        "prompt": "A job remains queued although several self-hosted runners are Idle. What should the administrator verify first?",
        "choices": [
            "Whether completed jobs have expired artifact downloads",
            "Whether runner access, labels, and group match",
            "Whether job steps need newer versions of their build dependencies",
            "Whether the build needs more memory after it starts executing"
        ],
        "correct": 1,
        "explanations": [
            "Artifact expiration does not explain an unassigned job.",
            "Idle runners must still satisfy routing and access constraints.",
            "Step dependencies matter after a runner receives the job.",
            "Runtime memory does not explain this routing mismatch."
        ],
        "concept": "Diagnosing runner queue mismatches",
        "hints": [
            "Idle capacity is not necessarily eligible capacity.",
            "Compare the job requirements with runner access."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-186",
        "domain": "Manage GitHub Actions",
        "prompt": "What connection does a self-hosted runner need to receive jobs from GitHub Actions?",
        "choices": [
            "Outbound HTTPS to required GitHub services",
            "Inbound HTTPS initiated by GitHub to the runner",
            "An inbound SSH tunnel that GitHub opens for each job",
            "Outbound access only to the repository's Git clone URL"
        ],
        "correct": 0,
        "explanations": [
            "The runner communicates with GitHub to obtain jobs.",
            "GitHub does not require this inbound job-delivery listener.",
            "Jobs are not delivered through inbound SSH tunnels.",
            "Job delivery requires more than Git repository access."
        ],
        "concept": "Self-hosted runner network direction",
        "hints": [
            "Determine which side initiates communication.",
            "Administrative login and job delivery are different channels."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-187",
        "domain": "Manage GitHub Actions",
        "prompt": "Which GitHub-hosted runner option supports a static IP range for a downstream firewall allowlist?",
        "choices": [
            "Standard runners selected by ubuntu-latest",
            "macOS larger runners",
            "Linux or Windows larger runners",
            "Any runner selected by a workflow template"
        ],
        "correct": 2,
        "explanations": [
            "The standard label does not provide dedicated static IPs.",
            "This capability is not supported on macOS larger runners.",
            "Linux and Windows larger runners support static IP addresses.",
            "Templates do not supply a networking capability."
        ],
        "concept": "Hosted runner static addressing",
        "hints": [
            "Separate hosted runner classes and operating systems.",
            "A routing label is not an IP allocation."
        ],
        "source": "https://docs.github.com/en/actions/concepts/runners/larger-runners"
    },
    {
        "id": "admin-188",
        "domain": "Manage GitHub Actions",
        "prompt": "What connects eligible GitHub-hosted runners to an organization's Azure virtual network?",
        "choices": [
            "A workflow VPN step without a GitHub network configuration",
            "Azure resources plus a GitHub private network configuration",
            "An organization IP allowlist containing the Azure subnet range",
            "A cloud login action authorized to read the private application's secrets"
        ],
        "correct": 1,
        "explanations": [
            "An ad hoc VPN is not the Azure private networking integration.",
            "Both Azure resources and GitHub configuration are required.",
            "An access allowlist does not attach a runner to a VNET.",
            "Cloud authentication does not create network attachment."
        ],
        "concept": "Azure private networking setup",
        "hints": [
            "The integration spans two control planes.",
            "Configuration values alone do not provision connectivity."
        ],
        "source": "https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization"
    },
    {
        "id": "admin-189",
        "domain": "Manage GitHub Actions",
        "prompt": "For Azure private networking with GitHub-hosted runners, which outbound filtering approach does current documentation recommend?",
        "choices": [
            "Freeze the IP list copied during initial setup",
            "Allow only the private application's DNS name",
            "Block GitHub domains after runner registration",
            "Maintain DNS/domain controls using GitHub's published meta data"
        ],
        "correct": 3,
        "explanations": [
            "Static copied IP lists can become stale.",
            "The runner also needs GitHub service connectivity.",
            "Registration does not eliminate ongoing GitHub communication.",
            "Published domain lists track changing service requirements."
        ],
        "concept": "Maintaining runner network egress",
        "hints": [
            "Network dependencies change after deployment.",
            "Private application access is not the only required traffic."
        ],
        "source": "https://docs.github.com/en/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization"
    },
    {
        "id": "admin-190",
        "domain": "Manage GitHub Actions",
        "prompt": "An Actions job uses GITHUB_TOKEN to access a private organization repository protected by a GitHub Enterprise Cloud IP allowlist. What must its network path satisfy?",
        "choices": [
            "The runner's source IP must be allowed",
            "A valid GITHUB_TOKEN permits any runner source IP",
            "Only the triggering user's browser IP must be allowed",
            "An approved cloud login bypasses GitHub's source-IP check"
        ],
        "correct": 0,
        "explanations": [
            "The allowlist applies to this authenticated access.",
            "A valid token does not bypass this network restriction.",
            "The API request's source IP also matters.",
            "Cloud authentication does not bypass GitHub's allowlist."
        ],
        "concept": "Runner access under IP allowlists",
        "hints": [
            "Authentication and network permission are separate checks.",
            "Evaluate the address seen by GitHub."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization"
    },
    {
        "id": "admin-191",
        "domain": "Manage GitHub Actions",
        "prompt": "A privileged workflow_run job consumes an artifact from a fork's build. How should the artifact be treated?",
        "choices": [
            "As trusted because GitHub stores it",
            "As trusted if the build concluded successfully",
            "As untrusted input requiring validation",
            "As safe to execute after renaming its extension"
        ],
        "correct": 2,
        "explanations": [
            "Storage location does not establish producer trust.",
            "Successful execution does not authenticate artifact contents.",
            "A privileged consumer must validate lower-trust inputs.",
            "Renaming does not remove malicious content."
        ],
        "concept": "Trust across workflow_run boundaries",
        "hints": [
            "Track who could influence the producer.",
            "A status result does not certify data safety."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "admin-192",
        "domain": "Manage GitHub Actions",
        "prompt": "Which pattern should an administrator reject in a privileged pull_request_target workflow?",
        "choices": [
            "Labeling the pull request using trusted code",
            "Checking out and executing the fork's proposed code",
            "Reading pull-request metadata without executing it",
            "Limiting the job token to required permissions"
        ],
        "correct": 1,
        "explanations": [
            "Trusted metadata operations can fit this event.",
            "Untrusted code would execute in a privileged context.",
            "Reading metadata is different from executing submitted code.",
            "Least privilege reduces rather than introduces risk."
        ],
        "concept": "pull_request_target trust boundary",
        "hints": [
            "Identify which code revision runs.",
            "Compare the code's provenance with the execution privileges."
        ],
        "source": "https://docs.github.com/en/actions/reference/security/secure-use"
    },
    {
        "id": "admin-193",
        "domain": "Manage GitHub Actions",
        "prompt": "A completed build must retain a test report for later download. Which storage mechanism fits?",
        "choices": [
            "A dependency cache",
            "A repository Actions secret",
            "A runner-local workspace directory",
            "A workflow artifact"
        ],
        "correct": 3,
        "explanations": [
            "Caches optimize regeneration rather than preserve run deliverables.",
            "Secrets store sensitive values, not downloadable run reports.",
            "Local workspace files are not retained as GitHub run downloads.",
            "Artifacts preserve files produced by a workflow run."
        ],
        "concept": "Artifacts for run deliverables",
        "hints": [
            "Distinguish a result from a reusable dependency.",
            "The consumer needs the file after the job ends."
        ],
        "source": "https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching"
    },
    {
        "id": "admin-194",
        "domain": "Manage GitHub Actions",
        "prompt": "What should a dependency cache contain to speed up repeat builds?",
        "choices": [
            "Regenerable downloaded dependencies",
            "Signed release packages retained as long-term audit records",
            "Production credentials retrieved for later deployments",
            "Test reports retained for later manual download"
        ],
        "correct": 0,
        "explanations": [
            "Caches accelerate reuse; jobs should tolerate cache misses.",
            "Long-term records need durable retention, not disposable caches.",
            "Secrets must not be stored in caches.",
            "Run deliverables belong in artifacts, not dependency caches."
        ],
        "concept": "Safe dependency caching",
        "hints": [
            "Plan for cache misses.",
            "Reusable acceleration is different from durable or secret storage."
        ],
        "source": "https://docs.github.com/en/actions/concepts/workflows-and-actions/dependency-caching"
    },
    {
        "id": "admin-195",
        "domain": "Manage GitHub Actions",
        "prompt": "An enterprise disables creation of repository-level self-hosted runners. Which runner access may remain available?",
        "choices": [
            "New repository registrations created by administrators",
            "Repository registrations created through workflow YAML",
            "Organization or enterprise runners shared with the repository",
            "Repository registrations created using a verified action"
        ],
        "correct": 2,
        "explanations": [
            "Repository administrators cannot bypass the restriction.",
            "YAML does not bypass the registration policy.",
            "The restriction does not disable higher-scope shared runners.",
            "A verified action does not override enterprise policy."
        ],
        "concept": "Restricting runner registration scope",
        "hints": [
            "A creation restriction has a defined scope.",
            "Shared capacity and repository-owned registration differ."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise"
    },
    {
        "id": "admin-196",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which enterprise audit-log qualifier finds events initiated by account alex rather than events affecting alex?",
        "choices": [
            "user:alex",
            "actor:alex",
            "author:alex",
            "owner:alex"
        ],
        "correct": 1,
        "explanations": [
            "user identifies the affected user.",
            "actor identifies the account initiating the action.",
            "author is not this audit-log qualifier.",
            "owner is not this audit-log qualifier."
        ],
        "concept": "Audit initiator versus affected user",
        "hints": [
            "Separate who acted from who was affected.",
            "Use audit-specific search qualifiers."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise"
    },
    {
        "id": "admin-197",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which enterprise audit-log query selects repository creation events on or after October 1, 2026?",
        "choices": [
            "event:repo.create after:2026-10-01",
            "action:repo.create updated:>=2026-10-01",
            "type:repo.create date:2026-10-01",
            "action:repo.create created:>=2026-10-01"
        ],
        "correct": 3,
        "explanations": [
            "event and after are not these documented qualifiers.",
            "The audit timestamp qualifier is created, not updated.",
            "type and date are not these documented qualifiers.",
            "action selects the event; created sets the time boundary."
        ],
        "concept": "Audit event and time filters",
        "hints": [
            "Combine the action and occurrence time.",
            "Repository search syntax is not interchangeable with audit syntax."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise"
    },
    {
        "id": "admin-198",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "For GitHub Enterprise Cloud, how long are non-Git enterprise audit events retained in GitHub's audit log?",
        "choices": [
            "180 days",
            "7 days",
            "30 days",
            "Indefinitely"
        ],
        "correct": 0,
        "explanations": [
            "The Cloud enterprise audit log retains these events for 180 days.",
            "Seven days applies to Git events.",
            "This is not the documented Cloud audit retention.",
            "Native retention is finite; external preservation is separate."
        ],
        "concept": "Cloud audit retention",
        "hints": [
            "Identify the deployment and event category.",
            "A default display window differs from retention."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise"
    },
    {
        "id": "admin-199",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which retention period applies specifically to Git events in a GitHub Enterprise Cloud enterprise audit log?",
        "choices": [
            "180 days",
            "90 days",
            "7 days",
            "The repository's artifact retention period"
        ],
        "correct": 2,
        "explanations": [
            "This is the broader audit-event retention, not Git-event retention.",
            "The default UI window is not Git-event retention.",
            "Cloud audit logs retain Git events for seven days.",
            "Artifact retention is a separate setting."
        ],
        "concept": "Short-lived Git audit events",
        "hints": [
            "Not every event type has the same lifetime.",
            "Plan collection before data expires."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise"
    },
    {
        "id": "admin-200",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An enterprise needs to analyze audit events beyond GitHub Enterprise Cloud's native retention window. Which collection strategy fits?",
        "choices": [
            "Expand the audit-log search to cover the required retention period",
            "Stream events to an external archive",
            "Increase repository workflow-log and artifact retention periods",
            "Download one audit export after the native retention window expires"
        ],
        "correct": 1,
        "explanations": [
            "Search ranges cannot extend server-side retention.",
            "Streaming allows an external retention policy.",
            "Workflow settings do not extend audit retention.",
            "Exporting after expiration cannot recover expired source events."
        ],
        "concept": "External audit preservation",
        "hints": [
            "Capture events before the source expires.",
            "Display settings do not create an archive."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise"
    },
    {
        "id": "admin-201",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An enterprise owner sees no events from four months ago in the default audit-log view on GitHub Enterprise Cloud. What should they try before concluding the data expired?",
        "choices": [
            "Change workflow artifact retention",
            "Create a new organization",
            "Add the account as a repository watcher",
            "Search with an explicit created date range"
        ],
        "correct": 3,
        "explanations": [
            "Artifact retention does not affect audit display.",
            "A new organization cannot restore this view.",
            "Watching repositories does not change audit filtering.",
            "The default display covers three months, while retention is longer."
        ],
        "concept": "Audit display window versus retention",
        "hints": [
            "Could the current view exclude retained data?",
            "Distinguish result visibility from source-data availability."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise"
    },
    {
        "id": "admin-202",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "A REST API response has x-ratelimit-remaining: 0. Which header tells the integration when the primary rate limit resets?",
        "choices": [
            "x-ratelimit-reset",
            "x-github-request-id",
            "content-length",
            "last-modified"
        ],
        "correct": 0,
        "explanations": [
            "It gives the reset time in UTC epoch seconds.",
            "The request ID helps correlate a request, not schedule retries.",
            "Body size does not describe rate limits.",
            "Resource modification time does not reset a rate limit."
        ],
        "concept": "Primary API limit diagnostics",
        "hints": [
            "Use rate-limit response metadata.",
            "Distinguish a reset time from a request identifier."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api"
    },
    {
        "id": "admin-203",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "A GitHub REST API rate-limit response includes retry-after: 120. What should the integration do?",
        "choices": [
            "Immediately retry with parallel requests",
            "Retry after changing the User-Agent",
            "Wait at least 120 seconds before retrying",
            "Treat the response as a repository deletion"
        ],
        "correct": 2,
        "explanations": [
            "More requests can worsen throttling.",
            "Changing User-Agent does not satisfy the delay.",
            "The header specifies the minimum retry delay in seconds.",
            "A rate-limit response does not imply deletion."
        ],
        "concept": "Respecting API retry guidance",
        "hints": [
            "Interpret the server's backoff instruction.",
            "Retries should reduce load, not multiply it."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api"
    },
    {
        "id": "admin-204",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An integration receives 404 for a private repository that its administrator confirms exists. What should be checked first?",
        "choices": [
            "Whether the repository has enough stars",
            "The integration's authentication and resource access",
            "Whether the repository has a public release",
            "The default artifact compression level"
        ],
        "correct": 1,
        "explanations": [
            "Stars do not authorize API access.",
            "GitHub can hide private resources behind 404 when access is insufficient.",
            "Releases do not grant private repository access.",
            "Compression is unrelated to API authorization."
        ],
        "concept": "Diagnosing private-resource API responses",
        "hints": [
            "A status code can avoid revealing private resource existence.",
            "Check credentials before assuming deletion."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api"
    },
    {
        "id": "admin-205",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An enterprise integration repeatedly polls for individual repository events. Which alternative can reduce unnecessary API requests?",
        "choices": [
            "Polling every repository more frequently",
            "Rotating tokens after each successful request",
            "Downloading every audit export after each event",
            "Subscribing to applicable webhooks"
        ],
        "correct": 3,
        "explanations": [
            "More frequent polling increases request volume.",
            "Token rotation does not remove redundant polling.",
            "Repeated full exports increase unnecessary collection.",
            "Webhooks notify the receiver when subscribed events occur."
        ],
        "concept": "Event-driven activity monitoring",
        "hints": [
            "Consider push notifications rather than repeated reads.",
            "Collect the events the integration actually needs."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/security-and-compliance/audit-log-for-an-enterprise"
    },
    {
        "id": "admin-206",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "How can an administrator distinguish primary from secondary REST API throttling when both may return 403 or 429?",
        "choices": [
            "Inspect the response message and rate-limit headers",
            "Treat every 403 response as an expired token",
            "Treat every 429 response as a missing repository",
            "Count only the number of open pull requests"
        ],
        "correct": 0,
        "explanations": [
            "The message and headers explain the limiting condition.",
            "403 can represent throttling or other failures.",
            "429 indicates excessive requests, not missing repositories.",
            "Pull-request counts do not classify throttling."
        ],
        "concept": "Classifying API throttling",
        "hints": [
            "HTTP status alone may be insufficient.",
            "Use the diagnostic metadata returned with the error."
        ],
        "source": "https://docs.github.com/en/rest/using-the-rest-api/troubleshooting-the-rest-api"
    },
    {
        "id": "admin-207",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "On GitHub Enterprise Server 3.19, which data package is primarily a plaintext overview of instance settings and environment?",
        "choices": [
            "An extended support bundle",
            "A repository source archive",
            "A diagnostic file",
            "A workflow artifact archive"
        ],
        "correct": 2,
        "explanations": [
            "An extended bundle also includes sanitized logs.",
            "A source archive does not describe instance settings.",
            "Diagnostics summarize settings, versions, and environment.",
            "Workflow artifacts are run outputs, not instance diagnostics."
        ],
        "concept": "Classifying GHES diagnostic data",
        "hints": [
            "Distinguish configuration overview from log archive.",
            "Choose data at the instance scope."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-208",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "What does a GitHub Enterprise Server 3.19 support bundle add beyond a diagnostic file?",
        "choices": [
            "A complete clone of every private repository",
            "Sanitized instance log files",
            "A replacement Enterprise license",
            "A backup of every user's private SSH key"
        ],
        "correct": 1,
        "explanations": [
            "Support bundles are not full repository backups.",
            "A support bundle combines diagnostics with sanitized logs.",
            "Bundles do not issue licenses.",
            "Private SSH keys are not a support-bundle deliverable."
        ],
        "concept": "GHES support bundle contents",
        "hints": [
            "Troubleshooting needs both context and events.",
            "A support bundle is not a backup or credential export."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-209",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "A GHES 3.19 administrator lacks SSH access but can sign in to the Management Console. Where can they generate instance diagnostics in the English UI?",
        "choices": [
            "Repository > Actions > Artifacts",
            "Organization > People > Members",
            "Enterprise > Billing > Usage",
            "Management Console > Support > Download diagnostics info"
        ],
        "correct": 3,
        "explanations": [
            "Repository artifacts are not instance diagnostics.",
            "Membership screens do not generate diagnostics.",
            "Billing usage is not an instance diagnostic file.",
            "The Management Console provides this diagnostic download."
        ],
        "concept": "Generating GHES diagnostics without SSH",
        "hints": [
            "Use the instance administration interface.",
            "Diagnostic collection is not a repository operation."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-210",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which evidence is most useful in a GitHub Support ticket for a reproducible enterprise workflow failure?",
        "choices": [
            "Reproduction steps, affected URLs, errors, and sanitized logs",
            "A list of installed integrations without the failing request or run",
            "A billing summary and runner inventory without the failure timestamps",
            "A general architecture diagram without the observed or expected behavior"
        ],
        "correct": 0,
        "explanations": [
            "These details help Support locate and reproduce the failure.",
            "An inventory alone does not reproduce the failure.",
            "Billing and inventory omit the failure evidence.",
            "Architecture alone does not define the symptom."
        ],
        "concept": "Actionable support escalation",
        "hints": [
            "Provide enough context to reproduce the symptom.",
            "Useful evidence should not disclose credentials."
        ],
        "source": "https://docs.github.com/en/support/contacting-github-support/creating-a-support-ticket"
    },
    {
        "id": "admin-211",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "GitHub Support needs a GHES 3.19 support bundle but cannot access the customer's environment. Who should collect it?",
        "choices": [
            "GitHub Support through automatic access to the customer's VM",
            "A repository collaborator through the repository's Actions tab",
            "An instance administrator through supported instance tools",
            "An enterprise member through their personal account's security log"
        ],
        "correct": 2,
        "explanations": [
            "Support does not automatically access the customer environment.",
            "Repository collaboration does not grant instance diagnostic access.",
            "Instance administrators can generate and share requested bundles.",
            "A personal security log is not an instance support bundle."
        ],
        "concept": "Administrator and Support responsibilities",
        "hints": [
            "Collection requires access to the customer-managed instance.",
            "Support investigates supplied evidence rather than assuming environment access."
        ],
        "source": "https://docs.github.com/en/enterprise-server@3.19/support/contacting-github-support/providing-data-to-github-support"
    },
    {
        "id": "admin-212",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An enterprise dormant-user report flags an account. How should the administrator use this evidence?",
        "choices": [
            "Assume no work occurred in private repositories during the period",
            "Review measured activity and business need",
            "Conclude that no token or SSH key was used during the period",
            "Remove its assigned license immediately without checking business needs"
        ],
        "correct": 1,
        "explanations": [
            "The report excludes some private-repository work.",
            "Review coverage and business need before reclaiming access.",
            "Token and SSH activity are not all counted as active here.",
            "Dormancy alone does not establish that access is unnecessary."
        ],
        "concept": "Interpreting dormant-user evidence",
        "hints": [
            "A metric has a documented scope.",
            "Treat a flag as a review signal, not a complete verdict."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users"
    },
    {
        "id": "admin-213",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which activity can be missed by GitHub Enterprise Cloud's documented dormant-user activity definition?",
        "choices": [
            "Git operations on private repositories",
            "Creating a pull request in the enterprise",
            "Commenting on a pull request in the enterprise",
            "Publishing a release in the enterprise"
        ],
        "correct": 0,
        "explanations": [
            "Private-repository Git operations are not counted as active here.",
            "Creating pull requests is a listed active behavior.",
            "Pull-request comments are a listed active behavior.",
            "Publishing releases is a listed active behavior."
        ],
        "concept": "Dormancy metric coverage",
        "hints": [
            "An activity report may exclude valid work.",
            "Check the precise definition before interpreting absence."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users"
    },
    {
        "id": "admin-214",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "A team member made no commits but reviewed pull requests during the reporting period. How should an administrator assess activity?",
        "choices": [
            "Classify the member as inactive from commit count alone",
            "Reassign the member's license without checking other activity",
            "Use repository stars as the sole productivity measure",
            "Include relevant review and collaboration activity"
        ],
        "correct": 3,
        "explanations": [
            "Commits alone do not capture collaboration.",
            "License decisions need broader context.",
            "Stars are not a complete individual activity measure.",
            "Pull-request review activity is meaningful recorded participation."
        ],
        "concept": "Assessing adoption beyond commits",
        "hints": [
            "Different roles contribute in different ways.",
            "Use measures aligned with the work being performed."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users"
    },
    {
        "id": "admin-215",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Where does an enterprise owner generate a dormant-user report in the current GitHub Enterprise Cloud English UI?",
        "choices": [
            "Repository > Insights > Traffic",
            "Organization > Settings > Actions > Runners",
            "Enterprise > Compliance > Reports > Dormant Users",
            "Enterprise > Billing & Licensing > Budgets and alerts"
        ],
        "correct": 2,
        "explanations": [
            "Repository traffic is not an enterprise dormant-user report.",
            "Runner inventory does not generate this report.",
            "Compliance reports include Dormant Users.",
            "Budgets track spending rather than account dormancy."
        ],
        "concept": "Locating enterprise activity reports",
        "hints": [
            "Choose an enterprise-wide report rather than repository telemetry.",
            "Activity review and spending controls have different entry points."
        ],
        "source": "https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/managing-dormant-users"
    },
    {
        "id": "admin-216",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which billing feature attributes metered Actions spending to business units without moving their repositories?",
        "choices": [
            "Runner labels",
            "Cost centers",
            "Repository topics",
            "Environment reviewers"
        ],
        "correct": 1,
        "explanations": [
            "Labels route jobs rather than allocate billing.",
            "Cost centers associate resources with spending allocation.",
            "Topics classify repositories, not billing allocation.",
            "Reviewers gate deployments, not cost attribution."
        ],
        "concept": "Metered cost attribution",
        "hints": [
            "Separate organizational reporting from code ownership.",
            "Choose a billing grouping, not a workflow control."
        ],
        "source": "https://docs.github.com/en/billing/concepts/cost-centers"
    },
    {
        "id": "admin-217",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Before comparing quantity values across GitHub billing report rows, which fields should be checked to avoid mixing incompatible measurements?",
        "choices": [
            "sku and unit_type",
            "repository and username only",
            "workflow_path and repository only",
            "date and cost_center_name only"
        ],
        "correct": 0,
        "explanations": [
            "The SKU and unit identify what the quantity measures.",
            "Ownership does not identify the measurement unit.",
            "Workflow attribution does not define the unit.",
            "Time and allocation do not establish comparable units."
        ],
        "concept": "Interpreting metered usage units",
        "hints": [
            "A number needs a product and a unit.",
            "Compute and storage quantities are not interchangeable."
        ],
        "source": "https://docs.github.com/en/billing/reference/billing-reports"
    },
    {
        "id": "admin-218",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which GitHub billing report field represents the billable amount after discounts and included-usage adjustments?",
        "choices": [
            "quantity",
            "gross_amount",
            "discount_amount",
            "net_amount"
        ],
        "correct": 3,
        "explanations": [
            "Quantity measures units, not final charges.",
            "Gross amount is before discount subtraction.",
            "Discount amount is the reduction, not the billable total.",
            "Net amount equals gross amount minus discount amount."
        ],
        "concept": "Gross versus net metered cost",
        "hints": [
            "Distinguish usage volume from money.",
            "Apply adjustments before interpreting the billable amount."
        ],
        "source": "https://docs.github.com/en/billing/reference/billing-reports"
    },
    {
        "id": "admin-219",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Which downloadable billing report includes workflow_path for investigating which Actions workflow generated usage?",
        "choices": [
            "The summarized usage report",
            "The dormant-user report",
            "The detailed usage report",
            "The repository traffic report"
        ],
        "correct": 2,
        "explanations": [
            "Summarized reports do not include workflow_path.",
            "Dormancy reports measure defined account activity.",
            "Detailed usage reports include workflow-level attribution where applicable.",
            "Traffic reports do not attribute metered workflow charges."
        ],
        "concept": "Workflow-level billing investigation",
        "hints": [
            "Choose the report's required granularity.",
            "A summary may omit the field needed for attribution."
        ],
        "source": "https://docs.github.com/en/billing/reference/billing-reports"
    },
    {
        "id": "admin-220",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An enterprise Actions budget sends threshold alerts but has 'Stop usage when budget limit is reached' disabled. What happens when its amount is exceeded?",
        "choices": [
            "New covered Actions usage is blocked immediately",
            "Usage continues while alerts notify",
            "The budget automatically increases to match actual spending",
            "Only the repository with the highest usage is blocked"
        ],
        "correct": 1,
        "explanations": [
            "Blocking requires the stop option, not alerts alone.",
            "Without the stop option, the budget does not block usage.",
            "An alert does not automatically increase a budget.",
            "Alerts alone do not selectively block a repository."
        ],
        "concept": "Budget alerts versus enforcement",
        "hints": [
            "Notification and blocking are separate settings.",
            "Read the actual stop-use configuration."
        ],
        "source": "https://docs.github.com/en/billing/how-tos/set-up-budgets"
    },
    {
        "id": "admin-221",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An Actions product budget with stop-use enabled is exhausted, while an overlapping runner-SKU budget still has capacity. Which budget controls further covered usage?",
        "choices": [
            "The exhausted applicable stop-use budget",
            "Only the budget with the largest amount",
            "Only the most recently created budget",
            "Only the runner-SKU budget"
        ],
        "correct": 0,
        "explanations": [
            "Any exhausted applicable stop-use budget can block additional usage.",
            "A larger budget does not override another hard limit.",
            "Creation order does not determine precedence.",
            "A SKU budget does not bypass an applicable product limit."
        ],
        "concept": "Overlapping budget enforcement",
        "hints": [
            "Multiple budgets can apply to the same usage.",
            "Compare both scopes and enforcement settings."
        ],
        "source": "https://docs.github.com/en/billing/how-tos/set-up-budgets"
    },
    {
        "id": "admin-222",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "A repository repeatedly evicts useful caches at its storage limit. Which change reduces cache thrashing without increasing the storage allowance?",
        "choices": [
            "Raise the repository cache storage allowance",
            "Generate a unique cache key for every retry",
            "Cache complete workspaces including generated files",
            "Limit cache contents to frequently reused dependencies"
        ],
        "correct": 3,
        "explanations": [
            "This increases the allowance, contrary to the requirement.",
            "Unique keys create additional entries and reduce reuse.",
            "Broader paths consume more storage and can worsen eviction.",
            "Reducing low-value cache contents preserves space for useful reuse."
        ],
        "concept": "Cache storage and eviction optimization",
        "hints": [
            "Compare cache creation rate with useful reuse.",
            "Consider which stored files justify their space."
        ],
        "source": "https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching"
    },
    {
        "id": "admin-223",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "An organization pays for stopped, unused codespaces. Which policy reduces their future storage lifetime?",
        "choices": [
            "A shorter timeout before stopping idle codespaces",
            "A smaller allowed codespace machine size",
            "A shorter maximum codespace retention period",
            "Fewer regions for codespace prebuild availability"
        ],
        "correct": 2,
        "explanations": [
            "Stopping a codespace does not end its retained storage lifetime.",
            "Machine size does not set stopped-resource retention.",
            "Retention constraints limit how long stopped codespaces persist.",
            "Prebuild regions do not define these codespaces' deletion schedule."
        ],
        "concept": "Cleaning up unused development environments",
        "hints": [
            "Stopped compute can still leave stored data.",
            "Choose a lifecycle control for the billed resource."
        ],
        "source": "https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces"
    },
    {
        "id": "admin-224",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "Eligible self-hosted jobs queue during short demand spikes, while machines sit idle most of the day. Which capacity strategy fits that pattern?",
        "choices": [
            "Keep peak capacity provisioned throughout quiet periods",
            "Autoscale ephemeral runners with workload demand",
            "Serialize all jobs onto one persistent runner",
            "Increase each runner's CPU count without changing fleet size"
        ],
        "correct": 1,
        "explanations": [
            "A peak-sized fixed fleet preserves the measured idle capacity.",
            "Demand-based scaling can match capacity to peaks and quiet periods.",
            "Serializing all work aggravates peak queueing.",
            "More CPU does not directly adapt fleet capacity to demand."
        ],
        "concept": "Demand-based runner resource optimization",
        "hints": [
            "Distinguish queue pressure from job runtime.",
            "Match provisioning to the observed demand curve."
        ],
        "source": "https://docs.github.com/en/actions/reference/runners/self-hosted-runners"
    },
    {
        "id": "admin-225",
        "domain": "Monitor and optimize GitHub usage",
        "prompt": "For an authenticated billing request, which route retrieves ENTERPRISE's usage summary for September 2026?",
        "choices": [
            "/enterprises/ENTERPRISE/settings/billing/usage/summary?year=2026&month=9",
            "/enterprises/ENTERPRISE/settings/billing/usage/summary?created=2026-09",
            "/orgs/ENTERPRISE/settings/billing/usage/summary?year=2026&month=9",
            "/enterprises/ENTERPRISE/audit-log?phrase=created:2026-09"
        ],
        "correct": 0,
        "explanations": [
            "This selects the enterprise usage summary and documented time parameters.",
            "created is not the documented billing summary time filter.",
            "This targets an organization, not the enterprise.",
            "The audit-log endpoint does not return billing usage summaries."
        ],
        "concept": "Automating enterprise cost reporting",
        "hints": [
            "Match the account scope and endpoint purpose.",
            "Billing time filters differ from audit-log qualifiers."
        ],
        "source": "https://docs.github.com/en/billing/tutorials/automate-usage-reporting"
    }
];
