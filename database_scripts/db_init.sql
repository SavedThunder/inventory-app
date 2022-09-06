"""
Physical schema as per data model in specs
"""


create table if not exists people (
    people_id int PRIMARY KEY,
    phone int,
    email varchar(100),
    f_name varchar(25),
    l_name varchar(25)
)

create table if not exists projects(
    project_id int PRIMARY KEY,
    project_name varchar(150),
    project_owner int,
    FOREIGN KEY(project_owner)
        references people(people_id)
)

create table if not exists roles(
    role_id PRIMARY KEY,
    role_name varchar(50)
)

create table if not exists inv_status (
    status_id int PRIMARY KEY,
    status_name
)

create table if not exists inventory (
    item_id int PRIMARY KEY,
    item_category varchar(20),
    item_name varchar(100),
    cost float,
    image_link varchar(255),
    item_status varchar(30),
    project_id int,
    FOREIGN KEY(project_id)
        references projects(project_id)
    FOREIGN KEY(item_status)
        references inv_status(status_id)
)

create table if not exists people_roles_projects (
    people_id int,
    project_id int,
    role_id int,
    PRIMARY KEY(people_id, project_id, role_id)
    FOREIGN KEY(people_id)
        references people(people_id)
)

