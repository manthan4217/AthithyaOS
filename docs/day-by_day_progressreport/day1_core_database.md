# Restaurant OS - Day 1 Progress

## Objective

Design the **Core Database Schema** for Restaurant OS that supports the basic restaurant workflow.

---

## Workflow Covered

```text
Customer Arrives
        ↓
Table Assigned
        ↓
Waiter Takes Order
        ↓
Chef Receives Order
        ↓
Chef Marks Ready
        ↓
Bill Generated
        ↓
Payment Completed
```

---

## Database Created

### 1. Roles

Stores restaurant user roles.

**Examples:**

* OWNER
* MANAGER
* WAITER
* CHEF

---

### 2. Users

Stores employee information.

**Relationship:**

```text
users.role_id → roles.id
```

---

### 3. Restaurant Tables

Stores physical tables in the restaurant.

**Examples:**

* T1
* T2
* T3

**Statuses:**

* AVAILABLE
* OCCUPIED
* RESERVED
* CLEANING

---

### 4. Menu Categories

Groups menu items.

**Examples:**

* Starters
* Main Course
* Drinks
* Desserts

---

### 5. Menu Items

Stores food and beverage details.

**Examples:**

* Veg Burger
* Pizza
* Cold Coffee

**Relationship:**

```text
menu_items.category_id
        ↓
menu_categories.id
```

---

### 6. Orders

Stores customer orders.

**Contains:**

* Table
* Waiter
* Order Status

**Statuses:**

* PENDING
* PREPARING
* READY
* SERVED
* COMPLETED
* CANCELLED

---

### 7. Order Items

Stores individual items of an order.

**Example:**

```text
Order #1

Burger ×2

Coffee ×1
```

**Relationships:**

```text
order_items.order_id
        ↓
orders.id


order_items.menu_item_id
        ↓
menu_items.id
```

---

### 8. Bills

Stores billing information.

**Contains:**

* Subtotal
* Tax
* Discount
* Grand Total

---

### 9. Payments

Stores payment details.

**Payment Methods:**

* CASH
* UPI
* CARD

**Statuses:**

* SUCCESS
* FAILED
* REFUNDED

---

## Relationships

```text
roles
│
└── users


restaurant_tables
│
└── orders
        │
        └── order_items
               │
               └── menu_items
                      │
                      └── menu_categories


orders
│
└── bills
       │
       └── payments
```

---

## Outcome

The database successfully supports:

* User Management
* Table Management
* Menu Management
* Order Creation
* Kitchen Workflow
* Bill Generation
* Payment Recording

---

## Future Modules (Not Yet Designed)

* Inventory
* Recipes
* Attendance
* Payroll
* GST
* Analytics
* Multi-branch
* Loyalty Program

These modules will be designed after restaurant market research is completed.

---

## Summary

Today we completed the **Core Database Architecture** of Restaurant OS using PostgreSQL.

The database supports the complete restaurant workflow from:

```text
Customer Arrival
        ↓
Table Assignment
        ↓
Order Creation
        ↓
Kitchen Processing
        ↓
Bill Generation
        ↓
Payment Completion
```

This forms the foundation for future backend APIs, frontend dashboards, and real-time restaurant operations.



"Today we designed the core PostgreSQL database for Restaurant OS that supports the complete restaurant workflow from table assignment to payment completion."