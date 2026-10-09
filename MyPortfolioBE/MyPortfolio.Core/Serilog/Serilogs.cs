using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.Core.Serilog
{
    public class Serilogs
    {
        public Serilogs() { }
        public static void LogError(string projectName, string ControllerName, string ActionName, string AspNetUserId,
            Exception ex, bool IsThrowException = false)
        {
            Log.ForContext("Project", projectName)
                .ForContext("ControllerName", ControllerName)
                .ForContext("ActionName", ActionName)
                .ForContext("AspNetUserId", AspNetUserId)
                .ForContext("Exception", ex)
                .Error(ex, ex.Message);

            if (IsThrowException)
            {
                throw ex;
            }
        }
    }
}
