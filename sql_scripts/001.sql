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
CREATE TABLE dbo.Tmp_Faculty$
	(
	id int NOT NULL IDENTITY (1, 1),
	Faculty nvarchar(255) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Tmp_Faculty$ SET (LOCK_ESCALATION = TABLE)
GO
SET IDENTITY_INSERT dbo.Tmp_Faculty$ ON
GO
IF EXISTS(SELECT * FROM dbo.Faculty$)
	 EXEC('INSERT INTO dbo.Tmp_Faculty$ (id, Faculty)
		SELECT id, Faculty FROM dbo.Faculty$ WITH (HOLDLOCK TABLOCKX)')
GO
SET IDENTITY_INSERT dbo.Tmp_Faculty$ OFF
GO
ALTER TABLE dbo.Faculty_financing$
	DROP CONSTRAINT FK__Faculty_f__Facul__5535A963
GO
ALTER TABLE dbo.Faculty_indicators$
	DROP CONSTRAINT FK__Faculty_i__Facul__571DF1D5
GO
ALTER TABLE dbo.Faculty_indices$
	DROP CONSTRAINT FK__Faculty_i__Facul__59063A47
GO
ALTER TABLE dbo.Faculty_sources$
	DROP CONSTRAINT FK__Faculty_s__Facul__5AEE82B9
GO
ALTER TABLE dbo.Specialty_sources$
	DROP CONSTRAINT FK__Specialty__Facul__5FB337D6
GO
DROP TABLE dbo.Faculty$
GO
EXECUTE sp_rename N'dbo.Tmp_Faculty$', N'Faculty$', 'OBJECT' 
GO
ALTER TABLE dbo.Faculty$ ADD CONSTRAINT
	PK__Faculty$__3213E83F4427AD7D PRIMARY KEY CLUSTERED 
	(
	id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
COMMIT

GO
ALTER TABLE dbo.Specialty_sources$ ADD CONSTRAINT
	FK__Specialty__Facul__5FB337D6 FOREIGN KEY
	(
	Faculty
	) REFERENCES dbo.Faculty$
	(
	id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.Specialty_sources$ SET (LOCK_ESCALATION = TABLE)
GO
COMMIT

GO
ALTER TABLE dbo.Faculty_sources$ ADD CONSTRAINT
	FK__Faculty_s__Facul__5AEE82B9 FOREIGN KEY
	(
	Faculty
	) REFERENCES dbo.Faculty$
	(
	id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.Faculty_sources$ SET (LOCK_ESCALATION = TABLE)
GO
COMMIT

GO
ALTER TABLE dbo.Faculty_indices$ ADD CONSTRAINT
	FK__Faculty_i__Facul__59063A47 FOREIGN KEY
	(
	Faculty
	) REFERENCES dbo.Faculty$
	(
	id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.Faculty_indices$ SET (LOCK_ESCALATION = TABLE)
GO
COMMIT

GO
ALTER TABLE dbo.Faculty_indicators$ ADD CONSTRAINT
	FK__Faculty_i__Facul__571DF1D5 FOREIGN KEY
	(
	Faculty
	) REFERENCES dbo.Faculty$
	(
	id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.Faculty_indicators$ SET (LOCK_ESCALATION = TABLE)
GO
COMMIT

GO
ALTER TABLE dbo.Faculty_financing$ ADD CONSTRAINT
	FK__Faculty_f__Facul__5535A963 FOREIGN KEY
	(
	Faculty
	) REFERENCES dbo.Faculty$
	(
	id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.Faculty_financing$ SET (LOCK_ESCALATION = TABLE)
GO
COMMIT

DBCC CHECKIDENT ('dbo.Faculty$', RESEED, 14)  WITH NO_INFOMSGS