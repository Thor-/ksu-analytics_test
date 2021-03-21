EXECUTE sp_rename N'dbo.Faculty_financing$.[Обсяг_фінансування_галузі_знань]', N'FundingVolume', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_financing$.[Стабільне_фінансування_факультетів_грн#]', N'StableFunding', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_financing$.[Додаткове_фінансування_факультетів_грн#]', N'AdditionalFunding', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_financing$.[Фінансування_факультетів_(всього_грн#)]', N'FacultiesFinancing', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_financing$.[Фінансування_факультетів_по_спеціальному_фонду]', N'SpecialFundFinancing', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_financing$.[Фінансування_факультетів_загальний_спеціальний_фонди]', N'GeneralFundFinancing', 'COLUMN' 
GO


EXECUTE sp_rename N'dbo.Faculty_indices$.[Показник_масштабу_діяльності_(Мі)]', N'ActivityScaleIndicator', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_indices$.[Показник_наукової_діяльності_(Ні)]', N'IndexScientificActivity', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_indices$.[Показник_міжнародного_визнання_(МВі)]', N'InternationalRecognitionIndicator', 'COLUMN' 
GO

EXECUTE sp_rename N'dbo.Faculty_indices$.[Показник_працевлаштування_випускників_(ПВі)]', N'GraduateEmploymentIndicator', 'COLUMN' 
GO
