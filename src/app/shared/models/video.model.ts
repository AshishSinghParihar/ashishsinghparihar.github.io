import { VideoVisibilityEnum } from '../enums/enums';

export class Video {
  private readonly _id: string;
  private readonly _title: string;
  private readonly _description?: string;
  private readonly _thumbnail: Thumbnail;
  private readonly _visibility: VideoVisibilityEnum;

  constructor(data: any) {
    this._id = data?.id;
    this._title = data?.title;
    this._description = data?.description;
    this._thumbnail = new Thumbnail(data?.thumbnail);
    this._visibility = data?.visibility;
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string | undefined {
    return this._description;
  }

  public get thumbnail(): Thumbnail {
    return this._thumbnail;
  }

  public get visibility(): VideoVisibilityEnum {
    return this._visibility;
  }
}

export class Thumbnail {
  private readonly _url: string;
  private readonly _height: number;
  private readonly _width: number;

  constructor(data: any) {
    this._url = data?.url;
    this._height = data?.height;
    this._width = data?.width;
  }

  get url(): string {
    return this._url;
  }

  get height(): number {
    return this._height;
  }

  get width(): number {
    return this._width;
  }
}
