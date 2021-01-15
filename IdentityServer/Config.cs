using IdentityServer4;
using IdentityServer4.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace IdentityServer
{
    namespace IdentityServer
    {
        public static class Config
        {
            public static IEnumerable<IdentityResource> IdentityResources =>
                       new IdentityResource[]
                       {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                       };

            public static IEnumerable<ApiScope> ApiScopes =>
                new ApiScope[]
                {

                };

            public static IEnumerable<Client> Clients(IConfiguration configuration)
            {
                var vueClientUrl = configuration.GetValue<string>("VUE_APP_CLIENT_URL");
                return new Client[]
                {
                    new Client
                    {
                        ClientId = "vue.client",
                        ClientName = "VUE Client",
                        ClientUri = vueClientUrl,

                        AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                        RequireClientSecret = false,
                        RequireConsent = false,

                        AllowedScopes = {
                            IdentityServerConstants.StandardScopes.OpenId,
                            IdentityServerConstants.StandardScopes.Profile,
                            IdentityServerConstants.StandardScopes.Email,
                        },
                        AllowedCorsOrigins = { vueClientUrl },

                        AllowAccessTokensViaBrowser = true
                    }
                };
            }
        }
    }
}
