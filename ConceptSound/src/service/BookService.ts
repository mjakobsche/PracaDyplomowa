import { BookDao } from "@/dao/BookDao";
import { InMemoryBookDao } from "@/dao/InMemoryBookDao";
import { Book } from "@/model/Book";
import { Ref, inject, ref, watch } from "vue";

const bookDao: InMemoryBookDao = new InMemoryBookDao();

const book: Ref<Book> = ref(bookDao.findById(0));
const unwatch = watch(book.value.pages, () => {});

function setBook(id: number) {
	unwatch();
	book.value = bookDao.findById(id);
	watch(book.value.pages, () => {
		bookDao.update(book.value);
	});
}

function addPage(type: string) {
	let bookIndex = book.value.pages.length;
	let initData = "";
	if (type == "score") {
		initData = "X:1\nK:D\n";
	}

	book.value.pages.push({
		id: bookIndex,
		type: type,
		name: type,
		data: initData,
		hidden: false,
	});
}

function hidePage(id: number) {
	let page = book.value.pages.find((t) => t.id == id);
	if (page != undefined) {
		page.hidden = !page.hidden;
	}
}

function remPage(id: number) {
	let page = book.value.pages.find((t) => t.id == id);
	if (page != undefined) {
		book.value.pages.splice(book.value.pages.indexOf(page), 1)[0];
	}
}

function swapPage(from: number = 0, to: number = 0) {
	let page = book.value.pages.splice(from, 1)[0];
	book.value.pages.splice(to, 0, page);
}

export { book, setBook, addPage, remPage, hidePage, swapPage };