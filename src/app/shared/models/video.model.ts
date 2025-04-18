import { VideoVisibilityEnum } from '../enums/enums';

/**
 * Class representing a video.
 * This class encapsulates the properties and behaviors of a video object.
 */
export class Video {
  /**
   * The unique identifier for the video.
   * This ID is used to uniquely identify the video.
   */
  private readonly _id: string;

  /**
   * The title of the video.
   * Represents the name or title of the video content.
   */
  private readonly _title: string;

  /**
   * The description of the video (optional).
   * Provides additional information or context about the video.
   */
  private readonly _description?: string;

  /**
   * The thumbnail image of the video.
   * Represents a visual preview of the video content.
   */
  private readonly _thumbnail: Thumbnail;

  /**
   * The visibility status of the video.
   * Indicates whether the video is public, private, or unlisted.
   */
  private readonly _visibility: VideoVisibilityEnum;

  /**
   * The author of the video.
   * Represents the creator or uploader of the video content.
   */
  private readonly _author: string;

  /**
   * The upload date of the video.
   * Indicates when the video was uploaded to the platform.
   */
  private readonly _uploadDate: string;

  /**
   * Constructs a Video instance.
   * Initializes the video properties using the provided data object.
   * @param data The data object containing video properties.
   */
  constructor(data: any) {
    this._id = data?.id;
    this._title = data?.title;
    this._description = this.formatDescription(data?.description);
    this._thumbnail = new Thumbnail(data?.thumbnail);
    this._visibility = data?.visibility;
    this._author = data?.author;
    this._uploadDate = data.uploadDate;
  }

  /**
   * Formats the video description by replacing newline characters.
   * @param text The original description text.
   * @returns The formatted description text.
   */
  private formatDescription(text: string) {
    return text ? text.replaceAll('\\n', '\n') : text;
  }

  /**
   * Gets the video ID.
   * @returns The video ID.
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Gets the video title.
   * @returns The video title.
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Gets the video description.
   * @returns The video description or undefined if not available.
   */
  public get description(): string | undefined {
    return this._description;
  }

  /**
   * Gets the video thumbnail.
   * @returns The video thumbnail.
   */
  public get thumbnail(): Thumbnail {
    return this._thumbnail;
  }

  /**
   * Gets the video visibility status.
   * @returns The video visibility status.
   */
  public get visibility(): VideoVisibilityEnum {
    return this._visibility;
  }

  /**
   * Gets the video author.
   * @returns The video author.
   */
  public get author(): string {
    return this._author;
  }

  /**
   * Gets the video upload date.
   * @returns The video upload date.
   */
  public get uploadDate(): string {
    return this._uploadDate;
  }
}

/**
 * Class representing a video thumbnail.
 * This class encapsulates the properties of a video thumbnail image.
 */
export class Thumbnail {
  /**
   * The URL of the thumbnail image.
   * Represents the location of the thumbnail image file.
   */
  private readonly _url: string;

  /**
   * The height of the thumbnail image.
   * Represents the vertical dimension of the thumbnail image.
   */
  private readonly _height: number;

  /**
   * The width of the thumbnail image.
   * Represents the horizontal dimension of the thumbnail image.
   */
  private readonly _width: number;

  /**
   * Constructs a Thumbnail instance.
   * Initializes the thumbnail properties using the provided data object.
   * @param data The data object containing thumbnail properties.
   */
  constructor(data: any) {
    this._url = data?.url;
    this._height = data?.height;
    this._width = data?.width;
  }

  /**
   * Gets the thumbnail URL.
   * @returns The thumbnail URL.
   */
  get url(): string {
    return this._url;
  }

  /**
   * Gets the thumbnail height.
   * @returns The thumbnail height.
   */
  get height(): number {
    return this._height;
  }

  /**
   * Gets the thumbnail width.
   * @returns The thumbnail width.
   */
  get width(): number {
    return this._width;
  }
}
