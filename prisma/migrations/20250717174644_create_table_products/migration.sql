-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(12) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `product_code` VARCHAR(12) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
