import { VideoVisibilityEnum } from '../enums/enums';

/**
 * Class representing a video.
 */
export class Video {
  /**
   * The unique identifier for the video.
   */
  private readonly _id: string;

  /**
   * The title of the video.
   */
  private readonly _title: string;

  /**
   * The description of the video (optional).
   */
  private readonly _description?: string;

  /**
   * The thumbnail image of the video.
   */
  private readonly _thumbnail: Thumbnail;

  /**
   * The visibility status of the video.
   */
  private readonly _visibility: VideoVisibilityEnum;

  /**
   * The author of the video.
   */
  private readonly _author: string;

  /**
   * The upload date of the video.
   */
  private readonly _uploadDate: string;

  /**
   * Constructs a Video instance.
   * @param data The data object containing video properties.
   */
  constructor(data: any) {
    this._id = data?.id;
    this._title = data?.title;
    this._description = data?.description;
    this._thumbnail = new Thumbnail(data?.thumbnail);
    this._visibility = data?.visibility;
    this._author = data?.author;
    this._uploadDate = data.uploadDate;
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
 */
export class Thumbnail {
  /**
   * The URL of the thumbnail image.
   */
  private readonly _url: string;

  /**
   * The height of the thumbnail image.
   */
  private readonly _height: number;

  /**
   * The width of the thumbnail image.
   */
  private readonly _width: number;

  /**
   * Constructs a Thumbnail instance.
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
