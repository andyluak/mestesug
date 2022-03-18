# MESTESUG - Romanian Handmade Heaven

## Database

-   Will be using PostgreSQL, perfect for ecommerce, combined with Prisma to easily manage models .

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

-   thinking about including next-connect to have a similar sinthax to express for GET/POST/PUT/PATCH/DELETE.

#### Login

-   login route now has a handler that handles POST request and returns a 405 for every other.
-   on POST , we check if the user is in DB with prisma & if the password is valid , we generate the token and return it to the user .

---

## Security

Created a jwt-middleware , that will create attach itself to all the routes that need authetication except the actual authenticate route ( so far ). In future there will be some routes that don't need authetication such as GET products, categories and more.

### _COOKIE_

After login we store the token with an expiration time of 1hr.

---

## FrontEnd

Initial components include **Header Button Footer aLink( normal next-js link with an `<a>` tag already inside) Input**

Components to follow :

-   Form Component
-   Maybe some styled components

---

## Testing

### Storybook

It is a great tool that we can use to fine tweak Reusable components and see them live.

---

## Helpers

-   Fetch wrapper
-   apiHandler ( handles all the apis)
-   error-handler which handles all the errors
-   jwt middleware that is in charge of checking the cookie
-   setCookie which was created so that we can control how all the cookies are made if more of them appear
