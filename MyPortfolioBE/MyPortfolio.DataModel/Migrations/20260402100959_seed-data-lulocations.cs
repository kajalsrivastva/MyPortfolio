using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MyPortfolio.DataModel.Migrations
{
    /// <inheritdoc />
    public partial class seeddatalulocations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "LuLocations",
                columns: new[] { "Id", "City", "Country", "CreatedDate", "CreatedUserId", "IsActive", "ModifiedDate", "ModifiedUserId", "State" },
                values: new object[,]
                {
                    { 1, "Delhi", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Delhi" },
                    { 2, "Mumbai", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Maharashtra" },
                    { 3, "Kolkata", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "West Bengal" },
                    { 4, "Bengaluru", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Karnataka" },
                    { 5, "Chennai", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Tamil Nadu" },
                    { 6, "Patna", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Bihar" },
                    { 7, "Hyderabad", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Telangana" },
                    { 8, "Lucknow", "India", new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Uttar Pradesh" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "LuLocations",
                keyColumn: "Id",
                keyValue: 8);
        }
    }
}
