using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer.Controllers
{
    [AllowAnonymous]
    public class RegisterController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManger;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public RegisterController(UserManager<ApplicationUser> userManager,
                                    SignInManager<ApplicationUser> signInManager)
        {
            _userManger = userManager;
            _signInManager = signInManager;
        }


        [HttpGet]
        public IActionResult Index()
        {
            throw new NotImplementedException("Identity Server does not contain register form. Did you mean HTTP POST?");
        }

        [HttpPost]
        public async Task<IActionResult> Index([FromBody] RegisterViewModel vm)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid user");

            var user = new ApplicationUser(vm.Email, vm.Name) { UserName = vm.Email };
            var result = await _userManger.CreateAsync(user, vm.Password);

            if (result.Succeeded)
            {
                await _userManger.AddToRoleAsync(user, "member"); //add user to default role

                await _userManger.AddClaimAsync(user, new Claim(JwtClaimTypes.Name, vm.Name) ); //Add claim for users Name

                return Ok(vm.ReturnUrl);
            }
            return BadRequest(result.Errors.Select(s => s.Description));
        }
    }
}
