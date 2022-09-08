/**
 * @author Ah-hyun Song <billi.ahhyunlish@gmail.com>
 */

/* @ts-check */
/*
Todo {
    아이디(required),
    내용(required),
    완료여부(required),
    카테고리(required),
    태그들(optional),
  }
  */

 /**
 * @constructor
 * @typedef {Object} Todo
 * @property {string} id - id of the todo
 * @property {string} contents param.required - contents of the todo 
 * @property {boolean} isDone param.required - complete or not
 * @property {string} category param.required - category of the todo
 * @property {Array<string>} tags param.optional - tags of the todo
 */

 /**
 * Represents a book.
 * @constructor
 * @type {Todo}
 */
class todo {
  constructor(id, contents, isDone, category, tags) {
		this.id = id;
		this.contents = contents;
		this.isDone = isDone;
		this.category = category;
		this.tags = tags;
	}
}

 /**
 * @constructor
 * @type {Todo[]}
 */
let todoList =[];

 /* CREATE
  할 일을 추가할 수 있다.
  내용없이 추가할 수 없다.*/
/**
 * @func
 * @param {string} id - The title of the book.
 * @param {string} contents - The author of the book.
 * @param {boolean} isDone - The title of the book.
 * @param {string} category - The author of the book.
 * @param {string[]} tags - The author of the book.
 */
function addTodo (id,{contents, isDone, category, tags}){
  if(contents.length<=0){
    console.log('please wrtie contents')
    return ;
  }
	const todoItem = new todo(id, contents, isDone, category, tags);
	todoList.push(todoItem);
}

/*  
  READ
  모든 할 일을 조회할 수 있다.
  ID를 기반으로 특정 할 일을 조회할 수 있다.
  */
/**
 * @func
 * @param {string} id - The title of the book.
 * @returns {Todo}
 * */
function getTodo(id){
  const todo = todoList.filter((todo)=>{
    return todo.id===id
  })
  return todo.length>0?todo[0]:'';
} 

/**
 * @func
 * @param {string} id - The title of the book.
 * @returns {Todo[]}
 * */
 function getAllTodo(){
  return todoList
} 

 /*
  UPDATE
  ID를 제외한 모든 속성을 수정할 수 있다.
  특정 할 일의 특정 태그를 수정할 수 있다.
  */
 /**
 * @func
 * @param {string} id - The title of the book.
 * @param {string} contents - The author of the book.
 * @param {string} category - The author of the book.
 * @param {Array<string>} tags - The author of the book.
 * */
 function updateTodo (id,{contents, category, tags}){
  let i=0;
  const newTodoList=[];
  const newTodo=new todo(id,contents,false,category,tags)
  for (;i < todoList.length;i++) {
    if(todoList[i].id===id){
      newTodoList.push(newTodo);
    }else{
      newTodoList.push(todoList[i]);
    }
  }
  todoList=[...newTodoList];
  return todoList
 }

 /*
  DELETE
  ID를 기반으로 특정 할 일을 삭제할 수 있다.
  모든 할 일을 제거할 수 있다.
  특정 할 일의 특정 태그를 삭제할 수 있다.
  특정 할 일의 모든 태그를 제거할 수 있다.
  */
  /**
 * @func
 * @param {string} id - The title of the book.
 * */
 function removeTodo(id){
  const newTodoList=todoList.filter((todo)=>{
    return todo.id!==id
  })
  todoList=[...newTodoList];
  return todoList;
 }
  /**
 * @func
 * */
function removeAllTodo(){
  todoList=[];
}

  /**
 * @func
 * @param {string} id - The title of the book.
 * @param {Array<string>} tags - The title of the book.
 * */
   function removeTags(id,{tags}){

  }
  