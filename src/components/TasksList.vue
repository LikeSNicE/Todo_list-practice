  <script setup lang="ts">
  import { onMounted } from "vue";
  import Task from "./Task.vue";
  import { useTaskStore } from "../stores/taskStore";

  const taskStore = useTaskStore();

  onMounted(async () => {
    await taskStore.getAlltask();
  });

  </script>

  <template>
    <p
      class="mt-[2em] text-center font-semibold text-xl"
      v-if="!taskStore.tasks.length"
    >
      На данный момент задач не имеется :D
    </p>
    <ul class="my-[2em] flex flex-col gap-4 justify-center items-center">
      <li class="w-[50%] task-item" v-for="task in taskStore.tasks" :key="task.id">
        <Task 
        :id="task.id" 
        :title="task.title" 
        :isDone="task.isDone" 
        :category="task.category"
        :description="task.description"/>
      </li>
    </ul>
  </template>

  <style scoped lang="scss">
  .task-item {

    @media(max-width: 1535px){
      width: 60%;
    }

    @media (max-width: 1370px) {
      width: 65%;
    }
    @media (max-width: 1025px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  </style>
