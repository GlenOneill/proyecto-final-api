-- Tabla: users [cite: 36]
CREATE TABLE users (
    id SERIAL PRIMARY KEY, [cite: 37]
    email VARCHAR(255) UNIQUE NOT NULL, [cite: 38]
    password VARCHAR(255) NOT NULL, [cite: 39]
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP [cite: 40]
);

-- Tabla: tasks [cite: 42]
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY, [cite: 43]
    title VARCHAR(255) NOT NULL, [cite: 44]
    description TEXT, [cite: 45]
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'done')), [cite: 46]
    due_date DATE, [cite: 47]
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE [cite: 48, 49]
);
