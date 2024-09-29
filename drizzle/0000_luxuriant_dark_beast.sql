CREATE TABLE `profile` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`image_url` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `property` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`area` integer NOT NULL,
	`bed` integer NOT NULL,
	`bath` integer NOT NULL,
	`price` integer NOT NULL,
	`city` text DEFAULT 'erbil' NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `profile`(`id`) ON UPDATE no action ON DELETE no action
);
