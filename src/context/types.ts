import { Dispatch, SetStateAction } from "react";
export type BookData = {
  kind?: string;
  id?: string;
  etag?: string;
  selfLink?: string;
  volumeInfo: {
    title?: string;
    subtitle?: string;
    authors?: [string];
    publisher?: string;
    publishedDate?: Date;
    description?: string;
    readingModes?: {
      text?: boolean;
      image?: boolean;
    };
    pageCount?: number;
    printType?: string;
    averageRating?: number;
    ratingsCount?: number;
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    panelizationSummary?: {
      containsEpubBubbles?: boolean;
      containsImageBubbles?: boolean;
    };
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    language?: string;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
  };
  saleInfo?: {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
    listPrice?: {
      amount?: number,
      currencyCode?: string
    }
  };
  accessInfo?: {
    country?: string;
    viewability?: string;
    embeddable?: boolean;
    publicDomain?: boolean;
    textToSpeechPermission?: string;
    epub?: {
      isAvailable?: boolean;
    };
    pdf?: {
      isAvailable?: boolean;
    };
    webReaderLink?: string;
    accessViewStatus?: string;
    quoteSharingAllowed?: boolean;
  };
};
export interface BookContext {
    bookList: BookData[] | []
    search: boolean,
    setSearch: Dispatch<SetStateAction<boolean>>
    setShowHome: Dispatch<SetStateAction<boolean>>
    showHome: boolean
    setQuery: Dispatch<SetStateAction<string>>
    query: string | ""
    setBookList: Dispatch<SetStateAction<BookData[]>>
}
export interface BookPageType {
  setBookId: Dispatch<SetStateAction<string>>
  bookPageData: BookData[]|[]
  bookId: string
  
}