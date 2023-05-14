/*
  Warnings:

  - You are about to drop the column `path_img` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `path_path` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "path_img",
ADD COLUMN     "path_path" TEXT NOT NULL;
