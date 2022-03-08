export class BaseModel {
  constructor(
    private readonly _json: Record<string, any>,
  ) {}

  /**
   * @param {string} [key] A key to retrieve from the JSON object.
   * @returns {any}
   */
  json(key?: string): any {
    if (key === undefined) return this._json;
    if (!this._json) return;
    return this._json[String(key)];
  }
}
