export interface Laptop {
	color: string;
	model: string;
}

const lenovo: Laptop = {
	color: "red",
	model: "ABC",
};

type Course = "JS" | "TS" | "CSS";

type Company = {
	course: Course;
	title: string;
};

const company1: Company = {
	course: "JS",
	title: "company1",
};
