# MESTESUG - Romanian Handmade Heaven

## Database

- Will be using PostgreSQL, perfect for ecommerce, combined with Prisma to easily manage models .

#### User model

```
model User {
  id          Int      @id @default(autoincrement())
  first_name  String   @db.VarChar(255)
  last_name   String   @db.VarChar(255)
  adress      String   @db.VarChar(300)
  phoneNumber String   @db.VarChar(20)
  email       String   @unique @db.VarChar(255)
  password    String   @db.VarChar(255)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## API Routes

#### Register

- thinking about including next-connect to have a similar sinthax to express for GET/POST/PUT/PATCH/DELETE.

#### Login

---

## FrontEnd

Initial components include **Header Button Footer aLink( normal next-js link with an `<a>` tag already inside) Input**

Components to follow :

- Form Component
- Maybe some styled components

---

## Testing

### Storybook

It is a great tool that we can use to fine tweak Reusable components and see them live.
