/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT
BEGIN TRANSACTION
GO
EXECUTE sp_rename N'dbo.Faculty_indicators$.[Розрахунковий контингент]', N'Tmp_EstimatedContingent', 'COLUMN' 
GO
EXECUTE sp_rename N'dbo.Faculty_indicators$.[Приведений контингент]', N'Tmp_GivenContingent_1', 'COLUMN' 
GO
EXECUTE sp_rename N'dbo.Faculty_indicators$.[Приведений розрахунковий контингент по спеціальному фонду]', N'Tmp_SpecialFundContingent_2', 'COLUMN' 
GO
EXECUTE sp_rename N'dbo.Faculty_indicators$.Tmp_EstimatedContingent', N'EstimatedContingent', 'COLUMN' 
GO
EXECUTE sp_rename N'dbo.Faculty_indicators$.Tmp_GivenContingent_1', N'GivenContingent', 'COLUMN' 
GO
EXECUTE sp_rename N'dbo.Faculty_indicators$.Tmp_SpecialFundContingent_2', N'SpecialFundContingent', 'COLUMN' 
GO
DECLARE @v sql_variant 
SET @v = N''
EXECUTE sp_addextendedproperty N'MS_Description', @v, N'SCHEMA', N'dbo', N'TABLE', N'Faculty_indicators$', NULL, NULL
GO
DECLARE @v sql_variant 
SET @v = N'Розрахунковий контингент'
EXECUTE sp_addextendedproperty N'MS_Description', @v, N'SCHEMA', N'dbo', N'TABLE', N'Faculty_indicators$', N'COLUMN', N'EstimatedContingent'
GO
DECLARE @v sql_variant 
SET @v = N'Приведений контингент'
EXECUTE sp_addextendedproperty N'MS_Description', @v, N'SCHEMA', N'dbo', N'TABLE', N'Faculty_indicators$', N'COLUMN', N'GivenContingent'
GO
DECLARE @v sql_variant 
SET @v = N'Приведений розрахунковий контингент по спеціальному фонду'
EXECUTE sp_addextendedproperty N'MS_Description', @v, N'SCHEMA', N'dbo', N'TABLE', N'Faculty_indicators$', N'COLUMN', N'SpecialFundContingent'
GO
ALTER TABLE dbo.Faculty_indicators$ SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
