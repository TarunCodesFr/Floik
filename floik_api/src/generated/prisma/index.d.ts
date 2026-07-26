
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PortalSettings
 * 
 */
export type PortalSettings = $Result.DefaultSelection<Prisma.$PortalSettingsPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model ForumPost
 * 
 */
export type ForumPost = $Result.DefaultSelection<Prisma.$ForumPostPayload>
/**
 * Model ForumComment
 * 
 */
export type ForumComment = $Result.DefaultSelection<Prisma.$ForumCommentPayload>
/**
 * Model ForumReaction
 * 
 */
export type ForumReaction = $Result.DefaultSelection<Prisma.$ForumReactionPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubmissionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]

}

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portalSettings`: Exposes CRUD operations for the **PortalSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortalSettings
    * const portalSettings = await prisma.portalSettings.findMany()
    * ```
    */
  get portalSettings(): Prisma.PortalSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumPost`: Exposes CRUD operations for the **ForumPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumPosts
    * const forumPosts = await prisma.forumPost.findMany()
    * ```
    */
  get forumPost(): Prisma.ForumPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumComment`: Exposes CRUD operations for the **ForumComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumComments
    * const forumComments = await prisma.forumComment.findMany()
    * ```
    */
  get forumComment(): Prisma.ForumCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumReaction`: Exposes CRUD operations for the **ForumReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumReactions
    * const forumReactions = await prisma.forumReaction.findMany()
    * ```
    */
  get forumReaction(): Prisma.ForumReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PortalSettings: 'PortalSettings',
    Role: 'Role',
    UserRole: 'UserRole',
    Profile: 'Profile',
    Notification: 'Notification',
    Submission: 'Submission',
    Form: 'Form',
    ForumPost: 'ForumPost',
    ForumComment: 'ForumComment',
    ForumReaction: 'ForumReaction',
    Announcement: 'Announcement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "portalSettings" | "role" | "userRole" | "profile" | "notification" | "submission" | "form" | "forumPost" | "forumComment" | "forumReaction" | "announcement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PortalSettings: {
        payload: Prisma.$PortalSettingsPayload<ExtArgs>
        fields: Prisma.PortalSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortalSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortalSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>
          }
          findFirst: {
            args: Prisma.PortalSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortalSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>
          }
          findMany: {
            args: Prisma.PortalSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>[]
          }
          create: {
            args: Prisma.PortalSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>
          }
          createMany: {
            args: Prisma.PortalSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortalSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>[]
          }
          delete: {
            args: Prisma.PortalSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>
          }
          update: {
            args: Prisma.PortalSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>
          }
          deleteMany: {
            args: Prisma.PortalSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortalSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortalSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>[]
          }
          upsert: {
            args: Prisma.PortalSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortalSettingsPayload>
          }
          aggregate: {
            args: Prisma.PortalSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortalSettings>
          }
          groupBy: {
            args: Prisma.PortalSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortalSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortalSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<PortalSettingsCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      ForumPost: {
        payload: Prisma.$ForumPostPayload<ExtArgs>
        fields: Prisma.ForumPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          findFirst: {
            args: Prisma.ForumPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          findMany: {
            args: Prisma.ForumPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>[]
          }
          create: {
            args: Prisma.ForumPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          createMany: {
            args: Prisma.ForumPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>[]
          }
          delete: {
            args: Prisma.ForumPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          update: {
            args: Prisma.ForumPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          deleteMany: {
            args: Prisma.ForumPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>[]
          }
          upsert: {
            args: Prisma.ForumPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          aggregate: {
            args: Prisma.ForumPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumPost>
          }
          groupBy: {
            args: Prisma.ForumPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumPostCountArgs<ExtArgs>
            result: $Utils.Optional<ForumPostCountAggregateOutputType> | number
          }
        }
      }
      ForumComment: {
        payload: Prisma.$ForumCommentPayload<ExtArgs>
        fields: Prisma.ForumCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findFirst: {
            args: Prisma.ForumCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findMany: {
            args: Prisma.ForumCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          create: {
            args: Prisma.ForumCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          createMany: {
            args: Prisma.ForumCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          delete: {
            args: Prisma.ForumCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          update: {
            args: Prisma.ForumCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          deleteMany: {
            args: Prisma.ForumCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          upsert: {
            args: Prisma.ForumCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          aggregate: {
            args: Prisma.ForumCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumComment>
          }
          groupBy: {
            args: Prisma.ForumCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCommentCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentCountAggregateOutputType> | number
          }
        }
      }
      ForumReaction: {
        payload: Prisma.$ForumReactionPayload<ExtArgs>
        fields: Prisma.ForumReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>
          }
          findFirst: {
            args: Prisma.ForumReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>
          }
          findMany: {
            args: Prisma.ForumReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>[]
          }
          create: {
            args: Prisma.ForumReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>
          }
          createMany: {
            args: Prisma.ForumReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>[]
          }
          delete: {
            args: Prisma.ForumReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>
          }
          update: {
            args: Prisma.ForumReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>
          }
          deleteMany: {
            args: Prisma.ForumReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>[]
          }
          upsert: {
            args: Prisma.ForumReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumReactionPayload>
          }
          aggregate: {
            args: Prisma.ForumReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumReaction>
          }
          groupBy: {
            args: Prisma.ForumReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ForumReactionCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    portalSettings?: PortalSettingsOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    profile?: ProfileOmit
    notification?: NotificationOmit
    submission?: SubmissionOmit
    form?: FormOmit
    forumPost?: ForumPostOmit
    forumComment?: ForumCommentOmit
    forumReaction?: ForumReactionOmit
    announcement?: AnnouncementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    notifications: number
    userRoles: number
    forumPosts: number
    forumComments: number
    forumReactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    forumPosts?: boolean | UserCountOutputTypeCountForumPostsArgs
    forumComments?: boolean | UserCountOutputTypeCountForumCommentsArgs
    forumReactions?: boolean | UserCountOutputTypeCountForumReactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumReactionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    submissions: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | FormCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type ForumPostCountOutputType
   */

  export type ForumPostCountOutputType = {
    comments: number
    reactions: number
  }

  export type ForumPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ForumPostCountOutputTypeCountCommentsArgs
    reactions?: boolean | ForumPostCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * ForumPostCountOutputType without action
   */
  export type ForumPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPostCountOutputType
     */
    select?: ForumPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumPostCountOutputType without action
   */
  export type ForumPostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }

  /**
   * ForumPostCountOutputType without action
   */
  export type ForumPostCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumReactionWhereInput
  }


  /**
   * Count Type ForumCommentCountOutputType
   */

  export type ForumCommentCountOutputType = {
    reactions: number
  }

  export type ForumCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | ForumCommentCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * ForumCommentCountOutputType without action
   */
  export type ForumCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCommentCountOutputType
     */
    select?: ForumCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumCommentCountOutputType without action
   */
  export type ForumCommentCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumReactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    xboxId: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    authProvider: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    xboxId: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    authProvider: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    xboxId: number
    username: number
    email: number
    passwordHash: number
    authProvider: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    xboxId?: true
    username?: true
    email?: true
    passwordHash?: true
    authProvider?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    xboxId?: true
    username?: true
    email?: true
    passwordHash?: true
    authProvider?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    xboxId?: true
    username?: true
    email?: true
    passwordHash?: true
    authProvider?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    xboxId: string | null
    username: string
    email: string | null
    passwordHash: string | null
    authProvider: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    xboxId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    authProvider?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    forumPosts?: boolean | User$forumPostsArgs<ExtArgs>
    forumComments?: boolean | User$forumCommentsArgs<ExtArgs>
    forumReactions?: boolean | User$forumReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    xboxId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    authProvider?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    xboxId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    authProvider?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    xboxId?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    authProvider?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "xboxId" | "username" | "email" | "passwordHash" | "authProvider" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    userRoles?: boolean | User$userRolesArgs<ExtArgs>
    forumPosts?: boolean | User$forumPostsArgs<ExtArgs>
    forumComments?: boolean | User$forumCommentsArgs<ExtArgs>
    forumReactions?: boolean | User$forumReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      userRoles: Prisma.$UserRolePayload<ExtArgs>[]
      forumPosts: Prisma.$ForumPostPayload<ExtArgs>[]
      forumComments: Prisma.$ForumCommentPayload<ExtArgs>[]
      forumReactions: Prisma.$ForumReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      xboxId: string | null
      username: string
      email: string | null
      passwordHash: string | null
      authProvider: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRoles<T extends User$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forumPosts<T extends User$forumPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$forumPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forumComments<T extends User$forumCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$forumCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forumReactions<T extends User$forumReactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$forumReactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly xboxId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly authProvider: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.userRoles
   */
  export type User$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.forumPosts
   */
  export type User$forumPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    cursor?: ForumPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * User.forumComments
   */
  export type User$forumCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * User.forumReactions
   */
  export type User$forumReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    where?: ForumReactionWhereInput
    orderBy?: ForumReactionOrderByWithRelationInput | ForumReactionOrderByWithRelationInput[]
    cursor?: ForumReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumReactionScalarFieldEnum | ForumReactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PortalSettings
   */

  export type AggregatePortalSettings = {
    _count: PortalSettingsCountAggregateOutputType | null
    _min: PortalSettingsMinAggregateOutputType | null
    _max: PortalSettingsMaxAggregateOutputType | null
  }

  export type PortalSettingsMinAggregateOutputType = {
    id: string | null
    portalType: string | null
    allowEmailAuth: boolean | null
    allowGoogleAuth: boolean | null
    allowMicrosoftAuth: boolean | null
    siteName: string | null
    forumEnabled: boolean | null
    forumPostingRole: string | null
    updatedAt: Date | null
  }

  export type PortalSettingsMaxAggregateOutputType = {
    id: string | null
    portalType: string | null
    allowEmailAuth: boolean | null
    allowGoogleAuth: boolean | null
    allowMicrosoftAuth: boolean | null
    siteName: string | null
    forumEnabled: boolean | null
    forumPostingRole: string | null
    updatedAt: Date | null
  }

  export type PortalSettingsCountAggregateOutputType = {
    id: number
    portalType: number
    allowEmailAuth: number
    allowGoogleAuth: number
    allowMicrosoftAuth: number
    siteName: number
    forumEnabled: number
    forumPostingRole: number
    updatedAt: number
    _all: number
  }


  export type PortalSettingsMinAggregateInputType = {
    id?: true
    portalType?: true
    allowEmailAuth?: true
    allowGoogleAuth?: true
    allowMicrosoftAuth?: true
    siteName?: true
    forumEnabled?: true
    forumPostingRole?: true
    updatedAt?: true
  }

  export type PortalSettingsMaxAggregateInputType = {
    id?: true
    portalType?: true
    allowEmailAuth?: true
    allowGoogleAuth?: true
    allowMicrosoftAuth?: true
    siteName?: true
    forumEnabled?: true
    forumPostingRole?: true
    updatedAt?: true
  }

  export type PortalSettingsCountAggregateInputType = {
    id?: true
    portalType?: true
    allowEmailAuth?: true
    allowGoogleAuth?: true
    allowMicrosoftAuth?: true
    siteName?: true
    forumEnabled?: true
    forumPostingRole?: true
    updatedAt?: true
    _all?: true
  }

  export type PortalSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalSettings to aggregate.
     */
    where?: PortalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalSettings to fetch.
     */
    orderBy?: PortalSettingsOrderByWithRelationInput | PortalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortalSettings
    **/
    _count?: true | PortalSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalSettingsMaxAggregateInputType
  }

  export type GetPortalSettingsAggregateType<T extends PortalSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePortalSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortalSettings[P]>
      : GetScalarType<T[P], AggregatePortalSettings[P]>
  }




  export type PortalSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalSettingsWhereInput
    orderBy?: PortalSettingsOrderByWithAggregationInput | PortalSettingsOrderByWithAggregationInput[]
    by: PortalSettingsScalarFieldEnum[] | PortalSettingsScalarFieldEnum
    having?: PortalSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalSettingsCountAggregateInputType | true
    _min?: PortalSettingsMinAggregateInputType
    _max?: PortalSettingsMaxAggregateInputType
  }

  export type PortalSettingsGroupByOutputType = {
    id: string
    portalType: string
    allowEmailAuth: boolean
    allowGoogleAuth: boolean
    allowMicrosoftAuth: boolean
    siteName: string
    forumEnabled: boolean
    forumPostingRole: string
    updatedAt: Date
    _count: PortalSettingsCountAggregateOutputType | null
    _min: PortalSettingsMinAggregateOutputType | null
    _max: PortalSettingsMaxAggregateOutputType | null
  }

  type GetPortalSettingsGroupByPayload<T extends PortalSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortalSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], PortalSettingsGroupByOutputType[P]>
        }
      >
    >


  export type PortalSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portalType?: boolean
    allowEmailAuth?: boolean
    allowGoogleAuth?: boolean
    allowMicrosoftAuth?: boolean
    siteName?: boolean
    forumEnabled?: boolean
    forumPostingRole?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portalSettings"]>

  export type PortalSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portalType?: boolean
    allowEmailAuth?: boolean
    allowGoogleAuth?: boolean
    allowMicrosoftAuth?: boolean
    siteName?: boolean
    forumEnabled?: boolean
    forumPostingRole?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portalSettings"]>

  export type PortalSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portalType?: boolean
    allowEmailAuth?: boolean
    allowGoogleAuth?: boolean
    allowMicrosoftAuth?: boolean
    siteName?: boolean
    forumEnabled?: boolean
    forumPostingRole?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portalSettings"]>

  export type PortalSettingsSelectScalar = {
    id?: boolean
    portalType?: boolean
    allowEmailAuth?: boolean
    allowGoogleAuth?: boolean
    allowMicrosoftAuth?: boolean
    siteName?: boolean
    forumEnabled?: boolean
    forumPostingRole?: boolean
    updatedAt?: boolean
  }

  export type PortalSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portalType" | "allowEmailAuth" | "allowGoogleAuth" | "allowMicrosoftAuth" | "siteName" | "forumEnabled" | "forumPostingRole" | "updatedAt", ExtArgs["result"]["portalSettings"]>

  export type $PortalSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortalSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      portalType: string
      allowEmailAuth: boolean
      allowGoogleAuth: boolean
      allowMicrosoftAuth: boolean
      siteName: string
      forumEnabled: boolean
      forumPostingRole: string
      updatedAt: Date
    }, ExtArgs["result"]["portalSettings"]>
    composites: {}
  }

  type PortalSettingsGetPayload<S extends boolean | null | undefined | PortalSettingsDefaultArgs> = $Result.GetResult<Prisma.$PortalSettingsPayload, S>

  type PortalSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortalSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortalSettingsCountAggregateInputType | true
    }

  export interface PortalSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortalSettings'], meta: { name: 'PortalSettings' } }
    /**
     * Find zero or one PortalSettings that matches the filter.
     * @param {PortalSettingsFindUniqueArgs} args - Arguments to find a PortalSettings
     * @example
     * // Get one PortalSettings
     * const portalSettings = await prisma.portalSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortalSettingsFindUniqueArgs>(args: SelectSubset<T, PortalSettingsFindUniqueArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortalSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortalSettingsFindUniqueOrThrowArgs} args - Arguments to find a PortalSettings
     * @example
     * // Get one PortalSettings
     * const portalSettings = await prisma.portalSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortalSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, PortalSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalSettingsFindFirstArgs} args - Arguments to find a PortalSettings
     * @example
     * // Get one PortalSettings
     * const portalSettings = await prisma.portalSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortalSettingsFindFirstArgs>(args?: SelectSubset<T, PortalSettingsFindFirstArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortalSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalSettingsFindFirstOrThrowArgs} args - Arguments to find a PortalSettings
     * @example
     * // Get one PortalSettings
     * const portalSettings = await prisma.portalSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortalSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, PortalSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortalSettings
     * const portalSettings = await prisma.portalSettings.findMany()
     * 
     * // Get first 10 PortalSettings
     * const portalSettings = await prisma.portalSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalSettingsWithIdOnly = await prisma.portalSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortalSettingsFindManyArgs>(args?: SelectSubset<T, PortalSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortalSettings.
     * @param {PortalSettingsCreateArgs} args - Arguments to create a PortalSettings.
     * @example
     * // Create one PortalSettings
     * const PortalSettings = await prisma.portalSettings.create({
     *   data: {
     *     // ... data to create a PortalSettings
     *   }
     * })
     * 
     */
    create<T extends PortalSettingsCreateArgs>(args: SelectSubset<T, PortalSettingsCreateArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortalSettings.
     * @param {PortalSettingsCreateManyArgs} args - Arguments to create many PortalSettings.
     * @example
     * // Create many PortalSettings
     * const portalSettings = await prisma.portalSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortalSettingsCreateManyArgs>(args?: SelectSubset<T, PortalSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortalSettings and returns the data saved in the database.
     * @param {PortalSettingsCreateManyAndReturnArgs} args - Arguments to create many PortalSettings.
     * @example
     * // Create many PortalSettings
     * const portalSettings = await prisma.portalSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortalSettings and only return the `id`
     * const portalSettingsWithIdOnly = await prisma.portalSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortalSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, PortalSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PortalSettings.
     * @param {PortalSettingsDeleteArgs} args - Arguments to delete one PortalSettings.
     * @example
     * // Delete one PortalSettings
     * const PortalSettings = await prisma.portalSettings.delete({
     *   where: {
     *     // ... filter to delete one PortalSettings
     *   }
     * })
     * 
     */
    delete<T extends PortalSettingsDeleteArgs>(args: SelectSubset<T, PortalSettingsDeleteArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortalSettings.
     * @param {PortalSettingsUpdateArgs} args - Arguments to update one PortalSettings.
     * @example
     * // Update one PortalSettings
     * const portalSettings = await prisma.portalSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortalSettingsUpdateArgs>(args: SelectSubset<T, PortalSettingsUpdateArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortalSettings.
     * @param {PortalSettingsDeleteManyArgs} args - Arguments to filter PortalSettings to delete.
     * @example
     * // Delete a few PortalSettings
     * const { count } = await prisma.portalSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortalSettingsDeleteManyArgs>(args?: SelectSubset<T, PortalSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortalSettings
     * const portalSettings = await prisma.portalSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortalSettingsUpdateManyArgs>(args: SelectSubset<T, PortalSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortalSettings and returns the data updated in the database.
     * @param {PortalSettingsUpdateManyAndReturnArgs} args - Arguments to update many PortalSettings.
     * @example
     * // Update many PortalSettings
     * const portalSettings = await prisma.portalSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortalSettings and only return the `id`
     * const portalSettingsWithIdOnly = await prisma.portalSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortalSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, PortalSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PortalSettings.
     * @param {PortalSettingsUpsertArgs} args - Arguments to update or create a PortalSettings.
     * @example
     * // Update or create a PortalSettings
     * const portalSettings = await prisma.portalSettings.upsert({
     *   create: {
     *     // ... data to create a PortalSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortalSettings we want to update
     *   }
     * })
     */
    upsert<T extends PortalSettingsUpsertArgs>(args: SelectSubset<T, PortalSettingsUpsertArgs<ExtArgs>>): Prisma__PortalSettingsClient<$Result.GetResult<Prisma.$PortalSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalSettingsCountArgs} args - Arguments to filter PortalSettings to count.
     * @example
     * // Count the number of PortalSettings
     * const count = await prisma.portalSettings.count({
     *   where: {
     *     // ... the filter for the PortalSettings we want to count
     *   }
     * })
    **/
    count<T extends PortalSettingsCountArgs>(
      args?: Subset<T, PortalSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalSettingsAggregateArgs>(args: Subset<T, PortalSettingsAggregateArgs>): Prisma.PrismaPromise<GetPortalSettingsAggregateType<T>>

    /**
     * Group by PortalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalSettingsGroupByArgs['orderBy'] }
        : { orderBy?: PortalSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortalSettings model
   */
  readonly fields: PortalSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortalSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortalSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortalSettings model
   */
  interface PortalSettingsFieldRefs {
    readonly id: FieldRef<"PortalSettings", 'String'>
    readonly portalType: FieldRef<"PortalSettings", 'String'>
    readonly allowEmailAuth: FieldRef<"PortalSettings", 'Boolean'>
    readonly allowGoogleAuth: FieldRef<"PortalSettings", 'Boolean'>
    readonly allowMicrosoftAuth: FieldRef<"PortalSettings", 'Boolean'>
    readonly siteName: FieldRef<"PortalSettings", 'String'>
    readonly forumEnabled: FieldRef<"PortalSettings", 'Boolean'>
    readonly forumPostingRole: FieldRef<"PortalSettings", 'String'>
    readonly updatedAt: FieldRef<"PortalSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortalSettings findUnique
   */
  export type PortalSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PortalSettings to fetch.
     */
    where: PortalSettingsWhereUniqueInput
  }

  /**
   * PortalSettings findUniqueOrThrow
   */
  export type PortalSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PortalSettings to fetch.
     */
    where: PortalSettingsWhereUniqueInput
  }

  /**
   * PortalSettings findFirst
   */
  export type PortalSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PortalSettings to fetch.
     */
    where?: PortalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalSettings to fetch.
     */
    orderBy?: PortalSettingsOrderByWithRelationInput | PortalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalSettings.
     */
    cursor?: PortalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalSettings.
     */
    distinct?: PortalSettingsScalarFieldEnum | PortalSettingsScalarFieldEnum[]
  }

  /**
   * PortalSettings findFirstOrThrow
   */
  export type PortalSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PortalSettings to fetch.
     */
    where?: PortalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalSettings to fetch.
     */
    orderBy?: PortalSettingsOrderByWithRelationInput | PortalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortalSettings.
     */
    cursor?: PortalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalSettings.
     */
    distinct?: PortalSettingsScalarFieldEnum | PortalSettingsScalarFieldEnum[]
  }

  /**
   * PortalSettings findMany
   */
  export type PortalSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PortalSettings to fetch.
     */
    where?: PortalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortalSettings to fetch.
     */
    orderBy?: PortalSettingsOrderByWithRelationInput | PortalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortalSettings.
     */
    cursor?: PortalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortalSettings.
     */
    distinct?: PortalSettingsScalarFieldEnum | PortalSettingsScalarFieldEnum[]
  }

  /**
   * PortalSettings create
   */
  export type PortalSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a PortalSettings.
     */
    data: XOR<PortalSettingsCreateInput, PortalSettingsUncheckedCreateInput>
  }

  /**
   * PortalSettings createMany
   */
  export type PortalSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortalSettings.
     */
    data: PortalSettingsCreateManyInput | PortalSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortalSettings createManyAndReturn
   */
  export type PortalSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many PortalSettings.
     */
    data: PortalSettingsCreateManyInput | PortalSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortalSettings update
   */
  export type PortalSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a PortalSettings.
     */
    data: XOR<PortalSettingsUpdateInput, PortalSettingsUncheckedUpdateInput>
    /**
     * Choose, which PortalSettings to update.
     */
    where: PortalSettingsWhereUniqueInput
  }

  /**
   * PortalSettings updateMany
   */
  export type PortalSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortalSettings.
     */
    data: XOR<PortalSettingsUpdateManyMutationInput, PortalSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PortalSettings to update
     */
    where?: PortalSettingsWhereInput
    /**
     * Limit how many PortalSettings to update.
     */
    limit?: number
  }

  /**
   * PortalSettings updateManyAndReturn
   */
  export type PortalSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * The data used to update PortalSettings.
     */
    data: XOR<PortalSettingsUpdateManyMutationInput, PortalSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PortalSettings to update
     */
    where?: PortalSettingsWhereInput
    /**
     * Limit how many PortalSettings to update.
     */
    limit?: number
  }

  /**
   * PortalSettings upsert
   */
  export type PortalSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the PortalSettings to update in case it exists.
     */
    where: PortalSettingsWhereUniqueInput
    /**
     * In case the PortalSettings found by the `where` argument doesn't exist, create a new PortalSettings with this data.
     */
    create: XOR<PortalSettingsCreateInput, PortalSettingsUncheckedCreateInput>
    /**
     * In case the PortalSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortalSettingsUpdateInput, PortalSettingsUncheckedUpdateInput>
  }

  /**
   * PortalSettings delete
   */
  export type PortalSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
    /**
     * Filter which PortalSettings to delete.
     */
    where: PortalSettingsWhereUniqueInput
  }

  /**
   * PortalSettings deleteMany
   */
  export type PortalSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortalSettings to delete
     */
    where?: PortalSettingsWhereInput
    /**
     * Limit how many PortalSettings to delete.
     */
    limit?: number
  }

  /**
   * PortalSettings without action
   */
  export type PortalSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortalSettings
     */
    select?: PortalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortalSettings
     */
    omit?: PortalSettingsOmit<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    position: number | null
  }

  export type RoleSumAggregateOutputType = {
    position: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    position: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    position: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    permissions: number
    position: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    position?: true
  }

  export type RoleSumAggregateInputType = {
    position?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    position?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    position?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    permissions?: true
    position?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    color: string | null
    permissions: JsonValue
    position: number
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    permissions?: boolean
    position?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "color" | "permissions" | "position" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      color: string | null
      permissions: Prisma.JsonValue
      position: number
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly color: FieldRef<"Role", 'String'>
    readonly permissions: FieldRef<"Role", 'Json'>
    readonly position: FieldRef<"Role", 'Int'>
    readonly isDefault: FieldRef<"Role", 'Boolean'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    bio: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    bio: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    displayName: number
    bio: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    bio?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    bio?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    bio?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    displayName: string | null
    bio: string | null
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "displayName" | "bio" | "profilePicture" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      displayName: string | null
      bio: string | null
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly displayName: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly profilePicture: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    link: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string | null
    title: string
    message: string
    type: string
    link: string | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "link" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      title: string
      message: string
      type: string
      link: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    formId: string | null
    status: $Enums.SubmissionStatus | null
    reviewNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    formId: string | null
    status: $Enums.SubmissionStatus | null
    reviewNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    formId: number
    content: number
    status: number
    reviewNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    formId?: true
    status?: true
    reviewNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    formId?: true
    status?: true
    reviewNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    formId?: true
    content?: true
    status?: true
    reviewNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    formId: string
    content: JsonValue
    status: $Enums.SubmissionStatus
    reviewNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    formId?: boolean
    content?: boolean
    status?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    formId?: boolean
    content?: boolean
    status?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    formId?: boolean
    content?: boolean
    status?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    formId?: boolean
    content?: boolean
    status?: boolean
    reviewNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "formId" | "content" | "status" | "reviewNote" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      form: Prisma.$FormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      formId: string
      content: Prisma.JsonValue
      status: $Enums.SubmissionStatus
      reviewNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly formId: FieldRef<"Submission", 'String'>
    readonly content: FieldRef<"Submission", 'Json'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly reviewNote: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    icon: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    icon: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isActive: number
    icon: number
    color: number
    fields: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    icon?: true
    color?: true
    fields?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    title: string
    description: string | null
    isActive: boolean
    icon: string | null
    color: string | null
    fields: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    icon?: boolean
    color?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissions?: boolean | Form$submissionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    icon?: boolean
    color?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    icon?: boolean
    color?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    icon?: boolean
    color?: boolean
    fields?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isActive" | "icon" | "color" | "fields" | "createdAt" | "updatedAt", ExtArgs["result"]["form"]>
  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | Form$submissionsArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      isActive: boolean
      icon: string | null
      color: string | null
      fields: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormUpdateManyAndReturnArgs>(args: SelectSubset<T, FormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends Form$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Form$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Form model
   */
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly title: FieldRef<"Form", 'String'>
    readonly description: FieldRef<"Form", 'String'>
    readonly isActive: FieldRef<"Form", 'Boolean'>
    readonly icon: FieldRef<"Form", 'String'>
    readonly color: FieldRef<"Form", 'String'>
    readonly fields: FieldRef<"Form", 'Json'>
    readonly createdAt: FieldRef<"Form", 'DateTime'>
    readonly updatedAt: FieldRef<"Form", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form updateManyAndReturn
   */
  export type FormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form.submissions
   */
  export type Form$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model ForumPost
   */

  export type AggregateForumPost = {
    _count: ForumPostCountAggregateOutputType | null
    _min: ForumPostMinAggregateOutputType | null
    _max: ForumPostMaxAggregateOutputType | null
  }

  export type ForumPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    authorId: string | null
    pinned: boolean | null
    locked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    authorId: string | null
    pinned: boolean | null
    locked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumPostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    pinned: number
    locked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ForumPostMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    pinned?: true
    locked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumPostMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    pinned?: true
    locked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumPostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    pinned?: true
    locked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForumPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumPost to aggregate.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumPosts
    **/
    _count?: true | ForumPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumPostMaxAggregateInputType
  }

  export type GetForumPostAggregateType<T extends ForumPostAggregateArgs> = {
        [P in keyof T & keyof AggregateForumPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumPost[P]>
      : GetScalarType<T[P], AggregateForumPost[P]>
  }




  export type ForumPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithAggregationInput | ForumPostOrderByWithAggregationInput[]
    by: ForumPostScalarFieldEnum[] | ForumPostScalarFieldEnum
    having?: ForumPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumPostCountAggregateInputType | true
    _min?: ForumPostMinAggregateInputType
    _max?: ForumPostMaxAggregateInputType
  }

  export type ForumPostGroupByOutputType = {
    id: string
    title: string
    content: JsonValue
    authorId: string
    pinned: boolean
    locked: boolean
    createdAt: Date
    updatedAt: Date
    _count: ForumPostCountAggregateOutputType | null
    _min: ForumPostMinAggregateOutputType | null
    _max: ForumPostMaxAggregateOutputType | null
  }

  type GetForumPostGroupByPayload<T extends ForumPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumPostGroupByOutputType[P]>
            : GetScalarType<T[P], ForumPostGroupByOutputType[P]>
        }
      >
    >


  export type ForumPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    pinned?: boolean
    locked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | ForumPost$commentsArgs<ExtArgs>
    reactions?: boolean | ForumPost$reactionsArgs<ExtArgs>
    _count?: boolean | ForumPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumPost"]>

  export type ForumPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    pinned?: boolean
    locked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumPost"]>

  export type ForumPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    pinned?: boolean
    locked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumPost"]>

  export type ForumPostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    pinned?: boolean
    locked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ForumPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "pinned" | "locked" | "createdAt" | "updatedAt", ExtArgs["result"]["forumPost"]>
  export type ForumPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | ForumPost$commentsArgs<ExtArgs>
    reactions?: boolean | ForumPost$reactionsArgs<ExtArgs>
    _count?: boolean | ForumPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ForumPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ForumPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumPost"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$ForumCommentPayload<ExtArgs>[]
      reactions: Prisma.$ForumReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: Prisma.JsonValue
      authorId: string
      pinned: boolean
      locked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forumPost"]>
    composites: {}
  }

  type ForumPostGetPayload<S extends boolean | null | undefined | ForumPostDefaultArgs> = $Result.GetResult<Prisma.$ForumPostPayload, S>

  type ForumPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumPostCountAggregateInputType | true
    }

  export interface ForumPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumPost'], meta: { name: 'ForumPost' } }
    /**
     * Find zero or one ForumPost that matches the filter.
     * @param {ForumPostFindUniqueArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumPostFindUniqueArgs>(args: SelectSubset<T, ForumPostFindUniqueArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumPostFindUniqueOrThrowArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindFirstArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumPostFindFirstArgs>(args?: SelectSubset<T, ForumPostFindFirstArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindFirstOrThrowArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumPosts
     * const forumPosts = await prisma.forumPost.findMany()
     * 
     * // Get first 10 ForumPosts
     * const forumPosts = await prisma.forumPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumPostWithIdOnly = await prisma.forumPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumPostFindManyArgs>(args?: SelectSubset<T, ForumPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumPost.
     * @param {ForumPostCreateArgs} args - Arguments to create a ForumPost.
     * @example
     * // Create one ForumPost
     * const ForumPost = await prisma.forumPost.create({
     *   data: {
     *     // ... data to create a ForumPost
     *   }
     * })
     * 
     */
    create<T extends ForumPostCreateArgs>(args: SelectSubset<T, ForumPostCreateArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumPosts.
     * @param {ForumPostCreateManyArgs} args - Arguments to create many ForumPosts.
     * @example
     * // Create many ForumPosts
     * const forumPost = await prisma.forumPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumPostCreateManyArgs>(args?: SelectSubset<T, ForumPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumPosts and returns the data saved in the database.
     * @param {ForumPostCreateManyAndReturnArgs} args - Arguments to create many ForumPosts.
     * @example
     * // Create many ForumPosts
     * const forumPost = await prisma.forumPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumPosts and only return the `id`
     * const forumPostWithIdOnly = await prisma.forumPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumPostCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumPost.
     * @param {ForumPostDeleteArgs} args - Arguments to delete one ForumPost.
     * @example
     * // Delete one ForumPost
     * const ForumPost = await prisma.forumPost.delete({
     *   where: {
     *     // ... filter to delete one ForumPost
     *   }
     * })
     * 
     */
    delete<T extends ForumPostDeleteArgs>(args: SelectSubset<T, ForumPostDeleteArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumPost.
     * @param {ForumPostUpdateArgs} args - Arguments to update one ForumPost.
     * @example
     * // Update one ForumPost
     * const forumPost = await prisma.forumPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumPostUpdateArgs>(args: SelectSubset<T, ForumPostUpdateArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumPosts.
     * @param {ForumPostDeleteManyArgs} args - Arguments to filter ForumPosts to delete.
     * @example
     * // Delete a few ForumPosts
     * const { count } = await prisma.forumPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumPostDeleteManyArgs>(args?: SelectSubset<T, ForumPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumPosts
     * const forumPost = await prisma.forumPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumPostUpdateManyArgs>(args: SelectSubset<T, ForumPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumPosts and returns the data updated in the database.
     * @param {ForumPostUpdateManyAndReturnArgs} args - Arguments to update many ForumPosts.
     * @example
     * // Update many ForumPosts
     * const forumPost = await prisma.forumPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumPosts and only return the `id`
     * const forumPostWithIdOnly = await prisma.forumPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumPostUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumPost.
     * @param {ForumPostUpsertArgs} args - Arguments to update or create a ForumPost.
     * @example
     * // Update or create a ForumPost
     * const forumPost = await prisma.forumPost.upsert({
     *   create: {
     *     // ... data to create a ForumPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumPost we want to update
     *   }
     * })
     */
    upsert<T extends ForumPostUpsertArgs>(args: SelectSubset<T, ForumPostUpsertArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostCountArgs} args - Arguments to filter ForumPosts to count.
     * @example
     * // Count the number of ForumPosts
     * const count = await prisma.forumPost.count({
     *   where: {
     *     // ... the filter for the ForumPosts we want to count
     *   }
     * })
    **/
    count<T extends ForumPostCountArgs>(
      args?: Subset<T, ForumPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumPostAggregateArgs>(args: Subset<T, ForumPostAggregateArgs>): Prisma.PrismaPromise<GetForumPostAggregateType<T>>

    /**
     * Group by ForumPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumPostGroupByArgs['orderBy'] }
        : { orderBy?: ForumPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumPost model
   */
  readonly fields: ForumPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends ForumPost$commentsArgs<ExtArgs> = {}>(args?: Subset<T, ForumPost$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends ForumPost$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, ForumPost$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumPost model
   */
  interface ForumPostFieldRefs {
    readonly id: FieldRef<"ForumPost", 'String'>
    readonly title: FieldRef<"ForumPost", 'String'>
    readonly content: FieldRef<"ForumPost", 'Json'>
    readonly authorId: FieldRef<"ForumPost", 'String'>
    readonly pinned: FieldRef<"ForumPost", 'Boolean'>
    readonly locked: FieldRef<"ForumPost", 'Boolean'>
    readonly createdAt: FieldRef<"ForumPost", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumPost findUnique
   */
  export type ForumPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost findUniqueOrThrow
   */
  export type ForumPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost findFirst
   */
  export type ForumPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumPosts.
     */
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost findFirstOrThrow
   */
  export type ForumPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumPosts.
     */
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost findMany
   */
  export type ForumPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPosts to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumPosts.
     */
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost create
   */
  export type ForumPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumPost.
     */
    data: XOR<ForumPostCreateInput, ForumPostUncheckedCreateInput>
  }

  /**
   * ForumPost createMany
   */
  export type ForumPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumPosts.
     */
    data: ForumPostCreateManyInput | ForumPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumPost createManyAndReturn
   */
  export type ForumPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * The data used to create many ForumPosts.
     */
    data: ForumPostCreateManyInput | ForumPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumPost update
   */
  export type ForumPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumPost.
     */
    data: XOR<ForumPostUpdateInput, ForumPostUncheckedUpdateInput>
    /**
     * Choose, which ForumPost to update.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost updateMany
   */
  export type ForumPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumPosts.
     */
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyInput>
    /**
     * Filter which ForumPosts to update
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to update.
     */
    limit?: number
  }

  /**
   * ForumPost updateManyAndReturn
   */
  export type ForumPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * The data used to update ForumPosts.
     */
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyInput>
    /**
     * Filter which ForumPosts to update
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumPost upsert
   */
  export type ForumPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumPost to update in case it exists.
     */
    where: ForumPostWhereUniqueInput
    /**
     * In case the ForumPost found by the `where` argument doesn't exist, create a new ForumPost with this data.
     */
    create: XOR<ForumPostCreateInput, ForumPostUncheckedCreateInput>
    /**
     * In case the ForumPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumPostUpdateInput, ForumPostUncheckedUpdateInput>
  }

  /**
   * ForumPost delete
   */
  export type ForumPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter which ForumPost to delete.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost deleteMany
   */
  export type ForumPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumPosts to delete
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to delete.
     */
    limit?: number
  }

  /**
   * ForumPost.comments
   */
  export type ForumPost$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumPost.reactions
   */
  export type ForumPost$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    where?: ForumReactionWhereInput
    orderBy?: ForumReactionOrderByWithRelationInput | ForumReactionOrderByWithRelationInput[]
    cursor?: ForumReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumReactionScalarFieldEnum | ForumReactionScalarFieldEnum[]
  }

  /**
   * ForumPost without action
   */
  export type ForumPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
  }


  /**
   * Model ForumComment
   */

  export type AggregateForumComment = {
    _count: ForumCommentCountAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  export type ForumCommentMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumCommentMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumCommentCountAggregateOutputType = {
    id: number
    content: number
    authorId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ForumCommentMinAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumCommentMaxAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumCommentCountAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForumCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComment to aggregate.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumComments
    **/
    _count?: true | ForumCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCommentMaxAggregateInputType
  }

  export type GetForumCommentAggregateType<T extends ForumCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateForumComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumComment[P]>
      : GetScalarType<T[P], AggregateForumComment[P]>
  }




  export type ForumCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithAggregationInput | ForumCommentOrderByWithAggregationInput[]
    by: ForumCommentScalarFieldEnum[] | ForumCommentScalarFieldEnum
    having?: ForumCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCommentCountAggregateInputType | true
    _min?: ForumCommentMinAggregateInputType
    _max?: ForumCommentMaxAggregateInputType
  }

  export type ForumCommentGroupByOutputType = {
    id: string
    content: JsonValue
    authorId: string
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: ForumCommentCountAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  type GetForumCommentGroupByPayload<T extends ForumCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
        }
      >
    >


  export type ForumCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
    reactions?: boolean | ForumComment$reactionsArgs<ExtArgs>
    _count?: boolean | ForumCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>

  export type ForumCommentSelectScalar = {
    id?: boolean
    content?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ForumCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "authorId" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["forumComment"]>
  export type ForumCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
    reactions?: boolean | ForumComment$reactionsArgs<ExtArgs>
    _count?: boolean | ForumCommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
  }
  export type ForumCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
  }

  export type $ForumCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumComment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$ForumPostPayload<ExtArgs>
      reactions: Prisma.$ForumReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: Prisma.JsonValue
      authorId: string
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forumComment"]>
    composites: {}
  }

  type ForumCommentGetPayload<S extends boolean | null | undefined | ForumCommentDefaultArgs> = $Result.GetResult<Prisma.$ForumCommentPayload, S>

  type ForumCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCommentCountAggregateInputType | true
    }

  export interface ForumCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumComment'], meta: { name: 'ForumComment' } }
    /**
     * Find zero or one ForumComment that matches the filter.
     * @param {ForumCommentFindUniqueArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCommentFindUniqueArgs>(args: SelectSubset<T, ForumCommentFindUniqueArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCommentFindUniqueOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCommentFindFirstArgs>(args?: SelectSubset<T, ForumCommentFindFirstArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumComments
     * const forumComments = await prisma.forumComment.findMany()
     * 
     * // Get first 10 ForumComments
     * const forumComments = await prisma.forumComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCommentFindManyArgs>(args?: SelectSubset<T, ForumCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumComment.
     * @param {ForumCommentCreateArgs} args - Arguments to create a ForumComment.
     * @example
     * // Create one ForumComment
     * const ForumComment = await prisma.forumComment.create({
     *   data: {
     *     // ... data to create a ForumComment
     *   }
     * })
     * 
     */
    create<T extends ForumCommentCreateArgs>(args: SelectSubset<T, ForumCommentCreateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumComments.
     * @param {ForumCommentCreateManyArgs} args - Arguments to create many ForumComments.
     * @example
     * // Create many ForumComments
     * const forumComment = await prisma.forumComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCommentCreateManyArgs>(args?: SelectSubset<T, ForumCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumComments and returns the data saved in the database.
     * @param {ForumCommentCreateManyAndReturnArgs} args - Arguments to create many ForumComments.
     * @example
     * // Create many ForumComments
     * const forumComment = await prisma.forumComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumComments and only return the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumComment.
     * @param {ForumCommentDeleteArgs} args - Arguments to delete one ForumComment.
     * @example
     * // Delete one ForumComment
     * const ForumComment = await prisma.forumComment.delete({
     *   where: {
     *     // ... filter to delete one ForumComment
     *   }
     * })
     * 
     */
    delete<T extends ForumCommentDeleteArgs>(args: SelectSubset<T, ForumCommentDeleteArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumComment.
     * @param {ForumCommentUpdateArgs} args - Arguments to update one ForumComment.
     * @example
     * // Update one ForumComment
     * const forumComment = await prisma.forumComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCommentUpdateArgs>(args: SelectSubset<T, ForumCommentUpdateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumComments.
     * @param {ForumCommentDeleteManyArgs} args - Arguments to filter ForumComments to delete.
     * @example
     * // Delete a few ForumComments
     * const { count } = await prisma.forumComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCommentDeleteManyArgs>(args?: SelectSubset<T, ForumCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumComments
     * const forumComment = await prisma.forumComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCommentUpdateManyArgs>(args: SelectSubset<T, ForumCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumComments and returns the data updated in the database.
     * @param {ForumCommentUpdateManyAndReturnArgs} args - Arguments to update many ForumComments.
     * @example
     * // Update many ForumComments
     * const forumComment = await prisma.forumComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumComments and only return the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumComment.
     * @param {ForumCommentUpsertArgs} args - Arguments to update or create a ForumComment.
     * @example
     * // Update or create a ForumComment
     * const forumComment = await prisma.forumComment.upsert({
     *   create: {
     *     // ... data to create a ForumComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumComment we want to update
     *   }
     * })
     */
    upsert<T extends ForumCommentUpsertArgs>(args: SelectSubset<T, ForumCommentUpsertArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentCountArgs} args - Arguments to filter ForumComments to count.
     * @example
     * // Count the number of ForumComments
     * const count = await prisma.forumComment.count({
     *   where: {
     *     // ... the filter for the ForumComments we want to count
     *   }
     * })
    **/
    count<T extends ForumCommentCountArgs>(
      args?: Subset<T, ForumCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumCommentAggregateArgs>(args: Subset<T, ForumCommentAggregateArgs>): Prisma.PrismaPromise<GetForumCommentAggregateType<T>>

    /**
     * Group by ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumCommentGroupByArgs['orderBy'] }
        : { orderBy?: ForumCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumComment model
   */
  readonly fields: ForumCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends ForumPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumPostDefaultArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reactions<T extends ForumComment$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, ForumComment$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumComment model
   */
  interface ForumCommentFieldRefs {
    readonly id: FieldRef<"ForumComment", 'String'>
    readonly content: FieldRef<"ForumComment", 'Json'>
    readonly authorId: FieldRef<"ForumComment", 'String'>
    readonly postId: FieldRef<"ForumComment", 'String'>
    readonly createdAt: FieldRef<"ForumComment", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumComment findUnique
   */
  export type ForumCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findUniqueOrThrow
   */
  export type ForumCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findFirst
   */
  export type ForumCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findFirstOrThrow
   */
  export type ForumCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findMany
   */
  export type ForumCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComments to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment create
   */
  export type ForumCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumComment.
     */
    data: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
  }

  /**
   * ForumComment createMany
   */
  export type ForumCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumComments.
     */
    data: ForumCommentCreateManyInput | ForumCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumComment createManyAndReturn
   */
  export type ForumCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * The data used to create many ForumComments.
     */
    data: ForumCommentCreateManyInput | ForumCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumComment update
   */
  export type ForumCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumComment.
     */
    data: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
    /**
     * Choose, which ForumComment to update.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment updateMany
   */
  export type ForumCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumComments.
     */
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyInput>
    /**
     * Filter which ForumComments to update
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to update.
     */
    limit?: number
  }

  /**
   * ForumComment updateManyAndReturn
   */
  export type ForumCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * The data used to update ForumComments.
     */
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyInput>
    /**
     * Filter which ForumComments to update
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumComment upsert
   */
  export type ForumCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumComment to update in case it exists.
     */
    where: ForumCommentWhereUniqueInput
    /**
     * In case the ForumComment found by the `where` argument doesn't exist, create a new ForumComment with this data.
     */
    create: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
    /**
     * In case the ForumComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
  }

  /**
   * ForumComment delete
   */
  export type ForumCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter which ForumComment to delete.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment deleteMany
   */
  export type ForumCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComments to delete
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to delete.
     */
    limit?: number
  }

  /**
   * ForumComment.reactions
   */
  export type ForumComment$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    where?: ForumReactionWhereInput
    orderBy?: ForumReactionOrderByWithRelationInput | ForumReactionOrderByWithRelationInput[]
    cursor?: ForumReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumReactionScalarFieldEnum | ForumReactionScalarFieldEnum[]
  }

  /**
   * ForumComment without action
   */
  export type ForumCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
  }


  /**
   * Model ForumReaction
   */

  export type AggregateForumReaction = {
    _count: ForumReactionCountAggregateOutputType | null
    _min: ForumReactionMinAggregateOutputType | null
    _max: ForumReactionMaxAggregateOutputType | null
  }

  export type ForumReactionMinAggregateOutputType = {
    id: string | null
    emoji: string | null
    userId: string | null
    postId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type ForumReactionMaxAggregateOutputType = {
    id: string | null
    emoji: string | null
    userId: string | null
    postId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type ForumReactionCountAggregateOutputType = {
    id: number
    emoji: number
    userId: number
    postId: number
    commentId: number
    createdAt: number
    _all: number
  }


  export type ForumReactionMinAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    postId?: true
    commentId?: true
    createdAt?: true
  }

  export type ForumReactionMaxAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    postId?: true
    commentId?: true
    createdAt?: true
  }

  export type ForumReactionCountAggregateInputType = {
    id?: true
    emoji?: true
    userId?: true
    postId?: true
    commentId?: true
    createdAt?: true
    _all?: true
  }

  export type ForumReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumReaction to aggregate.
     */
    where?: ForumReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumReactions to fetch.
     */
    orderBy?: ForumReactionOrderByWithRelationInput | ForumReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumReactions
    **/
    _count?: true | ForumReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumReactionMaxAggregateInputType
  }

  export type GetForumReactionAggregateType<T extends ForumReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateForumReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForumReaction[P]>
      : GetScalarType<T[P], AggregateForumReaction[P]>
  }




  export type ForumReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumReactionWhereInput
    orderBy?: ForumReactionOrderByWithAggregationInput | ForumReactionOrderByWithAggregationInput[]
    by: ForumReactionScalarFieldEnum[] | ForumReactionScalarFieldEnum
    having?: ForumReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumReactionCountAggregateInputType | true
    _min?: ForumReactionMinAggregateInputType
    _max?: ForumReactionMaxAggregateInputType
  }

  export type ForumReactionGroupByOutputType = {
    id: string
    emoji: string
    userId: string
    postId: string | null
    commentId: string | null
    createdAt: Date
    _count: ForumReactionCountAggregateOutputType | null
    _min: ForumReactionMinAggregateOutputType | null
    _max: ForumReactionMaxAggregateOutputType | null
  }

  type GetForumReactionGroupByPayload<T extends ForumReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ForumReactionGroupByOutputType[P]>
        }
      >
    >


  export type ForumReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumReaction$postArgs<ExtArgs>
    comment?: boolean | ForumReaction$commentArgs<ExtArgs>
  }, ExtArgs["result"]["forumReaction"]>

  export type ForumReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumReaction$postArgs<ExtArgs>
    comment?: boolean | ForumReaction$commentArgs<ExtArgs>
  }, ExtArgs["result"]["forumReaction"]>

  export type ForumReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumReaction$postArgs<ExtArgs>
    comment?: boolean | ForumReaction$commentArgs<ExtArgs>
  }, ExtArgs["result"]["forumReaction"]>

  export type ForumReactionSelectScalar = {
    id?: boolean
    emoji?: boolean
    userId?: boolean
    postId?: boolean
    commentId?: boolean
    createdAt?: boolean
  }

  export type ForumReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emoji" | "userId" | "postId" | "commentId" | "createdAt", ExtArgs["result"]["forumReaction"]>
  export type ForumReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumReaction$postArgs<ExtArgs>
    comment?: boolean | ForumReaction$commentArgs<ExtArgs>
  }
  export type ForumReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumReaction$postArgs<ExtArgs>
    comment?: boolean | ForumReaction$commentArgs<ExtArgs>
  }
  export type ForumReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | ForumReaction$postArgs<ExtArgs>
    comment?: boolean | ForumReaction$commentArgs<ExtArgs>
  }

  export type $ForumReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumReaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$ForumPostPayload<ExtArgs> | null
      comment: Prisma.$ForumCommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emoji: string
      userId: string
      postId: string | null
      commentId: string | null
      createdAt: Date
    }, ExtArgs["result"]["forumReaction"]>
    composites: {}
  }

  type ForumReactionGetPayload<S extends boolean | null | undefined | ForumReactionDefaultArgs> = $Result.GetResult<Prisma.$ForumReactionPayload, S>

  type ForumReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumReactionCountAggregateInputType | true
    }

  export interface ForumReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumReaction'], meta: { name: 'ForumReaction' } }
    /**
     * Find zero or one ForumReaction that matches the filter.
     * @param {ForumReactionFindUniqueArgs} args - Arguments to find a ForumReaction
     * @example
     * // Get one ForumReaction
     * const forumReaction = await prisma.forumReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumReactionFindUniqueArgs>(args: SelectSubset<T, ForumReactionFindUniqueArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumReaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumReactionFindUniqueOrThrowArgs} args - Arguments to find a ForumReaction
     * @example
     * // Get one ForumReaction
     * const forumReaction = await prisma.forumReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumReactionFindFirstArgs} args - Arguments to find a ForumReaction
     * @example
     * // Get one ForumReaction
     * const forumReaction = await prisma.forumReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumReactionFindFirstArgs>(args?: SelectSubset<T, ForumReactionFindFirstArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumReactionFindFirstOrThrowArgs} args - Arguments to find a ForumReaction
     * @example
     * // Get one ForumReaction
     * const forumReaction = await prisma.forumReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumReactions
     * const forumReactions = await prisma.forumReaction.findMany()
     * 
     * // Get first 10 ForumReactions
     * const forumReactions = await prisma.forumReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumReactionWithIdOnly = await prisma.forumReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumReactionFindManyArgs>(args?: SelectSubset<T, ForumReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumReaction.
     * @param {ForumReactionCreateArgs} args - Arguments to create a ForumReaction.
     * @example
     * // Create one ForumReaction
     * const ForumReaction = await prisma.forumReaction.create({
     *   data: {
     *     // ... data to create a ForumReaction
     *   }
     * })
     * 
     */
    create<T extends ForumReactionCreateArgs>(args: SelectSubset<T, ForumReactionCreateArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumReactions.
     * @param {ForumReactionCreateManyArgs} args - Arguments to create many ForumReactions.
     * @example
     * // Create many ForumReactions
     * const forumReaction = await prisma.forumReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumReactionCreateManyArgs>(args?: SelectSubset<T, ForumReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForumReactions and returns the data saved in the database.
     * @param {ForumReactionCreateManyAndReturnArgs} args - Arguments to create many ForumReactions.
     * @example
     * // Create many ForumReactions
     * const forumReaction = await prisma.forumReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForumReactions and only return the `id`
     * const forumReactionWithIdOnly = await prisma.forumReaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForumReaction.
     * @param {ForumReactionDeleteArgs} args - Arguments to delete one ForumReaction.
     * @example
     * // Delete one ForumReaction
     * const ForumReaction = await prisma.forumReaction.delete({
     *   where: {
     *     // ... filter to delete one ForumReaction
     *   }
     * })
     * 
     */
    delete<T extends ForumReactionDeleteArgs>(args: SelectSubset<T, ForumReactionDeleteArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumReaction.
     * @param {ForumReactionUpdateArgs} args - Arguments to update one ForumReaction.
     * @example
     * // Update one ForumReaction
     * const forumReaction = await prisma.forumReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumReactionUpdateArgs>(args: SelectSubset<T, ForumReactionUpdateArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumReactions.
     * @param {ForumReactionDeleteManyArgs} args - Arguments to filter ForumReactions to delete.
     * @example
     * // Delete a few ForumReactions
     * const { count } = await prisma.forumReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumReactionDeleteManyArgs>(args?: SelectSubset<T, ForumReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumReactions
     * const forumReaction = await prisma.forumReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumReactionUpdateManyArgs>(args: SelectSubset<T, ForumReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumReactions and returns the data updated in the database.
     * @param {ForumReactionUpdateManyAndReturnArgs} args - Arguments to update many ForumReactions.
     * @example
     * // Update many ForumReactions
     * const forumReaction = await prisma.forumReaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForumReactions and only return the `id`
     * const forumReactionWithIdOnly = await prisma.forumReaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForumReaction.
     * @param {ForumReactionUpsertArgs} args - Arguments to update or create a ForumReaction.
     * @example
     * // Update or create a ForumReaction
     * const forumReaction = await prisma.forumReaction.upsert({
     *   create: {
     *     // ... data to create a ForumReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumReaction we want to update
     *   }
     * })
     */
    upsert<T extends ForumReactionUpsertArgs>(args: SelectSubset<T, ForumReactionUpsertArgs<ExtArgs>>): Prisma__ForumReactionClient<$Result.GetResult<Prisma.$ForumReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumReactionCountArgs} args - Arguments to filter ForumReactions to count.
     * @example
     * // Count the number of ForumReactions
     * const count = await prisma.forumReaction.count({
     *   where: {
     *     // ... the filter for the ForumReactions we want to count
     *   }
     * })
    **/
    count<T extends ForumReactionCountArgs>(
      args?: Subset<T, ForumReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumReactionAggregateArgs>(args: Subset<T, ForumReactionAggregateArgs>): Prisma.PrismaPromise<GetForumReactionAggregateType<T>>

    /**
     * Group by ForumReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumReactionGroupByArgs['orderBy'] }
        : { orderBy?: ForumReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForumReaction model
   */
  readonly fields: ForumReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends ForumReaction$postArgs<ExtArgs> = {}>(args?: Subset<T, ForumReaction$postArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends ForumReaction$commentArgs<ExtArgs> = {}>(args?: Subset<T, ForumReaction$commentArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForumReaction model
   */
  interface ForumReactionFieldRefs {
    readonly id: FieldRef<"ForumReaction", 'String'>
    readonly emoji: FieldRef<"ForumReaction", 'String'>
    readonly userId: FieldRef<"ForumReaction", 'String'>
    readonly postId: FieldRef<"ForumReaction", 'String'>
    readonly commentId: FieldRef<"ForumReaction", 'String'>
    readonly createdAt: FieldRef<"ForumReaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForumReaction findUnique
   */
  export type ForumReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * Filter, which ForumReaction to fetch.
     */
    where: ForumReactionWhereUniqueInput
  }

  /**
   * ForumReaction findUniqueOrThrow
   */
  export type ForumReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * Filter, which ForumReaction to fetch.
     */
    where: ForumReactionWhereUniqueInput
  }

  /**
   * ForumReaction findFirst
   */
  export type ForumReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * Filter, which ForumReaction to fetch.
     */
    where?: ForumReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumReactions to fetch.
     */
    orderBy?: ForumReactionOrderByWithRelationInput | ForumReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumReactions.
     */
    cursor?: ForumReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumReactions.
     */
    distinct?: ForumReactionScalarFieldEnum | ForumReactionScalarFieldEnum[]
  }

  /**
   * ForumReaction findFirstOrThrow
   */
  export type ForumReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * Filter, which ForumReaction to fetch.
     */
    where?: ForumReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumReactions to fetch.
     */
    orderBy?: ForumReactionOrderByWithRelationInput | ForumReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumReactions.
     */
    cursor?: ForumReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumReactions.
     */
    distinct?: ForumReactionScalarFieldEnum | ForumReactionScalarFieldEnum[]
  }

  /**
   * ForumReaction findMany
   */
  export type ForumReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * Filter, which ForumReactions to fetch.
     */
    where?: ForumReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumReactions to fetch.
     */
    orderBy?: ForumReactionOrderByWithRelationInput | ForumReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumReactions.
     */
    cursor?: ForumReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumReactions.
     */
    distinct?: ForumReactionScalarFieldEnum | ForumReactionScalarFieldEnum[]
  }

  /**
   * ForumReaction create
   */
  export type ForumReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumReaction.
     */
    data: XOR<ForumReactionCreateInput, ForumReactionUncheckedCreateInput>
  }

  /**
   * ForumReaction createMany
   */
  export type ForumReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumReactions.
     */
    data: ForumReactionCreateManyInput | ForumReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumReaction createManyAndReturn
   */
  export type ForumReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * The data used to create many ForumReactions.
     */
    data: ForumReactionCreateManyInput | ForumReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumReaction update
   */
  export type ForumReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumReaction.
     */
    data: XOR<ForumReactionUpdateInput, ForumReactionUncheckedUpdateInput>
    /**
     * Choose, which ForumReaction to update.
     */
    where: ForumReactionWhereUniqueInput
  }

  /**
   * ForumReaction updateMany
   */
  export type ForumReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumReactions.
     */
    data: XOR<ForumReactionUpdateManyMutationInput, ForumReactionUncheckedUpdateManyInput>
    /**
     * Filter which ForumReactions to update
     */
    where?: ForumReactionWhereInput
    /**
     * Limit how many ForumReactions to update.
     */
    limit?: number
  }

  /**
   * ForumReaction updateManyAndReturn
   */
  export type ForumReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * The data used to update ForumReactions.
     */
    data: XOR<ForumReactionUpdateManyMutationInput, ForumReactionUncheckedUpdateManyInput>
    /**
     * Filter which ForumReactions to update
     */
    where?: ForumReactionWhereInput
    /**
     * Limit how many ForumReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ForumReaction upsert
   */
  export type ForumReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumReaction to update in case it exists.
     */
    where: ForumReactionWhereUniqueInput
    /**
     * In case the ForumReaction found by the `where` argument doesn't exist, create a new ForumReaction with this data.
     */
    create: XOR<ForumReactionCreateInput, ForumReactionUncheckedCreateInput>
    /**
     * In case the ForumReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumReactionUpdateInput, ForumReactionUncheckedUpdateInput>
  }

  /**
   * ForumReaction delete
   */
  export type ForumReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
    /**
     * Filter which ForumReaction to delete.
     */
    where: ForumReactionWhereUniqueInput
  }

  /**
   * ForumReaction deleteMany
   */
  export type ForumReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumReactions to delete
     */
    where?: ForumReactionWhereInput
    /**
     * Limit how many ForumReactions to delete.
     */
    limit?: number
  }

  /**
   * ForumReaction.post
   */
  export type ForumReaction$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    where?: ForumPostWhereInput
  }

  /**
   * ForumReaction.comment
   */
  export type ForumReaction$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
  }

  /**
   * ForumReaction without action
   */
  export type ForumReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumReaction
     */
    select?: ForumReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumReaction
     */
    omit?: ForumReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumReactionInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    type: string | null
    link: string | null
    linkText: string | null
    gradient: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    type: string | null
    link: string | null
    linkText: string | null
    gradient: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    type: number
    link: number
    linkText: number
    gradient: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    link?: true
    linkText?: true
    gradient?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    link?: true
    linkText?: true
    gradient?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    link?: true
    linkText?: true
    gradient?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    type: string
    link: string | null
    linkText: string | null
    gradient: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    link?: boolean
    linkText?: boolean
    gradient?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    link?: boolean
    linkText?: boolean
    gradient?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    link?: boolean
    linkText?: boolean
    gradient?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    link?: boolean
    linkText?: boolean
    gradient?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "type" | "link" | "linkText" | "gradient" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      type: string
      link: string | null
      linkText: string | null
      gradient: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly type: FieldRef<"Announcement", 'String'>
    readonly link: FieldRef<"Announcement", 'String'>
    readonly linkText: FieldRef<"Announcement", 'String'>
    readonly gradient: FieldRef<"Announcement", 'String'>
    readonly isActive: FieldRef<"Announcement", 'Boolean'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    xboxId: 'xboxId',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    authProvider: 'authProvider',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PortalSettingsScalarFieldEnum: {
    id: 'id',
    portalType: 'portalType',
    allowEmailAuth: 'allowEmailAuth',
    allowGoogleAuth: 'allowGoogleAuth',
    allowMicrosoftAuth: 'allowMicrosoftAuth',
    siteName: 'siteName',
    forumEnabled: 'forumEnabled',
    forumPostingRole: 'forumPostingRole',
    updatedAt: 'updatedAt'
  };

  export type PortalSettingsScalarFieldEnum = (typeof PortalSettingsScalarFieldEnum)[keyof typeof PortalSettingsScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color',
    permissions: 'permissions',
    position: 'position',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    displayName: 'displayName',
    bio: 'bio',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    formId: 'formId',
    content: 'content',
    status: 'status',
    reviewNote: 'reviewNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    icon: 'icon',
    color: 'color',
    fields: 'fields',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const ForumPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    pinned: 'pinned',
    locked: 'locked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ForumPostScalarFieldEnum = (typeof ForumPostScalarFieldEnum)[keyof typeof ForumPostScalarFieldEnum]


  export const ForumCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    authorId: 'authorId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ForumCommentScalarFieldEnum = (typeof ForumCommentScalarFieldEnum)[keyof typeof ForumCommentScalarFieldEnum]


  export const ForumReactionScalarFieldEnum: {
    id: 'id',
    emoji: 'emoji',
    userId: 'userId',
    postId: 'postId',
    commentId: 'commentId',
    createdAt: 'createdAt'
  };

  export type ForumReactionScalarFieldEnum = (typeof ForumReactionScalarFieldEnum)[keyof typeof ForumReactionScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    type: 'type',
    link: 'link',
    linkText: 'linkText',
    gradient: 'gradient',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    xboxId?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    submissions?: SubmissionListRelationFilter
    notifications?: NotificationListRelationFilter
    userRoles?: UserRoleListRelationFilter
    forumPosts?: ForumPostListRelationFilter
    forumComments?: ForumCommentListRelationFilter
    forumReactions?: ForumReactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    xboxId?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    userRoles?: UserRoleOrderByRelationAggregateInput
    forumPosts?: ForumPostOrderByRelationAggregateInput
    forumComments?: ForumCommentOrderByRelationAggregateInput
    forumReactions?: ForumReactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    xboxId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    submissions?: SubmissionListRelationFilter
    notifications?: NotificationListRelationFilter
    userRoles?: UserRoleListRelationFilter
    forumPosts?: ForumPostListRelationFilter
    forumComments?: ForumCommentListRelationFilter
    forumReactions?: ForumReactionListRelationFilter
  }, "id" | "xboxId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    xboxId?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    xboxId?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    authProvider?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PortalSettingsWhereInput = {
    AND?: PortalSettingsWhereInput | PortalSettingsWhereInput[]
    OR?: PortalSettingsWhereInput[]
    NOT?: PortalSettingsWhereInput | PortalSettingsWhereInput[]
    id?: StringFilter<"PortalSettings"> | string
    portalType?: StringFilter<"PortalSettings"> | string
    allowEmailAuth?: BoolFilter<"PortalSettings"> | boolean
    allowGoogleAuth?: BoolFilter<"PortalSettings"> | boolean
    allowMicrosoftAuth?: BoolFilter<"PortalSettings"> | boolean
    siteName?: StringFilter<"PortalSettings"> | string
    forumEnabled?: BoolFilter<"PortalSettings"> | boolean
    forumPostingRole?: StringFilter<"PortalSettings"> | string
    updatedAt?: DateTimeFilter<"PortalSettings"> | Date | string
  }

  export type PortalSettingsOrderByWithRelationInput = {
    id?: SortOrder
    portalType?: SortOrder
    allowEmailAuth?: SortOrder
    allowGoogleAuth?: SortOrder
    allowMicrosoftAuth?: SortOrder
    siteName?: SortOrder
    forumEnabled?: SortOrder
    forumPostingRole?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortalSettingsWhereInput | PortalSettingsWhereInput[]
    OR?: PortalSettingsWhereInput[]
    NOT?: PortalSettingsWhereInput | PortalSettingsWhereInput[]
    portalType?: StringFilter<"PortalSettings"> | string
    allowEmailAuth?: BoolFilter<"PortalSettings"> | boolean
    allowGoogleAuth?: BoolFilter<"PortalSettings"> | boolean
    allowMicrosoftAuth?: BoolFilter<"PortalSettings"> | boolean
    siteName?: StringFilter<"PortalSettings"> | string
    forumEnabled?: BoolFilter<"PortalSettings"> | boolean
    forumPostingRole?: StringFilter<"PortalSettings"> | string
    updatedAt?: DateTimeFilter<"PortalSettings"> | Date | string
  }, "id">

  export type PortalSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    portalType?: SortOrder
    allowEmailAuth?: SortOrder
    allowGoogleAuth?: SortOrder
    allowMicrosoftAuth?: SortOrder
    siteName?: SortOrder
    forumEnabled?: SortOrder
    forumPostingRole?: SortOrder
    updatedAt?: SortOrder
    _count?: PortalSettingsCountOrderByAggregateInput
    _max?: PortalSettingsMaxOrderByAggregateInput
    _min?: PortalSettingsMinOrderByAggregateInput
  }

  export type PortalSettingsScalarWhereWithAggregatesInput = {
    AND?: PortalSettingsScalarWhereWithAggregatesInput | PortalSettingsScalarWhereWithAggregatesInput[]
    OR?: PortalSettingsScalarWhereWithAggregatesInput[]
    NOT?: PortalSettingsScalarWhereWithAggregatesInput | PortalSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortalSettings"> | string
    portalType?: StringWithAggregatesFilter<"PortalSettings"> | string
    allowEmailAuth?: BoolWithAggregatesFilter<"PortalSettings"> | boolean
    allowGoogleAuth?: BoolWithAggregatesFilter<"PortalSettings"> | boolean
    allowMicrosoftAuth?: BoolWithAggregatesFilter<"PortalSettings"> | boolean
    siteName?: StringWithAggregatesFilter<"PortalSettings"> | string
    forumEnabled?: BoolWithAggregatesFilter<"PortalSettings"> | boolean
    forumPostingRole?: StringWithAggregatesFilter<"PortalSettings"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortalSettings"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    color?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonFilter<"Role">
    position?: IntFilter<"Role"> | number
    isDefault?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    permissions?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    color?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonFilter<"Role">
    position?: IntFilter<"Role"> | number
    isDefault?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    permissions?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    color?: StringNullableWithAggregatesFilter<"Role"> | string | null
    permissions?: JsonWithAggregatesFilter<"Role">
    position?: IntWithAggregatesFilter<"Role"> | number
    isDefault?: BoolWithAggregatesFilter<"Role"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    displayName?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    profilePicture?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    displayName?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    profilePicture?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    displayName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    formId?: StringFilter<"Submission"> | string
    content?: JsonFilter<"Submission">
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    reviewNote?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    formId?: SortOrder
    content?: SortOrder
    status?: SortOrder
    reviewNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    form?: FormOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    formId?: StringFilter<"Submission"> | string
    content?: JsonFilter<"Submission">
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    reviewNote?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    form?: XOR<FormScalarRelationFilter, FormWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    formId?: SortOrder
    content?: SortOrder
    status?: SortOrder
    reviewNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    formId?: StringWithAggregatesFilter<"Submission"> | string
    content?: JsonWithAggregatesFilter<"Submission">
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    reviewNote?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    isActive?: BoolFilter<"Form"> | boolean
    icon?: StringNullableFilter<"Form"> | string | null
    color?: StringNullableFilter<"Form"> | string | null
    fields?: JsonFilter<"Form">
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    submissions?: SubmissionListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    fields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    isActive?: BoolFilter<"Form"> | boolean
    icon?: StringNullableFilter<"Form"> | string | null
    color?: StringNullableFilter<"Form"> | string | null
    fields?: JsonFilter<"Form">
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    fields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    title?: StringWithAggregatesFilter<"Form"> | string
    description?: StringNullableWithAggregatesFilter<"Form"> | string | null
    isActive?: BoolWithAggregatesFilter<"Form"> | boolean
    icon?: StringNullableWithAggregatesFilter<"Form"> | string | null
    color?: StringNullableWithAggregatesFilter<"Form"> | string | null
    fields?: JsonWithAggregatesFilter<"Form">
    createdAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
  }

  export type ForumPostWhereInput = {
    AND?: ForumPostWhereInput | ForumPostWhereInput[]
    OR?: ForumPostWhereInput[]
    NOT?: ForumPostWhereInput | ForumPostWhereInput[]
    id?: StringFilter<"ForumPost"> | string
    title?: StringFilter<"ForumPost"> | string
    content?: JsonFilter<"ForumPost">
    authorId?: StringFilter<"ForumPost"> | string
    pinned?: BoolFilter<"ForumPost"> | boolean
    locked?: BoolFilter<"ForumPost"> | boolean
    createdAt?: DateTimeFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: ForumCommentListRelationFilter
    reactions?: ForumReactionListRelationFilter
  }

  export type ForumPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: ForumCommentOrderByRelationAggregateInput
    reactions?: ForumReactionOrderByRelationAggregateInput
  }

  export type ForumPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumPostWhereInput | ForumPostWhereInput[]
    OR?: ForumPostWhereInput[]
    NOT?: ForumPostWhereInput | ForumPostWhereInput[]
    title?: StringFilter<"ForumPost"> | string
    content?: JsonFilter<"ForumPost">
    authorId?: StringFilter<"ForumPost"> | string
    pinned?: BoolFilter<"ForumPost"> | boolean
    locked?: BoolFilter<"ForumPost"> | boolean
    createdAt?: DateTimeFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: ForumCommentListRelationFilter
    reactions?: ForumReactionListRelationFilter
  }, "id">

  export type ForumPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ForumPostCountOrderByAggregateInput
    _max?: ForumPostMaxOrderByAggregateInput
    _min?: ForumPostMinOrderByAggregateInput
  }

  export type ForumPostScalarWhereWithAggregatesInput = {
    AND?: ForumPostScalarWhereWithAggregatesInput | ForumPostScalarWhereWithAggregatesInput[]
    OR?: ForumPostScalarWhereWithAggregatesInput[]
    NOT?: ForumPostScalarWhereWithAggregatesInput | ForumPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumPost"> | string
    title?: StringWithAggregatesFilter<"ForumPost"> | string
    content?: JsonWithAggregatesFilter<"ForumPost">
    authorId?: StringWithAggregatesFilter<"ForumPost"> | string
    pinned?: BoolWithAggregatesFilter<"ForumPost"> | boolean
    locked?: BoolWithAggregatesFilter<"ForumPost"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumPost"> | Date | string
  }

  export type ForumCommentWhereInput = {
    AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
    OR?: ForumCommentWhereInput[]
    NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
    id?: StringFilter<"ForumComment"> | string
    content?: JsonFilter<"ForumComment">
    authorId?: StringFilter<"ForumComment"> | string
    postId?: StringFilter<"ForumComment"> | string
    createdAt?: DateTimeFilter<"ForumComment"> | Date | string
    updatedAt?: DateTimeFilter<"ForumComment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<ForumPostScalarRelationFilter, ForumPostWhereInput>
    reactions?: ForumReactionListRelationFilter
  }

  export type ForumCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    post?: ForumPostOrderByWithRelationInput
    reactions?: ForumReactionOrderByRelationAggregateInput
  }

  export type ForumCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
    OR?: ForumCommentWhereInput[]
    NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
    content?: JsonFilter<"ForumComment">
    authorId?: StringFilter<"ForumComment"> | string
    postId?: StringFilter<"ForumComment"> | string
    createdAt?: DateTimeFilter<"ForumComment"> | Date | string
    updatedAt?: DateTimeFilter<"ForumComment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<ForumPostScalarRelationFilter, ForumPostWhereInput>
    reactions?: ForumReactionListRelationFilter
  }, "id">

  export type ForumCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ForumCommentCountOrderByAggregateInput
    _max?: ForumCommentMaxOrderByAggregateInput
    _min?: ForumCommentMinOrderByAggregateInput
  }

  export type ForumCommentScalarWhereWithAggregatesInput = {
    AND?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
    OR?: ForumCommentScalarWhereWithAggregatesInput[]
    NOT?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumComment"> | string
    content?: JsonWithAggregatesFilter<"ForumComment">
    authorId?: StringWithAggregatesFilter<"ForumComment"> | string
    postId?: StringWithAggregatesFilter<"ForumComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ForumComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ForumComment"> | Date | string
  }

  export type ForumReactionWhereInput = {
    AND?: ForumReactionWhereInput | ForumReactionWhereInput[]
    OR?: ForumReactionWhereInput[]
    NOT?: ForumReactionWhereInput | ForumReactionWhereInput[]
    id?: StringFilter<"ForumReaction"> | string
    emoji?: StringFilter<"ForumReaction"> | string
    userId?: StringFilter<"ForumReaction"> | string
    postId?: StringNullableFilter<"ForumReaction"> | string | null
    commentId?: StringNullableFilter<"ForumReaction"> | string | null
    createdAt?: DateTimeFilter<"ForumReaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<ForumPostNullableScalarRelationFilter, ForumPostWhereInput> | null
    comment?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
  }

  export type ForumReactionOrderByWithRelationInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: ForumPostOrderByWithRelationInput
    comment?: ForumCommentOrderByWithRelationInput
  }

  export type ForumReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    emoji_userId_postId?: ForumReactionEmojiUserIdPostIdCompoundUniqueInput
    emoji_userId_commentId?: ForumReactionEmojiUserIdCommentIdCompoundUniqueInput
    AND?: ForumReactionWhereInput | ForumReactionWhereInput[]
    OR?: ForumReactionWhereInput[]
    NOT?: ForumReactionWhereInput | ForumReactionWhereInput[]
    emoji?: StringFilter<"ForumReaction"> | string
    userId?: StringFilter<"ForumReaction"> | string
    postId?: StringNullableFilter<"ForumReaction"> | string | null
    commentId?: StringNullableFilter<"ForumReaction"> | string | null
    createdAt?: DateTimeFilter<"ForumReaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<ForumPostNullableScalarRelationFilter, ForumPostWhereInput> | null
    comment?: XOR<ForumCommentNullableScalarRelationFilter, ForumCommentWhereInput> | null
  }, "id" | "emoji_userId_postId" | "emoji_userId_commentId">

  export type ForumReactionOrderByWithAggregationInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ForumReactionCountOrderByAggregateInput
    _max?: ForumReactionMaxOrderByAggregateInput
    _min?: ForumReactionMinOrderByAggregateInput
  }

  export type ForumReactionScalarWhereWithAggregatesInput = {
    AND?: ForumReactionScalarWhereWithAggregatesInput | ForumReactionScalarWhereWithAggregatesInput[]
    OR?: ForumReactionScalarWhereWithAggregatesInput[]
    NOT?: ForumReactionScalarWhereWithAggregatesInput | ForumReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForumReaction"> | string
    emoji?: StringWithAggregatesFilter<"ForumReaction"> | string
    userId?: StringWithAggregatesFilter<"ForumReaction"> | string
    postId?: StringNullableWithAggregatesFilter<"ForumReaction"> | string | null
    commentId?: StringNullableWithAggregatesFilter<"ForumReaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ForumReaction"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    type?: StringFilter<"Announcement"> | string
    link?: StringNullableFilter<"Announcement"> | string | null
    linkText?: StringNullableFilter<"Announcement"> | string | null
    gradient?: StringNullableFilter<"Announcement"> | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    linkText?: SortOrderInput | SortOrder
    gradient?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    type?: StringFilter<"Announcement"> | string
    link?: StringNullableFilter<"Announcement"> | string | null
    linkText?: StringNullableFilter<"Announcement"> | string | null
    gradient?: StringNullableFilter<"Announcement"> | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    linkText?: SortOrderInput | SortOrder
    gradient?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    type?: StringWithAggregatesFilter<"Announcement"> | string
    link?: StringNullableWithAggregatesFilter<"Announcement"> | string | null
    linkText?: StringNullableWithAggregatesFilter<"Announcement"> | string | null
    gradient?: StringNullableWithAggregatesFilter<"Announcement"> | string | null
    isActive?: BoolWithAggregatesFilter<"Announcement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalSettingsCreateInput = {
    id?: string
    portalType?: string
    allowEmailAuth?: boolean
    allowGoogleAuth?: boolean
    allowMicrosoftAuth?: boolean
    siteName?: string
    forumEnabled?: boolean
    forumPostingRole?: string
    updatedAt?: Date | string
  }

  export type PortalSettingsUncheckedCreateInput = {
    id?: string
    portalType?: string
    allowEmailAuth?: boolean
    allowGoogleAuth?: boolean
    allowMicrosoftAuth?: boolean
    siteName?: string
    forumEnabled?: boolean
    forumPostingRole?: string
    updatedAt?: Date | string
  }

  export type PortalSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portalType?: StringFieldUpdateOperationsInput | string
    allowEmailAuth?: BoolFieldUpdateOperationsInput | boolean
    allowGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    allowMicrosoftAuth?: BoolFieldUpdateOperationsInput | boolean
    siteName?: StringFieldUpdateOperationsInput | string
    forumEnabled?: BoolFieldUpdateOperationsInput | boolean
    forumPostingRole?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portalType?: StringFieldUpdateOperationsInput | string
    allowEmailAuth?: BoolFieldUpdateOperationsInput | boolean
    allowGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    allowMicrosoftAuth?: BoolFieldUpdateOperationsInput | boolean
    siteName?: StringFieldUpdateOperationsInput | string
    forumEnabled?: BoolFieldUpdateOperationsInput | boolean
    forumPostingRole?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalSettingsCreateManyInput = {
    id?: string
    portalType?: string
    allowEmailAuth?: boolean
    allowGoogleAuth?: boolean
    allowMicrosoftAuth?: boolean
    siteName?: string
    forumEnabled?: boolean
    forumPostingRole?: string
    updatedAt?: Date | string
  }

  export type PortalSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    portalType?: StringFieldUpdateOperationsInput | string
    allowEmailAuth?: BoolFieldUpdateOperationsInput | boolean
    allowGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    allowMicrosoftAuth?: BoolFieldUpdateOperationsInput | boolean
    siteName?: StringFieldUpdateOperationsInput | string
    forumEnabled?: BoolFieldUpdateOperationsInput | boolean
    forumPostingRole?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    portalType?: StringFieldUpdateOperationsInput | string
    allowEmailAuth?: BoolFieldUpdateOperationsInput | boolean
    allowGoogleAuth?: BoolFieldUpdateOperationsInput | boolean
    allowMicrosoftAuth?: BoolFieldUpdateOperationsInput | boolean
    siteName?: StringFieldUpdateOperationsInput | string
    forumEnabled?: BoolFieldUpdateOperationsInput | boolean
    forumPostingRole?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    id?: string
    displayName?: string | null
    bio?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    displayName?: string | null
    bio?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    displayName?: string | null
    bio?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type?: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId?: string | null
    title: string
    message: string
    type?: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId?: string | null
    title: string
    message: string
    type?: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    form: FormCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    formId: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    form?: FormUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    formId: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    icon?: string | null
    color?: string | null
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    icon?: string | null
    color?: string | null
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    icon?: string | null
    color?: string | null
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostCreateInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutForumPostsInput
    comments?: ForumCommentCreateNestedManyWithoutPostInput
    reactions?: ForumReactionCreateNestedManyWithoutPostInput
  }

  export type ForumPostUncheckedCreateInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ForumCommentUncheckedCreateNestedManyWithoutPostInput
    reactions?: ForumReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type ForumPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutForumPostsNestedInput
    comments?: ForumCommentUpdateManyWithoutPostNestedInput
    reactions?: ForumReactionUpdateManyWithoutPostNestedInput
  }

  export type ForumPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ForumCommentUncheckedUpdateManyWithoutPostNestedInput
    reactions?: ForumReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ForumPostCreateManyInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutForumCommentsInput
    post: ForumPostCreateNestedOneWithoutCommentsInput
    reactions?: ForumReactionCreateNestedManyWithoutCommentInput
  }

  export type ForumCommentUncheckedCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ForumReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type ForumCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutForumCommentsNestedInput
    post?: ForumPostUpdateOneRequiredWithoutCommentsNestedInput
    reactions?: ForumReactionUpdateManyWithoutCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ForumReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type ForumCommentCreateManyInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutForumReactionsInput
    post?: ForumPostCreateNestedOneWithoutReactionsInput
    comment?: ForumCommentCreateNestedOneWithoutReactionsInput
  }

  export type ForumReactionUncheckedCreateInput = {
    id?: string
    emoji: string
    userId: string
    postId?: string | null
    commentId?: string | null
    createdAt?: Date | string
  }

  export type ForumReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutForumReactionsNestedInput
    post?: ForumPostUpdateOneWithoutReactionsNestedInput
    comment?: ForumCommentUpdateOneWithoutReactionsNestedInput
  }

  export type ForumReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionCreateManyInput = {
    id?: string
    emoji: string
    userId: string
    postId?: string | null
    commentId?: string | null
    createdAt?: Date | string
  }

  export type ForumReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    type?: string
    link?: string | null
    linkText?: string | null
    gradient?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    type?: string
    link?: string | null
    linkText?: string | null
    gradient?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    type?: string
    link?: string | null
    linkText?: string | null
    gradient?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type ForumPostListRelationFilter = {
    every?: ForumPostWhereInput
    some?: ForumPostWhereInput
    none?: ForumPostWhereInput
  }

  export type ForumCommentListRelationFilter = {
    every?: ForumCommentWhereInput
    some?: ForumCommentWhereInput
    none?: ForumCommentWhereInput
  }

  export type ForumReactionListRelationFilter = {
    every?: ForumReactionWhereInput
    some?: ForumReactionWhereInput
    none?: ForumReactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    xboxId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    xboxId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    xboxId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PortalSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    portalType?: SortOrder
    allowEmailAuth?: SortOrder
    allowGoogleAuth?: SortOrder
    allowMicrosoftAuth?: SortOrder
    siteName?: SortOrder
    forumEnabled?: SortOrder
    forumPostingRole?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    portalType?: SortOrder
    allowEmailAuth?: SortOrder
    allowGoogleAuth?: SortOrder
    allowMicrosoftAuth?: SortOrder
    siteName?: SortOrder
    forumEnabled?: SortOrder
    forumPostingRole?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    portalType?: SortOrder
    allowEmailAuth?: SortOrder
    allowGoogleAuth?: SortOrder
    allowMicrosoftAuth?: SortOrder
    siteName?: SortOrder
    forumEnabled?: SortOrder
    forumPostingRole?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    permissions?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    position?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    position?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type FormScalarRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    formId?: SortOrder
    content?: SortOrder
    status?: SortOrder
    reviewNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    formId?: SortOrder
    status?: SortOrder
    reviewNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    formId?: SortOrder
    status?: SortOrder
    reviewNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    fields?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    pinned?: SortOrder
    locked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostScalarRelationFilter = {
    is?: ForumPostWhereInput
    isNot?: ForumPostWhereInput
  }

  export type ForumCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumCommentMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ForumPostNullableScalarRelationFilter = {
    is?: ForumPostWhereInput | null
    isNot?: ForumPostWhereInput | null
  }

  export type ForumCommentNullableScalarRelationFilter = {
    is?: ForumCommentWhereInput | null
    isNot?: ForumCommentWhereInput | null
  }

  export type ForumReactionEmojiUserIdPostIdCompoundUniqueInput = {
    emoji: string
    userId: string
    postId: string
  }

  export type ForumReactionEmojiUserIdCommentIdCompoundUniqueInput = {
    emoji: string
    userId: string
    commentId: string
  }

  export type ForumReactionCountOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ForumReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ForumReactionMinOrderByAggregateInput = {
    id?: SortOrder
    emoji?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    link?: SortOrder
    linkText?: SortOrder
    gradient?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    link?: SortOrder
    linkText?: SortOrder
    gradient?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    link?: SortOrder
    linkText?: SortOrder
    gradient?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type ForumPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type ForumCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumReactionCreateWithoutUserInput, ForumReactionUncheckedCreateWithoutUserInput> | ForumReactionCreateWithoutUserInput[] | ForumReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutUserInput | ForumReactionCreateOrConnectWithoutUserInput[]
    createMany?: ForumReactionCreateManyUserInputEnvelope
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type ForumPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  }

  export type ForumCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumReactionCreateWithoutUserInput, ForumReactionUncheckedCreateWithoutUserInput> | ForumReactionCreateWithoutUserInput[] | ForumReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutUserInput | ForumReactionCreateOrConnectWithoutUserInput[]
    createMany?: ForumReactionCreateManyUserInputEnvelope
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type ForumPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutAuthorInput | ForumPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutAuthorInput | ForumPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutAuthorInput | ForumPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type ForumCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutAuthorInput | ForumCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutAuthorInput | ForumCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutAuthorInput | ForumCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumReactionCreateWithoutUserInput, ForumReactionUncheckedCreateWithoutUserInput> | ForumReactionCreateWithoutUserInput[] | ForumReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutUserInput | ForumReactionCreateOrConnectWithoutUserInput[]
    upsert?: ForumReactionUpsertWithWhereUniqueWithoutUserInput | ForumReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumReactionCreateManyUserInputEnvelope
    set?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    disconnect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    delete?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    update?: ForumReactionUpdateWithWhereUniqueWithoutUserInput | ForumReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumReactionUpdateManyWithWhereWithoutUserInput | ForumReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type ForumPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput> | ForumPostCreateWithoutAuthorInput[] | ForumPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumPostCreateOrConnectWithoutAuthorInput | ForumPostCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumPostUpsertWithWhereUniqueWithoutAuthorInput | ForumPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumPostCreateManyAuthorInputEnvelope
    set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
    update?: ForumPostUpdateWithWhereUniqueWithoutAuthorInput | ForumPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumPostUpdateManyWithWhereWithoutAuthorInput | ForumPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  }

  export type ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput> | ForumCommentCreateWithoutAuthorInput[] | ForumCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutAuthorInput | ForumCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutAuthorInput | ForumCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ForumCommentCreateManyAuthorInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutAuthorInput | ForumCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutAuthorInput | ForumCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumReactionCreateWithoutUserInput, ForumReactionUncheckedCreateWithoutUserInput> | ForumReactionCreateWithoutUserInput[] | ForumReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutUserInput | ForumReactionCreateOrConnectWithoutUserInput[]
    upsert?: ForumReactionUpsertWithWhereUniqueWithoutUserInput | ForumReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumReactionCreateManyUserInputEnvelope
    set?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    disconnect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    delete?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    update?: ForumReactionUpdateWithWhereUniqueWithoutUserInput | ForumReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumReactionUpdateManyWithWhereWithoutUserInput | ForumReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRolesInput
    upsert?: UserUpsertWithoutUserRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRolesInput, UserUpdateWithoutUserRolesInput>, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type FormCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutSubmissionsInput
    connect?: FormWhereUniqueInput
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type FormUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: FormCreateOrConnectWithoutSubmissionsInput
    upsert?: FormUpsertWithoutSubmissionsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutSubmissionsInput, FormUpdateWithoutSubmissionsInput>, FormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type SubmissionCreateNestedManyWithoutFormInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUpdateManyWithoutFormNestedInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutFormInput | SubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutFormInput | SubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutFormInput | SubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput> | SubmissionCreateWithoutFormInput[] | SubmissionUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutFormInput | SubmissionCreateOrConnectWithoutFormInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutFormInput | SubmissionUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: SubmissionCreateManyFormInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutFormInput | SubmissionUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutFormInput | SubmissionUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutForumPostsInput = {
    create?: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ForumCommentCreateNestedManyWithoutPostInput = {
    create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
    createMany?: ForumCommentCreateManyPostInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumReactionCreateNestedManyWithoutPostInput = {
    create?: XOR<ForumReactionCreateWithoutPostInput, ForumReactionUncheckedCreateWithoutPostInput> | ForumReactionCreateWithoutPostInput[] | ForumReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutPostInput | ForumReactionCreateOrConnectWithoutPostInput[]
    createMany?: ForumReactionCreateManyPostInputEnvelope
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
  }

  export type ForumCommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
    createMany?: ForumCommentCreateManyPostInputEnvelope
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  }

  export type ForumReactionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ForumReactionCreateWithoutPostInput, ForumReactionUncheckedCreateWithoutPostInput> | ForumReactionCreateWithoutPostInput[] | ForumReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutPostInput | ForumReactionCreateOrConnectWithoutPostInput[]
    createMany?: ForumReactionCreateManyPostInputEnvelope
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutForumPostsNestedInput = {
    create?: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumPostsInput
    upsert?: UserUpsertWithoutForumPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumPostsInput, UserUpdateWithoutForumPostsInput>, UserUncheckedUpdateWithoutForumPostsInput>
  }

  export type ForumCommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutPostInput | ForumCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ForumCommentCreateManyPostInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutPostInput | ForumCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutPostInput | ForumCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumReactionUpdateManyWithoutPostNestedInput = {
    create?: XOR<ForumReactionCreateWithoutPostInput, ForumReactionUncheckedCreateWithoutPostInput> | ForumReactionCreateWithoutPostInput[] | ForumReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutPostInput | ForumReactionCreateOrConnectWithoutPostInput[]
    upsert?: ForumReactionUpsertWithWhereUniqueWithoutPostInput | ForumReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ForumReactionCreateManyPostInputEnvelope
    set?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    disconnect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    delete?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    update?: ForumReactionUpdateWithWhereUniqueWithoutPostInput | ForumReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ForumReactionUpdateManyWithWhereWithoutPostInput | ForumReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
  }

  export type ForumCommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
    upsert?: ForumCommentUpsertWithWhereUniqueWithoutPostInput | ForumCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ForumCommentCreateManyPostInputEnvelope
    set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
    update?: ForumCommentUpdateWithWhereUniqueWithoutPostInput | ForumCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ForumCommentUpdateManyWithWhereWithoutPostInput | ForumCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  }

  export type ForumReactionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ForumReactionCreateWithoutPostInput, ForumReactionUncheckedCreateWithoutPostInput> | ForumReactionCreateWithoutPostInput[] | ForumReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutPostInput | ForumReactionCreateOrConnectWithoutPostInput[]
    upsert?: ForumReactionUpsertWithWhereUniqueWithoutPostInput | ForumReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ForumReactionCreateManyPostInputEnvelope
    set?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    disconnect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    delete?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    update?: ForumReactionUpdateWithWhereUniqueWithoutPostInput | ForumReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ForumReactionUpdateManyWithWhereWithoutPostInput | ForumReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutForumCommentsInput = {
    create?: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ForumPostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ForumPostCreateOrConnectWithoutCommentsInput
    connect?: ForumPostWhereUniqueInput
  }

  export type ForumReactionCreateNestedManyWithoutCommentInput = {
    create?: XOR<ForumReactionCreateWithoutCommentInput, ForumReactionUncheckedCreateWithoutCommentInput> | ForumReactionCreateWithoutCommentInput[] | ForumReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutCommentInput | ForumReactionCreateOrConnectWithoutCommentInput[]
    createMany?: ForumReactionCreateManyCommentInputEnvelope
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
  }

  export type ForumReactionUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<ForumReactionCreateWithoutCommentInput, ForumReactionUncheckedCreateWithoutCommentInput> | ForumReactionCreateWithoutCommentInput[] | ForumReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutCommentInput | ForumReactionCreateOrConnectWithoutCommentInput[]
    createMany?: ForumReactionCreateManyCommentInputEnvelope
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutForumCommentsNestedInput = {
    create?: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumCommentsInput
    upsert?: UserUpsertWithoutForumCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumCommentsInput, UserUpdateWithoutForumCommentsInput>, UserUncheckedUpdateWithoutForumCommentsInput>
  }

  export type ForumPostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ForumPostCreateOrConnectWithoutCommentsInput
    upsert?: ForumPostUpsertWithoutCommentsInput
    connect?: ForumPostWhereUniqueInput
    update?: XOR<XOR<ForumPostUpdateToOneWithWhereWithoutCommentsInput, ForumPostUpdateWithoutCommentsInput>, ForumPostUncheckedUpdateWithoutCommentsInput>
  }

  export type ForumReactionUpdateManyWithoutCommentNestedInput = {
    create?: XOR<ForumReactionCreateWithoutCommentInput, ForumReactionUncheckedCreateWithoutCommentInput> | ForumReactionCreateWithoutCommentInput[] | ForumReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutCommentInput | ForumReactionCreateOrConnectWithoutCommentInput[]
    upsert?: ForumReactionUpsertWithWhereUniqueWithoutCommentInput | ForumReactionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: ForumReactionCreateManyCommentInputEnvelope
    set?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    disconnect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    delete?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    update?: ForumReactionUpdateWithWhereUniqueWithoutCommentInput | ForumReactionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: ForumReactionUpdateManyWithWhereWithoutCommentInput | ForumReactionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
  }

  export type ForumReactionUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<ForumReactionCreateWithoutCommentInput, ForumReactionUncheckedCreateWithoutCommentInput> | ForumReactionCreateWithoutCommentInput[] | ForumReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ForumReactionCreateOrConnectWithoutCommentInput | ForumReactionCreateOrConnectWithoutCommentInput[]
    upsert?: ForumReactionUpsertWithWhereUniqueWithoutCommentInput | ForumReactionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: ForumReactionCreateManyCommentInputEnvelope
    set?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    disconnect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    delete?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    connect?: ForumReactionWhereUniqueInput | ForumReactionWhereUniqueInput[]
    update?: ForumReactionUpdateWithWhereUniqueWithoutCommentInput | ForumReactionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: ForumReactionUpdateManyWithWhereWithoutCommentInput | ForumReactionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutForumReactionsInput = {
    create?: XOR<UserCreateWithoutForumReactionsInput, UserUncheckedCreateWithoutForumReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type ForumPostCreateNestedOneWithoutReactionsInput = {
    create?: XOR<ForumPostCreateWithoutReactionsInput, ForumPostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ForumPostCreateOrConnectWithoutReactionsInput
    connect?: ForumPostWhereUniqueInput
  }

  export type ForumCommentCreateNestedOneWithoutReactionsInput = {
    create?: XOR<ForumCommentCreateWithoutReactionsInput, ForumCommentUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutReactionsInput
    connect?: ForumCommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutForumReactionsNestedInput = {
    create?: XOR<UserCreateWithoutForumReactionsInput, UserUncheckedCreateWithoutForumReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumReactionsInput
    upsert?: UserUpsertWithoutForumReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumReactionsInput, UserUpdateWithoutForumReactionsInput>, UserUncheckedUpdateWithoutForumReactionsInput>
  }

  export type ForumPostUpdateOneWithoutReactionsNestedInput = {
    create?: XOR<ForumPostCreateWithoutReactionsInput, ForumPostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ForumPostCreateOrConnectWithoutReactionsInput
    upsert?: ForumPostUpsertWithoutReactionsInput
    disconnect?: ForumPostWhereInput | boolean
    delete?: ForumPostWhereInput | boolean
    connect?: ForumPostWhereUniqueInput
    update?: XOR<XOR<ForumPostUpdateToOneWithWhereWithoutReactionsInput, ForumPostUpdateWithoutReactionsInput>, ForumPostUncheckedUpdateWithoutReactionsInput>
  }

  export type ForumCommentUpdateOneWithoutReactionsNestedInput = {
    create?: XOR<ForumCommentCreateWithoutReactionsInput, ForumCommentUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ForumCommentCreateOrConnectWithoutReactionsInput
    upsert?: ForumCommentUpsertWithoutReactionsInput
    disconnect?: ForumCommentWhereInput | boolean
    delete?: ForumCommentWhereInput | boolean
    connect?: ForumCommentWhereUniqueInput
    update?: XOR<XOR<ForumCommentUpdateToOneWithWhereWithoutReactionsInput, ForumCommentUpdateWithoutReactionsInput>, ForumCommentUncheckedUpdateWithoutReactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    displayName?: string | null
    bio?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    displayName?: string | null
    bio?: string | null
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    formId: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type?: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type?: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ForumPostCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ForumCommentCreateNestedManyWithoutPostInput
    reactions?: ForumReactionCreateNestedManyWithoutPostInput
  }

  export type ForumPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ForumCommentUncheckedCreateNestedManyWithoutPostInput
    reactions?: ForumReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type ForumPostCreateOrConnectWithoutAuthorInput = {
    where: ForumPostWhereUniqueInput
    create: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput>
  }

  export type ForumPostCreateManyAuthorInputEnvelope = {
    data: ForumPostCreateManyAuthorInput | ForumPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ForumCommentCreateWithoutAuthorInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    post: ForumPostCreateNestedOneWithoutCommentsInput
    reactions?: ForumReactionCreateNestedManyWithoutCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ForumReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutAuthorInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput>
  }

  export type ForumCommentCreateManyAuthorInputEnvelope = {
    data: ForumCommentCreateManyAuthorInput | ForumCommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ForumReactionCreateWithoutUserInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    post?: ForumPostCreateNestedOneWithoutReactionsInput
    comment?: ForumCommentCreateNestedOneWithoutReactionsInput
  }

  export type ForumReactionUncheckedCreateWithoutUserInput = {
    id?: string
    emoji: string
    postId?: string | null
    commentId?: string | null
    createdAt?: Date | string
  }

  export type ForumReactionCreateOrConnectWithoutUserInput = {
    where: ForumReactionWhereUniqueInput
    create: XOR<ForumReactionCreateWithoutUserInput, ForumReactionUncheckedCreateWithoutUserInput>
  }

  export type ForumReactionCreateManyUserInputEnvelope = {
    data: ForumReactionCreateManyUserInput | ForumReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    formId?: StringFilter<"Submission"> | string
    content?: JsonFilter<"Submission">
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    reviewNote?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
  }

  export type ForumPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ForumPostWhereUniqueInput
    update: XOR<ForumPostUpdateWithoutAuthorInput, ForumPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<ForumPostCreateWithoutAuthorInput, ForumPostUncheckedCreateWithoutAuthorInput>
  }

  export type ForumPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ForumPostWhereUniqueInput
    data: XOR<ForumPostUpdateWithoutAuthorInput, ForumPostUncheckedUpdateWithoutAuthorInput>
  }

  export type ForumPostUpdateManyWithWhereWithoutAuthorInput = {
    where: ForumPostScalarWhereInput
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ForumPostScalarWhereInput = {
    AND?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
    OR?: ForumPostScalarWhereInput[]
    NOT?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
    id?: StringFilter<"ForumPost"> | string
    title?: StringFilter<"ForumPost"> | string
    content?: JsonFilter<"ForumPost">
    authorId?: StringFilter<"ForumPost"> | string
    pinned?: BoolFilter<"ForumPost"> | boolean
    locked?: BoolFilter<"ForumPost"> | boolean
    createdAt?: DateTimeFilter<"ForumPost"> | Date | string
    updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
  }

  export type ForumCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ForumCommentWhereUniqueInput
    update: XOR<ForumCommentUpdateWithoutAuthorInput, ForumCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<ForumCommentCreateWithoutAuthorInput, ForumCommentUncheckedCreateWithoutAuthorInput>
  }

  export type ForumCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ForumCommentWhereUniqueInput
    data: XOR<ForumCommentUpdateWithoutAuthorInput, ForumCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type ForumCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: ForumCommentScalarWhereInput
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ForumCommentScalarWhereInput = {
    AND?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
    OR?: ForumCommentScalarWhereInput[]
    NOT?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
    id?: StringFilter<"ForumComment"> | string
    content?: JsonFilter<"ForumComment">
    authorId?: StringFilter<"ForumComment"> | string
    postId?: StringFilter<"ForumComment"> | string
    createdAt?: DateTimeFilter<"ForumComment"> | Date | string
    updatedAt?: DateTimeFilter<"ForumComment"> | Date | string
  }

  export type ForumReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ForumReactionWhereUniqueInput
    update: XOR<ForumReactionUpdateWithoutUserInput, ForumReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ForumReactionCreateWithoutUserInput, ForumReactionUncheckedCreateWithoutUserInput>
  }

  export type ForumReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ForumReactionWhereUniqueInput
    data: XOR<ForumReactionUpdateWithoutUserInput, ForumReactionUncheckedUpdateWithoutUserInput>
  }

  export type ForumReactionUpdateManyWithWhereWithoutUserInput = {
    where: ForumReactionScalarWhereInput
    data: XOR<ForumReactionUpdateManyMutationInput, ForumReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ForumReactionScalarWhereInput = {
    AND?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
    OR?: ForumReactionScalarWhereInput[]
    NOT?: ForumReactionScalarWhereInput | ForumReactionScalarWhereInput[]
    id?: StringFilter<"ForumReaction"> | string
    emoji?: StringFilter<"ForumReaction"> | string
    userId?: StringFilter<"ForumReaction"> | string
    postId?: StringNullableFilter<"ForumReaction"> | string | null
    commentId?: StringNullableFilter<"ForumReaction"> | string | null
    createdAt?: DateTimeFilter<"ForumReaction"> | Date | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutUserRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutUserRolesInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRolesInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutUserRolesInput = {
    update: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<UserCreateWithoutUserRolesInput, UserUncheckedCreateWithoutUserRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRolesInput, UserUncheckedUpdateWithoutUserRolesInput>
  }

  export type UserUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type FormCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    icon?: string | null
    color?: string | null
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    icon?: string | null
    color?: string | null
    fields: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormCreateOrConnectWithoutSubmissionsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FormUpsertWithoutSubmissionsInput = {
    update: XOR<FormUpdateWithoutSubmissionsInput, FormUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<FormCreateWithoutSubmissionsInput, FormUncheckedCreateWithoutSubmissionsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutSubmissionsInput, FormUncheckedUpdateWithoutSubmissionsInput>
  }

  export type FormUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateWithoutFormInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutFormInput = {
    id?: string
    userId: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutFormInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput>
  }

  export type SubmissionCreateManyFormInputEnvelope = {
    data: SubmissionCreateManyFormInput | SubmissionCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithWhereUniqueWithoutFormInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutFormInput, SubmissionUncheckedUpdateWithoutFormInput>
    create: XOR<SubmissionCreateWithoutFormInput, SubmissionUncheckedCreateWithoutFormInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutFormInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutFormInput, SubmissionUncheckedUpdateWithoutFormInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutFormInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutFormInput>
  }

  export type UserCreateWithoutForumPostsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    forumComments?: ForumCommentCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutForumPostsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    forumComments?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutForumPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
  }

  export type ForumCommentCreateWithoutPostInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutForumCommentsInput
    reactions?: ForumReactionCreateNestedManyWithoutCommentInput
  }

  export type ForumCommentUncheckedCreateWithoutPostInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ForumReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type ForumCommentCreateOrConnectWithoutPostInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput>
  }

  export type ForumCommentCreateManyPostInputEnvelope = {
    data: ForumCommentCreateManyPostInput | ForumCommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ForumReactionCreateWithoutPostInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutForumReactionsInput
    comment?: ForumCommentCreateNestedOneWithoutReactionsInput
  }

  export type ForumReactionUncheckedCreateWithoutPostInput = {
    id?: string
    emoji: string
    userId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type ForumReactionCreateOrConnectWithoutPostInput = {
    where: ForumReactionWhereUniqueInput
    create: XOR<ForumReactionCreateWithoutPostInput, ForumReactionUncheckedCreateWithoutPostInput>
  }

  export type ForumReactionCreateManyPostInputEnvelope = {
    data: ForumReactionCreateManyPostInput | ForumReactionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutForumPostsInput = {
    update: XOR<UserUpdateWithoutForumPostsInput, UserUncheckedUpdateWithoutForumPostsInput>
    create: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumPostsInput, UserUncheckedUpdateWithoutForumPostsInput>
  }

  export type UserUpdateWithoutForumPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    forumComments?: ForumCommentUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutForumPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    forumComments?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ForumCommentUpsertWithWhereUniqueWithoutPostInput = {
    where: ForumCommentWhereUniqueInput
    update: XOR<ForumCommentUpdateWithoutPostInput, ForumCommentUncheckedUpdateWithoutPostInput>
    create: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput>
  }

  export type ForumCommentUpdateWithWhereUniqueWithoutPostInput = {
    where: ForumCommentWhereUniqueInput
    data: XOR<ForumCommentUpdateWithoutPostInput, ForumCommentUncheckedUpdateWithoutPostInput>
  }

  export type ForumCommentUpdateManyWithWhereWithoutPostInput = {
    where: ForumCommentScalarWhereInput
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutPostInput>
  }

  export type ForumReactionUpsertWithWhereUniqueWithoutPostInput = {
    where: ForumReactionWhereUniqueInput
    update: XOR<ForumReactionUpdateWithoutPostInput, ForumReactionUncheckedUpdateWithoutPostInput>
    create: XOR<ForumReactionCreateWithoutPostInput, ForumReactionUncheckedCreateWithoutPostInput>
  }

  export type ForumReactionUpdateWithWhereUniqueWithoutPostInput = {
    where: ForumReactionWhereUniqueInput
    data: XOR<ForumReactionUpdateWithoutPostInput, ForumReactionUncheckedUpdateWithoutPostInput>
  }

  export type ForumReactionUpdateManyWithWhereWithoutPostInput = {
    where: ForumReactionScalarWhereInput
    data: XOR<ForumReactionUpdateManyMutationInput, ForumReactionUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutForumCommentsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutForumCommentsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    forumReactions?: ForumReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutForumCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
  }

  export type ForumPostCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutForumPostsInput
    reactions?: ForumReactionCreateNestedManyWithoutPostInput
  }

  export type ForumPostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ForumReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type ForumPostCreateOrConnectWithoutCommentsInput = {
    where: ForumPostWhereUniqueInput
    create: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
  }

  export type ForumReactionCreateWithoutCommentInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutForumReactionsInput
    post?: ForumPostCreateNestedOneWithoutReactionsInput
  }

  export type ForumReactionUncheckedCreateWithoutCommentInput = {
    id?: string
    emoji: string
    userId: string
    postId?: string | null
    createdAt?: Date | string
  }

  export type ForumReactionCreateOrConnectWithoutCommentInput = {
    where: ForumReactionWhereUniqueInput
    create: XOR<ForumReactionCreateWithoutCommentInput, ForumReactionUncheckedCreateWithoutCommentInput>
  }

  export type ForumReactionCreateManyCommentInputEnvelope = {
    data: ForumReactionCreateManyCommentInput | ForumReactionCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutForumCommentsInput = {
    update: XOR<UserUpdateWithoutForumCommentsInput, UserUncheckedUpdateWithoutForumCommentsInput>
    create: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumCommentsInput, UserUncheckedUpdateWithoutForumCommentsInput>
  }

  export type UserUpdateWithoutForumCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutForumCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    forumReactions?: ForumReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ForumPostUpsertWithoutCommentsInput = {
    update: XOR<ForumPostUpdateWithoutCommentsInput, ForumPostUncheckedUpdateWithoutCommentsInput>
    create: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
    where?: ForumPostWhereInput
  }

  export type ForumPostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ForumPostWhereInput
    data: XOR<ForumPostUpdateWithoutCommentsInput, ForumPostUncheckedUpdateWithoutCommentsInput>
  }

  export type ForumPostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutForumPostsNestedInput
    reactions?: ForumReactionUpdateManyWithoutPostNestedInput
  }

  export type ForumPostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ForumReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ForumReactionUpsertWithWhereUniqueWithoutCommentInput = {
    where: ForumReactionWhereUniqueInput
    update: XOR<ForumReactionUpdateWithoutCommentInput, ForumReactionUncheckedUpdateWithoutCommentInput>
    create: XOR<ForumReactionCreateWithoutCommentInput, ForumReactionUncheckedCreateWithoutCommentInput>
  }

  export type ForumReactionUpdateWithWhereUniqueWithoutCommentInput = {
    where: ForumReactionWhereUniqueInput
    data: XOR<ForumReactionUpdateWithoutCommentInput, ForumReactionUncheckedUpdateWithoutCommentInput>
  }

  export type ForumReactionUpdateManyWithWhereWithoutCommentInput = {
    where: ForumReactionScalarWhereInput
    data: XOR<ForumReactionUpdateManyMutationInput, ForumReactionUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutForumReactionsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userRoles?: UserRoleCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutForumReactionsInput = {
    id?: string
    xboxId?: string | null
    username: string
    email?: string | null
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userRoles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    forumPosts?: ForumPostUncheckedCreateNestedManyWithoutAuthorInput
    forumComments?: ForumCommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutForumReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumReactionsInput, UserUncheckedCreateWithoutForumReactionsInput>
  }

  export type ForumPostCreateWithoutReactionsInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutForumPostsInput
    comments?: ForumCommentCreateNestedManyWithoutPostInput
  }

  export type ForumPostUncheckedCreateWithoutReactionsInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ForumCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type ForumPostCreateOrConnectWithoutReactionsInput = {
    where: ForumPostWhereUniqueInput
    create: XOR<ForumPostCreateWithoutReactionsInput, ForumPostUncheckedCreateWithoutReactionsInput>
  }

  export type ForumCommentCreateWithoutReactionsInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutForumCommentsInput
    post: ForumPostCreateNestedOneWithoutCommentsInput
  }

  export type ForumCommentUncheckedCreateWithoutReactionsInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumCommentCreateOrConnectWithoutReactionsInput = {
    where: ForumCommentWhereUniqueInput
    create: XOR<ForumCommentCreateWithoutReactionsInput, ForumCommentUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutForumReactionsInput = {
    update: XOR<UserUpdateWithoutForumReactionsInput, UserUncheckedUpdateWithoutForumReactionsInput>
    create: XOR<UserCreateWithoutForumReactionsInput, UserUncheckedCreateWithoutForumReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumReactionsInput, UserUncheckedUpdateWithoutForumReactionsInput>
  }

  export type UserUpdateWithoutForumReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutForumReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    xboxId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    forumPosts?: ForumPostUncheckedUpdateManyWithoutAuthorNestedInput
    forumComments?: ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ForumPostUpsertWithoutReactionsInput = {
    update: XOR<ForumPostUpdateWithoutReactionsInput, ForumPostUncheckedUpdateWithoutReactionsInput>
    create: XOR<ForumPostCreateWithoutReactionsInput, ForumPostUncheckedCreateWithoutReactionsInput>
    where?: ForumPostWhereInput
  }

  export type ForumPostUpdateToOneWithWhereWithoutReactionsInput = {
    where?: ForumPostWhereInput
    data: XOR<ForumPostUpdateWithoutReactionsInput, ForumPostUncheckedUpdateWithoutReactionsInput>
  }

  export type ForumPostUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutForumPostsNestedInput
    comments?: ForumCommentUpdateManyWithoutPostNestedInput
  }

  export type ForumPostUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ForumCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ForumCommentUpsertWithoutReactionsInput = {
    update: XOR<ForumCommentUpdateWithoutReactionsInput, ForumCommentUncheckedUpdateWithoutReactionsInput>
    create: XOR<ForumCommentCreateWithoutReactionsInput, ForumCommentUncheckedCreateWithoutReactionsInput>
    where?: ForumCommentWhereInput
  }

  export type ForumCommentUpdateToOneWithWhereWithoutReactionsInput = {
    where?: ForumCommentWhereInput
    data: XOR<ForumCommentUpdateWithoutReactionsInput, ForumCommentUncheckedUpdateWithoutReactionsInput>
  }

  export type ForumCommentUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutForumCommentsNestedInput
    post?: ForumPostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    formId: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type?: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
  }

  export type ForumPostCreateManyAuthorInput = {
    id?: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    pinned?: boolean
    locked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumCommentCreateManyAuthorInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumReactionCreateManyUserInput = {
    id?: string
    emoji: string
    postId?: string | null
    commentId?: string | null
    createdAt?: Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ForumPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ForumCommentUpdateManyWithoutPostNestedInput
    reactions?: ForumReactionUpdateManyWithoutPostNestedInput
  }

  export type ForumPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ForumCommentUncheckedUpdateManyWithoutPostNestedInput
    reactions?: ForumReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ForumPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    pinned?: BoolFieldUpdateOperationsInput | boolean
    locked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: ForumPostUpdateOneRequiredWithoutCommentsNestedInput
    reactions?: ForumReactionUpdateManyWithoutCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ForumReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: ForumPostUpdateOneWithoutReactionsNestedInput
    comment?: ForumCommentUpdateOneWithoutReactionsNestedInput
  }

  export type ForumReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyFormInput = {
    id?: string
    userId: string
    content: JsonNullValueInput | InputJsonValue
    status?: $Enums.SubmissionStatus
    reviewNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    reviewNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumCommentCreateManyPostInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ForumReactionCreateManyPostInput = {
    id?: string
    emoji: string
    userId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type ForumCommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutForumCommentsNestedInput
    reactions?: ForumReactionUpdateManyWithoutCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ForumReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type ForumCommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutForumReactionsNestedInput
    comment?: ForumCommentUpdateOneWithoutReactionsNestedInput
  }

  export type ForumReactionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionCreateManyCommentInput = {
    id?: string
    emoji: string
    userId: string
    postId?: string | null
    createdAt?: Date | string
  }

  export type ForumReactionUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutForumReactionsNestedInput
    post?: ForumPostUpdateOneWithoutReactionsNestedInput
  }

  export type ForumReactionUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForumReactionUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}