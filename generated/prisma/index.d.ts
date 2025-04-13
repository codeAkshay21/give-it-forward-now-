
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model ngos
 * 
 */
export type ngos = $Result.DefaultSelection<Prisma.$ngosPayload>
/**
 * Model donations
 * 
 */
export type donations = $Result.DefaultSelection<Prisma.$donationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profiles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profiles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ngos`: Exposes CRUD operations for the **ngos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ngos
    * const ngos = await prisma.ngos.findMany()
    * ```
    */
  get ngos(): Prisma.ngosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donations`: Exposes CRUD operations for the **donations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donations.findMany()
    * ```
    */
  get donations(): Prisma.donationsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    profiles: 'profiles',
    ngos: 'ngos',
    donations: 'donations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profiles" | "ngos" | "donations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      ngos: {
        payload: Prisma.$ngosPayload<ExtArgs>
        fields: Prisma.ngosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ngosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ngosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>
          }
          findFirst: {
            args: Prisma.ngosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ngosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>
          }
          findMany: {
            args: Prisma.ngosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>[]
          }
          create: {
            args: Prisma.ngosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>
          }
          createMany: {
            args: Prisma.ngosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ngosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>[]
          }
          delete: {
            args: Prisma.ngosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>
          }
          update: {
            args: Prisma.ngosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>
          }
          deleteMany: {
            args: Prisma.ngosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ngosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ngosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>[]
          }
          upsert: {
            args: Prisma.ngosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ngosPayload>
          }
          aggregate: {
            args: Prisma.NgosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNgos>
          }
          groupBy: {
            args: Prisma.ngosGroupByArgs<ExtArgs>
            result: $Utils.Optional<NgosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ngosCountArgs<ExtArgs>
            result: $Utils.Optional<NgosCountAggregateOutputType> | number
          }
        }
      }
      donations: {
        payload: Prisma.$donationsPayload<ExtArgs>
        fields: Prisma.donationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.donationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.donationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>
          }
          findFirst: {
            args: Prisma.donationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.donationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>
          }
          findMany: {
            args: Prisma.donationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>[]
          }
          create: {
            args: Prisma.donationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>
          }
          createMany: {
            args: Prisma.donationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.donationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>[]
          }
          delete: {
            args: Prisma.donationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>
          }
          update: {
            args: Prisma.donationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>
          }
          deleteMany: {
            args: Prisma.donationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.donationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.donationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>[]
          }
          upsert: {
            args: Prisma.donationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$donationsPayload>
          }
          aggregate: {
            args: Prisma.DonationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonations>
          }
          groupBy: {
            args: Prisma.donationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.donationsCountArgs<ExtArgs>
            result: $Utils.Optional<DonationsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    profiles?: profilesOmit
    ngos?: ngosOmit
    donations?: donationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProfilesCountOutputType
   */

  export type ProfilesCountOutputType = {
    donations: number
  }

  export type ProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | ProfilesCountOutputTypeCountDonationsArgs
  }

  // Custom InputTypes
  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationsWhereInput
  }


  /**
   * Count Type NgosCountOutputType
   */

  export type NgosCountOutputType = {
    donations: number
  }

  export type NgosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | NgosCountOutputTypeCountDonationsArgs
  }

  // Custom InputTypes
  /**
   * NgosCountOutputType without action
   */
  export type NgosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NgosCountOutputType
     */
    select?: NgosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NgosCountOutputType without action
   */
  export type NgosCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    avatar_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfilesMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: string
    full_name: string
    email: string
    avatar_url: string | null
    created_at: Date
    updated_at: Date
    _count: ProfilesCountAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    donations?: boolean | profiles$donationsArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "avatar_url" | "created_at" | "updated_at", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | profiles$donationsArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      donations: Prisma.$donationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      avatar_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
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
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donations<T extends profiles$donationsArgs<ExtArgs> = {}>(args?: Subset<T, profiles$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'String'>
    readonly full_name: FieldRef<"profiles", 'String'>
    readonly email: FieldRef<"profiles", 'String'>
    readonly avatar_url: FieldRef<"profiles", 'String'>
    readonly created_at: FieldRef<"profiles", 'DateTime'>
    readonly updated_at: FieldRef<"profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles createManyAndReturn
   */
  export type profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles updateManyAndReturn
   */
  export type profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles.donations
   */
  export type profiles$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    where?: donationsWhereInput
    orderBy?: donationsOrderByWithRelationInput | donationsOrderByWithRelationInput[]
    cursor?: donationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationsScalarFieldEnum | DonationsScalarFieldEnum[]
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
  }


  /**
   * Model ngos
   */

  export type AggregateNgos = {
    _count: NgosCountAggregateOutputType | null
    _avg: NgosAvgAggregateOutputType | null
    _sum: NgosSumAggregateOutputType | null
    _min: NgosMinAggregateOutputType | null
    _max: NgosMaxAggregateOutputType | null
  }

  export type NgosAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type NgosSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type NgosMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    category: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    website: string | null
    phone: string | null
    hours: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NgosMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    category: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    website: string | null
    phone: string | null
    hours: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NgosCountAggregateOutputType = {
    id: number
    name: number
    email: number
    category: number
    location: number
    latitude: number
    longitude: number
    description: number
    website: number
    phone: number
    hours: number
    image_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NgosAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type NgosSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type NgosMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    category?: true
    location?: true
    latitude?: true
    longitude?: true
    description?: true
    website?: true
    phone?: true
    hours?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type NgosMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    category?: true
    location?: true
    latitude?: true
    longitude?: true
    description?: true
    website?: true
    phone?: true
    hours?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type NgosCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    category?: true
    location?: true
    latitude?: true
    longitude?: true
    description?: true
    website?: true
    phone?: true
    hours?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NgosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ngos to aggregate.
     */
    where?: ngosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ngos to fetch.
     */
    orderBy?: ngosOrderByWithRelationInput | ngosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ngosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ngos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ngos
    **/
    _count?: true | NgosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NgosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NgosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NgosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NgosMaxAggregateInputType
  }

  export type GetNgosAggregateType<T extends NgosAggregateArgs> = {
        [P in keyof T & keyof AggregateNgos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNgos[P]>
      : GetScalarType<T[P], AggregateNgos[P]>
  }




  export type ngosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ngosWhereInput
    orderBy?: ngosOrderByWithAggregationInput | ngosOrderByWithAggregationInput[]
    by: NgosScalarFieldEnum[] | NgosScalarFieldEnum
    having?: ngosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NgosCountAggregateInputType | true
    _avg?: NgosAvgAggregateInputType
    _sum?: NgosSumAggregateInputType
    _min?: NgosMinAggregateInputType
    _max?: NgosMaxAggregateInputType
  }

  export type NgosGroupByOutputType = {
    id: string
    name: string
    email: string
    category: string
    location: string
    latitude: number
    longitude: number
    description: string
    website: string | null
    phone: string | null
    hours: string | null
    image_url: string | null
    created_at: Date
    updated_at: Date
    _count: NgosCountAggregateOutputType | null
    _avg: NgosAvgAggregateOutputType | null
    _sum: NgosSumAggregateOutputType | null
    _min: NgosMinAggregateOutputType | null
    _max: NgosMaxAggregateOutputType | null
  }

  type GetNgosGroupByPayload<T extends ngosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NgosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NgosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NgosGroupByOutputType[P]>
            : GetScalarType<T[P], NgosGroupByOutputType[P]>
        }
      >
    >


  export type ngosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    category?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    website?: boolean
    phone?: boolean
    hours?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    donations?: boolean | ngos$donationsArgs<ExtArgs>
    _count?: boolean | NgosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ngos"]>

  export type ngosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    category?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    website?: boolean
    phone?: boolean
    hours?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ngos"]>

  export type ngosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    category?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    website?: boolean
    phone?: boolean
    hours?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["ngos"]>

  export type ngosSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    category?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    website?: boolean
    phone?: boolean
    hours?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ngosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "category" | "location" | "latitude" | "longitude" | "description" | "website" | "phone" | "hours" | "image_url" | "created_at" | "updated_at", ExtArgs["result"]["ngos"]>
  export type ngosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | ngos$donationsArgs<ExtArgs>
    _count?: boolean | NgosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ngosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ngosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ngosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ngos"
    objects: {
      donations: Prisma.$donationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      category: string
      location: string
      latitude: number
      longitude: number
      description: string
      website: string | null
      phone: string | null
      hours: string | null
      image_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ngos"]>
    composites: {}
  }

  type ngosGetPayload<S extends boolean | null | undefined | ngosDefaultArgs> = $Result.GetResult<Prisma.$ngosPayload, S>

  type ngosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ngosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NgosCountAggregateInputType | true
    }

  export interface ngosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ngos'], meta: { name: 'ngos' } }
    /**
     * Find zero or one Ngos that matches the filter.
     * @param {ngosFindUniqueArgs} args - Arguments to find a Ngos
     * @example
     * // Get one Ngos
     * const ngos = await prisma.ngos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ngosFindUniqueArgs>(args: SelectSubset<T, ngosFindUniqueArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ngos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ngosFindUniqueOrThrowArgs} args - Arguments to find a Ngos
     * @example
     * // Get one Ngos
     * const ngos = await prisma.ngos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ngosFindUniqueOrThrowArgs>(args: SelectSubset<T, ngosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ngos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ngosFindFirstArgs} args - Arguments to find a Ngos
     * @example
     * // Get one Ngos
     * const ngos = await prisma.ngos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ngosFindFirstArgs>(args?: SelectSubset<T, ngosFindFirstArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ngos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ngosFindFirstOrThrowArgs} args - Arguments to find a Ngos
     * @example
     * // Get one Ngos
     * const ngos = await prisma.ngos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ngosFindFirstOrThrowArgs>(args?: SelectSubset<T, ngosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ngos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ngosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ngos
     * const ngos = await prisma.ngos.findMany()
     * 
     * // Get first 10 Ngos
     * const ngos = await prisma.ngos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ngosWithIdOnly = await prisma.ngos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ngosFindManyArgs>(args?: SelectSubset<T, ngosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ngos.
     * @param {ngosCreateArgs} args - Arguments to create a Ngos.
     * @example
     * // Create one Ngos
     * const Ngos = await prisma.ngos.create({
     *   data: {
     *     // ... data to create a Ngos
     *   }
     * })
     * 
     */
    create<T extends ngosCreateArgs>(args: SelectSubset<T, ngosCreateArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ngos.
     * @param {ngosCreateManyArgs} args - Arguments to create many Ngos.
     * @example
     * // Create many Ngos
     * const ngos = await prisma.ngos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ngosCreateManyArgs>(args?: SelectSubset<T, ngosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ngos and returns the data saved in the database.
     * @param {ngosCreateManyAndReturnArgs} args - Arguments to create many Ngos.
     * @example
     * // Create many Ngos
     * const ngos = await prisma.ngos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ngos and only return the `id`
     * const ngosWithIdOnly = await prisma.ngos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ngosCreateManyAndReturnArgs>(args?: SelectSubset<T, ngosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ngos.
     * @param {ngosDeleteArgs} args - Arguments to delete one Ngos.
     * @example
     * // Delete one Ngos
     * const Ngos = await prisma.ngos.delete({
     *   where: {
     *     // ... filter to delete one Ngos
     *   }
     * })
     * 
     */
    delete<T extends ngosDeleteArgs>(args: SelectSubset<T, ngosDeleteArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ngos.
     * @param {ngosUpdateArgs} args - Arguments to update one Ngos.
     * @example
     * // Update one Ngos
     * const ngos = await prisma.ngos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ngosUpdateArgs>(args: SelectSubset<T, ngosUpdateArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ngos.
     * @param {ngosDeleteManyArgs} args - Arguments to filter Ngos to delete.
     * @example
     * // Delete a few Ngos
     * const { count } = await prisma.ngos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ngosDeleteManyArgs>(args?: SelectSubset<T, ngosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ngos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ngosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ngos
     * const ngos = await prisma.ngos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ngosUpdateManyArgs>(args: SelectSubset<T, ngosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ngos and returns the data updated in the database.
     * @param {ngosUpdateManyAndReturnArgs} args - Arguments to update many Ngos.
     * @example
     * // Update many Ngos
     * const ngos = await prisma.ngos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ngos and only return the `id`
     * const ngosWithIdOnly = await prisma.ngos.updateManyAndReturn({
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
    updateManyAndReturn<T extends ngosUpdateManyAndReturnArgs>(args: SelectSubset<T, ngosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ngos.
     * @param {ngosUpsertArgs} args - Arguments to update or create a Ngos.
     * @example
     * // Update or create a Ngos
     * const ngos = await prisma.ngos.upsert({
     *   create: {
     *     // ... data to create a Ngos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ngos we want to update
     *   }
     * })
     */
    upsert<T extends ngosUpsertArgs>(args: SelectSubset<T, ngosUpsertArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ngos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ngosCountArgs} args - Arguments to filter Ngos to count.
     * @example
     * // Count the number of Ngos
     * const count = await prisma.ngos.count({
     *   where: {
     *     // ... the filter for the Ngos we want to count
     *   }
     * })
    **/
    count<T extends ngosCountArgs>(
      args?: Subset<T, ngosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NgosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ngos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NgosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NgosAggregateArgs>(args: Subset<T, NgosAggregateArgs>): Prisma.PrismaPromise<GetNgosAggregateType<T>>

    /**
     * Group by Ngos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ngosGroupByArgs} args - Group by arguments.
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
      T extends ngosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ngosGroupByArgs['orderBy'] }
        : { orderBy?: ngosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ngosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNgosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ngos model
   */
  readonly fields: ngosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ngos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ngosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donations<T extends ngos$donationsArgs<ExtArgs> = {}>(args?: Subset<T, ngos$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ngos model
   */
  interface ngosFieldRefs {
    readonly id: FieldRef<"ngos", 'String'>
    readonly name: FieldRef<"ngos", 'String'>
    readonly email: FieldRef<"ngos", 'String'>
    readonly category: FieldRef<"ngos", 'String'>
    readonly location: FieldRef<"ngos", 'String'>
    readonly latitude: FieldRef<"ngos", 'Float'>
    readonly longitude: FieldRef<"ngos", 'Float'>
    readonly description: FieldRef<"ngos", 'String'>
    readonly website: FieldRef<"ngos", 'String'>
    readonly phone: FieldRef<"ngos", 'String'>
    readonly hours: FieldRef<"ngos", 'String'>
    readonly image_url: FieldRef<"ngos", 'String'>
    readonly created_at: FieldRef<"ngos", 'DateTime'>
    readonly updated_at: FieldRef<"ngos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ngos findUnique
   */
  export type ngosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * Filter, which ngos to fetch.
     */
    where: ngosWhereUniqueInput
  }

  /**
   * ngos findUniqueOrThrow
   */
  export type ngosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * Filter, which ngos to fetch.
     */
    where: ngosWhereUniqueInput
  }

  /**
   * ngos findFirst
   */
  export type ngosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * Filter, which ngos to fetch.
     */
    where?: ngosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ngos to fetch.
     */
    orderBy?: ngosOrderByWithRelationInput | ngosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ngos.
     */
    cursor?: ngosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ngos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ngos.
     */
    distinct?: NgosScalarFieldEnum | NgosScalarFieldEnum[]
  }

  /**
   * ngos findFirstOrThrow
   */
  export type ngosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * Filter, which ngos to fetch.
     */
    where?: ngosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ngos to fetch.
     */
    orderBy?: ngosOrderByWithRelationInput | ngosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ngos.
     */
    cursor?: ngosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ngos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ngos.
     */
    distinct?: NgosScalarFieldEnum | NgosScalarFieldEnum[]
  }

  /**
   * ngos findMany
   */
  export type ngosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * Filter, which ngos to fetch.
     */
    where?: ngosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ngos to fetch.
     */
    orderBy?: ngosOrderByWithRelationInput | ngosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ngos.
     */
    cursor?: ngosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ngos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ngos.
     */
    skip?: number
    distinct?: NgosScalarFieldEnum | NgosScalarFieldEnum[]
  }

  /**
   * ngos create
   */
  export type ngosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * The data needed to create a ngos.
     */
    data: XOR<ngosCreateInput, ngosUncheckedCreateInput>
  }

  /**
   * ngos createMany
   */
  export type ngosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ngos.
     */
    data: ngosCreateManyInput | ngosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ngos createManyAndReturn
   */
  export type ngosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * The data used to create many ngos.
     */
    data: ngosCreateManyInput | ngosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ngos update
   */
  export type ngosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * The data needed to update a ngos.
     */
    data: XOR<ngosUpdateInput, ngosUncheckedUpdateInput>
    /**
     * Choose, which ngos to update.
     */
    where: ngosWhereUniqueInput
  }

  /**
   * ngos updateMany
   */
  export type ngosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ngos.
     */
    data: XOR<ngosUpdateManyMutationInput, ngosUncheckedUpdateManyInput>
    /**
     * Filter which ngos to update
     */
    where?: ngosWhereInput
    /**
     * Limit how many ngos to update.
     */
    limit?: number
  }

  /**
   * ngos updateManyAndReturn
   */
  export type ngosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * The data used to update ngos.
     */
    data: XOR<ngosUpdateManyMutationInput, ngosUncheckedUpdateManyInput>
    /**
     * Filter which ngos to update
     */
    where?: ngosWhereInput
    /**
     * Limit how many ngos to update.
     */
    limit?: number
  }

  /**
   * ngos upsert
   */
  export type ngosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * The filter to search for the ngos to update in case it exists.
     */
    where: ngosWhereUniqueInput
    /**
     * In case the ngos found by the `where` argument doesn't exist, create a new ngos with this data.
     */
    create: XOR<ngosCreateInput, ngosUncheckedCreateInput>
    /**
     * In case the ngos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ngosUpdateInput, ngosUncheckedUpdateInput>
  }

  /**
   * ngos delete
   */
  export type ngosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    /**
     * Filter which ngos to delete.
     */
    where: ngosWhereUniqueInput
  }

  /**
   * ngos deleteMany
   */
  export type ngosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ngos to delete
     */
    where?: ngosWhereInput
    /**
     * Limit how many ngos to delete.
     */
    limit?: number
  }

  /**
   * ngos.donations
   */
  export type ngos$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    where?: donationsWhereInput
    orderBy?: donationsOrderByWithRelationInput | donationsOrderByWithRelationInput[]
    cursor?: donationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationsScalarFieldEnum | DonationsScalarFieldEnum[]
  }

  /**
   * ngos without action
   */
  export type ngosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
  }


  /**
   * Model donations
   */

  export type AggregateDonations = {
    _count: DonationsCountAggregateOutputType | null
    _avg: DonationsAvgAggregateOutputType | null
    _sum: DonationsSumAggregateOutputType | null
    _min: DonationsMinAggregateOutputType | null
    _max: DonationsMaxAggregateOutputType | null
  }

  export type DonationsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type DonationsSumAggregateOutputType = {
    quantity: number | null
  }

  export type DonationsMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    condition: string | null
    description: string | null
    quantity: number | null
    delivery_method: string | null
    preferred_date: string | null
    image_url: string | null
    status: string | null
    user_id: string | null
    ngo_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DonationsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    condition: string | null
    description: string | null
    quantity: number | null
    delivery_method: string | null
    preferred_date: string | null
    image_url: string | null
    status: string | null
    user_id: string | null
    ngo_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DonationsCountAggregateOutputType = {
    id: number
    title: number
    category: number
    condition: number
    description: number
    quantity: number
    delivery_method: number
    preferred_date: number
    image_url: number
    status: number
    user_id: number
    ngo_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DonationsAvgAggregateInputType = {
    quantity?: true
  }

  export type DonationsSumAggregateInputType = {
    quantity?: true
  }

  export type DonationsMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    condition?: true
    description?: true
    quantity?: true
    delivery_method?: true
    preferred_date?: true
    image_url?: true
    status?: true
    user_id?: true
    ngo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DonationsMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    condition?: true
    description?: true
    quantity?: true
    delivery_method?: true
    preferred_date?: true
    image_url?: true
    status?: true
    user_id?: true
    ngo_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DonationsCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    condition?: true
    description?: true
    quantity?: true
    delivery_method?: true
    preferred_date?: true
    image_url?: true
    status?: true
    user_id?: true
    ngo_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DonationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donations to aggregate.
     */
    where?: donationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationsOrderByWithRelationInput | donationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: donationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned donations
    **/
    _count?: true | DonationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationsMaxAggregateInputType
  }

  export type GetDonationsAggregateType<T extends DonationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDonations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonations[P]>
      : GetScalarType<T[P], AggregateDonations[P]>
  }




  export type donationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donationsWhereInput
    orderBy?: donationsOrderByWithAggregationInput | donationsOrderByWithAggregationInput[]
    by: DonationsScalarFieldEnum[] | DonationsScalarFieldEnum
    having?: donationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationsCountAggregateInputType | true
    _avg?: DonationsAvgAggregateInputType
    _sum?: DonationsSumAggregateInputType
    _min?: DonationsMinAggregateInputType
    _max?: DonationsMaxAggregateInputType
  }

  export type DonationsGroupByOutputType = {
    id: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url: string | null
    status: string
    user_id: string
    ngo_id: string | null
    created_at: Date
    updated_at: Date
    _count: DonationsCountAggregateOutputType | null
    _avg: DonationsAvgAggregateOutputType | null
    _sum: DonationsSumAggregateOutputType | null
    _min: DonationsMinAggregateOutputType | null
    _max: DonationsMaxAggregateOutputType | null
  }

  type GetDonationsGroupByPayload<T extends donationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationsGroupByOutputType[P]>
            : GetScalarType<T[P], DonationsGroupByOutputType[P]>
        }
      >
    >


  export type donationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    condition?: boolean
    description?: boolean
    quantity?: boolean
    delivery_method?: boolean
    preferred_date?: boolean
    image_url?: boolean
    status?: boolean
    user_id?: boolean
    ngo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | profilesDefaultArgs<ExtArgs>
    ngo?: boolean | donations$ngoArgs<ExtArgs>
  }, ExtArgs["result"]["donations"]>

  export type donationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    condition?: boolean
    description?: boolean
    quantity?: boolean
    delivery_method?: boolean
    preferred_date?: boolean
    image_url?: boolean
    status?: boolean
    user_id?: boolean
    ngo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | profilesDefaultArgs<ExtArgs>
    ngo?: boolean | donations$ngoArgs<ExtArgs>
  }, ExtArgs["result"]["donations"]>

  export type donationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    condition?: boolean
    description?: boolean
    quantity?: boolean
    delivery_method?: boolean
    preferred_date?: boolean
    image_url?: boolean
    status?: boolean
    user_id?: boolean
    ngo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | profilesDefaultArgs<ExtArgs>
    ngo?: boolean | donations$ngoArgs<ExtArgs>
  }, ExtArgs["result"]["donations"]>

  export type donationsSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    condition?: boolean
    description?: boolean
    quantity?: boolean
    delivery_method?: boolean
    preferred_date?: boolean
    image_url?: boolean
    status?: boolean
    user_id?: boolean
    ngo_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type donationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "condition" | "description" | "quantity" | "delivery_method" | "preferred_date" | "image_url" | "status" | "user_id" | "ngo_id" | "created_at" | "updated_at", ExtArgs["result"]["donations"]>
  export type donationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | profilesDefaultArgs<ExtArgs>
    ngo?: boolean | donations$ngoArgs<ExtArgs>
  }
  export type donationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | profilesDefaultArgs<ExtArgs>
    ngo?: boolean | donations$ngoArgs<ExtArgs>
  }
  export type donationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | profilesDefaultArgs<ExtArgs>
    ngo?: boolean | donations$ngoArgs<ExtArgs>
  }

  export type $donationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "donations"
    objects: {
      profile: Prisma.$profilesPayload<ExtArgs>
      ngo: Prisma.$ngosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      condition: string
      description: string
      quantity: number
      delivery_method: string
      preferred_date: string
      image_url: string | null
      status: string
      user_id: string
      ngo_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["donations"]>
    composites: {}
  }

  type donationsGetPayload<S extends boolean | null | undefined | donationsDefaultArgs> = $Result.GetResult<Prisma.$donationsPayload, S>

  type donationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<donationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationsCountAggregateInputType | true
    }

  export interface donationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['donations'], meta: { name: 'donations' } }
    /**
     * Find zero or one Donations that matches the filter.
     * @param {donationsFindUniqueArgs} args - Arguments to find a Donations
     * @example
     * // Get one Donations
     * const donations = await prisma.donations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends donationsFindUniqueArgs>(args: SelectSubset<T, donationsFindUniqueArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {donationsFindUniqueOrThrowArgs} args - Arguments to find a Donations
     * @example
     * // Get one Donations
     * const donations = await prisma.donations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends donationsFindUniqueOrThrowArgs>(args: SelectSubset<T, donationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationsFindFirstArgs} args - Arguments to find a Donations
     * @example
     * // Get one Donations
     * const donations = await prisma.donations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends donationsFindFirstArgs>(args?: SelectSubset<T, donationsFindFirstArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationsFindFirstOrThrowArgs} args - Arguments to find a Donations
     * @example
     * // Get one Donations
     * const donations = await prisma.donations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends donationsFindFirstOrThrowArgs>(args?: SelectSubset<T, donationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donations.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationsWithIdOnly = await prisma.donations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends donationsFindManyArgs>(args?: SelectSubset<T, donationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donations.
     * @param {donationsCreateArgs} args - Arguments to create a Donations.
     * @example
     * // Create one Donations
     * const Donations = await prisma.donations.create({
     *   data: {
     *     // ... data to create a Donations
     *   }
     * })
     * 
     */
    create<T extends donationsCreateArgs>(args: SelectSubset<T, donationsCreateArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {donationsCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donations = await prisma.donations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends donationsCreateManyArgs>(args?: SelectSubset<T, donationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {donationsCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donations = await prisma.donations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationsWithIdOnly = await prisma.donations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends donationsCreateManyAndReturnArgs>(args?: SelectSubset<T, donationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donations.
     * @param {donationsDeleteArgs} args - Arguments to delete one Donations.
     * @example
     * // Delete one Donations
     * const Donations = await prisma.donations.delete({
     *   where: {
     *     // ... filter to delete one Donations
     *   }
     * })
     * 
     */
    delete<T extends donationsDeleteArgs>(args: SelectSubset<T, donationsDeleteArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donations.
     * @param {donationsUpdateArgs} args - Arguments to update one Donations.
     * @example
     * // Update one Donations
     * const donations = await prisma.donations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends donationsUpdateArgs>(args: SelectSubset<T, donationsUpdateArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {donationsDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends donationsDeleteManyArgs>(args?: SelectSubset<T, donationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donations = await prisma.donations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends donationsUpdateManyArgs>(args: SelectSubset<T, donationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {donationsUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donations = await prisma.donations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationsWithIdOnly = await prisma.donations.updateManyAndReturn({
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
    updateManyAndReturn<T extends donationsUpdateManyAndReturnArgs>(args: SelectSubset<T, donationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donations.
     * @param {donationsUpsertArgs} args - Arguments to update or create a Donations.
     * @example
     * // Update or create a Donations
     * const donations = await prisma.donations.upsert({
     *   create: {
     *     // ... data to create a Donations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donations we want to update
     *   }
     * })
     */
    upsert<T extends donationsUpsertArgs>(args: SelectSubset<T, donationsUpsertArgs<ExtArgs>>): Prisma__donationsClient<$Result.GetResult<Prisma.$donationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationsCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donations.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends donationsCountArgs>(
      args?: Subset<T, donationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationsAggregateArgs>(args: Subset<T, DonationsAggregateArgs>): Prisma.PrismaPromise<GetDonationsAggregateType<T>>

    /**
     * Group by Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donationsGroupByArgs} args - Group by arguments.
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
      T extends donationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donationsGroupByArgs['orderBy'] }
        : { orderBy?: donationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, donationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the donations model
   */
  readonly fields: donationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends profilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profilesDefaultArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ngo<T extends donations$ngoArgs<ExtArgs> = {}>(args?: Subset<T, donations$ngoArgs<ExtArgs>>): Prisma__ngosClient<$Result.GetResult<Prisma.$ngosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the donations model
   */
  interface donationsFieldRefs {
    readonly id: FieldRef<"donations", 'String'>
    readonly title: FieldRef<"donations", 'String'>
    readonly category: FieldRef<"donations", 'String'>
    readonly condition: FieldRef<"donations", 'String'>
    readonly description: FieldRef<"donations", 'String'>
    readonly quantity: FieldRef<"donations", 'Int'>
    readonly delivery_method: FieldRef<"donations", 'String'>
    readonly preferred_date: FieldRef<"donations", 'String'>
    readonly image_url: FieldRef<"donations", 'String'>
    readonly status: FieldRef<"donations", 'String'>
    readonly user_id: FieldRef<"donations", 'String'>
    readonly ngo_id: FieldRef<"donations", 'String'>
    readonly created_at: FieldRef<"donations", 'DateTime'>
    readonly updated_at: FieldRef<"donations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * donations findUnique
   */
  export type donationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * Filter, which donations to fetch.
     */
    where: donationsWhereUniqueInput
  }

  /**
   * donations findUniqueOrThrow
   */
  export type donationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * Filter, which donations to fetch.
     */
    where: donationsWhereUniqueInput
  }

  /**
   * donations findFirst
   */
  export type donationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * Filter, which donations to fetch.
     */
    where?: donationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationsOrderByWithRelationInput | donationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donations.
     */
    cursor?: donationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donations.
     */
    distinct?: DonationsScalarFieldEnum | DonationsScalarFieldEnum[]
  }

  /**
   * donations findFirstOrThrow
   */
  export type donationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * Filter, which donations to fetch.
     */
    where?: donationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationsOrderByWithRelationInput | donationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for donations.
     */
    cursor?: donationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of donations.
     */
    distinct?: DonationsScalarFieldEnum | DonationsScalarFieldEnum[]
  }

  /**
   * donations findMany
   */
  export type donationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * Filter, which donations to fetch.
     */
    where?: donationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of donations to fetch.
     */
    orderBy?: donationsOrderByWithRelationInput | donationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing donations.
     */
    cursor?: donationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` donations.
     */
    skip?: number
    distinct?: DonationsScalarFieldEnum | DonationsScalarFieldEnum[]
  }

  /**
   * donations create
   */
  export type donationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * The data needed to create a donations.
     */
    data: XOR<donationsCreateInput, donationsUncheckedCreateInput>
  }

  /**
   * donations createMany
   */
  export type donationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many donations.
     */
    data: donationsCreateManyInput | donationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * donations createManyAndReturn
   */
  export type donationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * The data used to create many donations.
     */
    data: donationsCreateManyInput | donationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * donations update
   */
  export type donationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * The data needed to update a donations.
     */
    data: XOR<donationsUpdateInput, donationsUncheckedUpdateInput>
    /**
     * Choose, which donations to update.
     */
    where: donationsWhereUniqueInput
  }

  /**
   * donations updateMany
   */
  export type donationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update donations.
     */
    data: XOR<donationsUpdateManyMutationInput, donationsUncheckedUpdateManyInput>
    /**
     * Filter which donations to update
     */
    where?: donationsWhereInput
    /**
     * Limit how many donations to update.
     */
    limit?: number
  }

  /**
   * donations updateManyAndReturn
   */
  export type donationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * The data used to update donations.
     */
    data: XOR<donationsUpdateManyMutationInput, donationsUncheckedUpdateManyInput>
    /**
     * Filter which donations to update
     */
    where?: donationsWhereInput
    /**
     * Limit how many donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * donations upsert
   */
  export type donationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * The filter to search for the donations to update in case it exists.
     */
    where: donationsWhereUniqueInput
    /**
     * In case the donations found by the `where` argument doesn't exist, create a new donations with this data.
     */
    create: XOR<donationsCreateInput, donationsUncheckedCreateInput>
    /**
     * In case the donations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donationsUpdateInput, donationsUncheckedUpdateInput>
  }

  /**
   * donations delete
   */
  export type donationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
    /**
     * Filter which donations to delete.
     */
    where: donationsWhereUniqueInput
  }

  /**
   * donations deleteMany
   */
  export type donationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donations to delete
     */
    where?: donationsWhereInput
    /**
     * Limit how many donations to delete.
     */
    limit?: number
  }

  /**
   * donations.ngo
   */
  export type donations$ngoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ngos
     */
    select?: ngosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ngos
     */
    omit?: ngosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ngosInclude<ExtArgs> | null
    where?: ngosWhereInput
  }

  /**
   * donations without action
   */
  export type donationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donations
     */
    select?: donationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the donations
     */
    omit?: donationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: donationsInclude<ExtArgs> | null
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


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    avatar_url: 'avatar_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const NgosScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    category: 'category',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description',
    website: 'website',
    phone: 'phone',
    hours: 'hours',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NgosScalarFieldEnum = (typeof NgosScalarFieldEnum)[keyof typeof NgosScalarFieldEnum]


  export const DonationsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    condition: 'condition',
    description: 'description',
    quantity: 'quantity',
    delivery_method: 'delivery_method',
    preferred_date: 'preferred_date',
    image_url: 'image_url',
    status: 'status',
    user_id: 'user_id',
    ngo_id: 'ngo_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DonationsScalarFieldEnum = (typeof DonationsScalarFieldEnum)[keyof typeof DonationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: StringFilter<"profiles"> | string
    full_name?: StringFilter<"profiles"> | string
    email?: StringFilter<"profiles"> | string
    avatar_url?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeFilter<"profiles"> | Date | string
    updated_at?: DateTimeFilter<"profiles"> | Date | string
    donations?: DonationsListRelationFilter
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    donations?: donationsOrderByRelationAggregateInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    full_name?: StringFilter<"profiles"> | string
    avatar_url?: StringNullableFilter<"profiles"> | string | null
    created_at?: DateTimeFilter<"profiles"> | Date | string
    updated_at?: DateTimeFilter<"profiles"> | Date | string
    donations?: DonationsListRelationFilter
  }, "id" | "email">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: profilesCountOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"profiles"> | string
    full_name?: StringWithAggregatesFilter<"profiles"> | string
    email?: StringWithAggregatesFilter<"profiles"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"profiles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"profiles"> | Date | string
  }

  export type ngosWhereInput = {
    AND?: ngosWhereInput | ngosWhereInput[]
    OR?: ngosWhereInput[]
    NOT?: ngosWhereInput | ngosWhereInput[]
    id?: StringFilter<"ngos"> | string
    name?: StringFilter<"ngos"> | string
    email?: StringFilter<"ngos"> | string
    category?: StringFilter<"ngos"> | string
    location?: StringFilter<"ngos"> | string
    latitude?: FloatFilter<"ngos"> | number
    longitude?: FloatFilter<"ngos"> | number
    description?: StringFilter<"ngos"> | string
    website?: StringNullableFilter<"ngos"> | string | null
    phone?: StringNullableFilter<"ngos"> | string | null
    hours?: StringNullableFilter<"ngos"> | string | null
    image_url?: StringNullableFilter<"ngos"> | string | null
    created_at?: DateTimeFilter<"ngos"> | Date | string
    updated_at?: DateTimeFilter<"ngos"> | Date | string
    donations?: DonationsListRelationFilter
  }

  export type ngosOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    donations?: donationsOrderByRelationAggregateInput
  }

  export type ngosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ngosWhereInput | ngosWhereInput[]
    OR?: ngosWhereInput[]
    NOT?: ngosWhereInput | ngosWhereInput[]
    name?: StringFilter<"ngos"> | string
    email?: StringFilter<"ngos"> | string
    category?: StringFilter<"ngos"> | string
    location?: StringFilter<"ngos"> | string
    latitude?: FloatFilter<"ngos"> | number
    longitude?: FloatFilter<"ngos"> | number
    description?: StringFilter<"ngos"> | string
    website?: StringNullableFilter<"ngos"> | string | null
    phone?: StringNullableFilter<"ngos"> | string | null
    hours?: StringNullableFilter<"ngos"> | string | null
    image_url?: StringNullableFilter<"ngos"> | string | null
    created_at?: DateTimeFilter<"ngos"> | Date | string
    updated_at?: DateTimeFilter<"ngos"> | Date | string
    donations?: DonationsListRelationFilter
  }, "id">

  export type ngosOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ngosCountOrderByAggregateInput
    _avg?: ngosAvgOrderByAggregateInput
    _max?: ngosMaxOrderByAggregateInput
    _min?: ngosMinOrderByAggregateInput
    _sum?: ngosSumOrderByAggregateInput
  }

  export type ngosScalarWhereWithAggregatesInput = {
    AND?: ngosScalarWhereWithAggregatesInput | ngosScalarWhereWithAggregatesInput[]
    OR?: ngosScalarWhereWithAggregatesInput[]
    NOT?: ngosScalarWhereWithAggregatesInput | ngosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ngos"> | string
    name?: StringWithAggregatesFilter<"ngos"> | string
    email?: StringWithAggregatesFilter<"ngos"> | string
    category?: StringWithAggregatesFilter<"ngos"> | string
    location?: StringWithAggregatesFilter<"ngos"> | string
    latitude?: FloatWithAggregatesFilter<"ngos"> | number
    longitude?: FloatWithAggregatesFilter<"ngos"> | number
    description?: StringWithAggregatesFilter<"ngos"> | string
    website?: StringNullableWithAggregatesFilter<"ngos"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ngos"> | string | null
    hours?: StringNullableWithAggregatesFilter<"ngos"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"ngos"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ngos"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ngos"> | Date | string
  }

  export type donationsWhereInput = {
    AND?: donationsWhereInput | donationsWhereInput[]
    OR?: donationsWhereInput[]
    NOT?: donationsWhereInput | donationsWhereInput[]
    id?: StringFilter<"donations"> | string
    title?: StringFilter<"donations"> | string
    category?: StringFilter<"donations"> | string
    condition?: StringFilter<"donations"> | string
    description?: StringFilter<"donations"> | string
    quantity?: IntFilter<"donations"> | number
    delivery_method?: StringFilter<"donations"> | string
    preferred_date?: StringFilter<"donations"> | string
    image_url?: StringNullableFilter<"donations"> | string | null
    status?: StringFilter<"donations"> | string
    user_id?: StringFilter<"donations"> | string
    ngo_id?: StringNullableFilter<"donations"> | string | null
    created_at?: DateTimeFilter<"donations"> | Date | string
    updated_at?: DateTimeFilter<"donations"> | Date | string
    profile?: XOR<ProfilesScalarRelationFilter, profilesWhereInput>
    ngo?: XOR<NgosNullableScalarRelationFilter, ngosWhereInput> | null
  }

  export type donationsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    delivery_method?: SortOrder
    preferred_date?: SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    ngo_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile?: profilesOrderByWithRelationInput
    ngo?: ngosOrderByWithRelationInput
  }

  export type donationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: donationsWhereInput | donationsWhereInput[]
    OR?: donationsWhereInput[]
    NOT?: donationsWhereInput | donationsWhereInput[]
    title?: StringFilter<"donations"> | string
    category?: StringFilter<"donations"> | string
    condition?: StringFilter<"donations"> | string
    description?: StringFilter<"donations"> | string
    quantity?: IntFilter<"donations"> | number
    delivery_method?: StringFilter<"donations"> | string
    preferred_date?: StringFilter<"donations"> | string
    image_url?: StringNullableFilter<"donations"> | string | null
    status?: StringFilter<"donations"> | string
    user_id?: StringFilter<"donations"> | string
    ngo_id?: StringNullableFilter<"donations"> | string | null
    created_at?: DateTimeFilter<"donations"> | Date | string
    updated_at?: DateTimeFilter<"donations"> | Date | string
    profile?: XOR<ProfilesScalarRelationFilter, profilesWhereInput>
    ngo?: XOR<NgosNullableScalarRelationFilter, ngosWhereInput> | null
  }, "id">

  export type donationsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    delivery_method?: SortOrder
    preferred_date?: SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    ngo_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: donationsCountOrderByAggregateInput
    _avg?: donationsAvgOrderByAggregateInput
    _max?: donationsMaxOrderByAggregateInput
    _min?: donationsMinOrderByAggregateInput
    _sum?: donationsSumOrderByAggregateInput
  }

  export type donationsScalarWhereWithAggregatesInput = {
    AND?: donationsScalarWhereWithAggregatesInput | donationsScalarWhereWithAggregatesInput[]
    OR?: donationsScalarWhereWithAggregatesInput[]
    NOT?: donationsScalarWhereWithAggregatesInput | donationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"donations"> | string
    title?: StringWithAggregatesFilter<"donations"> | string
    category?: StringWithAggregatesFilter<"donations"> | string
    condition?: StringWithAggregatesFilter<"donations"> | string
    description?: StringWithAggregatesFilter<"donations"> | string
    quantity?: IntWithAggregatesFilter<"donations"> | number
    delivery_method?: StringWithAggregatesFilter<"donations"> | string
    preferred_date?: StringWithAggregatesFilter<"donations"> | string
    image_url?: StringNullableWithAggregatesFilter<"donations"> | string | null
    status?: StringWithAggregatesFilter<"donations"> | string
    user_id?: StringWithAggregatesFilter<"donations"> | string
    ngo_id?: StringNullableWithAggregatesFilter<"donations"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"donations"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"donations"> | Date | string
  }

  export type profilesCreateInput = {
    id?: string
    full_name: string
    email: string
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    donations?: donationsCreateNestedManyWithoutProfileInput
  }

  export type profilesUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    donations?: donationsUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: donationsUpdateManyWithoutProfileNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: donationsUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profilesCreateManyInput = {
    id?: string
    full_name: string
    email: string
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type profilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ngosCreateInput = {
    id?: string
    name: string
    email: string
    category: string
    location: string
    latitude: number
    longitude: number
    description: string
    website?: string | null
    phone?: string | null
    hours?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    donations?: donationsCreateNestedManyWithoutNgoInput
  }

  export type ngosUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    category: string
    location: string
    latitude: number
    longitude: number
    description: string
    website?: string | null
    phone?: string | null
    hours?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    donations?: donationsUncheckedCreateNestedManyWithoutNgoInput
  }

  export type ngosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: donationsUpdateManyWithoutNgoNestedInput
  }

  export type ngosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    donations?: donationsUncheckedUpdateManyWithoutNgoNestedInput
  }

  export type ngosCreateManyInput = {
    id?: string
    name: string
    email: string
    category: string
    location: string
    latitude: number
    longitude: number
    description: string
    website?: string | null
    phone?: string | null
    hours?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ngosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ngosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationsCreateInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    profile: profilesCreateNestedOneWithoutDonationsInput
    ngo?: ngosCreateNestedOneWithoutDonationsInput
  }

  export type donationsUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    user_id: string
    ngo_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type donationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUpdateOneRequiredWithoutDonationsNestedInput
    ngo?: ngosUpdateOneWithoutDonationsNestedInput
  }

  export type donationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ngo_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationsCreateManyInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    user_id: string
    ngo_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type donationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    ngo_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DonationsListRelationFilter = {
    every?: donationsWhereInput
    some?: donationsWhereInput
    none?: donationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type donationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ngosCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    hours?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ngosAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ngosMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    hours?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ngosMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    category?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    hours?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ngosSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ProfilesScalarRelationFilter = {
    is?: profilesWhereInput
    isNot?: profilesWhereInput
  }

  export type NgosNullableScalarRelationFilter = {
    is?: ngosWhereInput | null
    isNot?: ngosWhereInput | null
  }

  export type donationsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    delivery_method?: SortOrder
    preferred_date?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    ngo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type donationsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type donationsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    delivery_method?: SortOrder
    preferred_date?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    ngo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type donationsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    delivery_method?: SortOrder
    preferred_date?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    ngo_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type donationsSumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type donationsCreateNestedManyWithoutProfileInput = {
    create?: XOR<donationsCreateWithoutProfileInput, donationsUncheckedCreateWithoutProfileInput> | donationsCreateWithoutProfileInput[] | donationsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutProfileInput | donationsCreateOrConnectWithoutProfileInput[]
    createMany?: donationsCreateManyProfileInputEnvelope
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
  }

  export type donationsUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<donationsCreateWithoutProfileInput, donationsUncheckedCreateWithoutProfileInput> | donationsCreateWithoutProfileInput[] | donationsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutProfileInput | donationsCreateOrConnectWithoutProfileInput[]
    createMany?: donationsCreateManyProfileInputEnvelope
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
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

  export type donationsUpdateManyWithoutProfileNestedInput = {
    create?: XOR<donationsCreateWithoutProfileInput, donationsUncheckedCreateWithoutProfileInput> | donationsCreateWithoutProfileInput[] | donationsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutProfileInput | donationsCreateOrConnectWithoutProfileInput[]
    upsert?: donationsUpsertWithWhereUniqueWithoutProfileInput | donationsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: donationsCreateManyProfileInputEnvelope
    set?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    disconnect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    delete?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    update?: donationsUpdateWithWhereUniqueWithoutProfileInput | donationsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: donationsUpdateManyWithWhereWithoutProfileInput | donationsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: donationsScalarWhereInput | donationsScalarWhereInput[]
  }

  export type donationsUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<donationsCreateWithoutProfileInput, donationsUncheckedCreateWithoutProfileInput> | donationsCreateWithoutProfileInput[] | donationsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutProfileInput | donationsCreateOrConnectWithoutProfileInput[]
    upsert?: donationsUpsertWithWhereUniqueWithoutProfileInput | donationsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: donationsCreateManyProfileInputEnvelope
    set?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    disconnect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    delete?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    update?: donationsUpdateWithWhereUniqueWithoutProfileInput | donationsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: donationsUpdateManyWithWhereWithoutProfileInput | donationsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: donationsScalarWhereInput | donationsScalarWhereInput[]
  }

  export type donationsCreateNestedManyWithoutNgoInput = {
    create?: XOR<donationsCreateWithoutNgoInput, donationsUncheckedCreateWithoutNgoInput> | donationsCreateWithoutNgoInput[] | donationsUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutNgoInput | donationsCreateOrConnectWithoutNgoInput[]
    createMany?: donationsCreateManyNgoInputEnvelope
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
  }

  export type donationsUncheckedCreateNestedManyWithoutNgoInput = {
    create?: XOR<donationsCreateWithoutNgoInput, donationsUncheckedCreateWithoutNgoInput> | donationsCreateWithoutNgoInput[] | donationsUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutNgoInput | donationsCreateOrConnectWithoutNgoInput[]
    createMany?: donationsCreateManyNgoInputEnvelope
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type donationsUpdateManyWithoutNgoNestedInput = {
    create?: XOR<donationsCreateWithoutNgoInput, donationsUncheckedCreateWithoutNgoInput> | donationsCreateWithoutNgoInput[] | donationsUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutNgoInput | donationsCreateOrConnectWithoutNgoInput[]
    upsert?: donationsUpsertWithWhereUniqueWithoutNgoInput | donationsUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: donationsCreateManyNgoInputEnvelope
    set?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    disconnect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    delete?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    update?: donationsUpdateWithWhereUniqueWithoutNgoInput | donationsUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: donationsUpdateManyWithWhereWithoutNgoInput | donationsUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: donationsScalarWhereInput | donationsScalarWhereInput[]
  }

  export type donationsUncheckedUpdateManyWithoutNgoNestedInput = {
    create?: XOR<donationsCreateWithoutNgoInput, donationsUncheckedCreateWithoutNgoInput> | donationsCreateWithoutNgoInput[] | donationsUncheckedCreateWithoutNgoInput[]
    connectOrCreate?: donationsCreateOrConnectWithoutNgoInput | donationsCreateOrConnectWithoutNgoInput[]
    upsert?: donationsUpsertWithWhereUniqueWithoutNgoInput | donationsUpsertWithWhereUniqueWithoutNgoInput[]
    createMany?: donationsCreateManyNgoInputEnvelope
    set?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    disconnect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    delete?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    connect?: donationsWhereUniqueInput | donationsWhereUniqueInput[]
    update?: donationsUpdateWithWhereUniqueWithoutNgoInput | donationsUpdateWithWhereUniqueWithoutNgoInput[]
    updateMany?: donationsUpdateManyWithWhereWithoutNgoInput | donationsUpdateManyWithWhereWithoutNgoInput[]
    deleteMany?: donationsScalarWhereInput | donationsScalarWhereInput[]
  }

  export type profilesCreateNestedOneWithoutDonationsInput = {
    create?: XOR<profilesCreateWithoutDonationsInput, profilesUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: profilesCreateOrConnectWithoutDonationsInput
    connect?: profilesWhereUniqueInput
  }

  export type ngosCreateNestedOneWithoutDonationsInput = {
    create?: XOR<ngosCreateWithoutDonationsInput, ngosUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: ngosCreateOrConnectWithoutDonationsInput
    connect?: ngosWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profilesUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<profilesCreateWithoutDonationsInput, profilesUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: profilesCreateOrConnectWithoutDonationsInput
    upsert?: profilesUpsertWithoutDonationsInput
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutDonationsInput, profilesUpdateWithoutDonationsInput>, profilesUncheckedUpdateWithoutDonationsInput>
  }

  export type ngosUpdateOneWithoutDonationsNestedInput = {
    create?: XOR<ngosCreateWithoutDonationsInput, ngosUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: ngosCreateOrConnectWithoutDonationsInput
    upsert?: ngosUpsertWithoutDonationsInput
    disconnect?: ngosWhereInput | boolean
    delete?: ngosWhereInput | boolean
    connect?: ngosWhereUniqueInput
    update?: XOR<XOR<ngosUpdateToOneWithWhereWithoutDonationsInput, ngosUpdateWithoutDonationsInput>, ngosUncheckedUpdateWithoutDonationsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type donationsCreateWithoutProfileInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    ngo?: ngosCreateNestedOneWithoutDonationsInput
  }

  export type donationsUncheckedCreateWithoutProfileInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    ngo_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type donationsCreateOrConnectWithoutProfileInput = {
    where: donationsWhereUniqueInput
    create: XOR<donationsCreateWithoutProfileInput, donationsUncheckedCreateWithoutProfileInput>
  }

  export type donationsCreateManyProfileInputEnvelope = {
    data: donationsCreateManyProfileInput | donationsCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type donationsUpsertWithWhereUniqueWithoutProfileInput = {
    where: donationsWhereUniqueInput
    update: XOR<donationsUpdateWithoutProfileInput, donationsUncheckedUpdateWithoutProfileInput>
    create: XOR<donationsCreateWithoutProfileInput, donationsUncheckedCreateWithoutProfileInput>
  }

  export type donationsUpdateWithWhereUniqueWithoutProfileInput = {
    where: donationsWhereUniqueInput
    data: XOR<donationsUpdateWithoutProfileInput, donationsUncheckedUpdateWithoutProfileInput>
  }

  export type donationsUpdateManyWithWhereWithoutProfileInput = {
    where: donationsScalarWhereInput
    data: XOR<donationsUpdateManyMutationInput, donationsUncheckedUpdateManyWithoutProfileInput>
  }

  export type donationsScalarWhereInput = {
    AND?: donationsScalarWhereInput | donationsScalarWhereInput[]
    OR?: donationsScalarWhereInput[]
    NOT?: donationsScalarWhereInput | donationsScalarWhereInput[]
    id?: StringFilter<"donations"> | string
    title?: StringFilter<"donations"> | string
    category?: StringFilter<"donations"> | string
    condition?: StringFilter<"donations"> | string
    description?: StringFilter<"donations"> | string
    quantity?: IntFilter<"donations"> | number
    delivery_method?: StringFilter<"donations"> | string
    preferred_date?: StringFilter<"donations"> | string
    image_url?: StringNullableFilter<"donations"> | string | null
    status?: StringFilter<"donations"> | string
    user_id?: StringFilter<"donations"> | string
    ngo_id?: StringNullableFilter<"donations"> | string | null
    created_at?: DateTimeFilter<"donations"> | Date | string
    updated_at?: DateTimeFilter<"donations"> | Date | string
  }

  export type donationsCreateWithoutNgoInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    profile: profilesCreateNestedOneWithoutDonationsInput
  }

  export type donationsUncheckedCreateWithoutNgoInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type donationsCreateOrConnectWithoutNgoInput = {
    where: donationsWhereUniqueInput
    create: XOR<donationsCreateWithoutNgoInput, donationsUncheckedCreateWithoutNgoInput>
  }

  export type donationsCreateManyNgoInputEnvelope = {
    data: donationsCreateManyNgoInput | donationsCreateManyNgoInput[]
    skipDuplicates?: boolean
  }

  export type donationsUpsertWithWhereUniqueWithoutNgoInput = {
    where: donationsWhereUniqueInput
    update: XOR<donationsUpdateWithoutNgoInput, donationsUncheckedUpdateWithoutNgoInput>
    create: XOR<donationsCreateWithoutNgoInput, donationsUncheckedCreateWithoutNgoInput>
  }

  export type donationsUpdateWithWhereUniqueWithoutNgoInput = {
    where: donationsWhereUniqueInput
    data: XOR<donationsUpdateWithoutNgoInput, donationsUncheckedUpdateWithoutNgoInput>
  }

  export type donationsUpdateManyWithWhereWithoutNgoInput = {
    where: donationsScalarWhereInput
    data: XOR<donationsUpdateManyMutationInput, donationsUncheckedUpdateManyWithoutNgoInput>
  }

  export type profilesCreateWithoutDonationsInput = {
    id?: string
    full_name: string
    email: string
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type profilesUncheckedCreateWithoutDonationsInput = {
    id?: string
    full_name: string
    email: string
    avatar_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type profilesCreateOrConnectWithoutDonationsInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutDonationsInput, profilesUncheckedCreateWithoutDonationsInput>
  }

  export type ngosCreateWithoutDonationsInput = {
    id?: string
    name: string
    email: string
    category: string
    location: string
    latitude: number
    longitude: number
    description: string
    website?: string | null
    phone?: string | null
    hours?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ngosUncheckedCreateWithoutDonationsInput = {
    id?: string
    name: string
    email: string
    category: string
    location: string
    latitude: number
    longitude: number
    description: string
    website?: string | null
    phone?: string | null
    hours?: string | null
    image_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ngosCreateOrConnectWithoutDonationsInput = {
    where: ngosWhereUniqueInput
    create: XOR<ngosCreateWithoutDonationsInput, ngosUncheckedCreateWithoutDonationsInput>
  }

  export type profilesUpsertWithoutDonationsInput = {
    update: XOR<profilesUpdateWithoutDonationsInput, profilesUncheckedUpdateWithoutDonationsInput>
    create: XOR<profilesCreateWithoutDonationsInput, profilesUncheckedCreateWithoutDonationsInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutDonationsInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutDonationsInput, profilesUncheckedUpdateWithoutDonationsInput>
  }

  export type profilesUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ngosUpsertWithoutDonationsInput = {
    update: XOR<ngosUpdateWithoutDonationsInput, ngosUncheckedUpdateWithoutDonationsInput>
    create: XOR<ngosCreateWithoutDonationsInput, ngosUncheckedCreateWithoutDonationsInput>
    where?: ngosWhereInput
  }

  export type ngosUpdateToOneWithWhereWithoutDonationsInput = {
    where?: ngosWhereInput
    data: XOR<ngosUpdateWithoutDonationsInput, ngosUncheckedUpdateWithoutDonationsInput>
  }

  export type ngosUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ngosUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationsCreateManyProfileInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    ngo_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type donationsUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ngo?: ngosUpdateOneWithoutDonationsNestedInput
  }

  export type donationsUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ngo_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationsUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ngo_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationsCreateManyNgoInput = {
    id?: string
    title: string
    category: string
    condition: string
    description: string
    quantity: number
    delivery_method: string
    preferred_date: string
    image_url?: string | null
    status?: string
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type donationsUpdateWithoutNgoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type donationsUncheckedUpdateWithoutNgoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type donationsUncheckedUpdateManyWithoutNgoInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    delivery_method?: StringFieldUpdateOperationsInput | string
    preferred_date?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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