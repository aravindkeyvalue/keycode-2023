import { MigrationInterface, QueryRunner } from "typeorm";

// tslint:disable-next-line: class-name
export class addInitEcomFunc1694758632234 implements MigrationInterface {
  public name = "addInitEcomFunc1694758632234";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "description" character varying, "is_archived" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_by" character varying, CONSTRAINT "UQ_eb3c97e3a2e9e6641f266a5eb8a" UNIQUE ("name"), CONSTRAINT "PK_7a69804fe90285d565fbb8faa9b" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "public"."product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sku" character varying NOT NULL, "name" character varying NOT NULL, "retail_price" integer, "wholesale_price" integer, "description" character varying, "how_to_use" character varying, "ingredients" character varying,  "reviews_images" jsonb, "product_video" jsonb, "category_id" uuid, "brand_id" uuid NOT NULL, "is_archived" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_by" character varying, CONSTRAINT "UQ_1d683962f133bdab4227440c958" UNIQUE ("sku"), CONSTRAINT "PK_15a9030452a301124cb303becae" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `CREATE TABLE "public"."brand" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "description" character varying, "logo" jsonb, "is_archived" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by" character varying, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_by" character varying, CONSTRAINT "UQ_af4b2b9a172afcefe9a8e1142c0" UNIQUE ("name"), CONSTRAINT "PK_2e59ccb28265759b604d942b8de" PRIMARY KEY ("id"))`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "public"."product" ADD CONSTRAINT "FK_23253ab40aa916f87731f3702b9" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "public"."product" ADD CONSTRAINT "FK_2609ac3d20b5afa921fc1d3b903" FOREIGN KEY ("brand_id") REFERENCES "public"."brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined
    );

    await queryRunner.query(`CREATE TABLE public."order" (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        user_id uuid NULL,
        payment_status varchar NULL,
        delivery_status varchar NULL,
        status varchar NULL,
        is_archived bool NULL DEFAULT false,
        created_at timestamptz NOT NULL DEFAULT now(),
        created_by varchar NULL,
        updated_at timestamptz NOT NULL DEFAULT now(),
        updated_by varchar NULL,
        amount float8 NULL,
        CONSTRAINT order_pkey PRIMARY KEY (id)
    )`);

    await queryRunner.query(`CREATE TABLE public.payment (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        status varchar NOT NULL,
        externalid varchar NULL,
        order_id uuid NOT NULL,
        is_archived bool NULL DEFAULT false,
        created_at timestamptz NOT NULL DEFAULT now(),
        created_by varchar NULL,
        updated_at timestamptz NOT NULL DEFAULT now(),
        updated_by varchar NULL,
        CONSTRAINT payment_pkey PRIMARY KEY (id)
    )`);

    await queryRunner.query(
      `ALTER TABLE public.payment ADD CONSTRAINT fk_payment_order FOREIGN KEY (order_id) REFERENCES public."order"(id)`
    );
    await queryRunner.query(`CREATE TABLE public.order_item (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        order_id uuid NOT NULL,
        is_archived bool NULL DEFAULT false,
        created_at timestamptz NOT NULL DEFAULT now(),
        created_by varchar NULL,
        updated_at timestamptz NOT NULL DEFAULT now(),
        updated_by varchar NULL,
        product_id uuid NULL,
        CONSTRAINT order_item_pkey PRIMARY KEY (id)
    )`);

    await queryRunner.query(
      `ALTER TABLE public.order_item ADD CONSTRAINT fk_order_item_order FOREIGN KEY (order_id) REFERENCES public."order"(id)`
    );

    await queryRunner.query(`CREATE TABLE public.shop (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" varchar NOT NULL,
        metadata jsonb NULL,
        is_archived bool NULL DEFAULT false,
        created_at timestamptz NOT NULL DEFAULT now(),
        created_by varchar NULL,
        updated_at timestamptz NOT NULL DEFAULT now(),
        updated_by varchar NULL,
        CONSTRAINT shop_pkey PRIMARY KEY (id)
    );`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "public"."order"`, undefined);
    await queryRunner.query(`DROP TABLE "public"."payment"`, undefined);
    await queryRunner.query(
        `ALTER TABLE "public"."product" DROP CONSTRAINT "fk_payment_order"`,
        undefined
      );
    await queryRunner.query(`DROP TABLE "public"."order_item"`, undefined);
    await queryRunner.query(
        `ALTER TABLE "public"."product" DROP CONSTRAINT "fk_order_item_order"`,
        undefined
      );
    await queryRunner.query(`DROP TABLE "public"."shop"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "public"."product" DROP CONSTRAINT "FK_2609ac3d20b5afa921fc1d3b903"`,
      undefined
    );
    await queryRunner.query(
      `ALTER TABLE "public"."product" DROP CONSTRAINT "FK_23253ab40aa916f87731f3702b9"`,
      undefined
    );
    await queryRunner.query(`DROP TABLE "public"."brand"`, undefined);
    await queryRunner.query(`DROP TABLE "public"."product"`, undefined);
    await queryRunner.query(`DROP TABLE "public"."category"`, undefined);
  }
}
