
import { Deserializable } from './deserializable.model';

export class QuoteClass implements Deserializable {
  private _id: number;
  private _body: string;
  private _date: Date;
  private _tags: string[];
  private _url: string;
  private _favorites_count: number;
  private _upvotes_count: number;
  private _downvotes_count: number;
  private _author: string;
  private _author_permalink: string;

  constructor(json: object) {
    this._id = Number(json['quote']['id']);
    this._tags = json['quote']['tags'];
    this._url = json['quote']['url'];
    this._favorites_count = Number(json['quote']['favorites_count']);
    this._upvotes_count = Number(json['quote']['upvotes_count']);
    this._downvotes_count = Number(json['quote']['downvotes_count']);
    this._author = json['quote']['author'];
    this._author_permalink = json['quote']['author_permalink'];
    this._body = json['quote']['body'];
    this._date = json['qotd_date'] ;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  public get id(): number {
    return this._id;
  }

  public get tags(): Array < string > {
    return this._tags;
  }

  public get url(): string {
    return this._url;
  }

  public get favoritesCount(): number {
    return this._favorites_count;
  }

  public get upvotesCount(): number {
    return this._upvotes_count;
  }

  public get downvotesCount(): number {
    return this._downvotes_count;
  }

  public get authorPermalink(): string {
    return this._author_permalink;
  }

  public get author(): string {
    return this._author;
  }

  public get body(): string {
    return this._body;
  }

  public get date(): Date {
    return this._date;
  }

  public set id (v: number) {
    this._id = v;
  }

  public set tags (v: Array<string>) {
    this._tags = v;
  }

  public set url (v: string) {
    this._url = v;
  }

  public set favorites_count (v: number) {
    this._favorites_count = v;
  }

  public set upvotes_count (v: number) {
    this._upvotes_count = v;
  }

  public set downvotes_count (v: number) {
    this._downvotes_count = v;
  }

  public set author (v: string) {
    this._author = v;
  }

  public set author_permalink (v: string) {
    this._author_permalink = v;
  }

  public set body (v: string ) {
      this._body = v;
  }

  public set date (v: Date ) {
      this._date = v;
  }

}
