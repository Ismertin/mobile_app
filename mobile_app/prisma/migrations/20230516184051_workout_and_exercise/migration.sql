/*
  Warnings:

  - You are about to drop the column `path_path` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `icon_path` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "path_path",
ADD COLUMN     "icon_path" TEXT NOT NULL;
