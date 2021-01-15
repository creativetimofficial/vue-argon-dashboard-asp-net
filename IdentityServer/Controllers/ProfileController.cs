using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer.Filters;
using IdentityServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Account
{
    [SecurityHeaders]
    public class ProfileController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ProfileController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Index([FromBody] UpdateProfileModel updateProfileModel)
        {

            var user = await _userManager.FindByNameAsync(updateProfileModel.CurrentUserName);

            if (user == null)
                return NotFound("User not found");

            user.Email = updateProfileModel.Email;
            user.UserName = updateProfileModel.NewUserName;

            var result = await _userManager.UpdateAsync(user);           

            //TODO - In a production env you would have a flow where your would confirme the password change via email/SMS

            if (result.Succeeded)
            {
                //update the name claim
                var claims = await _userManager.GetClaimsAsync(user);
                var removeClaims = claims.Where(f => f.Type == JwtClaimTypes.Name);

                await _userManager.RemoveClaimsAsync(user, removeClaims);
                await _userManager.AddClaimAsync(user, new Claim(JwtClaimTypes.Name, updateProfileModel.Name));

                return Ok(updateProfileModel);
            }

            return BadRequest(result.Errors.Select(s => s.Description));
        }
    }
}
