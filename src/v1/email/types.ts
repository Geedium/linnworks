export interface EmailTemplates {
    pkEmailTemplateRowId: number;
    Name: string;
    TemplateType: string;
    IsConditions: boolean;
    Condition: string;
    Enabled: boolean;
    fkEmailAccountRowId: number;
    AccountName: string;
    AttachPDF: boolean;
    IsAdhoc: boolean;
    HTML: boolean;
}

export interface EmailTemplate {
    pkEmailTemplateRowId: number;
    Name: string;
    Enabled: boolean;
    TemplateType: string;
    TemplateTypeDefinition: TemplateTypeDefinition;
    Subject: string;
    Condition: string;
    PreviewBeforeGenerating: boolean;
    HTML: boolean;
    AttachPDF: boolean;
    Body: string;
    fkEmailAccountRowId: number;
    PromptPreviewReferenceNumber: string;
}

export interface TemplateTypeDefinitionTag {
    Tag: string;
    Name: string;
    SelectionPath: string;
    IsList: boolean;
}

export interface TemplateTypeDefinition {
    AttachedFileName: string;
    AttachmentHelpText: string;
    Type: string;
    Name: string;
    IsAdhoc: boolean;
    IsDesignerVisible: boolean;
    ParsableCreator: object;
    Tags: TemplateTypeDefinitionTag[];
    AttachPDFAvailable: boolean;
    PrintingTemplateType: string;
}

export interface EmailGenerationRequestTag {
    pkEmailStubTagId: number;
    fkEmailStubId: number;
    TagName: string;
    TagValue: string;
}

export interface EmailGenerationRequest {
    /** List of ids to send template for */
    ids: string[];
    /** Template id to send */
    templateId: number;
    /** Tags to append to email */
    tags: EmailGenerationRequestTag[];
    /** List of attachments to send with the email */
    attachments: string[];
}

export interface EmailGenerationResponse {
    isComplete: boolean;
    FailedRecipients: string[];
}

export interface GenerateFreeTextEmailOptions {
    /** List of ids to send template for */
    ids: string[];
    /** Subject of email */
    subject: string;
    /** Body of email */
    body: string;
    templateType: string;
}
