using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.Core.Helper
{
    public enum Roles
    {
        [Description("Admin")]
        Admin,
        [Description("Lawyer")]
        Lawyer,
        [Description("User")]
        User
    }
    public enum ResponseCodes
    {
        [Description("Error")]
        Error = 0,
        [Description("Success")]
        Success = 200,
        [Description("Duplicate")]
        Duplicate = 300,
        [Description("Invalid Model")]
        InvalidModel = 303,
        [Description("Invalid User")]
        Unauthorized = 401,
        [Description("Not Found")]
        NotFound = 404,
        [Description("Error code")]
        ErrorCode = 400,
        NoteNotFound = 405,
        CannedMessageNotFound = 405
    }
}
