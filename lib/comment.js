/**
 * Provides classes describing a comment and its author.
 * @module comment
 */
'use strict';

/**
 * Specifies the type of a comment.
 */
const CommentType=Object.freeze({

  /**
   * A standard comment.
   * @var {string}
   * @readonly
   */
  COMMENT: 'comment',

  /**
   * A [pingback](https://en.wikipedia.org/wiki/Pingback) comment.
   * @var {string}
   * @readonly
   */
  PINGBACK: 'pingback',

  /**
   * A [trackback](https://en.wikipedia.org/wiki/Trackback) comment.
   * @var {string}
   * @readonly
   */
  TRACKBACK: 'trackback'
});

/**
 * Represents the author of a comment.
 */
class Author {

  /**
   * Initializes a new instance of the class.
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(options) {

    /**
     * The author's mail address.
     * @var {string}
     */
    this.email=null;

    /**
     * The author's IP address.
     * @var {string}
     */
    this.ipAddress=null;

    /**
     * The author's name.
     * @var {string}
     */
    this.name=null;

    /**
     * The role of the author.
     * If you set it to `"administrator"`, Akismet will always return `false`.
     * @var {string}
     */
    this.role=null;

    /**
     * The URL of the author's website.
     * @var {string}
     */
    this.url=null;

    /**
     * The author's user agent, that is the string identifying the Web browser used to submit comments.
     * @var {string}
     */
    this.userAgent=null;

    // Initialize the instance.
    if(typeof options=='object' && options) {
      for(let key in options) {
        let option=options[key];
        if(this.hasOwnProperty(key) && typeof option!='undefined') this[key]=option;
      }
    }
  }

  /**
   * Creates a new author from the specified JSON string.
   * @param {object|string} json A JSON string, or an already parsed object, representing an author.
   * @return {Author} The instance corresponding to the specified JSON object, or `null` if a parsing error occurred.
   */
  static fromJSON(json) {
    let map;
    if(typeof json!='string') map=json;
    else {
      try { map=JSON.parse(json); }
      catch(e) { return null; }
    }

    return !map || typeof map!='object' ? null : new Author({
      name: map.comment_author,
      email: map.comment_author_email,
      url: map.comment_author_url,
      userAgent: map.user_agent,
      ipAddress: map.user_ip,
      role: map.user_role
    });
  }

  /**
   * Converts this object to a string in JSON format.
   * @param {number|string} [space] Causes the resulting string to be pretty-printed.
   * @return {string} The JSON representation of this object.
   */
  toJSON(space) {
    let map={};
    if(typeof this.name=='string') map.comment_author=this.name;
    if(typeof this.email=='string') map.comment_author_email=this.email;
    if(typeof this.url=='string') map.comment_author_url=this.url;
    if(typeof this.userAgent=='string') map.user_agent=this.userAgent;
    if(typeof this.ipAddress=='string') map.user_ip=this.ipAddress;
    if(typeof this.role=='string') map.user_role=this.role;
    return JSON.stringify(map, null, space);
  }

  /**
   * Returns a string representation of this object.
   * @return {string} The string representation of this object.
   */
  toString() {
    return this.constructor.name+' '+this.toJSON(2);
  }
}

/**
 * Represents a comment submitted by an author.
 */
class Comment {

  /**
   * Initializes a new instance of the class.
   * @param {object} [options] An object specifying values used to initialize this instance.
   */
  constructor(options) {

    /**
     * The comment's author.
     * @var {Author}
     */
    this.author=null;

    /**
     * The comment's content.
     * @var {string}
     */
    this.content=null;

    /**
     * The UTC timestamp of the creation of the comment.
     * @avar {Date}
     */
    this.date=null;

    /**
     * The permanent location of the entry the comment is submitted to.
     * @var {string}
     */
    this.permalink=null;

    /**
     * The UTC timestamp of the publication time for the post, page or thread on which the comment was posted.
     * @avar {Date}
     */
    this.postModified=null;

    /**
     * The URL of the webpage that linked to the entry being requested.
     * @var {string}
     */
    this.referrer=null;

    /**
     * The comment's type.
     * This string value specifies a `CommentType` constant or a made up value like `"registration"`.
     * @var {string}
     */
    this.type=null;

    // Initialize the instance.
    if(typeof options=='object' && options) {
      for(let key in options) {
        let option=options[key];
        if(this.hasOwnProperty(key) && typeof option!='undefined') this[key]=option;
      }
    }
  }

  /**
   * Creates a new comment from the specified JSON string.
   * @param {object|string} json A JSON string, or an already parsed object, representing a comment.
   * @return {Comment} The instance corresponding to the specified JSON object, or `null` if a parsing error occurred.
   */
  static fromJSON(json) {
    let map;
    if(typeof json!='string') map=json;
    else {
      try { map=JSON.parse(json); }
      catch(e) { return null; }
    }

    if(!map || typeof map!='object') return null;

    let hasAuthor=false;
    for(let key in map) {
      if(key.substr(0, 'comment_author'.length)=='comment_author' || key.substr(0, 'user'.length)=='user') {
        hasAuthor=true;
        break;
      }
    }

    return new Comment({
      author: hasAuthor ? Author.fromJSON(map) : null,
      content: map.comment_content,
      date: typeof map.comment_date_gmt=='string' ? new Date(map.comment_date_gmt) : null,
      postModified: typeof map.comment_post_modified_gmt=='string' ? new Date(map.comment_post_modified_gmt) : null,
      type: map.comment_type,
      permalink: map.permalink,
      referrer: map.referrer
    });
  }

  /**
   * Converts this object to a string in JSON format.
   * @param {number|string} [space] Causes the resulting string to be pretty-printed.
   * @return {string} The JSON representation of this object.
   */
  toJSON(space) {
    let map={};
    if(this.author instanceof Author) Object.assign(map, JSON.parse(this.author.toJSON()));

    if(typeof this.content=='string') map.comment_content=this.content;
    if(this.date instanceof Date) map.comment_date_gmt=this.date.toISOString();
    if(this.postModified instanceof Date) map.comment_post_modified_gmt=this.postModified.toISOString();
    if(typeof this.type=='string') map.comment_type=this.type;
    if(typeof this.permalink=='string') map.permalink=this.permalink;
    if(typeof this.referrer=='string') map.referrer=this.referrer;
    return JSON.stringify(map, null, space);
  }

  /**
   * Returns a string representation of this object.
   * @return {string} The string representation of this object.
   */
  toString() {
    return this.constructor.name+' '+this.toJSON(2);
  }
}

// Public interface.
module.exports={
  Author,
  Comment,
  CommentType
};
