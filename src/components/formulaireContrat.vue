

<template>
  <form class="bg-white p-8">
    <div class="space-y-12 container">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Creer un contrat </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Remplissez les champs ci dessous.</p>


        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="client_id"  class="block text-sm font-medium leading-6 text-gray-900">Client N° </label>
            <div class="mt-2">
              <input type="text" v-model="client_id" name="client_id" id="client_id" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="raisonSociale" class="block text-sm font-medium leading-6 text-gray-900">Raison sociale </label>
            <div class="mt-2">
              <input type="text"    v-model="raisonSociale" id="raisonSociale" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="nom"   class="block text-sm font-medium leading-6 text-gray-900">Nom du representant </label>
            <div class="mt-2">
              <input type="text" v-model="nom" name="nom" id="nom" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="adresse" class="block text-sm font-medium leading-6 text-gray-900">Adresse </label>
            <div class="mt-2">
              <input type="text" v-model="adresse"  name="adresse" id="adresse" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="email"  class="block text-sm font-medium leading-6 text-gray-900">Email </label>
            <div class="mt-2">
              <input type="email" v-model="email" name="email" id="email" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="telephone" class="block text-sm font-medium leading-6 text-gray-900">Telephone </label>
            <div class="mt-2">
              <input type="tel" v-model="telephone" name="telephone" id="telephone" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="boxe" class="block text-sm font-medium leading-6 text-gray-900">Box N°</label>
            <div class="mt-2">
              <input type='text' v-model="boxe" name="boxe" id="boxe" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="dateDebut" class="block text-sm font-medium leading-6 text-gray-900">Date debut</label>
            <div class="mt-2">
              <input type='datetime-local' v-model="dateDebut" name="dateDebut" id="dateDebut" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="name mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="prixHT" class="block text-sm font-medium leading-6 text-gray-900">Prix HT</label>
            <div class="mt-2">
              <input type='number' v-model="prixHT" name="prixHT" id="prixHT" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>


        <div class=" mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">annuler</button>
          <button type="submit" v-on:click="sender"
                  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            enregistrer
          </button>
        </div>

        <ul>
          <li v-for="data in datas" :key="data.id">
            <span>{{ data.nom }}</span>

          </li>
        </ul>

      </div>
    </div>





  </form>

</template>



<script setup>
import {collection , addDoc} from "firebase/firestore";
import {useCollection, useFirestore} from "vuefire";
import {ref} from "vue";

const db = useFirestore()
const datas = useCollection(collection(db, 'contrats'))

const raisonSociale = ref('xxxx')
const nom = ref('xx')
const client_id = ref('xx')
const email =ref('xx')
const telephone = ref('00000000')
const boxe = ref('D')
const prixHT= ref('12')
const adresse = ref('XXXXXXXXX')
const dateDebut = ref('')
const sender = () => {
  addDoc(collection(db,'contrats'),{
    client_id: client_id.value,
    nom: nom.value,
    raisonSociale : raisonSociale.value,
    email: email.value,
    dateDebut: dateDebut.value,
    telephone: telephone.value,
    boxe: boxe.value,
    prixHT: prixHT.value,
    adresse: adresse.value
  })
}

</script>






<style scoped>
.container{
  width: 50%;
}
</style>