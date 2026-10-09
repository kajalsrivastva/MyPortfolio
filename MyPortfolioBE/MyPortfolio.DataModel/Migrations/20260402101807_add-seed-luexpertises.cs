using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MyPortfolio.DataModel.Migrations
{
    /// <inheritdoc />
    public partial class addseedluexpertises : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "LuExpertises",
                columns: new[] { "Id", "CreatedDate", "CreatedUserId", "IsActive", "ModifiedDate", "ModifiedUserId", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Bankruptcy Law" },
                    { 2, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Civil Law" },
                    { 3, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Constitutional Law" },
                    { 4, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Corporate Law" },
                    { 5, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Criminal Law" },
                    { 6, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Environmental Law" },
                    { 7, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Family Law" },
                    { 8, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Immigration Law" },
                    { 9, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Intellectual Property Law" },
                    { 10, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Labor and Employment Law" },
                    { 11, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Real Estate Law" },
                    { 12, new DateTime(2026, 4, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), null, true, null, null, "Tax Law" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "LuExpertises",
                keyColumn: "Id",
                keyValue: 12);
        }
    }
}
