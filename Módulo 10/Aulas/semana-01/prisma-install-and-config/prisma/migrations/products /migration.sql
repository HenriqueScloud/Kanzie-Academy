-- CreateTable
CREATE TABLE "Procuts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Procuts_pkey" PRIMARY KEY ("id")
);
