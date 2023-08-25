-- CreateTable
CREATE TABLE "indegoData" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "indegoData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" TEXT NOT NULL,
    "geometry" JSONB NOT NULL,
    "properties" JSONB NOT NULL,
    "kioskId" INTEGER NOT NULL,
    "indegoDataId" TEXT,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_indegoDataId_fkey" FOREIGN KEY ("indegoDataId") REFERENCES "indegoData"("id") ON DELETE SET NULL ON UPDATE CASCADE;
