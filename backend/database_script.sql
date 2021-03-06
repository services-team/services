USE [master]
GO
/****** Object:  Database [ServicesDb]    Script Date: 5/14/2019 6:10:11 PM ******/
CREATE DATABASE [ServicesDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ServicesDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.EZASU_LAPTOP\MSSQL\DATA\ServicesDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ServicesDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.EZASU_LAPTOP\MSSQL\DATA\ServicesDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ServicesDb] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ServicesDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ServicesDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ServicesDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ServicesDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ServicesDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ServicesDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [ServicesDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ServicesDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ServicesDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ServicesDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ServicesDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ServicesDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ServicesDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ServicesDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ServicesDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ServicesDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ServicesDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ServicesDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ServicesDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ServicesDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ServicesDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ServicesDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ServicesDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ServicesDb] SET RECOVERY FULL 
GO
ALTER DATABASE [ServicesDb] SET  MULTI_USER 
GO
ALTER DATABASE [ServicesDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ServicesDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ServicesDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ServicesDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ServicesDb] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ServicesDb', N'ON'
GO
ALTER DATABASE [ServicesDb] SET QUERY_STORE = OFF
GO
USE [ServicesDb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[Discriminator] [nvarchar](max) NOT NULL,
	[FullName] [nvarchar](150) NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](128) NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Day]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Day](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[weekDayId] [int] NOT NULL,
	[scheduleId] [int] NOT NULL,
 CONSTRAINT [PK_day] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reservation]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[SubServiceId] [int] NOT NULL,
	[fk_UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Reservation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Service]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service](
	[id] [nvarchar](450) NOT NULL,
	[title] [varchar](255) NOT NULL,
	[description] [varchar](1000) NULL,
	[price_From] [decimal](10, 0) NOT NULL,
	[price_To] [decimal](10, 0) NOT NULL,
	[city] [varchar](50) NOT NULL,
	[fk_UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_service] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SubService]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubService](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](100) NOT NULL,
	[duration] [int] NOT NULL,
	[price] [decimal](10, 0) NOT NULL,
	[serviceId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_subService] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WeekDays]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WeekDays](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_weekDays] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WeeklySchedule]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WeeklySchedule](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](50) NOT NULL,
	[fk_UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_weeklySchedule] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WorkTime]    Script Date: 5/14/2019 6:10:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkTime](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[minutesFrom] [int] NOT NULL,
	[minutesTo] [int] NOT NULL,
	[dayId] [int] NOT NULL,
 CONSTRAINT [PK_Table_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190507122222_Initial Create', N'2.1.4-rtm-31024')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [Discriminator], [FullName]) VALUES (N'645b38af-d971-4cdb-949f-66e3b86dccbc', N'qweasd', N'QWEASD', N'qweasd@qwe', N'QWEASD@QWE', 0, N'AQAAAAEAACcQAAAAEA2MvHjF/6ST5n9sOInwCxRowwa+x2nK5gl6/0LlAe3ECBhdk/h3L/Ct7BhM86rrhw==', N'C4VRQVSDG2O7X5AWZIBEIP4QYPT33TV4', N'992d7866-cf11-43eb-9e69-539d569a0865', NULL, 0, 0, NULL, 1, 0, N'ApplicationUser', N'qweasd')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [Discriminator], [FullName]) VALUES (N'7ee3be84-9113-46b5-90e9-cef97a04e09c', N'useris', N'USERIS', N'e@mailas.lt', N'E@MAILAS.LT', 0, N'AQAAAAEAACcQAAAAEO2WrcW3MP35zpOlxYaE2XsaMy5bu1+bxf2qMqz+2yIY+MPH170EmsgJz9/95GytMw==', N'R6Z7ZYF6MOCQILJMNNDIQDM3OS4KZWUD', N'cdd4e064-1c91-46b0-a575-39b4f0c29d12', NULL, 0, 0, NULL, 1, 0, N'ApplicationUser', N'Kajus Ezasu')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [Discriminator], [FullName]) VALUES (N'9413ffe3-d25e-4eb8-ac45-9cf265b821e6', N'Senass', N'SENASS', N'naujas@gmail.com', N'NAUJAS@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEOBLvjXnYgsFrP55UvH/Al7l/xbreO90eKYdS7V4WVyPkoRzfYogeUVPospNuxBSOw==', N'RPRPABYZOXPCUGQWZWH5H3PDCMS5NYVH', N'b52726fe-9b5a-421d-a2c8-e940d309c50b', NULL, 0, 0, NULL, 1, 0, N'ApplicationUser', N'NaujasVardas')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [Discriminator], [FullName]) VALUES (N'a7a14c2d-80ac-4b4a-b442-129296687d13', N'Senas', N'SENAS', N'naujas@gmail.com', N'NAUJAS@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAELY46I5qKcjsnrWu+6dVcYe471wXdFTL4W5ND2W52sDA9yU+RA/6MPJ5j4/hWYRqcg==', N'TCAY6QUFHEPLRUB2ITC5JIQHB4EBVOB7', N'14fea870-81bc-4e21-b334-ac309fc70148', NULL, 0, 0, NULL, 1, 0, N'ApplicationUser', N'NaujasVardas')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [Discriminator], [FullName]) VALUES (N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88', N'Naujas', N'NAUJAS', N'naujas@gmail.com', N'NAUJAS@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAECu3jgCoirTdcmFGuNr4V5qZk3ESY0SOnifO4yhBKsEEXtHW9g2j5DARVYUZOfUbxA==', N'CEFDRRYTXCOPUXGUVW2F3XJBMJZXQ4IL', N'1ab5a2a3-c5ed-4526-9c39-0cf5ffdde8cf', NULL, 0, 0, NULL, 1, 0, N'ApplicationUser', N'NaujasVardas')
SET IDENTITY_INSERT [dbo].[Day] ON 

INSERT [dbo].[Day] ([id], [weekDayId], [scheduleId]) VALUES (1, 5, 1)
SET IDENTITY_INSERT [dbo].[Day] OFF
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'1', N'Pavadinimas', N'Aprašymas', CAST(0 AS Decimal(10, 0)), CAST(100 AS Decimal(10, 0)), N'Miestas', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'1007', N'Lempa', N'asd', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'Miestas', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'2', N'qwd', N'asdf', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'dfs', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'2007', N'Naujapaslauga', N'osum', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'Miesteliukstis', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'2009', N'qwe', N'qwe', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'qwe', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'2010', N'qwe', N'qwe', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'qwe', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'3', N'Paslauga', N'Geriausia', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'Kaunas', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'4', N'asdf', N'asdf', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'tfhfg', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'5', N'adsg', N'sdfg', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'fghdfgh', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'6', N'Asa', N'fad', CAST(0 AS Decimal(10, 0)), CAST(0 AS Decimal(10, 0)), N'fd', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'7', N'Paslaugaaa', N'Paprasta', CAST(15 AS Decimal(10, 0)), CAST(25 AS Decimal(10, 0)), N'Vilnius', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
INSERT [dbo].[Service] ([id], [title], [description], [price_From], [price_To], [city], [fk_UserId]) VALUES (N'8', N'Kerpu', N'Zeureigerai', CAST(1 AS Decimal(10, 0)), CAST(2 AS Decimal(10, 0)), N'Kupiskis', N'e40d1ef3-0bb8-4a2f-a98f-3a3b7c975e88')
SET IDENTITY_INSERT [dbo].[WeekDays] ON 

INSERT [dbo].[WeekDays] ([id], [name]) VALUES (1, N'Monday')
INSERT [dbo].[WeekDays] ([id], [name]) VALUES (2, N'Tuesday')
INSERT [dbo].[WeekDays] ([id], [name]) VALUES (3, N'Wednesday')
INSERT [dbo].[WeekDays] ([id], [name]) VALUES (4, N'Thursday')
INSERT [dbo].[WeekDays] ([id], [name]) VALUES (5, N'Friday')
INSERT [dbo].[WeekDays] ([id], [name]) VALUES (6, N'Saturday')
INSERT [dbo].[WeekDays] ([id], [name]) VALUES (7, N'Sunday')
SET IDENTITY_INSERT [dbo].[WeekDays] OFF
SET IDENTITY_INSERT [dbo].[WeeklySchedule] ON 

INSERT [dbo].[WeeklySchedule] ([id], [title], [fk_UserId]) VALUES (1, N'Pavadinimas', N'645b38af-d971-4cdb-949f-66e3b86dccbc')
INSERT [dbo].[WeeklySchedule] ([id], [title], [fk_UserId]) VALUES (2, N'Pavadinimas', N'645b38af-d971-4cdb-949f-66e3b86dccbc')
INSERT [dbo].[WeeklySchedule] ([id], [title], [fk_UserId]) VALUES (3, N'asd', N'645b38af-d971-4cdb-949f-66e3b86dccbc')
INSERT [dbo].[WeeklySchedule] ([id], [title], [fk_UserId]) VALUES (4, N'Naujas', N'645b38af-d971-4cdb-949f-66e3b86dccbc')
SET IDENTITY_INSERT [dbo].[WeeklySchedule] OFF
SET IDENTITY_INSERT [dbo].[WorkTime] ON 

INSERT [dbo].[WorkTime] ([id], [minutesFrom], [minutesTo], [dayId]) VALUES (1, 100, 200, 1)
SET IDENTITY_INSERT [dbo].[WorkTime] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 5/14/2019 6:10:12 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 5/14/2019 6:10:12 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[NormalizedName] ASC
)
WHERE ([NormalizedName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 5/14/2019 6:10:12 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 5/14/2019 6:10:12 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 5/14/2019 6:10:12 PM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 5/14/2019 6:10:12 PM ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 5/14/2019 6:10:12 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[Day]  WITH CHECK ADD  CONSTRAINT [FK_day_weekDays] FOREIGN KEY([weekDayId])
REFERENCES [dbo].[WeekDays] ([id])
GO
ALTER TABLE [dbo].[Day] CHECK CONSTRAINT [FK_day_weekDays]
GO
ALTER TABLE [dbo].[Day]  WITH CHECK ADD  CONSTRAINT [FK_day_weeklySchedule] FOREIGN KEY([scheduleId])
REFERENCES [dbo].[WeeklySchedule] ([id])
GO
ALTER TABLE [dbo].[Day] CHECK CONSTRAINT [FK_day_weeklySchedule]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_AspNetUsers] FOREIGN KEY([fk_UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reservation_AspNetUsers]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_SubService] FOREIGN KEY([SubServiceId])
REFERENCES [dbo].[SubService] ([id])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reservation_SubService]
GO
ALTER TABLE [dbo].[Service]  WITH CHECK ADD  CONSTRAINT [FK_Service_AspNetUsers] FOREIGN KEY([fk_UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
GO
ALTER TABLE [dbo].[Service] CHECK CONSTRAINT [FK_Service_AspNetUsers]
GO
ALTER TABLE [dbo].[SubService]  WITH CHECK ADD  CONSTRAINT [FK_subService_service] FOREIGN KEY([serviceId])
REFERENCES [dbo].[Service] ([id])
GO
ALTER TABLE [dbo].[SubService] CHECK CONSTRAINT [FK_subService_service]
GO
ALTER TABLE [dbo].[WeeklySchedule]  WITH CHECK ADD  CONSTRAINT [FK_WeeklySchedule_AspNetUsers] FOREIGN KEY([fk_UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
GO
ALTER TABLE [dbo].[WeeklySchedule] CHECK CONSTRAINT [FK_WeeklySchedule_AspNetUsers]
GO
ALTER TABLE [dbo].[WorkTime]  WITH CHECK ADD  CONSTRAINT [FK_workTime_day] FOREIGN KEY([dayId])
REFERENCES [dbo].[Day] ([id])
GO
ALTER TABLE [dbo].[WorkTime] CHECK CONSTRAINT [FK_workTime_day]
GO
USE [master]
GO
ALTER DATABASE [ServicesDb] SET  READ_WRITE 
GO
