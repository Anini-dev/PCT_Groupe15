
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
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Demande
 * 
 */
export type Demande = $Result.DefaultSelection<Prisma.$DemandePayload>
/**
 * Model Fichier
 * 
 */
export type Fichier = $Result.DefaultSelection<Prisma.$FichierPayload>
/**
 * Model Acte
 * 
 */
export type Acte = $Result.DefaultSelection<Prisma.$ActePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>
/**
 * Model Commune
 * 
 */
export type Commune = $Result.DefaultSelection<Prisma.$CommunePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CITOYEN: 'CITOYEN',
  AGENT: 'AGENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutDemande: {
  EN_ATTENTE: 'EN_ATTENTE',
  VALIDE: 'VALIDE',
  REJETE: 'REJETE'
};

export type StatutDemande = (typeof StatutDemande)[keyof typeof StatutDemande]


export const TypeActe: {
  NAISSANCE: 'NAISSANCE',
  MARIAGE: 'MARIAGE',
  DECES: 'DECES'
};

export type TypeActe = (typeof TypeActe)[keyof typeof TypeActe]


export const StatutPaiement: {
  EFFECTUE: 'EFFECTUE',
  ECHOUE: 'ECHOUE'
};

export type StatutPaiement = (typeof StatutPaiement)[keyof typeof StatutPaiement]


export const MoyenPaiement: {
  MOBILE_MONEY: 'MOBILE_MONEY',
  CARTE: 'CARTE',
  ESPECE: 'ESPECE'
};

export type MoyenPaiement = (typeof MoyenPaiement)[keyof typeof MoyenPaiement]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutDemande = $Enums.StatutDemande

export const StatutDemande: typeof $Enums.StatutDemande

export type TypeActe = $Enums.TypeActe

export const TypeActe: typeof $Enums.TypeActe

export type StatutPaiement = $Enums.StatutPaiement

export const StatutPaiement: typeof $Enums.StatutPaiement

export type MoyenPaiement = $Enums.MoyenPaiement

