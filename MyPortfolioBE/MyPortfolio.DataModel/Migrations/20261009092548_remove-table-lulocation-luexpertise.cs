using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MyPortfolio.DataModel.Migrations
{
    /// <inheritdoc />
    public partial class removetablelulocationluexpertise : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LuExpertises");

            migrationBuilder.DropTable(
                name: "LuLocations");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LuExpertises",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedUserId = table.Column<string>(type: "nvarchar(450)", maxLength: 450, nullable: true),
                    ModifiedUserId = table.Column<string>(type: "nvarchar(450)", maxLength: 450, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LuExpertises", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LuExpertises_AspNetUsers_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LuExpertises_AspNetUsers_ModifiedUserId",
                        column: x => x.ModifiedUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "LuLocations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedUserId = table.Column<string>(type: "nvarchar(450)", maxLength: 450, nullable: true),
                    ModifiedUserId = table.Column<string>(type: "nvarchar(450)", maxLength: 450, nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    ModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LuLocations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LuLocations_AspNetUsers_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LuLocations_AspNetUsers_ModifiedUserId",
                        column: x => x.ModifiedUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_LuExpertises_CreatedUserId",
                table: "LuExpertises",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_LuExpertises_ModifiedUserId",
                table: "LuExpertises",
                column: "ModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_LuLocations_CreatedUserId",
                table: "LuLocations",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_LuLocations_ModifiedUserId",
                table: "LuLocations",
                column: "ModifiedUserId");
        }
    }
}
