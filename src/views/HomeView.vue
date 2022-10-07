<template>
  <div class="home">
    <NavBar />
    <div class="container mx-auto max-w-1100 my-16 p-4 md:p-0">
      <h2 class="text-2xl underline">Prerequisites</h2>
      <p class="my-2">
        The candidate is expected to have a local working environment ready
        before starting the challenge.
      </p>
      <p class="my-2">
        Candidates must use Vue JS version 3.x and TailwindCss version 2.x or
        above.
      </p>
      <p class="my-2">
        Details to API end points and access url will be provided prior to
        starting the challenge (detailed API codebase section below).
      </p>
      <p class="my-2">
        A git repository on GitLab, GitHub or whichever platform normally use
        and publicly available during the lifecycle of the challenge
      </p>
      <h2 class="text-2xl underline mt-4">
        Goals (Front end development skills)
      </h2>
      <ul class="my-4 ml-6 list-disc list-inside">
        <li class="line-through">Must be created as an SPA.</li>
        <li class="line-through">
          Create at least one base template to house the SPA with appropriate
          navigation.
        </li>
        <li class="line-through">
          Top level navigation options must represent a Page view component.
        </li>
        <li class="line-through">
          You are free to create as many Page components as required to support
          the outcome of the challenge.
        </li>
        <li class="line-through">
          Responsive first approach using TailwindCss.
        </li>
        <li>
          You must create at least 10 Vue components that are re-used across the
          different Page components.
        </li>
        <span class="font-bold text-red-600 ml-6">Currently have 7</span>
        <li class="line-through">
          You are expected to demonstrate the creation of a centralised
          functionality / library to consume the API (3rd party library not
          allowed).
        </li>
        <span class="font-bold text-red-600 ml-6"
          >Using Mixins - Need to look more at Composables</span
        >
        <li>
          You are expected to demonstrate use of at least 2 new features within
          Vue 3.
        </li>
        <li class="line-through">Use of modal window.</li>
      </ul>
      <h2 class="text-2xl underline mt-4">
        Minimum Expected Outcome (Visual requirements)
      </h2>
      <ol class="my-4 ml-6 list-decimal list-inside">
        <li class="line-through">Responsive design and base template</li>
        <li class="line-through">A suitable top-level navigation</li>
        <li class="line-through">
          To list of contacts and associated companies.
        </li>
        <li class="line-through">
          To list of companies and associated contacts.
        </li>
        <li class="line-through">
          At least one of the lists must have a pagination option
        </li>
        <li>Search and filter for at list one of the list views</li>
        <span class="font-bold text-red-600 ml-6"
          >A bit stuck on this but returning data</span
        >
        <li class="line-through">
          To Add new contact/company (one or both is acceptable)
        </li>
        <li>To Update new contact/company (one or both is acceptable)</li>
        <span class="font-bold text-red-600 ml-6"
          >Functionality is there but having issues</span
        >
        <li class="line-through">
          Forms should handle validation and error display
        </li>
        <li class="line-through">
          A confirmation dialog as modal window on any of the pages.
        </li>
      </ol>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    Footer,
  },
};
</script>
