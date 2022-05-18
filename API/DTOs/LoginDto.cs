

namespace API.DTOs
{

    /**
        DTOs used to pass as body parameters into HTTP methods
    **/
    public class LoginDto
    {
        public string UserName { get; set; }
        public string Password{ get; set; }
    }
}