export const MoyenPaiement: typeof $Enums.MoyenPaiement

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
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
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
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
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demande`: Exposes CRUD operations for the **Demande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandes
    * const demandes = await prisma.demande.findMany()
    * ```
    */
  get demande(): Prisma.DemandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fichier`: Exposes CRUD operations for the **Fichier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fichiers
    * const fichiers = await prisma.fichier.findMany()
    * ```
    */
  get fichier(): Prisma.FichierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acte`: Exposes CRUD operations for the **Acte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actes
    * const actes = await prisma.acte.findMany()
    * ```
    */
  get acte(): Prisma.ActeDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commune`: Exposes CRUD operations for the **Commune** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communes
    * const communes = await prisma.commune.findMany()
    * ```
    */
  get commune(): Prisma.CommuneDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Utilisateur: 'Utilisateur',
    Demande: 'Demande',
    Fichier: 'Fichier',
    Acte: 'Acte',
    Notification: 'Notification',
    Paiement: 'Paiement',
    Commune: 'Commune'
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
      modelProps: "utilisateur" | "demande" | "fichier" | "acte" | "notification" | "paiement" | "commune"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Demande: {
        payload: Prisma.$DemandePayload<ExtArgs>
        fields: Prisma.DemandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findFirst: {
            args: Prisma.DemandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findMany: {
            args: Prisma.DemandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          create: {
            args: Prisma.DemandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          createMany: {
            args: Prisma.DemandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DemandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          update: {
            args: Prisma.DemandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          deleteMany: {
            args: Prisma.DemandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DemandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          aggregate: {
            args: Prisma.DemandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemande>
          }
          groupBy: {
            args: Prisma.DemandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandeCountArgs<ExtArgs>
            result: $Utils.Optional<DemandeCountAggregateOutputType> | number
          }
        }
      }
      Fichier: {
        payload: Prisma.$FichierPayload<ExtArgs>
        fields: Prisma.FichierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FichierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FichierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          findFirst: {
            args: Prisma.FichierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FichierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          findMany: {
            args: Prisma.FichierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>[]
          }
          create: {
            args: Prisma.FichierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          createMany: {
            args: Prisma.FichierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FichierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          update: {
            args: Prisma.FichierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          deleteMany: {
            args: Prisma.FichierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FichierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FichierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichierPayload>
          }
          aggregate: {
            args: Prisma.FichierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFichier>
          }
          groupBy: {
            args: Prisma.FichierGroupByArgs<ExtArgs>
            result: $Utils.Optional<FichierGroupByOutputType>[]
          }
          count: {
            args: Prisma.FichierCountArgs<ExtArgs>
            result: $Utils.Optional<FichierCountAggregateOutputType> | number
          }
        }
      }
      Acte: {
        payload: Prisma.$ActePayload<ExtArgs>
        fields: Prisma.ActeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload>
          }
          findFirst: {
            args: Prisma.ActeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload>
          }
          findMany: {
            args: Prisma.ActeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload>[]
          }
          create: {
            args: Prisma.ActeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload>
          }
          createMany: {
            args: Prisma.ActeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload>
          }
          update: {
            args: Prisma.ActeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload>
          }
          deleteMany: {
            args: Prisma.ActeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActePayload>
          }
          aggregate: {
            args: Prisma.ActeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActe>
          }
          groupBy: {
            args: Prisma.ActeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActeCountArgs<ExtArgs>
            result: $Utils.Optional<ActeCountAggregateOutputType> | number
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
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
      Commune: {
        payload: Prisma.$CommunePayload<ExtArgs>
        fields: Prisma.CommuneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommuneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommuneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          findFirst: {
            args: Prisma.CommuneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommuneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          findMany: {
            args: Prisma.CommuneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>[]
          }
          create: {
            args: Prisma.CommuneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          createMany: {
            args: Prisma.CommuneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommuneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          update: {
            args: Prisma.CommuneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          deleteMany: {
            args: Prisma.CommuneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommuneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommuneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          aggregate: {
            args: Prisma.CommuneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommune>
          }
          groupBy: {
            args: Prisma.CommuneGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommuneGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommuneCountArgs<ExtArgs>
            result: $Utils.Optional<CommuneCountAggregateOutputType> | number
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
    utilisateur?: UtilisateurOmit
    demande?: DemandeOmit
    fichier?: FichierOmit
    acte?: ActeOmit
    notification?: NotificationOmit
    paiement?: PaiementOmit
    commune?: CommuneOmit
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
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    demandes: number
    paiements: number
    notifications: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandes?: boolean | UtilisateurCountOutputTypeCountDemandesArgs
    paiements?: boolean | UtilisateurCountOutputTypeCountPaiementsArgs
    notifications?: boolean | UtilisateurCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DemandeCountOutputType
   */

  export type DemandeCountOutputType = {
    fichiers: number
  }

  export type DemandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fichiers?: boolean | DemandeCountOutputTypeCountFichiersArgs
  }

  // Custom InputTypes
  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeCountOutputType
     */
    select?: DemandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeCountFichiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FichierWhereInput
  }


  /**
   * Count Type PaiementCountOutputType
   */

  export type PaiementCountOutputType = {
    demandes: number
  }

  export type PaiementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandes?: boolean | PaiementCountOutputTypeCountDemandesArgs
  }

  // Custom InputTypes
  /**
   * PaiementCountOutputType without action
   */
  export type PaiementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaiementCountOutputType
     */
    select?: PaiementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaiementCountOutputType without action
   */
  export type PaiementCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }


  /**
   * Count Type CommuneCountOutputType
   */

  export type CommuneCountOutputType = {
    utilisateurs: number
  }

  export type CommuneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateurs?: boolean | CommuneCountOutputTypeCountUtilisateursArgs
  }

  // Custom InputTypes
  /**
   * CommuneCountOutputType without action
   */
  export type CommuneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommuneCountOutputType
     */
    select?: CommuneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommuneCountOutputType without action
   */
  export type CommuneCountOutputTypeCountUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
    communeId: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
    communeId: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    motDePasse: string | null
    role: $Enums.Role | null
    communeId: number | null
    createdAt: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    motDePasse: string | null
    role: $Enums.Role | null
    communeId: number | null
    createdAt: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    telephone: number
    motDePasse: number
    role: number
    communeId: number
    createdAt: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
    communeId?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
    communeId?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    motDePasse?: true
    role?: true
    communeId?: true
    createdAt?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    motDePasse?: true
    role?: true
    communeId?: true
    createdAt?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    motDePasse?: true
    role?: true
    communeId?: true
    createdAt?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    telephone: string | null
    motDePasse: string
    role: $Enums.Role
    communeId: number | null
    createdAt: Date
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    motDePasse?: boolean
    role?: boolean
    communeId?: boolean
    createdAt?: boolean
    commune?: boolean | Utilisateur$communeArgs<ExtArgs>
    demandes?: boolean | Utilisateur$demandesArgs<ExtArgs>
    paiements?: boolean | Utilisateur$paiementsArgs<ExtArgs>
    notifications?: boolean | Utilisateur$notificationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>



  export type UtilisateurSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    motDePasse?: boolean
    role?: boolean
    communeId?: boolean
    createdAt?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "motDePasse" | "role" | "communeId" | "createdAt", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commune?: boolean | Utilisateur$communeArgs<ExtArgs>
    demandes?: boolean | Utilisateur$demandesArgs<ExtArgs>
    paiements?: boolean | Utilisateur$paiementsArgs<ExtArgs>
    notifications?: boolean | Utilisateur$notificationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      commune: Prisma.$CommunePayload<ExtArgs> | null
      demandes: Prisma.$DemandePayload<ExtArgs>[]
      paiements: Prisma.$PaiementPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      telephone: string | null
      motDePasse: string
      role: $Enums.Role
      communeId: number | null
      createdAt: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commune<T extends Utilisateur$communeArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$communeArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    demandes<T extends Utilisateur$demandesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$demandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends Utilisateur$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Utilisateur$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly telephone: FieldRef<"Utilisateur", 'String'>
    readonly motDePasse: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly communeId: FieldRef<"Utilisateur", 'Int'>
    readonly createdAt: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.commune
   */
  export type Utilisateur$communeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    where?: CommuneWhereInput
  }

  /**
   * Utilisateur.demandes
   */
  export type Utilisateur$demandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Utilisateur.paiements
   */
  export type Utilisateur$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Utilisateur.notifications
   */
  export type Utilisateur$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Demande
   */

  export type AggregateDemande = {
    _count: DemandeCountAggregateOutputType | null
    _avg: DemandeAvgAggregateOutputType | null
    _sum: DemandeSumAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  export type DemandeAvgAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    paiementId: number | null
  }

  export type DemandeSumAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    paiementId: number | null
  }

  export type DemandeMinAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    typeActe: $Enums.TypeActe | null
    statut: $Enums.StatutDemande | null
    paiementId: number | null
    createdAt: Date | null
  }

  export type DemandeMaxAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
    typeActe: $Enums.TypeActe | null
    statut: $Enums.StatutDemande | null
    paiementId: number | null
    createdAt: Date | null
  }

  export type DemandeCountAggregateOutputType = {
    id: number
    utilisateurId: number
    typeActe: number
    statut: number
    paiementId: number
    createdAt: number
    _all: number
  }


  export type DemandeAvgAggregateInputType = {
    id?: true
    utilisateurId?: true
    paiementId?: true
  }

  export type DemandeSumAggregateInputType = {
    id?: true
    utilisateurId?: true
    paiementId?: true
  }

  export type DemandeMinAggregateInputType = {
    id?: true
    utilisateurId?: true
    typeActe?: true
    statut?: true
    paiementId?: true
    createdAt?: true
  }

  export type DemandeMaxAggregateInputType = {
    id?: true
    utilisateurId?: true
    typeActe?: true
    statut?: true
    paiementId?: true
    createdAt?: true
  }

  export type DemandeCountAggregateInputType = {
    id?: true
    utilisateurId?: true
    typeActe?: true
    statut?: true
    paiementId?: true
    createdAt?: true
    _all?: true
  }

  export type DemandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demande to aggregate.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demandes
    **/
    _count?: true | DemandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandeMaxAggregateInputType
  }

  export type GetDemandeAggregateType<T extends DemandeAggregateArgs> = {
        [P in keyof T & keyof AggregateDemande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemande[P]>
      : GetScalarType<T[P], AggregateDemande[P]>
  }




  export type DemandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithAggregationInput | DemandeOrderByWithAggregationInput[]
    by: DemandeScalarFieldEnum[] | DemandeScalarFieldEnum
    having?: DemandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandeCountAggregateInputType | true
    _avg?: DemandeAvgAggregateInputType
    _sum?: DemandeSumAggregateInputType
    _min?: DemandeMinAggregateInputType
    _max?: DemandeMaxAggregateInputType
  }

  export type DemandeGroupByOutputType = {
    id: number
    utilisateurId: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    paiementId: number | null
    createdAt: Date
    _count: DemandeCountAggregateOutputType | null
    _avg: DemandeAvgAggregateOutputType | null
    _sum: DemandeSumAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  type GetDemandeGroupByPayload<T extends DemandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandeGroupByOutputType[P]>
            : GetScalarType<T[P], DemandeGroupByOutputType[P]>
        }
      >
    >


  export type DemandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateurId?: boolean
    typeActe?: boolean
    statut?: boolean
    paiementId?: boolean
    createdAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    fichiers?: boolean | Demande$fichiersArgs<ExtArgs>
    paiement?: boolean | Demande$paiementArgs<ExtArgs>
    acte?: boolean | Demande$acteArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>



  export type DemandeSelectScalar = {
    id?: boolean
    utilisateurId?: boolean
    typeActe?: boolean
    statut?: boolean
    paiementId?: boolean
    createdAt?: boolean
  }

  export type DemandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utilisateurId" | "typeActe" | "statut" | "paiementId" | "createdAt", ExtArgs["result"]["demande"]>
  export type DemandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    fichiers?: boolean | Demande$fichiersArgs<ExtArgs>
    paiement?: boolean | Demande$paiementArgs<ExtArgs>
    acte?: boolean | Demande$acteArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DemandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demande"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      fichiers: Prisma.$FichierPayload<ExtArgs>[]
      paiement: Prisma.$PaiementPayload<ExtArgs> | null
      acte: Prisma.$ActePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      utilisateurId: number
      typeActe: $Enums.TypeActe
      statut: $Enums.StatutDemande
      paiementId: number | null
      createdAt: Date
    }, ExtArgs["result"]["demande"]>
    composites: {}
  }

  type DemandeGetPayload<S extends boolean | null | undefined | DemandeDefaultArgs> = $Result.GetResult<Prisma.$DemandePayload, S>

  type DemandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandeCountAggregateInputType | true
    }

  export interface DemandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demande'], meta: { name: 'Demande' } }
    /**
     * Find zero or one Demande that matches the filter.
     * @param {DemandeFindUniqueArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandeFindUniqueArgs>(args: SelectSubset<T, DemandeFindUniqueArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandeFindUniqueOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandeFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandeFindFirstArgs>(args?: SelectSubset<T, DemandeFindFirstArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandeFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandes
     * const demandes = await prisma.demande.findMany()
     * 
     * // Get first 10 Demandes
     * const demandes = await prisma.demande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandeWithIdOnly = await prisma.demande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandeFindManyArgs>(args?: SelectSubset<T, DemandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demande.
     * @param {DemandeCreateArgs} args - Arguments to create a Demande.
     * @example
     * // Create one Demande
     * const Demande = await prisma.demande.create({
     *   data: {
     *     // ... data to create a Demande
     *   }
     * })
     * 
     */
    create<T extends DemandeCreateArgs>(args: SelectSubset<T, DemandeCreateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandes.
     * @param {DemandeCreateManyArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandeCreateManyArgs>(args?: SelectSubset<T, DemandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Demande.
     * @param {DemandeDeleteArgs} args - Arguments to delete one Demande.
     * @example
     * // Delete one Demande
     * const Demande = await prisma.demande.delete({
     *   where: {
     *     // ... filter to delete one Demande
     *   }
     * })
     * 
     */
    delete<T extends DemandeDeleteArgs>(args: SelectSubset<T, DemandeDeleteArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demande.
     * @param {DemandeUpdateArgs} args - Arguments to update one Demande.
     * @example
     * // Update one Demande
     * const demande = await prisma.demande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandeUpdateArgs>(args: SelectSubset<T, DemandeUpdateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandes.
     * @param {DemandeDeleteManyArgs} args - Arguments to filter Demandes to delete.
     * @example
     * // Delete a few Demandes
     * const { count } = await prisma.demande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandeDeleteManyArgs>(args?: SelectSubset<T, DemandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandeUpdateManyArgs>(args: SelectSubset<T, DemandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Demande.
     * @param {DemandeUpsertArgs} args - Arguments to update or create a Demande.
     * @example
     * // Update or create a Demande
     * const demande = await prisma.demande.upsert({
     *   create: {
     *     // ... data to create a Demande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demande we want to update
     *   }
     * })
     */
    upsert<T extends DemandeUpsertArgs>(args: SelectSubset<T, DemandeUpsertArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeCountArgs} args - Arguments to filter Demandes to count.
     * @example
     * // Count the number of Demandes
     * const count = await prisma.demande.count({
     *   where: {
     *     // ... the filter for the Demandes we want to count
     *   }
     * })
    **/
    count<T extends DemandeCountArgs>(
      args?: Subset<T, DemandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandeAggregateArgs>(args: Subset<T, DemandeAggregateArgs>): Prisma.PrismaPromise<GetDemandeAggregateType<T>>

    /**
     * Group by Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeGroupByArgs} args - Group by arguments.
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
      T extends DemandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandeGroupByArgs['orderBy'] }
        : { orderBy?: DemandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demande model
   */
  readonly fields: DemandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fichiers<T extends Demande$fichiersArgs<ExtArgs> = {}>(args?: Subset<T, Demande$fichiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiement<T extends Demande$paiementArgs<ExtArgs> = {}>(args?: Subset<T, Demande$paiementArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    acte<T extends Demande$acteArgs<ExtArgs> = {}>(args?: Subset<T, Demande$acteArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Demande model
   */
  interface DemandeFieldRefs {
    readonly id: FieldRef<"Demande", 'Int'>
    readonly utilisateurId: FieldRef<"Demande", 'Int'>
    readonly typeActe: FieldRef<"Demande", 'TypeActe'>
    readonly statut: FieldRef<"Demande", 'StatutDemande'>
    readonly paiementId: FieldRef<"Demande", 'Int'>
    readonly createdAt: FieldRef<"Demande", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Demande findUnique
   */
  export type DemandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findUniqueOrThrow
   */
  export type DemandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findFirst
   */
  export type DemandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findFirstOrThrow
   */
  export type DemandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findMany
   */
  export type DemandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demandes to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande create
   */
  export type DemandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Demande.
     */
    data: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
  }

  /**
   * Demande createMany
   */
  export type DemandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demande update
   */
  export type DemandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Demande.
     */
    data: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
    /**
     * Choose, which Demande to update.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande updateMany
   */
  export type DemandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
  }

  /**
   * Demande upsert
   */
  export type DemandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Demande to update in case it exists.
     */
    where: DemandeWhereUniqueInput
    /**
     * In case the Demande found by the `where` argument doesn't exist, create a new Demande with this data.
     */
    create: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
    /**
     * In case the Demande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
  }

  /**
   * Demande delete
   */
  export type DemandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter which Demande to delete.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande deleteMany
   */
  export type DemandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandes to delete
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to delete.
     */
    limit?: number
  }

  /**
   * Demande.fichiers
   */
  export type Demande$fichiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    where?: FichierWhereInput
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    cursor?: FichierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FichierScalarFieldEnum | FichierScalarFieldEnum[]
  }

  /**
   * Demande.paiement
   */
  export type Demande$paiementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
  }

  /**
   * Demande.acte
   */
  export type Demande$acteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    where?: ActeWhereInput
  }

  /**
   * Demande without action
   */
  export type DemandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
  }


  /**
   * Model Fichier
   */

  export type AggregateFichier = {
    _count: FichierCountAggregateOutputType | null
    _avg: FichierAvgAggregateOutputType | null
    _sum: FichierSumAggregateOutputType | null
    _min: FichierMinAggregateOutputType | null
    _max: FichierMaxAggregateOutputType | null
  }

  export type FichierAvgAggregateOutputType = {
    id: number | null
    demandeId: number | null
  }

  export type FichierSumAggregateOutputType = {
    id: number | null
    demandeId: number | null
  }

  export type FichierMinAggregateOutputType = {
    id: number | null
    url: string | null
    nom: string | null
    demandeId: number | null
    createdAt: Date | null
  }

  export type FichierMaxAggregateOutputType = {
    id: number | null
    url: string | null
    nom: string | null
    demandeId: number | null
    createdAt: Date | null
  }

  export type FichierCountAggregateOutputType = {
    id: number
    url: number
    nom: number
    demandeId: number
    createdAt: number
    _all: number
  }


  export type FichierAvgAggregateInputType = {
    id?: true
    demandeId?: true
  }

  export type FichierSumAggregateInputType = {
    id?: true
    demandeId?: true
  }

  export type FichierMinAggregateInputType = {
    id?: true
    url?: true
    nom?: true
    demandeId?: true
    createdAt?: true
  }

  export type FichierMaxAggregateInputType = {
    id?: true
    url?: true
    nom?: true
    demandeId?: true
    createdAt?: true
  }

  export type FichierCountAggregateInputType = {
    id?: true
    url?: true
    nom?: true
    demandeId?: true
    createdAt?: true
    _all?: true
  }

  export type FichierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fichier to aggregate.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fichiers
    **/
    _count?: true | FichierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FichierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FichierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FichierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FichierMaxAggregateInputType
  }

  export type GetFichierAggregateType<T extends FichierAggregateArgs> = {
        [P in keyof T & keyof AggregateFichier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFichier[P]>
      : GetScalarType<T[P], AggregateFichier[P]>
  }




  export type FichierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FichierWhereInput
    orderBy?: FichierOrderByWithAggregationInput | FichierOrderByWithAggregationInput[]
    by: FichierScalarFieldEnum[] | FichierScalarFieldEnum
    having?: FichierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FichierCountAggregateInputType | true
    _avg?: FichierAvgAggregateInputType
    _sum?: FichierSumAggregateInputType
    _min?: FichierMinAggregateInputType
    _max?: FichierMaxAggregateInputType
  }

  export type FichierGroupByOutputType = {
    id: number
    url: string
    nom: string
    demandeId: number
    createdAt: Date
    _count: FichierCountAggregateOutputType | null
    _avg: FichierAvgAggregateOutputType | null
    _sum: FichierSumAggregateOutputType | null
    _min: FichierMinAggregateOutputType | null
    _max: FichierMaxAggregateOutputType | null
  }

  type GetFichierGroupByPayload<T extends FichierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FichierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FichierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FichierGroupByOutputType[P]>
            : GetScalarType<T[P], FichierGroupByOutputType[P]>
        }
      >
    >


  export type FichierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    nom?: boolean
    demandeId?: boolean
    createdAt?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fichier"]>



  export type FichierSelectScalar = {
    id?: boolean
    url?: boolean
    nom?: boolean
    demandeId?: boolean
    createdAt?: boolean
  }

  export type FichierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "nom" | "demandeId" | "createdAt", ExtArgs["result"]["fichier"]>
  export type FichierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }

  export type $FichierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fichier"
    objects: {
      demande: Prisma.$DemandePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      nom: string
      demandeId: number
      createdAt: Date
    }, ExtArgs["result"]["fichier"]>
    composites: {}
  }

  type FichierGetPayload<S extends boolean | null | undefined | FichierDefaultArgs> = $Result.GetResult<Prisma.$FichierPayload, S>

  type FichierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FichierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FichierCountAggregateInputType | true
    }

  export interface FichierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fichier'], meta: { name: 'Fichier' } }
    /**
     * Find zero or one Fichier that matches the filter.
     * @param {FichierFindUniqueArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FichierFindUniqueArgs>(args: SelectSubset<T, FichierFindUniqueArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fichier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FichierFindUniqueOrThrowArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FichierFindUniqueOrThrowArgs>(args: SelectSubset<T, FichierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierFindFirstArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FichierFindFirstArgs>(args?: SelectSubset<T, FichierFindFirstArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fichier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierFindFirstOrThrowArgs} args - Arguments to find a Fichier
     * @example
     * // Get one Fichier
     * const fichier = await prisma.fichier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FichierFindFirstOrThrowArgs>(args?: SelectSubset<T, FichierFindFirstOrThrowArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fichiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fichiers
     * const fichiers = await prisma.fichier.findMany()
     * 
     * // Get first 10 Fichiers
     * const fichiers = await prisma.fichier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fichierWithIdOnly = await prisma.fichier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FichierFindManyArgs>(args?: SelectSubset<T, FichierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fichier.
     * @param {FichierCreateArgs} args - Arguments to create a Fichier.
     * @example
     * // Create one Fichier
     * const Fichier = await prisma.fichier.create({
     *   data: {
     *     // ... data to create a Fichier
     *   }
     * })
     * 
     */
    create<T extends FichierCreateArgs>(args: SelectSubset<T, FichierCreateArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fichiers.
     * @param {FichierCreateManyArgs} args - Arguments to create many Fichiers.
     * @example
     * // Create many Fichiers
     * const fichier = await prisma.fichier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FichierCreateManyArgs>(args?: SelectSubset<T, FichierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fichier.
     * @param {FichierDeleteArgs} args - Arguments to delete one Fichier.
     * @example
     * // Delete one Fichier
     * const Fichier = await prisma.fichier.delete({
     *   where: {
     *     // ... filter to delete one Fichier
     *   }
     * })
     * 
     */
    delete<T extends FichierDeleteArgs>(args: SelectSubset<T, FichierDeleteArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fichier.
     * @param {FichierUpdateArgs} args - Arguments to update one Fichier.
     * @example
     * // Update one Fichier
     * const fichier = await prisma.fichier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FichierUpdateArgs>(args: SelectSubset<T, FichierUpdateArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fichiers.
     * @param {FichierDeleteManyArgs} args - Arguments to filter Fichiers to delete.
     * @example
     * // Delete a few Fichiers
     * const { count } = await prisma.fichier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FichierDeleteManyArgs>(args?: SelectSubset<T, FichierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fichiers
     * const fichier = await prisma.fichier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FichierUpdateManyArgs>(args: SelectSubset<T, FichierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fichier.
     * @param {FichierUpsertArgs} args - Arguments to update or create a Fichier.
     * @example
     * // Update or create a Fichier
     * const fichier = await prisma.fichier.upsert({
     *   create: {
     *     // ... data to create a Fichier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fichier we want to update
     *   }
     * })
     */
    upsert<T extends FichierUpsertArgs>(args: SelectSubset<T, FichierUpsertArgs<ExtArgs>>): Prisma__FichierClient<$Result.GetResult<Prisma.$FichierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fichiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierCountArgs} args - Arguments to filter Fichiers to count.
     * @example
     * // Count the number of Fichiers
     * const count = await prisma.fichier.count({
     *   where: {
     *     // ... the filter for the Fichiers we want to count
     *   }
     * })
    **/
    count<T extends FichierCountArgs>(
      args?: Subset<T, FichierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FichierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fichier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FichierAggregateArgs>(args: Subset<T, FichierAggregateArgs>): Prisma.PrismaPromise<GetFichierAggregateType<T>>

    /**
     * Group by Fichier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichierGroupByArgs} args - Group by arguments.
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
      T extends FichierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FichierGroupByArgs['orderBy'] }
        : { orderBy?: FichierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FichierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFichierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fichier model
   */
  readonly fields: FichierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fichier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FichierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demande<T extends DemandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemandeDefaultArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fichier model
   */
  interface FichierFieldRefs {
    readonly id: FieldRef<"Fichier", 'Int'>
    readonly url: FieldRef<"Fichier", 'String'>
    readonly nom: FieldRef<"Fichier", 'String'>
    readonly demandeId: FieldRef<"Fichier", 'Int'>
    readonly createdAt: FieldRef<"Fichier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fichier findUnique
   */
  export type FichierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier findUniqueOrThrow
   */
  export type FichierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier findFirst
   */
  export type FichierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichiers.
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichiers.
     */
    distinct?: FichierScalarFieldEnum | FichierScalarFieldEnum[]
  }

  /**
   * Fichier findFirstOrThrow
   */
  export type FichierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichier to fetch.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fichiers.
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fichiers.
     */
    distinct?: FichierScalarFieldEnum | FichierScalarFieldEnum[]
  }

  /**
   * Fichier findMany
   */
  export type FichierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter, which Fichiers to fetch.
     */
    where?: FichierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fichiers to fetch.
     */
    orderBy?: FichierOrderByWithRelationInput | FichierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fichiers.
     */
    cursor?: FichierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fichiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fichiers.
     */
    skip?: number
    distinct?: FichierScalarFieldEnum | FichierScalarFieldEnum[]
  }

  /**
   * Fichier create
   */
  export type FichierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * The data needed to create a Fichier.
     */
    data: XOR<FichierCreateInput, FichierUncheckedCreateInput>
  }

  /**
   * Fichier createMany
   */
  export type FichierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fichiers.
     */
    data: FichierCreateManyInput | FichierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fichier update
   */
  export type FichierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * The data needed to update a Fichier.
     */
    data: XOR<FichierUpdateInput, FichierUncheckedUpdateInput>
    /**
     * Choose, which Fichier to update.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier updateMany
   */
  export type FichierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fichiers.
     */
    data: XOR<FichierUpdateManyMutationInput, FichierUncheckedUpdateManyInput>
    /**
     * Filter which Fichiers to update
     */
    where?: FichierWhereInput
    /**
     * Limit how many Fichiers to update.
     */
    limit?: number
  }

  /**
   * Fichier upsert
   */
  export type FichierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * The filter to search for the Fichier to update in case it exists.
     */
    where: FichierWhereUniqueInput
    /**
     * In case the Fichier found by the `where` argument doesn't exist, create a new Fichier with this data.
     */
    create: XOR<FichierCreateInput, FichierUncheckedCreateInput>
    /**
     * In case the Fichier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FichierUpdateInput, FichierUncheckedUpdateInput>
  }

  /**
   * Fichier delete
   */
  export type FichierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
    /**
     * Filter which Fichier to delete.
     */
    where: FichierWhereUniqueInput
  }

  /**
   * Fichier deleteMany
   */
  export type FichierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fichiers to delete
     */
    where?: FichierWhereInput
    /**
     * Limit how many Fichiers to delete.
     */
    limit?: number
  }

  /**
   * Fichier without action
   */
  export type FichierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fichier
     */
    select?: FichierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fichier
     */
    omit?: FichierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichierInclude<ExtArgs> | null
  }


  /**
   * Model Acte
   */

  export type AggregateActe = {
    _count: ActeCountAggregateOutputType | null
    _avg: ActeAvgAggregateOutputType | null
    _sum: ActeSumAggregateOutputType | null
    _min: ActeMinAggregateOutputType | null
    _max: ActeMaxAggregateOutputType | null
  }

  export type ActeAvgAggregateOutputType = {
    id: number | null
    demandeId: number | null
  }

  export type ActeSumAggregateOutputType = {
    id: number | null
    demandeId: number | null
  }

  export type ActeMinAggregateOutputType = {
    id: number | null
    demandeId: number | null
    fichierUrl: string | null
    type: $Enums.TypeActe | null
    createdAt: Date | null
  }

  export type ActeMaxAggregateOutputType = {
    id: number | null
    demandeId: number | null
    fichierUrl: string | null
    type: $Enums.TypeActe | null
    createdAt: Date | null
  }

  export type ActeCountAggregateOutputType = {
    id: number
    demandeId: number
    fichierUrl: number
    type: number
    createdAt: number
    _all: number
  }


  export type ActeAvgAggregateInputType = {
    id?: true
    demandeId?: true
  }

  export type ActeSumAggregateInputType = {
    id?: true
    demandeId?: true
  }

  export type ActeMinAggregateInputType = {
    id?: true
    demandeId?: true
    fichierUrl?: true
    type?: true
    createdAt?: true
  }

  export type ActeMaxAggregateInputType = {
    id?: true
    demandeId?: true
    fichierUrl?: true
    type?: true
    createdAt?: true
  }

  export type ActeCountAggregateInputType = {
    id?: true
    demandeId?: true
    fichierUrl?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type ActeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acte to aggregate.
     */
    where?: ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actes to fetch.
     */
    orderBy?: ActeOrderByWithRelationInput | ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actes
    **/
    _count?: true | ActeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActeMaxAggregateInputType
  }

  export type GetActeAggregateType<T extends ActeAggregateArgs> = {
        [P in keyof T & keyof AggregateActe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActe[P]>
      : GetScalarType<T[P], AggregateActe[P]>
  }




  export type ActeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActeWhereInput
    orderBy?: ActeOrderByWithAggregationInput | ActeOrderByWithAggregationInput[]
    by: ActeScalarFieldEnum[] | ActeScalarFieldEnum
    having?: ActeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActeCountAggregateInputType | true
    _avg?: ActeAvgAggregateInputType
    _sum?: ActeSumAggregateInputType
    _min?: ActeMinAggregateInputType
    _max?: ActeMaxAggregateInputType
  }

  export type ActeGroupByOutputType = {
    id: number
    demandeId: number
    fichierUrl: string
    type: $Enums.TypeActe
    createdAt: Date
    _count: ActeCountAggregateOutputType | null
    _avg: ActeAvgAggregateOutputType | null
    _sum: ActeSumAggregateOutputType | null
    _min: ActeMinAggregateOutputType | null
    _max: ActeMaxAggregateOutputType | null
  }

  type GetActeGroupByPayload<T extends ActeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActeGroupByOutputType[P]>
            : GetScalarType<T[P], ActeGroupByOutputType[P]>
        }
      >
    >


  export type ActeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    demandeId?: boolean
    fichierUrl?: boolean
    type?: boolean
    createdAt?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acte"]>



  export type ActeSelectScalar = {
    id?: boolean
    demandeId?: boolean
    fichierUrl?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type ActeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "demandeId" | "fichierUrl" | "type" | "createdAt", ExtArgs["result"]["acte"]>
  export type ActeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }

  export type $ActePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acte"
    objects: {
      demande: Prisma.$DemandePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      demandeId: number
      fichierUrl: string
      type: $Enums.TypeActe
      createdAt: Date
    }, ExtArgs["result"]["acte"]>
    composites: {}
  }

  type ActeGetPayload<S extends boolean | null | undefined | ActeDefaultArgs> = $Result.GetResult<Prisma.$ActePayload, S>

  type ActeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActeCountAggregateInputType | true
    }

  export interface ActeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acte'], meta: { name: 'Acte' } }
    /**
     * Find zero or one Acte that matches the filter.
     * @param {ActeFindUniqueArgs} args - Arguments to find a Acte
     * @example
     * // Get one Acte
     * const acte = await prisma.acte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActeFindUniqueArgs>(args: SelectSubset<T, ActeFindUniqueArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActeFindUniqueOrThrowArgs} args - Arguments to find a Acte
     * @example
     * // Get one Acte
     * const acte = await prisma.acte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActeFindUniqueOrThrowArgs>(args: SelectSubset<T, ActeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActeFindFirstArgs} args - Arguments to find a Acte
     * @example
     * // Get one Acte
     * const acte = await prisma.acte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActeFindFirstArgs>(args?: SelectSubset<T, ActeFindFirstArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActeFindFirstOrThrowArgs} args - Arguments to find a Acte
     * @example
     * // Get one Acte
     * const acte = await prisma.acte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActeFindFirstOrThrowArgs>(args?: SelectSubset<T, ActeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actes
     * const actes = await prisma.acte.findMany()
     * 
     * // Get first 10 Actes
     * const actes = await prisma.acte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acteWithIdOnly = await prisma.acte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActeFindManyArgs>(args?: SelectSubset<T, ActeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acte.
     * @param {ActeCreateArgs} args - Arguments to create a Acte.
     * @example
     * // Create one Acte
     * const Acte = await prisma.acte.create({
     *   data: {
     *     // ... data to create a Acte
     *   }
     * })
     * 
     */
    create<T extends ActeCreateArgs>(args: SelectSubset<T, ActeCreateArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actes.
     * @param {ActeCreateManyArgs} args - Arguments to create many Actes.
     * @example
     * // Create many Actes
     * const acte = await prisma.acte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActeCreateManyArgs>(args?: SelectSubset<T, ActeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Acte.
     * @param {ActeDeleteArgs} args - Arguments to delete one Acte.
     * @example
     * // Delete one Acte
     * const Acte = await prisma.acte.delete({
     *   where: {
     *     // ... filter to delete one Acte
     *   }
     * })
     * 
     */
    delete<T extends ActeDeleteArgs>(args: SelectSubset<T, ActeDeleteArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acte.
     * @param {ActeUpdateArgs} args - Arguments to update one Acte.
     * @example
     * // Update one Acte
     * const acte = await prisma.acte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActeUpdateArgs>(args: SelectSubset<T, ActeUpdateArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actes.
     * @param {ActeDeleteManyArgs} args - Arguments to filter Actes to delete.
     * @example
     * // Delete a few Actes
     * const { count } = await prisma.acte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActeDeleteManyArgs>(args?: SelectSubset<T, ActeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actes
     * const acte = await prisma.acte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActeUpdateManyArgs>(args: SelectSubset<T, ActeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Acte.
     * @param {ActeUpsertArgs} args - Arguments to update or create a Acte.
     * @example
     * // Update or create a Acte
     * const acte = await prisma.acte.upsert({
     *   create: {
     *     // ... data to create a Acte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acte we want to update
     *   }
     * })
     */
    upsert<T extends ActeUpsertArgs>(args: SelectSubset<T, ActeUpsertArgs<ExtArgs>>): Prisma__ActeClient<$Result.GetResult<Prisma.$ActePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActeCountArgs} args - Arguments to filter Actes to count.
     * @example
     * // Count the number of Actes
     * const count = await prisma.acte.count({
     *   where: {
     *     // ... the filter for the Actes we want to count
     *   }
     * })
    **/
    count<T extends ActeCountArgs>(
      args?: Subset<T, ActeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActeAggregateArgs>(args: Subset<T, ActeAggregateArgs>): Prisma.PrismaPromise<GetActeAggregateType<T>>

    /**
     * Group by Acte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActeGroupByArgs} args - Group by arguments.
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
      T extends ActeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActeGroupByArgs['orderBy'] }
        : { orderBy?: ActeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acte model
   */
  readonly fields: ActeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demande<T extends DemandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemandeDefaultArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Acte model
   */
  interface ActeFieldRefs {
    readonly id: FieldRef<"Acte", 'Int'>
    readonly demandeId: FieldRef<"Acte", 'Int'>
    readonly fichierUrl: FieldRef<"Acte", 'String'>
    readonly type: FieldRef<"Acte", 'TypeActe'>
    readonly createdAt: FieldRef<"Acte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Acte findUnique
   */
  export type ActeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * Filter, which Acte to fetch.
     */
    where: ActeWhereUniqueInput
  }

  /**
   * Acte findUniqueOrThrow
   */
  export type ActeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * Filter, which Acte to fetch.
     */
    where: ActeWhereUniqueInput
  }

  /**
   * Acte findFirst
   */
  export type ActeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * Filter, which Acte to fetch.
     */
    where?: ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actes to fetch.
     */
    orderBy?: ActeOrderByWithRelationInput | ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actes.
     */
    cursor?: ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actes.
     */
    distinct?: ActeScalarFieldEnum | ActeScalarFieldEnum[]
  }

  /**
   * Acte findFirstOrThrow
   */
  export type ActeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * Filter, which Acte to fetch.
     */
    where?: ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actes to fetch.
     */
    orderBy?: ActeOrderByWithRelationInput | ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actes.
     */
    cursor?: ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actes.
     */
    distinct?: ActeScalarFieldEnum | ActeScalarFieldEnum[]
  }

  /**
   * Acte findMany
   */
  export type ActeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * Filter, which Actes to fetch.
     */
    where?: ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actes to fetch.
     */
    orderBy?: ActeOrderByWithRelationInput | ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actes.
     */
    cursor?: ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actes.
     */
    skip?: number
    distinct?: ActeScalarFieldEnum | ActeScalarFieldEnum[]
  }

  /**
   * Acte create
   */
  export type ActeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * The data needed to create a Acte.
     */
    data: XOR<ActeCreateInput, ActeUncheckedCreateInput>
  }

  /**
   * Acte createMany
   */
  export type ActeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actes.
     */
    data: ActeCreateManyInput | ActeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Acte update
   */
  export type ActeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * The data needed to update a Acte.
     */
    data: XOR<ActeUpdateInput, ActeUncheckedUpdateInput>
    /**
     * Choose, which Acte to update.
     */
    where: ActeWhereUniqueInput
  }

  /**
   * Acte updateMany
   */
  export type ActeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actes.
     */
    data: XOR<ActeUpdateManyMutationInput, ActeUncheckedUpdateManyInput>
    /**
     * Filter which Actes to update
     */
    where?: ActeWhereInput
    /**
     * Limit how many Actes to update.
     */
    limit?: number
  }

  /**
   * Acte upsert
   */
  export type ActeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * The filter to search for the Acte to update in case it exists.
     */
    where: ActeWhereUniqueInput
    /**
     * In case the Acte found by the `where` argument doesn't exist, create a new Acte with this data.
     */
    create: XOR<ActeCreateInput, ActeUncheckedCreateInput>
    /**
     * In case the Acte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActeUpdateInput, ActeUncheckedUpdateInput>
  }

  /**
   * Acte delete
   */
  export type ActeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
    /**
     * Filter which Acte to delete.
     */
    where: ActeWhereUniqueInput
  }

  /**
   * Acte deleteMany
   */
  export type ActeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actes to delete
     */
    where?: ActeWhereInput
    /**
     * Limit how many Actes to delete.
     */
    limit?: number
  }

  /**
   * Acte without action
   */
  export type ActeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acte
     */
    select?: ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Acte
     */
    omit?: ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActeInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    utilisateurId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    message: string | null
    lu: boolean | null
    utilisateurId: number | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    message: string | null
    lu: boolean | null
    utilisateurId: number | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    message: number
    lu: number
    utilisateurId: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    utilisateurId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    utilisateurId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    message?: true
    lu?: true
    utilisateurId?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    message?: true
    lu?: true
    utilisateurId?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    message?: true
    lu?: true
    utilisateurId?: true
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
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
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
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    message: string | null
    lu: boolean
    utilisateurId: number
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
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
    message?: boolean
    lu?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    message?: boolean
    lu?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "lu" | "utilisateurId" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string | null
      lu: boolean
      utilisateurId: number
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
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly lu: FieldRef<"Notification", 'Boolean'>
    readonly utilisateurId: FieldRef<"Notification", 'Int'>
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
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    id: number | null
    montant: number | null
    utilisateurId: number | null
  }

  export type PaiementSumAggregateOutputType = {
    id: number | null
    montant: number | null
    utilisateurId: number | null
  }

  export type PaiementMinAggregateOutputType = {
    id: number | null
    montant: number | null
    statut: $Enums.StatutPaiement | null
    moyen: $Enums.MoyenPaiement | null
    utilisateurId: number | null
    createdAt: Date | null
  }

  export type PaiementMaxAggregateOutputType = {
    id: number | null
    montant: number | null
    statut: $Enums.StatutPaiement | null
    moyen: $Enums.MoyenPaiement | null
    utilisateurId: number | null
    createdAt: Date | null
  }

  export type PaiementCountAggregateOutputType = {
    id: number
    montant: number
    statut: number
    moyen: number
    utilisateurId: number
    createdAt: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    id?: true
    montant?: true
    utilisateurId?: true
  }

  export type PaiementSumAggregateInputType = {
    id?: true
    montant?: true
    utilisateurId?: true
  }

  export type PaiementMinAggregateInputType = {
    id?: true
    montant?: true
    statut?: true
    moyen?: true
    utilisateurId?: true
    createdAt?: true
  }

  export type PaiementMaxAggregateInputType = {
    id?: true
    montant?: true
    statut?: true
    moyen?: true
    utilisateurId?: true
    createdAt?: true
  }

  export type PaiementCountAggregateInputType = {
    id?: true
    montant?: true
    statut?: true
    moyen?: true
    utilisateurId?: true
    createdAt?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id: number
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    utilisateurId: number
    createdAt: Date
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    statut?: boolean
    moyen?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    demandes?: boolean | Paiement$demandesArgs<ExtArgs>
    _count?: boolean | PaiementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>



  export type PaiementSelectScalar = {
    id?: boolean
    montant?: boolean
    statut?: boolean
    moyen?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "montant" | "statut" | "moyen" | "utilisateurId" | "createdAt", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    demandes?: boolean | Paiement$demandesArgs<ExtArgs>
    _count?: boolean | PaiementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      demandes: Prisma.$DemandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      montant: number
      statut: $Enums.StatutPaiement
      moyen: $Enums.MoyenPaiement
      utilisateurId: number
      createdAt: Date
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paiementWithIdOnly = await prisma.paiement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
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
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    demandes<T extends Paiement$demandesArgs<ExtArgs> = {}>(args?: Subset<T, Paiement$demandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly id: FieldRef<"Paiement", 'Int'>
    readonly montant: FieldRef<"Paiement", 'Float'>
    readonly statut: FieldRef<"Paiement", 'StatutPaiement'>
    readonly moyen: FieldRef<"Paiement", 'MoyenPaiement'>
    readonly utilisateurId: FieldRef<"Paiement", 'Int'>
    readonly createdAt: FieldRef<"Paiement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement.demandes
   */
  export type Paiement$demandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Model Commune
   */

  export type AggregateCommune = {
    _count: CommuneCountAggregateOutputType | null
    _avg: CommuneAvgAggregateOutputType | null
    _sum: CommuneSumAggregateOutputType | null
    _min: CommuneMinAggregateOutputType | null
    _max: CommuneMaxAggregateOutputType | null
  }

  export type CommuneAvgAggregateOutputType = {
    id: number | null
  }

  export type CommuneSumAggregateOutputType = {
    id: number | null
  }

  export type CommuneMinAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type CommuneMaxAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type CommuneCountAggregateOutputType = {
    id: number
    nom: number
    _all: number
  }


  export type CommuneAvgAggregateInputType = {
    id?: true
  }

  export type CommuneSumAggregateInputType = {
    id?: true
  }

  export type CommuneMinAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CommuneMaxAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CommuneCountAggregateInputType = {
    id?: true
    nom?: true
    _all?: true
  }

  export type CommuneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commune to aggregate.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communes
    **/
    _count?: true | CommuneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommuneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommuneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommuneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommuneMaxAggregateInputType
  }

  export type GetCommuneAggregateType<T extends CommuneAggregateArgs> = {
        [P in keyof T & keyof AggregateCommune]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommune[P]>
      : GetScalarType<T[P], AggregateCommune[P]>
  }




  export type CommuneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommuneWhereInput
    orderBy?: CommuneOrderByWithAggregationInput | CommuneOrderByWithAggregationInput[]
    by: CommuneScalarFieldEnum[] | CommuneScalarFieldEnum
    having?: CommuneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommuneCountAggregateInputType | true
    _avg?: CommuneAvgAggregateInputType
    _sum?: CommuneSumAggregateInputType
    _min?: CommuneMinAggregateInputType
    _max?: CommuneMaxAggregateInputType
  }

  export type CommuneGroupByOutputType = {
    id: number
    nom: string
    _count: CommuneCountAggregateOutputType | null
    _avg: CommuneAvgAggregateOutputType | null
    _sum: CommuneSumAggregateOutputType | null
    _min: CommuneMinAggregateOutputType | null
    _max: CommuneMaxAggregateOutputType | null
  }

  type GetCommuneGroupByPayload<T extends CommuneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommuneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommuneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommuneGroupByOutputType[P]>
            : GetScalarType<T[P], CommuneGroupByOutputType[P]>
        }
      >
    >


  export type CommuneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    utilisateurs?: boolean | Commune$utilisateursArgs<ExtArgs>
    _count?: boolean | CommuneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commune"]>



  export type CommuneSelectScalar = {
    id?: boolean
    nom?: boolean
  }

  export type CommuneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom", ExtArgs["result"]["commune"]>
  export type CommuneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateurs?: boolean | Commune$utilisateursArgs<ExtArgs>
    _count?: boolean | CommuneCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommunePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commune"
    objects: {
      utilisateurs: Prisma.$UtilisateurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
    }, ExtArgs["result"]["commune"]>
    composites: {}
  }

  type CommuneGetPayload<S extends boolean | null | undefined | CommuneDefaultArgs> = $Result.GetResult<Prisma.$CommunePayload, S>

  type CommuneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommuneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommuneCountAggregateInputType | true
    }

  export interface CommuneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commune'], meta: { name: 'Commune' } }
    /**
     * Find zero or one Commune that matches the filter.
     * @param {CommuneFindUniqueArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommuneFindUniqueArgs>(args: SelectSubset<T, CommuneFindUniqueArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commune that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommuneFindUniqueOrThrowArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommuneFindUniqueOrThrowArgs>(args: SelectSubset<T, CommuneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commune that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneFindFirstArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommuneFindFirstArgs>(args?: SelectSubset<T, CommuneFindFirstArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commune that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneFindFirstOrThrowArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommuneFindFirstOrThrowArgs>(args?: SelectSubset<T, CommuneFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communes
     * const communes = await prisma.commune.findMany()
     * 
     * // Get first 10 Communes
     * const communes = await prisma.commune.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communeWithIdOnly = await prisma.commune.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommuneFindManyArgs>(args?: SelectSubset<T, CommuneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commune.
     * @param {CommuneCreateArgs} args - Arguments to create a Commune.
     * @example
     * // Create one Commune
     * const Commune = await prisma.commune.create({
     *   data: {
     *     // ... data to create a Commune
     *   }
     * })
     * 
     */
    create<T extends CommuneCreateArgs>(args: SelectSubset<T, CommuneCreateArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communes.
     * @param {CommuneCreateManyArgs} args - Arguments to create many Communes.
     * @example
     * // Create many Communes
     * const commune = await prisma.commune.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommuneCreateManyArgs>(args?: SelectSubset<T, CommuneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commune.
     * @param {CommuneDeleteArgs} args - Arguments to delete one Commune.
     * @example
     * // Delete one Commune
     * const Commune = await prisma.commune.delete({
     *   where: {
     *     // ... filter to delete one Commune
     *   }
     * })
     * 
     */
    delete<T extends CommuneDeleteArgs>(args: SelectSubset<T, CommuneDeleteArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commune.
     * @param {CommuneUpdateArgs} args - Arguments to update one Commune.
     * @example
     * // Update one Commune
     * const commune = await prisma.commune.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommuneUpdateArgs>(args: SelectSubset<T, CommuneUpdateArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communes.
     * @param {CommuneDeleteManyArgs} args - Arguments to filter Communes to delete.
     * @example
     * // Delete a few Communes
     * const { count } = await prisma.commune.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommuneDeleteManyArgs>(args?: SelectSubset<T, CommuneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communes
     * const commune = await prisma.commune.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommuneUpdateManyArgs>(args: SelectSubset<T, CommuneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commune.
     * @param {CommuneUpsertArgs} args - Arguments to update or create a Commune.
     * @example
     * // Update or create a Commune
     * const commune = await prisma.commune.upsert({
     *   create: {
     *     // ... data to create a Commune
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commune we want to update
     *   }
     * })
     */
    upsert<T extends CommuneUpsertArgs>(args: SelectSubset<T, CommuneUpsertArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneCountArgs} args - Arguments to filter Communes to count.
     * @example
     * // Count the number of Communes
     * const count = await prisma.commune.count({
     *   where: {
     *     // ... the filter for the Communes we want to count
     *   }
     * })
    **/
    count<T extends CommuneCountArgs>(
      args?: Subset<T, CommuneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommuneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commune.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommuneAggregateArgs>(args: Subset<T, CommuneAggregateArgs>): Prisma.PrismaPromise<GetCommuneAggregateType<T>>

    /**
     * Group by Commune.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneGroupByArgs} args - Group by arguments.
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
      T extends CommuneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommuneGroupByArgs['orderBy'] }
        : { orderBy?: CommuneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommuneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommuneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commune model
   */
  readonly fields: CommuneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commune.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommuneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateurs<T extends Commune$utilisateursArgs<ExtArgs> = {}>(args?: Subset<T, Commune$utilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Commune model
   */
  interface CommuneFieldRefs {
    readonly id: FieldRef<"Commune", 'Int'>
    readonly nom: FieldRef<"Commune", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commune findUnique
   */
  export type CommuneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune findUniqueOrThrow
   */
  export type CommuneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune findFirst
   */
  export type CommuneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communes.
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communes.
     */
    distinct?: CommuneScalarFieldEnum | CommuneScalarFieldEnum[]
  }

  /**
   * Commune findFirstOrThrow
   */
  export type CommuneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communes.
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communes.
     */
    distinct?: CommuneScalarFieldEnum | CommuneScalarFieldEnum[]
  }

  /**
   * Commune findMany
   */
  export type CommuneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Communes to fetch.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communes.
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    distinct?: CommuneScalarFieldEnum | CommuneScalarFieldEnum[]
  }

  /**
   * Commune create
   */
  export type CommuneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * The data needed to create a Commune.
     */
    data: XOR<CommuneCreateInput, CommuneUncheckedCreateInput>
  }

  /**
   * Commune createMany
   */
  export type CommuneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communes.
     */
    data: CommuneCreateManyInput | CommuneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commune update
   */
  export type CommuneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * The data needed to update a Commune.
     */
    data: XOR<CommuneUpdateInput, CommuneUncheckedUpdateInput>
    /**
     * Choose, which Commune to update.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune updateMany
   */
  export type CommuneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communes.
     */
    data: XOR<CommuneUpdateManyMutationInput, CommuneUncheckedUpdateManyInput>
    /**
     * Filter which Communes to update
     */
    where?: CommuneWhereInput
    /**
     * Limit how many Communes to update.
     */
    limit?: number
  }

  /**
   * Commune upsert
   */
  export type CommuneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * The filter to search for the Commune to update in case it exists.
     */
    where: CommuneWhereUniqueInput
    /**
     * In case the Commune found by the `where` argument doesn't exist, create a new Commune with this data.
     */
    create: XOR<CommuneCreateInput, CommuneUncheckedCreateInput>
    /**
     * In case the Commune was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommuneUpdateInput, CommuneUncheckedUpdateInput>
  }

  /**
   * Commune delete
   */
  export type CommuneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter which Commune to delete.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune deleteMany
   */
  export type CommuneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communes to delete
     */
    where?: CommuneWhereInput
    /**
     * Limit how many Communes to delete.
     */
    limit?: number
  }

  /**
   * Commune.utilisateurs
   */
  export type Commune$utilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    cursor?: UtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Commune without action
   */
  export type CommuneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
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


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    motDePasse: 'motDePasse',
    role: 'role',
    communeId: 'communeId',
    createdAt: 'createdAt'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const DemandeScalarFieldEnum: {
    id: 'id',
    utilisateurId: 'utilisateurId',
    typeActe: 'typeActe',
    statut: 'statut',
    paiementId: 'paiementId',
    createdAt: 'createdAt'
  };

  export type DemandeScalarFieldEnum = (typeof DemandeScalarFieldEnum)[keyof typeof DemandeScalarFieldEnum]


  export const FichierScalarFieldEnum: {
    id: 'id',
    url: 'url',
    nom: 'nom',
    demandeId: 'demandeId',
    createdAt: 'createdAt'
  };

  export type FichierScalarFieldEnum = (typeof FichierScalarFieldEnum)[keyof typeof FichierScalarFieldEnum]


  export const ActeScalarFieldEnum: {
    id: 'id',
    demandeId: 'demandeId',
    fichierUrl: 'fichierUrl',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type ActeScalarFieldEnum = (typeof ActeScalarFieldEnum)[keyof typeof ActeScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    lu: 'lu',
    utilisateurId: 'utilisateurId',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id: 'id',
    montant: 'montant',
    statut: 'statut',
    moyen: 'moyen',
    utilisateurId: 'utilisateurId',
    createdAt: 'createdAt'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const CommuneScalarFieldEnum: {
    id: 'id',
    nom: 'nom'
  };

  export type CommuneScalarFieldEnum = (typeof CommuneScalarFieldEnum)[keyof typeof CommuneScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UtilisateurOrderByRelevanceFieldEnum: {
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    motDePasse: 'motDePasse'
  };

  export type UtilisateurOrderByRelevanceFieldEnum = (typeof UtilisateurOrderByRelevanceFieldEnum)[keyof typeof UtilisateurOrderByRelevanceFieldEnum]


  export const FichierOrderByRelevanceFieldEnum: {
    url: 'url',
    nom: 'nom'
  };

  export type FichierOrderByRelevanceFieldEnum = (typeof FichierOrderByRelevanceFieldEnum)[keyof typeof FichierOrderByRelevanceFieldEnum]


  export const ActeOrderByRelevanceFieldEnum: {
    fichierUrl: 'fichierUrl'
  };

  export type ActeOrderByRelevanceFieldEnum = (typeof ActeOrderByRelevanceFieldEnum)[keyof typeof ActeOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const CommuneOrderByRelevanceFieldEnum: {
    nom: 'nom'
  };

  export type CommuneOrderByRelevanceFieldEnum = (typeof CommuneOrderByRelevanceFieldEnum)[keyof typeof CommuneOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TypeActe'
   */
  export type EnumTypeActeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeActe'>
    


  /**
   * Reference to a field of type 'StatutDemande'
   */
  export type EnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'StatutPaiement'
   */
  export type EnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement'>
    


  /**
   * Reference to a field of type 'MoyenPaiement'
   */
  export type EnumMoyenPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoyenPaiement'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    telephone?: StringNullableFilter<"Utilisateur"> | string | null
    motDePasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    communeId?: IntNullableFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    commune?: XOR<CommuneNullableScalarRelationFilter, CommuneWhereInput> | null
    demandes?: DemandeListRelationFilter
    paiements?: PaiementListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrderInput | SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    communeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    commune?: CommuneOrderByWithRelationInput
    demandes?: DemandeOrderByRelationAggregateInput
    paiements?: PaiementOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: UtilisateurOrderByRelevanceInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    telephone?: StringNullableFilter<"Utilisateur"> | string | null
    motDePasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    communeId?: IntNullableFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    commune?: XOR<CommuneNullableScalarRelationFilter, CommuneWhereInput> | null
    demandes?: DemandeListRelationFilter
    paiements?: PaiementListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrderInput | SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    communeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    telephone?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    motDePasse?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    communeId?: IntNullableWithAggregatesFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type DemandeWhereInput = {
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    id?: IntFilter<"Demande"> | number
    utilisateurId?: IntFilter<"Demande"> | number
    typeActe?: EnumTypeActeFilter<"Demande"> | $Enums.TypeActe
    statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    paiementId?: IntNullableFilter<"Demande"> | number | null
    createdAt?: DateTimeFilter<"Demande"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    fichiers?: FichierListRelationFilter
    paiement?: XOR<PaiementNullableScalarRelationFilter, PaiementWhereInput> | null
    acte?: XOR<ActeNullableScalarRelationFilter, ActeWhereInput> | null
  }

  export type DemandeOrderByWithRelationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    typeActe?: SortOrder
    statut?: SortOrder
    paiementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    fichiers?: FichierOrderByRelationAggregateInput
    paiement?: PaiementOrderByWithRelationInput
    acte?: ActeOrderByWithRelationInput
  }

  export type DemandeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    utilisateurId?: IntFilter<"Demande"> | number
    typeActe?: EnumTypeActeFilter<"Demande"> | $Enums.TypeActe
    statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    paiementId?: IntNullableFilter<"Demande"> | number | null
    createdAt?: DateTimeFilter<"Demande"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    fichiers?: FichierListRelationFilter
    paiement?: XOR<PaiementNullableScalarRelationFilter, PaiementWhereInput> | null
    acte?: XOR<ActeNullableScalarRelationFilter, ActeWhereInput> | null
  }, "id">

  export type DemandeOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    typeActe?: SortOrder
    statut?: SortOrder
    paiementId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DemandeCountOrderByAggregateInput
    _avg?: DemandeAvgOrderByAggregateInput
    _max?: DemandeMaxOrderByAggregateInput
    _min?: DemandeMinOrderByAggregateInput
    _sum?: DemandeSumOrderByAggregateInput
  }

  export type DemandeScalarWhereWithAggregatesInput = {
    AND?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    OR?: DemandeScalarWhereWithAggregatesInput[]
    NOT?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Demande"> | number
    utilisateurId?: IntWithAggregatesFilter<"Demande"> | number
    typeActe?: EnumTypeActeWithAggregatesFilter<"Demande"> | $Enums.TypeActe
    statut?: EnumStatutDemandeWithAggregatesFilter<"Demande"> | $Enums.StatutDemande
    paiementId?: IntNullableWithAggregatesFilter<"Demande"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Demande"> | Date | string
  }

  export type FichierWhereInput = {
    AND?: FichierWhereInput | FichierWhereInput[]
    OR?: FichierWhereInput[]
    NOT?: FichierWhereInput | FichierWhereInput[]
    id?: IntFilter<"Fichier"> | number
    url?: StringFilter<"Fichier"> | string
    nom?: StringFilter<"Fichier"> | string
    demandeId?: IntFilter<"Fichier"> | number
    createdAt?: DateTimeFilter<"Fichier"> | Date | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }

  export type FichierOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    demandeId?: SortOrder
    createdAt?: SortOrder
    demande?: DemandeOrderByWithRelationInput
    _relevance?: FichierOrderByRelevanceInput
  }

  export type FichierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FichierWhereInput | FichierWhereInput[]
    OR?: FichierWhereInput[]
    NOT?: FichierWhereInput | FichierWhereInput[]
    url?: StringFilter<"Fichier"> | string
    nom?: StringFilter<"Fichier"> | string
    demandeId?: IntFilter<"Fichier"> | number
    createdAt?: DateTimeFilter<"Fichier"> | Date | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }, "id">

  export type FichierOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    demandeId?: SortOrder
    createdAt?: SortOrder
    _count?: FichierCountOrderByAggregateInput
    _avg?: FichierAvgOrderByAggregateInput
    _max?: FichierMaxOrderByAggregateInput
    _min?: FichierMinOrderByAggregateInput
    _sum?: FichierSumOrderByAggregateInput
  }

  export type FichierScalarWhereWithAggregatesInput = {
    AND?: FichierScalarWhereWithAggregatesInput | FichierScalarWhereWithAggregatesInput[]
    OR?: FichierScalarWhereWithAggregatesInput[]
    NOT?: FichierScalarWhereWithAggregatesInput | FichierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fichier"> | number
    url?: StringWithAggregatesFilter<"Fichier"> | string
    nom?: StringWithAggregatesFilter<"Fichier"> | string
    demandeId?: IntWithAggregatesFilter<"Fichier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Fichier"> | Date | string
  }

  export type ActeWhereInput = {
    AND?: ActeWhereInput | ActeWhereInput[]
    OR?: ActeWhereInput[]
    NOT?: ActeWhereInput | ActeWhereInput[]
    id?: IntFilter<"Acte"> | number
    demandeId?: IntFilter<"Acte"> | number
    fichierUrl?: StringFilter<"Acte"> | string
    type?: EnumTypeActeFilter<"Acte"> | $Enums.TypeActe
    createdAt?: DateTimeFilter<"Acte"> | Date | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }

  export type ActeOrderByWithRelationInput = {
    id?: SortOrder
    demandeId?: SortOrder
    fichierUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    demande?: DemandeOrderByWithRelationInput
    _relevance?: ActeOrderByRelevanceInput
  }

  export type ActeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    demandeId?: number
    AND?: ActeWhereInput | ActeWhereInput[]
    OR?: ActeWhereInput[]
    NOT?: ActeWhereInput | ActeWhereInput[]
    fichierUrl?: StringFilter<"Acte"> | string
    type?: EnumTypeActeFilter<"Acte"> | $Enums.TypeActe
    createdAt?: DateTimeFilter<"Acte"> | Date | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }, "id" | "demandeId">

  export type ActeOrderByWithAggregationInput = {
    id?: SortOrder
    demandeId?: SortOrder
    fichierUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: ActeCountOrderByAggregateInput
    _avg?: ActeAvgOrderByAggregateInput
    _max?: ActeMaxOrderByAggregateInput
    _min?: ActeMinOrderByAggregateInput
    _sum?: ActeSumOrderByAggregateInput
  }

  export type ActeScalarWhereWithAggregatesInput = {
    AND?: ActeScalarWhereWithAggregatesInput | ActeScalarWhereWithAggregatesInput[]
    OR?: ActeScalarWhereWithAggregatesInput[]
    NOT?: ActeScalarWhereWithAggregatesInput | ActeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Acte"> | number
    demandeId?: IntWithAggregatesFilter<"Acte"> | number
    fichierUrl?: StringWithAggregatesFilter<"Acte"> | string
    type?: EnumTypeActeWithAggregatesFilter<"Acte"> | $Enums.TypeActe
    createdAt?: DateTimeWithAggregatesFilter<"Acte"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    message?: StringNullableFilter<"Notification"> | string | null
    lu?: BoolFilter<"Notification"> | boolean
    utilisateurId?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    lu?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    message?: StringNullableFilter<"Notification"> | string | null
    lu?: BoolFilter<"Notification"> | boolean
    utilisateurId?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    lu?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    lu?: BoolWithAggregatesFilter<"Notification"> | boolean
    utilisateurId?: IntWithAggregatesFilter<"Notification"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id?: IntFilter<"Paiement"> | number
    montant?: FloatFilter<"Paiement"> | number
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFilter<"Paiement"> | $Enums.MoyenPaiement
    utilisateurId?: IntFilter<"Paiement"> | number
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    demandes?: DemandeListRelationFilter
  }

  export type PaiementOrderByWithRelationInput = {
    id?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    moyen?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    demandes?: DemandeOrderByRelationAggregateInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    montant?: FloatFilter<"Paiement"> | number
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFilter<"Paiement"> | $Enums.MoyenPaiement
    utilisateurId?: IntFilter<"Paiement"> | number
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    demandes?: DemandeListRelationFilter
  }, "id">

  export type PaiementOrderByWithAggregationInput = {
    id?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    moyen?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paiement"> | number
    montant?: FloatWithAggregatesFilter<"Paiement"> | number
    statut?: EnumStatutPaiementWithAggregatesFilter<"Paiement"> | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementWithAggregatesFilter<"Paiement"> | $Enums.MoyenPaiement
    utilisateurId?: IntWithAggregatesFilter<"Paiement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
  }

  export type CommuneWhereInput = {
    AND?: CommuneWhereInput | CommuneWhereInput[]
    OR?: CommuneWhereInput[]
    NOT?: CommuneWhereInput | CommuneWhereInput[]
    id?: IntFilter<"Commune"> | number
    nom?: StringFilter<"Commune"> | string
    utilisateurs?: UtilisateurListRelationFilter
  }

  export type CommuneOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    utilisateurs?: UtilisateurOrderByRelationAggregateInput
    _relevance?: CommuneOrderByRelevanceInput
  }

  export type CommuneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: CommuneWhereInput | CommuneWhereInput[]
    OR?: CommuneWhereInput[]
    NOT?: CommuneWhereInput | CommuneWhereInput[]
    utilisateurs?: UtilisateurListRelationFilter
  }, "id" | "nom">

  export type CommuneOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    _count?: CommuneCountOrderByAggregateInput
    _avg?: CommuneAvgOrderByAggregateInput
    _max?: CommuneMaxOrderByAggregateInput
    _min?: CommuneMinOrderByAggregateInput
    _sum?: CommuneSumOrderByAggregateInput
  }

  export type CommuneScalarWhereWithAggregatesInput = {
    AND?: CommuneScalarWhereWithAggregatesInput | CommuneScalarWhereWithAggregatesInput[]
    OR?: CommuneScalarWhereWithAggregatesInput[]
    NOT?: CommuneScalarWhereWithAggregatesInput | CommuneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commune"> | number
    nom?: StringWithAggregatesFilter<"Commune"> | string
  }

  export type UtilisateurCreateInput = {
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    commune?: CommuneCreateNestedOneWithoutUtilisateursInput
    demandes?: DemandeCreateNestedManyWithoutUtilisateurInput
    paiements?: PaiementCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    communeId?: number | null
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commune?: CommuneUpdateOneWithoutUtilisateursNestedInput
    demandes?: DemandeUpdateManyWithoutUtilisateurNestedInput
    paiements?: PaiementUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    communeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    communeId?: number | null
    createdAt?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    communeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeCreateInput = {
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    createdAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutDemandesInput
    fichiers?: FichierCreateNestedManyWithoutDemandeInput
    paiement?: PaiementCreateNestedOneWithoutDemandesInput
    acte?: ActeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateInput = {
    id?: number
    utilisateurId: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    paiementId?: number | null
    createdAt?: Date | string
    fichiers?: FichierUncheckedCreateNestedManyWithoutDemandeInput
    acte?: ActeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUpdateInput = {
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDemandesNestedInput
    fichiers?: FichierUpdateManyWithoutDemandeNestedInput
    paiement?: PaiementUpdateOneWithoutDemandesNestedInput
    acte?: ActeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    paiementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichiers?: FichierUncheckedUpdateManyWithoutDemandeNestedInput
    acte?: ActeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeCreateManyInput = {
    id?: number
    utilisateurId: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    paiementId?: number | null
    createdAt?: Date | string
  }

  export type DemandeUpdateManyMutationInput = {
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    paiementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichierCreateInput = {
    url: string
    nom: string
    createdAt?: Date | string
    demande: DemandeCreateNestedOneWithoutFichiersInput
  }

  export type FichierUncheckedCreateInput = {
    id?: number
    url: string
    nom: string
    demandeId: number
    createdAt?: Date | string
  }

  export type FichierUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneRequiredWithoutFichiersNestedInput
  }

  export type FichierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    demandeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichierCreateManyInput = {
    id?: number
    url: string
    nom: string
    demandeId: number
    createdAt?: Date | string
  }

  export type FichierUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    demandeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActeCreateInput = {
    fichierUrl: string
    type: $Enums.TypeActe
    createdAt?: Date | string
    demande: DemandeCreateNestedOneWithoutActeInput
  }

  export type ActeUncheckedCreateInput = {
    id?: number
    demandeId: number
    fichierUrl: string
    type: $Enums.TypeActe
    createdAt?: Date | string
  }

  export type ActeUpdateInput = {
    fichierUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneRequiredWithoutActeNestedInput
  }

  export type ActeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeId?: IntFieldUpdateOperationsInput | number
    fichierUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActeCreateManyInput = {
    id?: number
    demandeId: number
    fichierUrl: string
    type: $Enums.TypeActe
    createdAt?: Date | string
  }

  export type ActeUpdateManyMutationInput = {
    fichierUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandeId?: IntFieldUpdateOperationsInput | number
    fichierUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    message?: string | null
    lu?: boolean
    createdAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    message?: string | null
    lu?: boolean
    utilisateurId: number
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    lu?: BoolFieldUpdateOperationsInput | boolean
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    message?: string | null
    lu?: boolean
    utilisateurId: number
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    lu?: BoolFieldUpdateOperationsInput | boolean
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateInput = {
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    createdAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutPaiementsInput
    demandes?: DemandeCreateNestedManyWithoutPaiementInput
  }

  export type PaiementUncheckedCreateInput = {
    id?: number
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    utilisateurId: number
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PaiementUpdateInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutPaiementsNestedInput
    demandes?: DemandeUpdateManyWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PaiementCreateManyInput = {
    id?: number
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    utilisateurId: number
    createdAt?: Date | string
  }

  export type PaiementUpdateManyMutationInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommuneCreateInput = {
    nom: string
    utilisateurs?: UtilisateurCreateNestedManyWithoutCommuneInput
  }

  export type CommuneUncheckedCreateInput = {
    id?: number
    nom: string
    utilisateurs?: UtilisateurUncheckedCreateNestedManyWithoutCommuneInput
  }

  export type CommuneUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurs?: UtilisateurUpdateManyWithoutCommuneNestedInput
  }

  export type CommuneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    utilisateurs?: UtilisateurUncheckedUpdateManyWithoutCommuneNestedInput
  }

  export type CommuneCreateManyInput = {
    id?: number
    nom: string
  }

  export type CommuneUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CommuneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommuneNullableScalarRelationFilter = {
    is?: CommuneWhereInput | null
    isNot?: CommuneWhereInput | null
  }

  export type DemandeListRelationFilter = {
    every?: DemandeWhereInput
    some?: DemandeWhereInput
    none?: DemandeWhereInput
  }

  export type PaiementListRelationFilter = {
    every?: PaiementWhereInput
    some?: PaiementWhereInput
    none?: PaiementWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaiementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurOrderByRelevanceInput = {
    fields: UtilisateurOrderByRelevanceFieldEnum | UtilisateurOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    communeId?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
    communeId?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    communeId?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    communeId?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
    communeId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTypeActeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[]
    notIn?: $Enums.TypeActe[]
    not?: NestedEnumTypeActeFilter<$PrismaModel> | $Enums.TypeActe
  }

  export type EnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[]
    notIn?: $Enums.StatutDemande[]
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type FichierListRelationFilter = {
    every?: FichierWhereInput
    some?: FichierWhereInput
    none?: FichierWhereInput
  }

  export type PaiementNullableScalarRelationFilter = {
    is?: PaiementWhereInput | null
    isNot?: PaiementWhereInput | null
  }

  export type ActeNullableScalarRelationFilter = {
    is?: ActeWhereInput | null
    isNot?: ActeWhereInput | null
  }

  export type FichierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemandeCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    typeActe?: SortOrder
    statut?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
  }

  export type DemandeAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    paiementId?: SortOrder
  }

  export type DemandeMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    typeActe?: SortOrder
    statut?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
  }

  export type DemandeMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    typeActe?: SortOrder
    statut?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
  }

  export type DemandeSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
    paiementId?: SortOrder
  }

  export type EnumTypeActeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[]
    notIn?: $Enums.TypeActe[]
    not?: NestedEnumTypeActeWithAggregatesFilter<$PrismaModel> | $Enums.TypeActe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeActeFilter<$PrismaModel>
    _max?: NestedEnumTypeActeFilter<$PrismaModel>
  }

  export type EnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[]
    notIn?: $Enums.StatutDemande[]
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type DemandeScalarRelationFilter = {
    is?: DemandeWhereInput
    isNot?: DemandeWhereInput
  }

  export type FichierOrderByRelevanceInput = {
    fields: FichierOrderByRelevanceFieldEnum | FichierOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FichierCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    demandeId?: SortOrder
    createdAt?: SortOrder
  }

  export type FichierAvgOrderByAggregateInput = {
    id?: SortOrder
    demandeId?: SortOrder
  }

  export type FichierMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    demandeId?: SortOrder
    createdAt?: SortOrder
  }

  export type FichierMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    demandeId?: SortOrder
    createdAt?: SortOrder
  }

  export type FichierSumOrderByAggregateInput = {
    id?: SortOrder
    demandeId?: SortOrder
  }

  export type ActeOrderByRelevanceInput = {
    fields: ActeOrderByRelevanceFieldEnum | ActeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActeCountOrderByAggregateInput = {
    id?: SortOrder
    demandeId?: SortOrder
    fichierUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ActeAvgOrderByAggregateInput = {
    id?: SortOrder
    demandeId?: SortOrder
  }

  export type ActeMaxOrderByAggregateInput = {
    id?: SortOrder
    demandeId?: SortOrder
    fichierUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ActeMinOrderByAggregateInput = {
    id?: SortOrder
    demandeId?: SortOrder
    fichierUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ActeSumOrderByAggregateInput = {
    id?: SortOrder
    demandeId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    lu?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateurId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type EnumMoyenPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiement | EnumMoyenPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiement[]
    notIn?: $Enums.MoyenPaiement[]
    not?: NestedEnumMoyenPaiementFilter<$PrismaModel> | $Enums.MoyenPaiement
  }

  export type PaiementCountOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    moyen?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateurId?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    moyen?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    moyen?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateurId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type EnumMoyenPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiement | EnumMoyenPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiement[]
    notIn?: $Enums.MoyenPaiement[]
    not?: NestedEnumMoyenPaiementWithAggregatesFilter<$PrismaModel> | $Enums.MoyenPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoyenPaiementFilter<$PrismaModel>
    _max?: NestedEnumMoyenPaiementFilter<$PrismaModel>
  }

  export type UtilisateurListRelationFilter = {
    every?: UtilisateurWhereInput
    some?: UtilisateurWhereInput
    none?: UtilisateurWhereInput
  }

  export type UtilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommuneOrderByRelevanceInput = {
    fields: CommuneOrderByRelevanceFieldEnum | CommuneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommuneCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CommuneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommuneMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CommuneMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CommuneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommuneCreateNestedOneWithoutUtilisateursInput = {
    create?: XOR<CommuneCreateWithoutUtilisateursInput, CommuneUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: CommuneCreateOrConnectWithoutUtilisateursInput
    connect?: CommuneWhereUniqueInput
  }

  export type DemandeCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<DemandeCreateWithoutUtilisateurInput, DemandeUncheckedCreateWithoutUtilisateurInput> | DemandeCreateWithoutUtilisateurInput[] | DemandeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUtilisateurInput | DemandeCreateOrConnectWithoutUtilisateurInput[]
    createMany?: DemandeCreateManyUtilisateurInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type PaiementCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<DemandeCreateWithoutUtilisateurInput, DemandeUncheckedCreateWithoutUtilisateurInput> | DemandeCreateWithoutUtilisateurInput[] | DemandeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUtilisateurInput | DemandeCreateOrConnectWithoutUtilisateurInput[]
    createMany?: DemandeCreateManyUtilisateurInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommuneUpdateOneWithoutUtilisateursNestedInput = {
    create?: XOR<CommuneCreateWithoutUtilisateursInput, CommuneUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: CommuneCreateOrConnectWithoutUtilisateursInput
    upsert?: CommuneUpsertWithoutUtilisateursInput
    disconnect?: CommuneWhereInput | boolean
    delete?: CommuneWhereInput | boolean
    connect?: CommuneWhereUniqueInput
    update?: XOR<XOR<CommuneUpdateToOneWithWhereWithoutUtilisateursInput, CommuneUpdateWithoutUtilisateursInput>, CommuneUncheckedUpdateWithoutUtilisateursInput>
  }

  export type DemandeUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<DemandeCreateWithoutUtilisateurInput, DemandeUncheckedCreateWithoutUtilisateurInput> | DemandeCreateWithoutUtilisateurInput[] | DemandeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUtilisateurInput | DemandeCreateOrConnectWithoutUtilisateurInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutUtilisateurInput | DemandeUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: DemandeCreateManyUtilisateurInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutUtilisateurInput | DemandeUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutUtilisateurInput | DemandeUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type PaiementUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutUtilisateurInput | PaiementUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutUtilisateurInput | PaiementUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutUtilisateurInput | PaiementUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DemandeUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<DemandeCreateWithoutUtilisateurInput, DemandeUncheckedCreateWithoutUtilisateurInput> | DemandeCreateWithoutUtilisateurInput[] | DemandeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutUtilisateurInput | DemandeCreateOrConnectWithoutUtilisateurInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutUtilisateurInput | DemandeUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: DemandeCreateManyUtilisateurInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutUtilisateurInput | DemandeUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutUtilisateurInput | DemandeUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutUtilisateurInput | PaiementUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutUtilisateurInput | PaiementUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutUtilisateurInput | PaiementUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutDemandesInput = {
    create?: XOR<UtilisateurCreateWithoutDemandesInput, UtilisateurUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDemandesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type FichierCreateNestedManyWithoutDemandeInput = {
    create?: XOR<FichierCreateWithoutDemandeInput, FichierUncheckedCreateWithoutDemandeInput> | FichierCreateWithoutDemandeInput[] | FichierUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: FichierCreateOrConnectWithoutDemandeInput | FichierCreateOrConnectWithoutDemandeInput[]
    createMany?: FichierCreateManyDemandeInputEnvelope
    connect?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
  }

  export type PaiementCreateNestedOneWithoutDemandesInput = {
    create?: XOR<PaiementCreateWithoutDemandesInput, PaiementUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutDemandesInput
    connect?: PaiementWhereUniqueInput
  }

  export type ActeCreateNestedOneWithoutDemandeInput = {
    create?: XOR<ActeCreateWithoutDemandeInput, ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: ActeCreateOrConnectWithoutDemandeInput
    connect?: ActeWhereUniqueInput
  }

  export type FichierUncheckedCreateNestedManyWithoutDemandeInput = {
    create?: XOR<FichierCreateWithoutDemandeInput, FichierUncheckedCreateWithoutDemandeInput> | FichierCreateWithoutDemandeInput[] | FichierUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: FichierCreateOrConnectWithoutDemandeInput | FichierCreateOrConnectWithoutDemandeInput[]
    createMany?: FichierCreateManyDemandeInputEnvelope
    connect?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
  }

  export type ActeUncheckedCreateNestedOneWithoutDemandeInput = {
    create?: XOR<ActeCreateWithoutDemandeInput, ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: ActeCreateOrConnectWithoutDemandeInput
    connect?: ActeWhereUniqueInput
  }

  export type EnumTypeActeFieldUpdateOperationsInput = {
    set?: $Enums.TypeActe
  }

  export type EnumStatutDemandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutDemande
  }

  export type UtilisateurUpdateOneRequiredWithoutDemandesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutDemandesInput, UtilisateurUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDemandesInput
    upsert?: UtilisateurUpsertWithoutDemandesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutDemandesInput, UtilisateurUpdateWithoutDemandesInput>, UtilisateurUncheckedUpdateWithoutDemandesInput>
  }

  export type FichierUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<FichierCreateWithoutDemandeInput, FichierUncheckedCreateWithoutDemandeInput> | FichierCreateWithoutDemandeInput[] | FichierUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: FichierCreateOrConnectWithoutDemandeInput | FichierCreateOrConnectWithoutDemandeInput[]
    upsert?: FichierUpsertWithWhereUniqueWithoutDemandeInput | FichierUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: FichierCreateManyDemandeInputEnvelope
    set?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    disconnect?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    delete?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    connect?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    update?: FichierUpdateWithWhereUniqueWithoutDemandeInput | FichierUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: FichierUpdateManyWithWhereWithoutDemandeInput | FichierUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: FichierScalarWhereInput | FichierScalarWhereInput[]
  }

  export type PaiementUpdateOneWithoutDemandesNestedInput = {
    create?: XOR<PaiementCreateWithoutDemandesInput, PaiementUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutDemandesInput
    upsert?: PaiementUpsertWithoutDemandesInput
    disconnect?: PaiementWhereInput | boolean
    delete?: PaiementWhereInput | boolean
    connect?: PaiementWhereUniqueInput
    update?: XOR<XOR<PaiementUpdateToOneWithWhereWithoutDemandesInput, PaiementUpdateWithoutDemandesInput>, PaiementUncheckedUpdateWithoutDemandesInput>
  }

  export type ActeUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<ActeCreateWithoutDemandeInput, ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: ActeCreateOrConnectWithoutDemandeInput
    upsert?: ActeUpsertWithoutDemandeInput
    disconnect?: ActeWhereInput | boolean
    delete?: ActeWhereInput | boolean
    connect?: ActeWhereUniqueInput
    update?: XOR<XOR<ActeUpdateToOneWithWhereWithoutDemandeInput, ActeUpdateWithoutDemandeInput>, ActeUncheckedUpdateWithoutDemandeInput>
  }

  export type FichierUncheckedUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<FichierCreateWithoutDemandeInput, FichierUncheckedCreateWithoutDemandeInput> | FichierCreateWithoutDemandeInput[] | FichierUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: FichierCreateOrConnectWithoutDemandeInput | FichierCreateOrConnectWithoutDemandeInput[]
    upsert?: FichierUpsertWithWhereUniqueWithoutDemandeInput | FichierUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: FichierCreateManyDemandeInputEnvelope
    set?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    disconnect?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    delete?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    connect?: FichierWhereUniqueInput | FichierWhereUniqueInput[]
    update?: FichierUpdateWithWhereUniqueWithoutDemandeInput | FichierUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: FichierUpdateManyWithWhereWithoutDemandeInput | FichierUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: FichierScalarWhereInput | FichierScalarWhereInput[]
  }

  export type ActeUncheckedUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<ActeCreateWithoutDemandeInput, ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: ActeCreateOrConnectWithoutDemandeInput
    upsert?: ActeUpsertWithoutDemandeInput
    disconnect?: ActeWhereInput | boolean
    delete?: ActeWhereInput | boolean
    connect?: ActeWhereUniqueInput
    update?: XOR<XOR<ActeUpdateToOneWithWhereWithoutDemandeInput, ActeUpdateWithoutDemandeInput>, ActeUncheckedUpdateWithoutDemandeInput>
  }

  export type DemandeCreateNestedOneWithoutFichiersInput = {
    create?: XOR<DemandeCreateWithoutFichiersInput, DemandeUncheckedCreateWithoutFichiersInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutFichiersInput
    connect?: DemandeWhereUniqueInput
  }

  export type DemandeUpdateOneRequiredWithoutFichiersNestedInput = {
    create?: XOR<DemandeCreateWithoutFichiersInput, DemandeUncheckedCreateWithoutFichiersInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutFichiersInput
    upsert?: DemandeUpsertWithoutFichiersInput
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutFichiersInput, DemandeUpdateWithoutFichiersInput>, DemandeUncheckedUpdateWithoutFichiersInput>
  }

  export type DemandeCreateNestedOneWithoutActeInput = {
    create?: XOR<DemandeCreateWithoutActeInput, DemandeUncheckedCreateWithoutActeInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutActeInput
    connect?: DemandeWhereUniqueInput
  }

  export type DemandeUpdateOneRequiredWithoutActeNestedInput = {
    create?: XOR<DemandeCreateWithoutActeInput, DemandeUncheckedCreateWithoutActeInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutActeInput
    upsert?: DemandeUpsertWithoutActeInput
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutActeInput, DemandeUpdateWithoutActeInput>, DemandeUncheckedUpdateWithoutActeInput>
  }

  export type UtilisateurCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationsInput
    upsert?: UtilisateurUpsertWithoutNotificationsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutNotificationsInput, UtilisateurUpdateWithoutNotificationsInput>, UtilisateurUncheckedUpdateWithoutNotificationsInput>
  }

  export type UtilisateurCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPaiementsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DemandeCreateNestedManyWithoutPaiementInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput> | DemandeCreateWithoutPaiementInput[] | DemandeUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput | DemandeCreateOrConnectWithoutPaiementInput[]
    createMany?: DemandeCreateManyPaiementInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutPaiementInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput> | DemandeCreateWithoutPaiementInput[] | DemandeUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput | DemandeCreateOrConnectWithoutPaiementInput[]
    createMany?: DemandeCreateManyPaiementInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatutPaiementFieldUpdateOperationsInput = {
    set?: $Enums.StatutPaiement
  }

  export type EnumMoyenPaiementFieldUpdateOperationsInput = {
    set?: $Enums.MoyenPaiement
  }

  export type UtilisateurUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPaiementsInput
    upsert?: UtilisateurUpsertWithoutPaiementsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutPaiementsInput, UtilisateurUpdateWithoutPaiementsInput>, UtilisateurUncheckedUpdateWithoutPaiementsInput>
  }

  export type DemandeUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput> | DemandeCreateWithoutPaiementInput[] | DemandeUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput | DemandeCreateOrConnectWithoutPaiementInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutPaiementInput | DemandeUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: DemandeCreateManyPaiementInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutPaiementInput | DemandeUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutPaiementInput | DemandeUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput> | DemandeCreateWithoutPaiementInput[] | DemandeUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput | DemandeCreateOrConnectWithoutPaiementInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutPaiementInput | DemandeUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: DemandeCreateManyPaiementInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutPaiementInput | DemandeUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutPaiementInput | DemandeUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type UtilisateurCreateNestedManyWithoutCommuneInput = {
    create?: XOR<UtilisateurCreateWithoutCommuneInput, UtilisateurUncheckedCreateWithoutCommuneInput> | UtilisateurCreateWithoutCommuneInput[] | UtilisateurUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommuneInput | UtilisateurCreateOrConnectWithoutCommuneInput[]
    createMany?: UtilisateurCreateManyCommuneInputEnvelope
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
  }

  export type UtilisateurUncheckedCreateNestedManyWithoutCommuneInput = {
    create?: XOR<UtilisateurCreateWithoutCommuneInput, UtilisateurUncheckedCreateWithoutCommuneInput> | UtilisateurCreateWithoutCommuneInput[] | UtilisateurUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommuneInput | UtilisateurCreateOrConnectWithoutCommuneInput[]
    createMany?: UtilisateurCreateManyCommuneInputEnvelope
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
  }

  export type UtilisateurUpdateManyWithoutCommuneNestedInput = {
    create?: XOR<UtilisateurCreateWithoutCommuneInput, UtilisateurUncheckedCreateWithoutCommuneInput> | UtilisateurCreateWithoutCommuneInput[] | UtilisateurUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommuneInput | UtilisateurCreateOrConnectWithoutCommuneInput[]
    upsert?: UtilisateurUpsertWithWhereUniqueWithoutCommuneInput | UtilisateurUpsertWithWhereUniqueWithoutCommuneInput[]
    createMany?: UtilisateurCreateManyCommuneInputEnvelope
    set?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    disconnect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    delete?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    update?: UtilisateurUpdateWithWhereUniqueWithoutCommuneInput | UtilisateurUpdateWithWhereUniqueWithoutCommuneInput[]
    updateMany?: UtilisateurUpdateManyWithWhereWithoutCommuneInput | UtilisateurUpdateManyWithWhereWithoutCommuneInput[]
    deleteMany?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
  }

  export type UtilisateurUncheckedUpdateManyWithoutCommuneNestedInput = {
    create?: XOR<UtilisateurCreateWithoutCommuneInput, UtilisateurUncheckedCreateWithoutCommuneInput> | UtilisateurCreateWithoutCommuneInput[] | UtilisateurUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommuneInput | UtilisateurCreateOrConnectWithoutCommuneInput[]
    upsert?: UtilisateurUpsertWithWhereUniqueWithoutCommuneInput | UtilisateurUpsertWithWhereUniqueWithoutCommuneInput[]
    createMany?: UtilisateurCreateManyCommuneInputEnvelope
    set?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    disconnect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    delete?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    connect?: UtilisateurWhereUniqueInput | UtilisateurWhereUniqueInput[]
    update?: UtilisateurUpdateWithWhereUniqueWithoutCommuneInput | UtilisateurUpdateWithWhereUniqueWithoutCommuneInput[]
    updateMany?: UtilisateurUpdateManyWithWhereWithoutCommuneInput | UtilisateurUpdateManyWithWhereWithoutCommuneInput[]
    deleteMany?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTypeActeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[]
    notIn?: $Enums.TypeActe[]
    not?: NestedEnumTypeActeFilter<$PrismaModel> | $Enums.TypeActe
  }

  export type NestedEnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[]
    notIn?: $Enums.StatutDemande[]
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type NestedEnumTypeActeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[]
    notIn?: $Enums.TypeActe[]
    not?: NestedEnumTypeActeWithAggregatesFilter<$PrismaModel> | $Enums.TypeActe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeActeFilter<$PrismaModel>
    _max?: NestedEnumTypeActeFilter<$PrismaModel>
  }

  export type NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[]
    notIn?: $Enums.StatutDemande[]
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
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

  export type NestedEnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type NestedEnumMoyenPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiement | EnumMoyenPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiement[]
    notIn?: $Enums.MoyenPaiement[]
    not?: NestedEnumMoyenPaiementFilter<$PrismaModel> | $Enums.MoyenPaiement
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type NestedEnumMoyenPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiement | EnumMoyenPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiement[]
    notIn?: $Enums.MoyenPaiement[]
    not?: NestedEnumMoyenPaiementWithAggregatesFilter<$PrismaModel> | $Enums.MoyenPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoyenPaiementFilter<$PrismaModel>
    _max?: NestedEnumMoyenPaiementFilter<$PrismaModel>
  }

  export type CommuneCreateWithoutUtilisateursInput = {
    nom: string
  }

  export type CommuneUncheckedCreateWithoutUtilisateursInput = {
    id?: number
    nom: string
  }

  export type CommuneCreateOrConnectWithoutUtilisateursInput = {
    where: CommuneWhereUniqueInput
    create: XOR<CommuneCreateWithoutUtilisateursInput, CommuneUncheckedCreateWithoutUtilisateursInput>
  }

  export type DemandeCreateWithoutUtilisateurInput = {
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    createdAt?: Date | string
    fichiers?: FichierCreateNestedManyWithoutDemandeInput
    paiement?: PaiementCreateNestedOneWithoutDemandesInput
    acte?: ActeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    paiementId?: number | null
    createdAt?: Date | string
    fichiers?: FichierUncheckedCreateNestedManyWithoutDemandeInput
    acte?: ActeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutUtilisateurInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutUtilisateurInput, DemandeUncheckedCreateWithoutUtilisateurInput>
  }

  export type DemandeCreateManyUtilisateurInputEnvelope = {
    data: DemandeCreateManyUtilisateurInput | DemandeCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type PaiementCreateWithoutUtilisateurInput = {
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    createdAt?: Date | string
    demandes?: DemandeCreateNestedManyWithoutPaiementInput
  }

  export type PaiementUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PaiementCreateOrConnectWithoutUtilisateurInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput>
  }

  export type PaiementCreateManyUtilisateurInputEnvelope = {
    data: PaiementCreateManyUtilisateurInput | PaiementCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUtilisateurInput = {
    message?: string | null
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    message?: string | null
    lu?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationCreateManyUtilisateurInputEnvelope = {
    data: NotificationCreateManyUtilisateurInput | NotificationCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type CommuneUpsertWithoutUtilisateursInput = {
    update: XOR<CommuneUpdateWithoutUtilisateursInput, CommuneUncheckedUpdateWithoutUtilisateursInput>
    create: XOR<CommuneCreateWithoutUtilisateursInput, CommuneUncheckedCreateWithoutUtilisateursInput>
    where?: CommuneWhereInput
  }

  export type CommuneUpdateToOneWithWhereWithoutUtilisateursInput = {
    where?: CommuneWhereInput
    data: XOR<CommuneUpdateWithoutUtilisateursInput, CommuneUncheckedUpdateWithoutUtilisateursInput>
  }

  export type CommuneUpdateWithoutUtilisateursInput = {
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CommuneUncheckedUpdateWithoutUtilisateursInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type DemandeUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutUtilisateurInput, DemandeUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<DemandeCreateWithoutUtilisateurInput, DemandeUncheckedCreateWithoutUtilisateurInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutUtilisateurInput, DemandeUncheckedUpdateWithoutUtilisateurInput>
  }

  export type DemandeUpdateManyWithWhereWithoutUtilisateurInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type DemandeScalarWhereInput = {
    AND?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    OR?: DemandeScalarWhereInput[]
    NOT?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    id?: IntFilter<"Demande"> | number
    utilisateurId?: IntFilter<"Demande"> | number
    typeActe?: EnumTypeActeFilter<"Demande"> | $Enums.TypeActe
    statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    paiementId?: IntNullableFilter<"Demande"> | number | null
    createdAt?: DateTimeFilter<"Demande"> | Date | string
  }

  export type PaiementUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutUtilisateurInput, PaiementUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutUtilisateurInput, PaiementUncheckedUpdateWithoutUtilisateurInput>
  }

  export type PaiementUpdateManyWithWhereWithoutUtilisateurInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type PaiementScalarWhereInput = {
    AND?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    OR?: PaiementScalarWhereInput[]
    NOT?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    id?: IntFilter<"Paiement"> | number
    montant?: FloatFilter<"Paiement"> | number
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFilter<"Paiement"> | $Enums.MoyenPaiement
    utilisateurId?: IntFilter<"Paiement"> | number
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    message?: StringNullableFilter<"Notification"> | string | null
    lu?: BoolFilter<"Notification"> | boolean
    utilisateurId?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UtilisateurCreateWithoutDemandesInput = {
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    commune?: CommuneCreateNestedOneWithoutUtilisateursInput
    paiements?: PaiementCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutDemandesInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    communeId?: number | null
    createdAt?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutDemandesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutDemandesInput, UtilisateurUncheckedCreateWithoutDemandesInput>
  }

  export type FichierCreateWithoutDemandeInput = {
    url: string
    nom: string
    createdAt?: Date | string
  }

  export type FichierUncheckedCreateWithoutDemandeInput = {
    id?: number
    url: string
    nom: string
    createdAt?: Date | string
  }

  export type FichierCreateOrConnectWithoutDemandeInput = {
    where: FichierWhereUniqueInput
    create: XOR<FichierCreateWithoutDemandeInput, FichierUncheckedCreateWithoutDemandeInput>
  }

  export type FichierCreateManyDemandeInputEnvelope = {
    data: FichierCreateManyDemandeInput | FichierCreateManyDemandeInput[]
    skipDuplicates?: boolean
  }

  export type PaiementCreateWithoutDemandesInput = {
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    createdAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateWithoutDemandesInput = {
    id?: number
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    utilisateurId: number
    createdAt?: Date | string
  }

  export type PaiementCreateOrConnectWithoutDemandesInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutDemandesInput, PaiementUncheckedCreateWithoutDemandesInput>
  }

  export type ActeCreateWithoutDemandeInput = {
    fichierUrl: string
    type: $Enums.TypeActe
    createdAt?: Date | string
  }

  export type ActeUncheckedCreateWithoutDemandeInput = {
    id?: number
    fichierUrl: string
    type: $Enums.TypeActe
    createdAt?: Date | string
  }

  export type ActeCreateOrConnectWithoutDemandeInput = {
    where: ActeWhereUniqueInput
    create: XOR<ActeCreateWithoutDemandeInput, ActeUncheckedCreateWithoutDemandeInput>
  }

  export type UtilisateurUpsertWithoutDemandesInput = {
    update: XOR<UtilisateurUpdateWithoutDemandesInput, UtilisateurUncheckedUpdateWithoutDemandesInput>
    create: XOR<UtilisateurCreateWithoutDemandesInput, UtilisateurUncheckedCreateWithoutDemandesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutDemandesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutDemandesInput, UtilisateurUncheckedUpdateWithoutDemandesInput>
  }

  export type UtilisateurUpdateWithoutDemandesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commune?: CommuneUpdateOneWithoutUtilisateursNestedInput
    paiements?: PaiementUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutDemandesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    communeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type FichierUpsertWithWhereUniqueWithoutDemandeInput = {
    where: FichierWhereUniqueInput
    update: XOR<FichierUpdateWithoutDemandeInput, FichierUncheckedUpdateWithoutDemandeInput>
    create: XOR<FichierCreateWithoutDemandeInput, FichierUncheckedCreateWithoutDemandeInput>
  }

  export type FichierUpdateWithWhereUniqueWithoutDemandeInput = {
    where: FichierWhereUniqueInput
    data: XOR<FichierUpdateWithoutDemandeInput, FichierUncheckedUpdateWithoutDemandeInput>
  }

  export type FichierUpdateManyWithWhereWithoutDemandeInput = {
    where: FichierScalarWhereInput
    data: XOR<FichierUpdateManyMutationInput, FichierUncheckedUpdateManyWithoutDemandeInput>
  }

  export type FichierScalarWhereInput = {
    AND?: FichierScalarWhereInput | FichierScalarWhereInput[]
    OR?: FichierScalarWhereInput[]
    NOT?: FichierScalarWhereInput | FichierScalarWhereInput[]
    id?: IntFilter<"Fichier"> | number
    url?: StringFilter<"Fichier"> | string
    nom?: StringFilter<"Fichier"> | string
    demandeId?: IntFilter<"Fichier"> | number
    createdAt?: DateTimeFilter<"Fichier"> | Date | string
  }

  export type PaiementUpsertWithoutDemandesInput = {
    update: XOR<PaiementUpdateWithoutDemandesInput, PaiementUncheckedUpdateWithoutDemandesInput>
    create: XOR<PaiementCreateWithoutDemandesInput, PaiementUncheckedCreateWithoutDemandesInput>
    where?: PaiementWhereInput
  }

  export type PaiementUpdateToOneWithWhereWithoutDemandesInput = {
    where?: PaiementWhereInput
    data: XOR<PaiementUpdateWithoutDemandesInput, PaiementUncheckedUpdateWithoutDemandesInput>
  }

  export type PaiementUpdateWithoutDemandesInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateWithoutDemandesInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    utilisateurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActeUpsertWithoutDemandeInput = {
    update: XOR<ActeUpdateWithoutDemandeInput, ActeUncheckedUpdateWithoutDemandeInput>
    create: XOR<ActeCreateWithoutDemandeInput, ActeUncheckedCreateWithoutDemandeInput>
    where?: ActeWhereInput
  }

  export type ActeUpdateToOneWithWhereWithoutDemandeInput = {
    where?: ActeWhereInput
    data: XOR<ActeUpdateWithoutDemandeInput, ActeUncheckedUpdateWithoutDemandeInput>
  }

  export type ActeUpdateWithoutDemandeInput = {
    fichierUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActeUncheckedUpdateWithoutDemandeInput = {
    id?: IntFieldUpdateOperationsInput | number
    fichierUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeCreateWithoutFichiersInput = {
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    createdAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutDemandesInput
    paiement?: PaiementCreateNestedOneWithoutDemandesInput
    acte?: ActeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutFichiersInput = {
    id?: number
    utilisateurId: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    paiementId?: number | null
    createdAt?: Date | string
    acte?: ActeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutFichiersInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutFichiersInput, DemandeUncheckedCreateWithoutFichiersInput>
  }

  export type DemandeUpsertWithoutFichiersInput = {
    update: XOR<DemandeUpdateWithoutFichiersInput, DemandeUncheckedUpdateWithoutFichiersInput>
    create: XOR<DemandeCreateWithoutFichiersInput, DemandeUncheckedCreateWithoutFichiersInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutFichiersInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutFichiersInput, DemandeUncheckedUpdateWithoutFichiersInput>
  }

  export type DemandeUpdateWithoutFichiersInput = {
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDemandesNestedInput
    paiement?: PaiementUpdateOneWithoutDemandesNestedInput
    acte?: ActeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutFichiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    paiementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acte?: ActeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeCreateWithoutActeInput = {
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    createdAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutDemandesInput
    fichiers?: FichierCreateNestedManyWithoutDemandeInput
    paiement?: PaiementCreateNestedOneWithoutDemandesInput
  }

  export type DemandeUncheckedCreateWithoutActeInput = {
    id?: number
    utilisateurId: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    paiementId?: number | null
    createdAt?: Date | string
    fichiers?: FichierUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutActeInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutActeInput, DemandeUncheckedCreateWithoutActeInput>
  }

  export type DemandeUpsertWithoutActeInput = {
    update: XOR<DemandeUpdateWithoutActeInput, DemandeUncheckedUpdateWithoutActeInput>
    create: XOR<DemandeCreateWithoutActeInput, DemandeUncheckedCreateWithoutActeInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutActeInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutActeInput, DemandeUncheckedUpdateWithoutActeInput>
  }

  export type DemandeUpdateWithoutActeInput = {
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDemandesNestedInput
    fichiers?: FichierUpdateManyWithoutDemandeNestedInput
    paiement?: PaiementUpdateOneWithoutDemandesNestedInput
  }

  export type DemandeUncheckedUpdateWithoutActeInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    paiementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichiers?: FichierUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type UtilisateurCreateWithoutNotificationsInput = {
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    commune?: CommuneCreateNestedOneWithoutUtilisateursInput
    demandes?: DemandeCreateNestedManyWithoutUtilisateurInput
    paiements?: PaiementCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutNotificationsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    communeId?: number | null
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutNotificationsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
  }

  export type UtilisateurUpsertWithoutNotificationsInput = {
    update: XOR<UtilisateurUpdateWithoutNotificationsInput, UtilisateurUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutNotificationsInput, UtilisateurUncheckedUpdateWithoutNotificationsInput>
  }

  export type UtilisateurUpdateWithoutNotificationsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commune?: CommuneUpdateOneWithoutUtilisateursNestedInput
    demandes?: DemandeUpdateManyWithoutUtilisateurNestedInput
    paiements?: PaiementUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    communeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateWithoutPaiementsInput = {
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    commune?: CommuneCreateNestedOneWithoutUtilisateursInput
    demandes?: DemandeCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutPaiementsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    communeId?: number | null
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutPaiementsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
  }

  export type DemandeCreateWithoutPaiementInput = {
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    createdAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutDemandesInput
    fichiers?: FichierCreateNestedManyWithoutDemandeInput
    acte?: ActeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutPaiementInput = {
    id?: number
    utilisateurId: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    createdAt?: Date | string
    fichiers?: FichierUncheckedCreateNestedManyWithoutDemandeInput
    acte?: ActeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutPaiementInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
  }

  export type DemandeCreateManyPaiementInputEnvelope = {
    data: DemandeCreateManyPaiementInput | DemandeCreateManyPaiementInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutPaiementsInput = {
    update: XOR<UtilisateurUpdateWithoutPaiementsInput, UtilisateurUncheckedUpdateWithoutPaiementsInput>
    create: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutPaiementsInput, UtilisateurUncheckedUpdateWithoutPaiementsInput>
  }

  export type UtilisateurUpdateWithoutPaiementsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commune?: CommuneUpdateOneWithoutUtilisateursNestedInput
    demandes?: DemandeUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutPaiementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    communeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type DemandeUpsertWithWhereUniqueWithoutPaiementInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutPaiementInput, DemandeUncheckedUpdateWithoutPaiementInput>
    create: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutPaiementInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutPaiementInput, DemandeUncheckedUpdateWithoutPaiementInput>
  }

  export type DemandeUpdateManyWithWhereWithoutPaiementInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutPaiementInput>
  }

  export type UtilisateurCreateWithoutCommuneInput = {
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    demandes?: DemandeCreateNestedManyWithoutUtilisateurInput
    paiements?: PaiementCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutCommuneInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutCommuneInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutCommuneInput, UtilisateurUncheckedCreateWithoutCommuneInput>
  }

  export type UtilisateurCreateManyCommuneInputEnvelope = {
    data: UtilisateurCreateManyCommuneInput | UtilisateurCreateManyCommuneInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithWhereUniqueWithoutCommuneInput = {
    where: UtilisateurWhereUniqueInput
    update: XOR<UtilisateurUpdateWithoutCommuneInput, UtilisateurUncheckedUpdateWithoutCommuneInput>
    create: XOR<UtilisateurCreateWithoutCommuneInput, UtilisateurUncheckedCreateWithoutCommuneInput>
  }

  export type UtilisateurUpdateWithWhereUniqueWithoutCommuneInput = {
    where: UtilisateurWhereUniqueInput
    data: XOR<UtilisateurUpdateWithoutCommuneInput, UtilisateurUncheckedUpdateWithoutCommuneInput>
  }

  export type UtilisateurUpdateManyWithWhereWithoutCommuneInput = {
    where: UtilisateurScalarWhereInput
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyWithoutCommuneInput>
  }

  export type UtilisateurScalarWhereInput = {
    AND?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
    OR?: UtilisateurScalarWhereInput[]
    NOT?: UtilisateurScalarWhereInput | UtilisateurScalarWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    telephone?: StringNullableFilter<"Utilisateur"> | string | null
    motDePasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    communeId?: IntNullableFilter<"Utilisateur"> | number | null
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
  }

  export type DemandeCreateManyUtilisateurInput = {
    id?: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    paiementId?: number | null
    createdAt?: Date | string
  }

  export type PaiementCreateManyUtilisateurInput = {
    id?: number
    montant: number
    statut: $Enums.StatutPaiement
    moyen: $Enums.MoyenPaiement
    createdAt?: Date | string
  }

  export type NotificationCreateManyUtilisateurInput = {
    id?: number
    message?: string | null
    lu?: boolean
    createdAt?: Date | string
  }

  export type DemandeUpdateWithoutUtilisateurInput = {
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichiers?: FichierUpdateManyWithoutDemandeNestedInput
    paiement?: PaiementUpdateOneWithoutDemandesNestedInput
    acte?: ActeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    paiementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichiers?: FichierUncheckedUpdateManyWithoutDemandeNestedInput
    acte?: ActeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    paiementId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUpdateWithoutUtilisateurInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUpdateManyWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    moyen?: EnumMoyenPaiementFieldUpdateOperationsInput | $Enums.MoyenPaiement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUtilisateurInput = {
    message?: NullableStringFieldUpdateOperationsInput | string | null
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    lu?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichierCreateManyDemandeInput = {
    id?: number
    url: string
    nom: string
    createdAt?: Date | string
  }

  export type FichierUpdateWithoutDemandeInput = {
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichierUncheckedUpdateWithoutDemandeInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FichierUncheckedUpdateManyWithoutDemandeInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeCreateManyPaiementInput = {
    id?: number
    utilisateurId: number
    typeActe: $Enums.TypeActe
    statut: $Enums.StatutDemande
    createdAt?: Date | string
  }

  export type DemandeUpdateWithoutPaiementInput = {
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDemandesNestedInput
    fichiers?: FichierUpdateManyWithoutDemandeNestedInput
    acte?: ActeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutPaiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fichiers?: FichierUncheckedUpdateManyWithoutDemandeNestedInput
    acte?: ActeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutPaiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateurId?: IntFieldUpdateOperationsInput | number
    typeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurCreateManyCommuneInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    telephone?: string | null
    motDePasse: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UtilisateurUpdateWithoutCommuneInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUpdateManyWithoutUtilisateurNestedInput
    paiements?: PaiementUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutCommuneInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateManyWithoutCommuneInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
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