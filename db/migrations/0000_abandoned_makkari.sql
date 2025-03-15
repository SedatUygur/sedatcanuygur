CREATE TABLE `emails` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`full_name` varchar(256) NOT NULL,
	`email_address` varchar(256) NOT NULL,
	`message` text NOT NULL,
	CONSTRAINT `emails_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `emails` (`full_name`);--> statement-breakpoint
CREATE INDEX `email_address_idx` ON `emails` (`email_address`);