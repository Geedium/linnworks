import { Item } from "./Item";
import { Either, PackageFormat } from "./utils";

export type Package = Either<{
    SequenceNumber: number;
    PackageWeight: number;
    PackageWidth: number;
    PackageHeight: number;
    PackageDepth: number;
    PackageFormat: PackageFormat;
    Items: Item[];
}, {
    SequenceNumber: number;
    TrackingNumber: string;
    PNGLabelDataBase64: string;
    AdditionalPngsBase64?: string[];
    PDFBytesDocumentationBase64: string[];
    LabelWidth: number;
    LabelHeight: number;
}>;
