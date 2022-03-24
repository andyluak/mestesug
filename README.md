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

#### Category Model

```
model Categories {
  id        Int      @id @default(autoincrement())
  name      String   @db.VarChar(255)
  image     String   @db.VarChar(255)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

#### Seller Model

```
model Sellers {
  id             Int        @id @default(autoincrement())
  first_name     String     @db.VarChar(255)
  last_name      String     @db.VarChar(255)
  street         String     @db.VarChar(255)
  city           String     @db.VarChar(255)
  country        String     @db.VarChar(255)
  phone          String     @db.VarChar(255)
  company_name   String     @db.VarChar(255)
  company_number String     @db.VarChar(255)
  email          String     @unique @db.VarChar(255)
  password       String     @db.VarChar(255)
  createdAt      DateTime   @default(now())
  updatedAt      DateTime   @updatedAt
  Products       Products[]
}
```

#### Products Model

```
model Products {
  id                  Int                  @id @default(autoincrement())
  seller_id           Int?
  product_name        String               @db.VarChar(255)
  product_slug        String               @unique @db.VarChar(255)
  product_description String               @db.VarChar(255)
  product_price       String               @db.VarChar(255)
  product_total_order Int                  @db.Integer
  product_stock       Int                  @db.Integer
  Sellers             Sellers?             @relation(fields: [seller_id], references: [id])
  Product_Categories  Product_Categories[]
  Product_Image       Product_Image[]
}
```

#### Product Categories Model

```
model Product_Categories {
  id          Int         @id @default(autoincrement())
  product_id  Int?
  category_id Int?
  Products    Products?   @relation(fields: [product_id], references: [id])
  Categories  Categories? @relation(fields: [category_id], references: [id])
}
```

#### Product Image Model

```
model Product_Image {
  id                Int       @id @default(autoincrement())
  product_id        Int?
  product_image_url String    @db.VarChar(255)
  product_image_alt String    @db.VarChar(255)
  Products          Products? @relation(fields: [product_id], references: [id])
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

---

## State Manager

-   Redux is used as the global state manager with the help of next-redux-wrapper ( this creates store instances and assures they all share the same state)
-   redux-persist is used to persist the users login status ( more work needed here in the future to blacklist certain state from storing )
-   redux-logger used in dev to see all the changes in real time and what action was triggered
-   redux-thunk allows complex functions that can interact with the dispatch / getState methods

### USER STATE

#### { currentUser: action.payload, isAuthenticated: true }
