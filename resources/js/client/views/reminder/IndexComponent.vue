<template>
    <div class="container-fluid">
        <!-- Add Project -->
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>{{ $route.meta.title }}</h4>
                </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">My Reminders</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->
        <div class="row">
            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-intro-title">Calendar</h4>

                        <div class="">
                            <div id="external-events" class="my-3">
                                <p>Drag and drop your event or click in the calendar</p>
                                <div v-for="(rem, remid) in not_added_reminders" :key="remid"
                                    :class="`external-event ${rem.color ? rem.color : 'bg-primary'} light`"
                                    :data-obj="JSON.stringify(rem)"
                                    :data-class="rem.color ? rem.color : 'bg-primary'">
                                        <i class="fa fa-move"></i>
                                        <span>{{ rem.title }}</span>
                                </div>
                            </div>
                            <a href="javascript:void()" data-toggle="modal" data-target="#add-reminder"
                                class="btn btn-primary btn-event w-100">
                                <span class="align-middle"><i class="ti-plus"></i></span> Create a Reminder
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9">
                <div class="card">
                    <div class="card-body">
                        <FullCalendar v-if="show" class='demo-app-calendar' :options='calendarOptions'>
                            <template v-slot:eventContent='arg'>
                                <b>{{ arg.timeText }}</b>
                                <i>{{ arg.event.title }}</i>
                            </template>
                        </FullCalendar>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="add-reminder">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create a reminder</h5>
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    </div>
                    <div class="modal-body py-2 px-4">

                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Enter Title</label>
                                    <input type="text" v-model="reminder.title" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Enter Brief Description</label>
                                    <input type="text" v-model="reminder.description" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Enter Color</label>
                                    <select v-model="reminder.color" class="form-control">
                                        <option value="">Default</option>
                                        <option value="bg-primary" class="bg-primary">Primary</option>
                                        <option value="bg-info" class="bg-info">Info</option>
                                        <option value="bg-warning" class="bg-warning">Warning</option>
                                        <option value="bg-danger" class="bg-danger">Danger</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                        <button type="button" @click="create" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="show-reminder">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Reminder</h5>
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    </div>
                    <div class="modal-body py-2 px-4">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Enter Title</label>
                                    <input type="text" v-model="reminder.title" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Enter Brief Description</label>
                                    <input type="text" v-model="reminder.description" class="form-control">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">delete</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>
<style>
.fc-daygrid-event-harness {
    color: #fff;
}
</style>
<script>
    import '@fullcalendar/core/vdom' // solves problem with Vite
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin, {
        Draggable
    } from '@fullcalendar/interaction'
    import Datepicker from 'vuejs-datepicker';
    import {
        INITIAL_EVENTS,
        createEventId
    } from './event-utils'

    export default {
        data() {
            return {
                reminder: {
                    color: '',
                },
                calendarOptions: {
                    plugins: [dayGridPlugin, interactionPlugin],
                    initialView: 'dayGridMonth',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
                    initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
                    initialView: 'dayGridMonth',
                    editable: true,
                    selectable: true,
                    selectMirror: true,
                    dayMaxEvents: true,
                    weekends: true,
                    select: this.handleDateSelect,
                    eventClick: this.handleEventClick,
                    eventsSet: this.handleEvents,
                    droppable: true,
                    drop: this.manageDrop,
                    eventAdd : this.eventAdd,
                    eventChange : this.eventChange,
                    eventRemove : this.eventRemove,
                },
                show:false,
                currentEvents: [],
                not_added_reminders: [],
                added_reminders: [],
            }
        },
        components: {
            Datepicker,
            FullCalendar
        },
        created(){
            document.getElementById('wrappper').classList.add('menu-toggle');
        },
        mounted() {
            this.fetchReminders();
            this.initDraggable();
        },
        methods: {
            eventAdd(data){
                console.log(data);
            },
            eventChange(data){
                // console.log(data.event);
                let obj = data.event;
                axios.post(`reminder/${obj['id']}/update`, {
                    start: `${this.dateFormat(obj['start'])} ${obj['start'].toUTCString().substr(17,8)}`,
                    utc_start: `${this.UTCdateFormat(obj['start'])} ${obj['start'].toUTCString().substr(17,8)}`,
                    end: obj['end'] ? `${this.dateFormat(obj['end'])} ${obj['end'].toUTCString().substr(17,8)}` : null,
                    utc_end: obj['end'] ? `${this.UTCdateFormat(obj['end'])} ${obj['end'].toUTCString().substr(17,8)}` : null,
                    append: 1,
                });

            },
            eventRemove(data){
                console.log(data);
            },
            fetchReminders(){
                axios.get('reminder').then(({data}) => {
                    this.not_added_reminders = data.not_added_reminders;
                    this.calendarOptions.initialEvents = data.added_reminders;
                    this.show = true;
                });
            },
            create(){
                axios.post('reminder', this.reminder)
                    .then(({data}) => {
                        this.reminder = {};
                        $('#add-reminder').modal('hide');
                        this.$toastr.success(data.data.message, "Success !");
                        this.fetchReminders();
                    }).catch(e => {
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            this.$toastr.error(errors[key], "Error!");
                        });
                    });
                },
            manageDrop(arg) {
                arg.draggedEl.parentNode.removeChild(arg.draggedEl);
            },
            initDraggable() {
                var containerEl = document.getElementById('external-events');
                new Draggable(containerEl, {
                    itemSelector: '.external-event',
                    eventData: function (eventEl) {
                        let d = JSON.parse(eventEl.getAttribute('data-obj'));
                        console.log(d);
                        return {
                            title: eventEl.innerText.trim(),
                            id: d.id,
                            className: d.className,
                            textColor: 'white',
                        }
                    }

                });
            },
            handleWeekendsToggle() {
                this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
            },
            handleDateSelect(selectInfo) {
                let title = prompt('Please enter a new title for your event')
                let calendarApi = selectInfo.view.calendar
                calendarApi.unselect() // clear date selection
                if (title) {
                    calendarApi.addEvent({
                        id: createEventId(),
                        title,
                        start: selectInfo.startStr,
                        end: selectInfo.endStr,
                        allDay: selectInfo.allDay
                    })
                }
            },
            handleEventClick(clickInfo) {
                this.$dialog.confirm(`Reminder: <b>${clickInfo.event.title}</b>, <br>Do you want to delete ?`).then(
                    dialog => {
                        axios.delete(`/reminder/${clickInfo.event.id}`).then(d => {
                            // this.getTask();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                            clickInfo.event.remove()
                        }).catch(d => {});
                })
            },
            handleEvents(events) {
                this.currentEvents = events;
                let l = events.length;
                let obj = events[l-1];
                if(obj){
                    console.log(obj);
                    axios.post(`reminder/${obj['id']}/update`, {
                        start: `${this.dateFormat(obj['start'])} ${obj['start'].toUTCString().substr(17,8)}`,
                        utc_start: `${this.UTCdateFormat(obj['start'])} ${obj['start'].toUTCString().substr(17,8)}`,
                        end: obj['end'] ? `${this.dateFormat(obj['end'])} ${obj['end'].toUTCString().substr(17,8)}` : null,
                        utc_end: obj['end'] ? `${this.UTCdateFormat(obj['end'])} ${obj['end'].toUTCString().substr(17,8)}` : null,
                        append: 1,
                    });
                }
            }
        },
        watch: {}
    }

</script>
